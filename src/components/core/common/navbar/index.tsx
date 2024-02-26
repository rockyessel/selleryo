import { Metadata } from 'next';
import Image from 'next/image';
import { UserNav } from './user-menu';
import ShopsSwitcher from './shops-switcher';
import { cn } from '@/lib/utils/helpers';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Dashboard',
  description: 'Example dashboard app built using the components.',
};

export default function Navbar() {
  return (
    <div className='sticky top-0 bg-white z-10'>
      <div className='hidden flex-col md:flex'>
        <div className='border-b'>
          <div className='flex h-16 items-center px-4'>
            <ShopsSwitcher />

            <nav
              className={cn('flex items-center space-x-4 lg:space-x-6', 'mx-6')}
            >
              <Link
                href='/examples/dashboard'
                className='text-sm font-medium transition-colors hover:text-primary'
              >
                Overview
              </Link>
              <Link
                href='/examples/dashboard'
                className='text-sm font-medium text-muted-foreground transition-colors hover:text-primary'
              >
                Customers
              </Link>
              <Link
                href='/examples/dashboard'
                className='text-sm font-medium text-muted-foreground transition-colors hover:text-primary'
              >
                Products
              </Link>
              <Link
                href='/examples/dashboard'
                className='text-sm font-medium text-muted-foreground transition-colors hover:text-primary'
              >
                Settings
              </Link>
            </nav>
            <div className='ml-auto flex items-center space-x-4'>
              {/* <Search /> */}
              <UserNav />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
