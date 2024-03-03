import { AuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import LinkedInProvider from 'next-auth/providers/linkedin';
import CredentialsProvider from 'next-auth/providers/credentials';
import { createUser, validateUser } from '../server';
import { fetchQuery } from 'convex/nextjs';
import { docMethod, shopsMethod } from '../convex';
import { Id } from '../../../convex/_generated/dataModel';
import { JWT } from 'next-auth/jwt';
import jsonwebtoken from 'jsonwebtoken';

export const authOptions: AuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    LinkedInProvider({
      clientId: process.env.LINKEDIN_CLIENT_ID!,
      clientSecret: process.env.LINKEDIN_CLIENT_SECRET!,
      authorization: {
        params: { scope: 'openid profile email' },
      },
      issuer: 'https://www.linkedin.com',
      jwks_endpoint: 'https://www.linkedin.com/oauth/openid/jwks',
      profile(profile, tokens) {
        return {
          id: profile.sub,
          name: profile.name,
          email: profile.email,
          image: profile.picture ?? 'defaultProfileURL',
        };
      },
    }),
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: 'email', type: 'text' },
        password: { label: 'password', type: 'password' },
      },
      async authorize(credentials) {
        // console.log('credentials: ',credentials)
        const email = credentials?.email;
        const password = credentials?.password;
        if (!email || !password) return null;
        const userResObj = await validateUser(credentials);
        if (userResObj.data !== null) return userResObj.data;
        else return null;
      },
    }),
  ],
  jwt: {
    encode: ({ secret, token }) => {
      return jsonwebtoken.sign(
        {
          ...token,
          iss: 'https://selleryo.vercel.app',
          exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 5,
        },
        secret
      );
    },
    decode: async ({ secret, token }) => {
      if (!token) {
        throw new Error('Token is missing');
      }
      return jsonwebtoken.verify(token!, secret) as JWT;
    },
  },
  pages: {
    signIn: '/account/sign-in',
  },
  callbacks: {
    async signIn({ user }) {
      const { id, ...rest } = user;
      // @ts-ignore
      rest.password = '';
      await createUser(rest);
      return true;
    },
    async session({ session, token }) {
      console.log('token: ', token);
      const { email } = token;
      const fetchUser = await fetchQuery(docMethod.getDocByField, {
        docType: 'users',
        field: 'email',
        value: email!,
      });
      const { password, ...user } = fetchUser;
      const userId = user._id as Id<'users'>;
      const shopRoles = await fetchQuery(shopsMethod.getShopRoleByUserId, {
        userId,
      });
      const roles = shopRoles.map((role) => {
        const { _creationTime, _id, userId, ...rest } = role;
        return rest;
      });
      user.shopRoles = roles;

      if (user !== null) {
        session.user = { ...user };
      }
      return session;
    },
  },
};
