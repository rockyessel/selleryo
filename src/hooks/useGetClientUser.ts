'use client';

import { UserProps } from '@/types';
import { useSession } from 'next-auth/react';

const GetClientUser = (): UserProps | null => {
  const { data: session } = useSession();
  const currentUser = { ...session?.user } as UserProps;
  if (currentUser === null) return null;
  return currentUser;
};

export { GetClientUser as getClientUser };
