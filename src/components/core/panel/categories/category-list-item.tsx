'use client';
import { generateItemStatusColor, toggleDropdowns } from '@/lib/utils/helpers';

import clsx from 'clsx';
import { MoreVertical } from 'lucide-react';
import React from 'react';
import Dropdown from '../common/dropdown';
import Link from 'next/link';

const POPUP_DATA: { label: string; route?: string; action?: any }[] = [
  {
    label: 'Edit',
    route: '/category-details',
  },
];

export default function CategoryListItem({ category }: { category: any }) {
  return (
    <tr className='bg-white border-b py-2 text-neutral-700'>
      <td className='w-[5%]'>
        <div className='w-16 h-10 flex items-center justify-center'>
          <input
            type='checkbox'
            className='w-3 h-3 accent-teal-500 fill-white'
          />
        </div>
      </td>
      <td className='text-sm px-3 py-2 w-[60%]'>
        <Link href={'/categories/details/' + category.id}>{category.name}</Link>
      </td>
      <td className='px-3 w-[15%]'>
        <span
          className={clsx(
            'p-2 py-1 capitalize text-xs',
            generateItemStatusColor(category.visibility)
          )}
        >
          {category.visibility}
        </span>
      </td>
      <td className='px-3 py-2 w-[5%]'>
        <div className='relative flex items-center justify-end h-full w-full'>
          <div
            className={clsx(
              'w-6 h-6 text-grey-800  hover:bg-zinc-100 cursor-pointer flex items-center justify-center',
              'drop-btn ml-auto'
            )}
            onClick={() =>
              toggleDropdowns('category-list-item-dropdown' + category.id)
            }
          >
            <MoreVertical className='w-4 h-4' />
          </div>
          <Dropdown
            critical={
              category.visibility === 'hidden'
                ? [{ label: 'Remove', action: () => null }]
                : []
            }
            data={POPUP_DATA}
            id={'category-list-item-dropdown' + category.id}
            className={clsx('!top-6 !w-32')}
          />
        </div>
      </td>
    </tr>
  );
}
