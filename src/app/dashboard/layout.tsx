import { ReactNode } from 'react';
import { ShopProps } from '@/types';
import { redirect } from 'next/navigation';
import { fetchQuery } from 'convex/nextjs';
import { shopsMethod } from '@/lib/convex';
import { getServerUser } from '@/lib/server';
import Navbar from '@/components/core/common/navbar';

interface Props {
  children: ReactNode;
}

const DashboardLayout = async ({ children }: Props) => {
  const session = await getServerUser();

  if (session === null) {
    redirect('/account/sign-in');
  }

  const shopsPromises = session.shopRoles.map(async (role) => {
    const shops: ShopProps[] = await fetchQuery(shopsMethod.getShopById, {
      shopId: role.shopId,
    });
    return shops;
  });

  const shops = (await Promise.all(shopsPromises)).flat();

  return (
    <main>
      <Navbar shops={shops} user={session} />
      {children}
    </main>
  );
};

export default DashboardLayout;
