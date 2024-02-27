'use client';

import { useSession } from 'next-auth/react';

const GetClientUser = () => {
  const { data: session } = useSession();
  const currentUser = { ...session?.user };
  return currentUser as any;
};

export { GetClientUser as getClientUser };
