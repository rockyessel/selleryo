'use client';

import { cn } from '@/lib/utils/helpers';
import { MoreVertical } from 'lucide-react';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Dropdown from '../common/dropdown';

const POPUP_DATA: { label: string; route?: string; action?: any }[] = [
  {
    label: 'Edit',
    route: '/order-details',
  },
];
function configPopupData() {
  const newPopupData = [...POPUP_DATA]; // Create a new array
  // if (order?.status === "Delivered") {
  //   return newPopupData.concat({
  //     label: "Remove",
  //     action: () => alert("Item removed "),
  //   });
  // }
  return newPopupData;
}

const OrderListItem = ({ order }: { order: any }) => {
  const [customer, setCustomer] = useState<any>();

  const status = 'pending' || 'delivered';

  return (
    <tr className='border-b'>
      <td className='px-5 py-3 text-black text-sm'>
        <Link href={'/orders/details/' + order?.id} className='hover:underline'>
          #{order?.id?.slice(0, 8)}
        </Link>
      </td>
      <td className='px-5 py-3 '>
        <p
          className={cn(
            'text-xs text-center px-1  !max-w-fit grow-0'
            // generateItemStatusColor('pending')
          )}
        >
          Pending
        </p>
      </td>
      <td className='px-5 py-3 text-black text-sm'>Ghana</td>
      <td className='px-5 py-3 text-black text-sm col-span-2 flex space-x-2 items-center'>
        <div className='w-8 h-8 text-xs rounded-full text-zinc-400 font-semibold flex items-center justify-center bg-zinc-100'>
          {/* {getInitials(customer?.name)} */}
          Customer Name Intial
        </div>
        <Link href='/customer-details' className='hover:underline'>
          {/* {customer?.name} */}
          Customer Name
        </Link>
      </td>
      <td className='px-5 py-3 text-black text-sm text-right'>{order?.date}</td>
      <td className='px-5 py-3 text-black text-sm text-right'>
        {order?.total}
      </td>
      <td className='px-5 py-3  text-black text-sm'>
        <div className='relative w-full h-full flex items-center justify-center'>
          <div
            className={cn(
              'w-6 h-6 text-grey-800  hover:bg-zinc-100 cursor-pointer flex items-center justify-center',
              'drop-btn'
            )}
            // onClick={() =>
            //   toggleDropdowns('order-list-item-dropdown' + order?.id)
            // }
          >
            <MoreVertical className='w-4 h-4' />
          </div>
          {/* <Dropdown
            critical={
              // @ts-ignore
              status === 'delivered'
                ? [{ label: 'Remove', action: () => null }]
                : []
            }
            data={configPopupData()}
            id={'order-list-item-dropdown' + order?.id}
            className={cn('!top-6 !w-32')}
          /> */}
        </div>
      </td>
    </tr>
  );
};

export default OrderListItem;
