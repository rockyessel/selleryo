import clsx from 'clsx';
import Link from 'next/link';
import Image from 'next/image';
import Dropdown from '../common/dropdown';
import { MoreVertical } from 'lucide-react';
import { useEffect, useState } from 'react';
import { cn, toggleDropdowns } from '@/lib/utils/helpers';
import { btnStyles } from '@/styles/classStyles';
import { calculateTotalSum } from '@/services/helpers';
import { getCustomerOrdersByEmail } from '@/services/firebase/crud';

const POPUP_DATA: { label: string; route?: string; action?: any }[] = [
  {
    label: 'Edit',
    route: '/customer-details',
  },
];

export default function CustomerListItem({ customer }: { customer: any }) {
  const [customerSpentAmount, setCustomerSpentAmount] = useState<number>(0);

  useEffect(() => {
    getCustomerOrdersByEmail(customer?.email).then((orders) => {
      if (orders) {
        setCustomerSpentAmount(calculateTotalSum(orders));
      }
    });
  }, [customer?.email]);
  if (customer)
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
          <div className='flex items-start gap-2'>
            <Image
              alt=''
              priority
              width={500}
              height={500}
              src={customer.image}
              className='aspect-square object-contain object-center w-10 overflow-hidden shrink-0 max-w-full'
            />
            <div className='pl-3 text-gray-500 text-base whitespace-nowrap inline-flex flex-col grow'>
              <Link
                href={'/customers/details/' + customer.id}
                className='text-neutral-800 text-sm font-regular hover:underline capitalize'
              >
                {customer.name}
              </Link>
              <span className='text-xs '>{customer.email}</span>
            </div>
          </div>
        </td>
        <td className='px-3 text-sm py-3 capitalize'>
          {customer.date_joined || 'verified'}
        </td>
        <td className='px-3 text-sm py-3 capitalize'>
          {customer.country || 'Ghana'}
        </td>
        <td className='px-3 text-sm py-3 capitalize'>
          {customer.group || 'Classic'}
        </td>
        <td className='px-3 text-sm py-3 capitalize'>
          ${customer.total || customerSpentAmount}
        </td>
        <td className='px-3 text-sm py-3 capitalize w-[5%]'>
          <div className='relative flex items-center justify-end h-full w-full'>
            <div
              className={clsx(
                'w-6 h-6 text-grey-800  hover:bg-zinc-100 cursor-pointer flex items-center justify-center',
                'drop-btn ml-auto'
              )}
              onClick={() =>
                toggleDropdowns('customer-list-item-dropdown' + customer.id)
              }
            >
              <MoreVertical className='w-4 h-4' />
            </div>
            <Dropdown
              critical={
                customer.visibility === 'hidden'
                  ? [{ label: 'Remove', action: () => null }]
                  : []
              }
              data={POPUP_DATA}
              id={'customer-list-item-dropdown' + customer.id}
              className={clsx('!top-6 !w-32')}
            />
          </div>
        </td>
      </tr>
    );
}
