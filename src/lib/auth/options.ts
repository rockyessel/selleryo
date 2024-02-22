import { AuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import LinkedInProvider from 'next-auth/providers/linkedin';
import CredentialsProvider from 'next-auth/providers/credentials';
import { createUser, validateUser } from '../server';
import { fetchQuery } from 'convex/nextjs';
import { docMethod } from '../convex';

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
      async authorize(credentials, req) {
        const email = credentials?.email;
        const password = credentials?.password;
        if (!email || !password) return null;
        const userResObj = await validateUser(credentials);
        if (userResObj.data !== null) return userResObj.data;
        else return null;
      },
    }),
  ],
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
      const { email } = token;
      const user = await fetchQuery(docMethod.getDocByField, {
        docType: 'users',
        field: 'email',
        value: email!,
      });
      if (user !== null) {
        session.user = { ...user };
      }
      return session;
    },
  },
};
