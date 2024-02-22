import React, { useEffect, useState } from 'react';
import CustomerListItem from './customer-list-item';
import ListPagination from '../common/list-pagination';
import { Search } from 'lucide-react';
import { cardStyles } from '@/styles/classStyles';
import { getAllCustomers } from '@/services/firebase/crud';
import { cn } from '@/lib/utils/helpers';
import ItemLoader from '../common/item-loader';

export default function CustomerList() {
  const [customers, setCustomers] = useState<any[] | []>([]);
  const [loadingItems, setLoadingItems] = useState(true);

  console.log(customers);

  useEffect(() => {
    getAllCustomers().then((customers) => {
      setCustomers(customers);
      setLoadingItems(false);
    });
  }, []);
  return (
    <div className={cardStyles.list}>
      <div className='p-4 sticky top-0 bg-white z-10'>
        <div className='relative'>
          <Search strokeWidth={1} size={18} className='absolute top-2 left-3' />
          <input
            type='text'
            placeholder='Start typing to search for categories'
            className='border bg-white pl-10 flex  justify-between gap-2.5 outline-none pr-20 py-1 w-full '
          />
        </div>
      </div>

      {/* Customer Table */}
      <table className='w-full text-left rtl:text-right border-collapse'>
        <thead className='sticky top-[65px] bg-white z-10'>
          <tr className='border-y'>
            <th className='w-[5%]'>
              <div className='w-16 h-10 flex items-center justify-center'>
                <input
                  type='checkbox'
                  className='w-3 h-3 accent-teal-500 fill-white'
                />
              </div>
            </th>
            <th className='px-3 py-3 text-neutral-800 text-sm font-medium leading-6 w-[40%]'>
              Name
            </th>
            <th className='px-3 py-3 text-neutral-800 text-sm font-medium leading-6 w-[13%]'>
              Verified Email
            </th>
            <th className='px-3 py-3 text-neutral-800 text-sm font-medium leading-6 w-[13%]'>
              Country
            </th>
            <th className='px-3 py-3 text-neutral-800 text-sm font-medium leading-6 w-[13%]'>
              Group
            </th>
            <th className='px-3 py-3 text-neutral-800 text-sm font-medium leading-6 w-[13%]'>
              Spent
            </th>
            <th className='px-3 py-3 text-neutral-800 text-sm font-medium leading-6 w-[5%]'></th>
          </tr>
        </thead>
        <tbody className={cn(loadingItems ? 'w-full relative' : '')}>
          {loadingItems ? (
            <tr className='border border-t-0 !w-[100%] flex items-center justify-center absolute bg-white z-10'>
              <td className='px-3 py-1 text-sm inline-flex items-center gap-2'>
                <ItemLoader />
              </td>
            </tr>
          ) : (
            customers.map((customer, index) => {
              return <CustomerListItem key={index} customer={customer} />;
            })
          )}
        </tbody>
      </table>

      <ListPagination />
    </div>
  );
}
