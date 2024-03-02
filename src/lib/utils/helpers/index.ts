import { AnyObject, ImageDimensionsProps } from '@/types';
import { type ClassValue, clsx } from 'clsx';
import { Dispatch, SetStateAction } from 'react';
import { toast } from 'sonner';
import { twMerge } from 'tailwind-merge';
import { assignedMimeTypes, mimeTypes } from '../constants';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
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
      // console.log('error: ', field);
      return;
    }
  }
};

/**
 * Creates a slug from the input string for SEO-friendly URLs.
 * @param input - The input string to create a slug from.
 * @returns The generated slug.
 */
export const createSlug = (input: string): string => {
  const slug = input
    .replace(/[^a-zA-Z0-9-]/g, '-') // Replace non-alphanumeric characters with hyphens
    .replace(/-+/g, '-') // Replace consecutive hyphens with a single hyphen
    .toLowerCase() // Convert to lowercase
    .trim(); // Remove leading and trailing spaces
  return slug;
};

export const truncate = (str: string, num: number) => {
  if (!str) return '';
  if (str.length <= num) {
    return str;
  }
  return str.slice(0, num) + '...';
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

/**
 * Fetches the dimensions of an image given its URL.
 * @param url - The URL of the image.
 * @returns A promise that resolves with an object containing width, height, and src properties.
 */
export const getImageDimensions = (
  url: string
): Promise<ImageDimensionsProps> => {
  return new Promise((resolve, reject) => {
    const img = new Image();

    // Event handler for successful image load
    img.onload = () => {
      // Resolve the promise with image dimensions and URL
      resolve({
        width: img.width,
        height: img.height,
        src: url,
      });
    };

    // Event handler for image loading error
    img.onerror = (error) => {
      // Reject the promise with the error
      reject(error);
    };

    // Set the image source to trigger loading
    img.src = url;
  });
};

export const generateRandomImages = (count: number) => {
  const images = [];

  for (let i = 0; i < count; i++) {
    const randomHeight = Math.floor(Math.random() * (400 - 200 + 1)) + 200; // Random height between 200 and 400
    const randomWidth = Math.floor(Math.random() * (600 - 400 + 1)) + 400; // Random width between 400 and 600

    images.push({
      alt: `Image ${i + 1}`,
      height: randomHeight,
      width: randomWidth,
      src: `https://source.unsplash.com/random/${15 + i}`,
    });
  }

  return images;
};

export const getFileExtensionNType = (file?: File) => {
  if (file) {
    const fileExtension = file.name?.split('.');
    if (fileExtension.length < 2) {
      toast.error("File name doesn't contain an extension");
      return '';
    }
    const type = file.type.split('/').shift()!;
    const extension = fileExtension[fileExtension.length - 1].toLowerCase();
    return `${type} ${extension}`;
  }

  return '';
};






/**
 * Get initials from a given name.
 * For single-word names, extracts initials from consecutive uppercase letters.
 * For multi-word names, extracts initials from the first letter of each word.
 *
 * @param {string} name - The input name.
 * @param {number} [numberOfInitials=2] - The number of initials to extract.
 * @returns {string} - The extracted initials.
 *
 * @example
 * // Single-word name example
 * const singleWordName = 'EuroMarket';
 * const initialsSingleWord = getInitials(singleWordName);
 * console.log(initialsSingleWord); // Output: 'EM'
 *
 * @example
 * // Multi-word name example
 * const multiWordName = 'Euro Market';
 * const initialsMultiWord = getInitials(multiWordName, 3);
 * console.log(initialsMultiWord); // Output: 'EM' (extracts up to 3 initials)
 */
export const getInitials = (name: string, numberOfInitials: number = 2): string => {
  const initials: string[] = [];
  let count = 0;

  // Check if the name has spaces to determine if it's a multi-word name
  const isMultiWord = name.includes(' ');

  if (isMultiWord) {
    const words = name.split(' ');

    for (let i = 0; i < words.length && count < numberOfInitials; i++) {
      const word = words[i];
      if (word.length > 0) {
        initials.push(word[0].toUpperCase());
        count++;
      }
    }
  } else {
    // For single-word names, extract initials from consecutive uppercase letters
    for (let i = 0; i < name.length && count < numberOfInitials; i++) {
      if (name[i] === name[i].toUpperCase()) {
        initials.push(name[i]);
        count++;
      }
    }
  }

  return initials.join('');
};



/**
 * Sets the mimeType of a file if it is not provided or empty.
 * @param file - The file object.
 * @returns The updated file object with the mimeType set.
 */
export const fileMimeTypeSetter = (file: File): File => {
  // Check if the file object exists and if its mimeType is empty
  if (file && file.type === '') {
    const extension = file.name.toLowerCase().split('.').pop(); // Get the file extension
    const isMimeTypePresentInArr = mimeTypes?.includes(`${extension}`); // Check if the mimeType is present in the allowed mimeTypes array

    if (isMimeTypePresentInArr) {
      // If the mimeType is present in the allowed mimeTypes array, create a new File object with the updated mimeType
      const updatedFile = new File([file], file.name, {
        type: assignedMimeTypes[`${extension}`], // Assign the appropriate mimeType based on the extension
      });

      return updatedFile;
    }
  }

  return file; // Return the file object as-is if the mimeType is already provided or if it doesn't match the allowed mimeTypes
};

