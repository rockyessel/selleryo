'use client';

import { ChildrenProps } from '@/types';
import { SessionProvider } from 'next-auth/react';

/**
 * Component for providing Next.js authentication context.
 * Wrapping the provided child components with the SessionProvider.
 * @SessionProvider The SessionProvider manages the authentication state and provides it to the child components.
 */
//
export const NextAuthProvider = ({ children }: ChildrenProps) => {
  return <SessionProvider>{children}</SessionProvider>;
};
