'use server';

import { authOptions } from '@/lib/auth/options';
import { getServerSession } from 'next-auth';
import { docMethod, usersMethod } from '../convex';
import { fetchMutation, fetchQuery } from 'convex/nextjs';
import bcrypt from 'bcrypt';
import { errorRes } from '../utils/constants';
import { CatchError, ResObj } from '@/types';
import { IdGen } from '../utils/helpers';

export const getServerUser = async (): Promise<any | null> => {
    const session = await getServerSession(authOptions);
    const user = { ...session?.user } as any;
    if (user.id) return user;
    return null;
};

// Function to create a user and return a response object
export const createUser = async (
    user: any
): Promise<ResObj<{ id: string } | null>> => {
    try {
        console.log('user: ',user)
        // Check if the email already exists
        const isEmailUnique = await fetchQuery(docMethod.getDocByField, {
            docType: 'users',
            field: 'email',
            value: user.email,
        });

        console.log('isEmailUnique: ',isEmailUnique)

        // If email is not unique, return an error response
        if (isEmailUnique) {
            return { ...errorRes, msg: 'Account already exists.' };
        }

        // Extract password from user object
        const { password } = user;

        
        // Determine authType based on password
        if (password === '') {
            // If password is empty, set authentication type to 'provider'
            user.authType = 'provider';
        } else if (password) {
            // If password is provided, set authentication type to 'credentials' and hash the password
            // user.authType = 'credentials';
            const hashedPassword = await generateHash(password);
            user.password = hashedPassword;
            console.log('password: ',password)
        }

        // Generate a unique username using IdGen function
        user.username = IdGen('USERNAME');


        console.log('modified_user: ', user)

        // Insert the user into the database
        const insertedUser = await fetchMutation(usersMethod.createUser, { ...user });

        console.log('insertedUser: ', insertedUser)

        if (insertedUser) {
            return {
                success: true,
                msg: 'Account created.',
                data: { id: insertedUser },
            };
        } else {
            return {
                success: false,
                msg: 'Account not created.',
                data: null,
            };
        }
    } catch (error) {
        console.log(error);
        const err = error as CatchError;
        return { ...errorRes, msg: `Account not created. Error: ${err.message}` };
    }
};

// Function to generate a bcrypt hash for a given string
export const generateHash = async (value: string): Promise<string> => {
    try {
        // Generate a salt
        const saltRounds = 12;
        const salt = await bcrypt.genSalt(saltRounds);

        // Generate the hash using the salt and input string
        const hash = await bcrypt.hash(value, salt);

        return hash;
    } catch (error) {
        // Handle error if bcrypt operation fails
        console.error('Error generating hash:', error);
        throw error;
    }
};



export const validateUser = async (
    user: any
): Promise<ResObj<any | null>> => {
    const { email, password } = user;
    // Check if email exists
    const isEmailUnique = await fetchQuery(docMethod.getDocByField, {
        docType: 'users',
        field: 'email',
        value: user.email,
    });

    console.log('isEmailUnique: ', isEmailUnique);
    if (!isEmailUnique) {
        return { ...errorRes, msg: 'Account does not exist.' };
    }
    // Get user by email
    // Check if the email already exists


    const foundUser = await fetchQuery(docMethod.getDocByField, {
        docType: 'users',
        field: 'email',
        value: user.email,
    });


    console.log('foundUser: ', foundUser);
    if (foundUser && foundUser.authType === 'credentials') {
        // Check if password matches
        const isPasswordMatched = await bcrypt.compare(
            password!,
            foundUser.password!
        );

        // const { isVerified } = foundUser;
        // if (!isVerified) {
        //     await sendUserValidationEmail(foundUser);
        // }

        if (!isPasswordMatched) {
            return { ...errorRes, msg: 'Incorrect password.' };
        }
    }

    // You can now use foundUser for further processing if needed
    return {
        success: true,
        data: foundUser,
        msg: 'User validated successfully.',
    };
};

