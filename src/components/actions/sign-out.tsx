'use client';

import { Button } from '@/components/ui/button';
import { signOut } from 'next-auth/react';

const SignOutBtn = () => {
  return (
    <Button
      onClick={() =>
        signOut({ callbackUrl: '/account/sign-in', redirect: true })
      }
    >
      Sign Out
    </Button>
  );
};

export default SignOutBtn;
