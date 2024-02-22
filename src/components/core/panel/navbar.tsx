import { NAV_SLICE_TYPES } from '@/lib/types';
import { _toggleSidebarStatus } from '@/redux/nav-slice';
import { Bell, Menu, Search } from 'lucide-react';
import Image from 'next/image';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Dropdown from './common/dropdown';
import clsx from 'clsx';
import { toggleDropdowns } from '@/lib/utils/helpers';
import { NavbarDropdownData } from '@/constants/navbar-data';
import { inputStyles } from '@/styles/classStyles';
import Offline from './common/offline';

const Navbar = () => {
  const dispatch = useDispatch();

  return (
    <div className='min-h-[60px] w-full sticky top-0 bg-white shadow-sm'>
      <Offline />
      <div className='h-full w-full flex items-center py-2 px-2'>
        <div className='flex flex-1 justify-between gap-2 lg:max-w-[50%] h-[35px] lg:mr-auto'>
          <button
            className='btn py-0 !h-full hover:bg-neutral-100  text-black'
            onClick={() => dispatch(_toggleSidebarStatus())}
          >
            <Menu strokeWidth={1} />
          </button>
          <div className='relative w-full'>
            <Search className='w-5 h-5 absolute left-3 top-2 text-zinc-400' />
            <input
              type='search'
              placeholder='Search products, orders, or customers'
              className={clsx(
                inputStyles.main,
                '!bg-slate-50 !h-full !mt-0 pl-12'
              )}
            />
          </div>
        </div>
        <div className='flex justify-between gap-2 max-md:justify-center'>
          <div className='relative'>
            <button
              onClick={() => toggleDropdowns('notifications-dropdown')}
              className='relative btn dropbtn hover:bg-neutral-100 '
            >
              <Bell className='fill-black w-5 h-5' />
              <div className='absolute top-1.5 right-1.5 px-[3px] rounded-full text-xs bg-teal-500 text-white font-semibold'>
                0
              </div>
            </button>
            <Dropdown
              data={NavbarDropdownData.Notification}
              id={'notifications-dropdown'}
              className={clsx('!top-12 lg:!w-[300px]')}
            />
          </div>
          <div className='relative flex items-center space-x-2 px-2 hover:bg-zinc-100  cursor-pointer'>
            <button
              onClick={() => toggleDropdowns('profile-dropdown')}
              className='dropbtn flex inline-flex items-center space-x-2 px-0'
            >
              <Image
                alt=''
                priority
                width={500}
                height={500}
                src='https://cdn.builder.io/api/v1/image/assets/TEMP/c3fe92fc-a3ec-4f48-b11b-1cfa8e08e537?apiKey=331e0e30f65c4a9dafd410e2c2e475a4&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/c3fe92fc-a3ec-4f48-b11b-1cfa8e08e537?apiKey=331e0e30f65c4a9dafd410e2c2e475a4&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c3fe92fc-a3ec-4f48-b11b-1cfa8e08e537?apiKey=331e0e30f65c4a9dafd410e2c2e475a4&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/c3fe92fc-a3ec-4f48-b11b-1cfa8e08e537?apiKey=331e0e30f65c4a9dafd410e2c2e475a4&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/c3fe92fc-a3ec-4f48-b11b-1cfa8e08e537?apiKey=331e0e30f65c4a9dafd410e2c2e475a4&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c3fe92fc-a3ec-4f48-b11b-1cfa8e08e537?apiKey=331e0e30f65c4a9dafd410e2c2e475a4&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/c3fe92fc-a3ec-4f48-b11b-1cfa8e08e537?apiKey=331e0e30f65c4a9dafd410e2c2e475a4&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/c3fe92fc-a3ec-4f48-b11b-1cfa8e08e537?apiKey=331e0e30f65c4a9dafd410e2c2e475a4&'
                className='aspect-square object-contain object-center w-8 overflow-hidden self-center shrink-0 max-w-full my-auto'
              />
              <div className=''>
                <div className='text-left text-neutral-800 text-sm font-medium leading-4 whitespace-nowrap'>
                  Admin user
                </div>
                <div className='text-left text-gray-500 text-xs leading-3 whitespace-nowrap'>
                  admin@example.com
                </div>
              </div>
            </button>
            <Dropdown
              onClose={() => toggleDropdowns('profile-dropdown')}
              critical={[{ label: 'Log Out', action: () => null }]}
              data={NavbarDropdownData.Profile}
              id={'profile-dropdown'}
              className='!top-12 !z-[9999]'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
