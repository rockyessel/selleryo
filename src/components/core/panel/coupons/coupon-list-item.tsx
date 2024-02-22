import { toggleDropdowns } from '@/lib/utils/helpers';
import { btnStyles } from '@/styles/classStyles';
import clsx from 'clsx';
import { MoreVertical } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Dropdown from '../common/dropdown';
import { format } from 'date-fns';

export default function CouponListItem({ coupon }: { coupon: any }) {
  const POPUP_DATA: { label: string; route?: string; action?: any }[] = [
    {
      label: 'Edit',
      route: '/coupons/details/' + coupon.code,
    },
  ];
  if (coupon)
    return (
      <tr className='border-b'>
        <td className='w-[5%]'>
          <div className='w-16 h-10 flex items-center justify-center'>
            <input
              type='checkbox'
              className='w-3 h-3 accent-teal-500 fill-white'
            />
          </div>
        </td>
        <td className='px-3 py-3'>
          <Link
            href={'/coupons/details/' + coupon.code}
            className='text-neutral-800 text-sm font-regular hover:underline capitalize'
          >
            {coupon.code}
          </Link>
        </td>
        <td className='px-3 text-sm py-3 capitalize'>{coupon.type}</td>
        <td className='px-3 text-sm py-3 capitalize'>{coupon.discount}</td>
        <td className='px-3 text-sm py-3 capitalize'>{coupon.status}</td>
        <td className='px-3 text-sm py-3 capitalize'>
          {format(new Date(coupon.startDate), 'E do MMM, y')}
        </td>
        <td className='px-3 text-sm py-3 capitalize'>
          {format(new Date(coupon.endDate), 'E do MMM, y')}
        </td>
        <td className='px-3 text-sm py-3 capitalize w-[5%]'>
          <div className='relative flex items-center justify-end h-full w-full'>
            <div
              className={clsx(
                'w-6 h-6 text-grey-800  hover:bg-zinc-100 cursor-pointer flex items-center justify-center',
                'drop-btn ml-auto'
              )}
              onClick={() =>
                toggleDropdowns('coupon-list-item-dropdown' + coupon.code)
              }
            >
              <MoreVertical className='w-4 h-4' />
            </div>
            <Dropdown
              critical={
                coupon.visibility === 'hidden'
                  ? [{ label: 'Remove', action: () => null }]
                  : []
              }
              data={POPUP_DATA}
              id={'coupon-list-item-dropdown' + coupon.code}
              className={clsx('!top-6 !w-32')}
            />
          </div>
        </td>
      </tr>
    );
}
