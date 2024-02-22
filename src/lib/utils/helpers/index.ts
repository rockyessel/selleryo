import { AnyObject } from "@/types";
import { type ClassValue, clsx } from "clsx"
import { Dispatch, SetStateAction } from "react";
import { toast } from "sonner";
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}



/**
 * Checks if an object has any empty values and displays a toast message.
 * @param obj - The object to check for empty values.
 * @param setState - A state setter function to update a state based on the check result.
 */
export const isObjectEmptyWithState = (
    obj: AnyObject,
    setState: Dispatch<SetStateAction<boolean>>
) => {
    for (const field in obj) {
        if (obj[field] === '') {
            toast.error(`${field} cannot be empty.`);
            setState(false);
            return;
        }
    }
};



/**
 * Shuffles characters in a string to create a randomized output.
 * @param input - The input string to shuffle.
 * @returns A string with shuffled characters.
 */
const shuffleString = (input: string): string => {
    const shuffleRatio = Math.random() * 0.8;
    let characters = input.split('');
    characters = characters.sort(() => Math.random() - shuffleRatio);
    return characters.join('');
};

/**
 * Generates a unique identifier based on the provided type.
 * @param type - The type of identifier.
 * @returns A unique identifier string.
 */
export const IdGen = (type?: string): string => {
    const characters = shuffleString(
        'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
    );
    const length = Math.floor(Math.random() * 6) + 5;
    const usedChars: string[] = [];
    let result = '';
    for (let i = 0; i < length; i++) {
        let index: number;
        do {
            index = Math.floor(Math.random() * characters.length);
        } while (usedChars.includes(characters[index]));
        result += characters[index];
        usedChars.push(characters[index]);
    }
    if (type) {
        return `${type}${result}`;
    }

    return result;
};