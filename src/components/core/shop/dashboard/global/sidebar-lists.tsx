'use client';

import Link from 'next/link';
import { useState } from 'react';
import { cn } from '@/lib/utils/helpers';
import { signOut } from 'next-auth/react';

const SidebarLists = () => {
  const [active, setActive] = useState('profile');

  const handleActive = (name: string) => setActive(name);

  const sidebarItems = [
    'Profile',
    'Change Password',
    'Orders',
    'Wishlists',
    'Refund',
  ];

  return (
    <aside className='w-full border border-gray-200 bg-white mt-5 py-4 pb-px rounded-md border-solid'>
      <ul className='flex font-bold flex-col text-sm pb-4'>
        {sidebarItems.map((item, index) => (
          <li
            onClick={() =>
              handleActive(item.toLowerCase().replaceAll(' ', '-'))
            }
            key={index}
            className={cn(
              'text-gray-800 pl-11 inline-flex items-center h-10 border-l-4 border-transparent',

              active === item.toLowerCase().replaceAll(' ', '-')
                ? 'border-l-4 border border-l-teal-700'
                : ''
            )}
          >
            <Link
              href={`/dashboard/${item.toLowerCase().replaceAll(' ', '-')}`}
            >
              {item}
            </Link>
          </li>
        ))}
      </ul>
      <button
        onClick={() => signOut()}
        className='font-bold pl-11 py-4 border-t border w-full text-sm inline-flex items-start self-start'
      >
        Logout
      </button>
    </aside>
  );
};

export default SidebarLists;
