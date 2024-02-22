import OrderListItem from './order-list-item';
import ListPagination from '../common/list-pagination';
import { Search } from 'lucide-react';
import { cardStyles } from '@/styles/classStyles';
import ItemLoader from '../common/item-loader';
import { cn } from '@/lib/utils/helpers';

export default function OrderList({ orders }: { orders: any[] }) {
  return (
    <div className={cardStyles.list}>
      <div className='p-4 sticky top-0 bg-white'>
        <div className='relative'>
          <Search strokeWidth={1} size={18} className='absolute top-2 left-3' />
          <input
            type='text'
            placeholder='Start typing to search for categories'
            className='border bg-white pl-10 flex  justify-between gap-2.5 outline-none pr-20 py-1 w-full '
          />
        </div>
      </div>
      <table className='w-full text-left rtl:text-right border-collapse'>
        <thead className='sticky top-[65px] bg-white z-10'>
          <tr className='w-full border-y uppercase'>
            <th className='py-3 px-5 text-sm'>No.</th>
            <th className='py-3 px-5 text-sm'>Status</th>
            <th className='py-3 px-5 text-sm'>Country</th>
            <th className='py-3 px-5 text-sm col-span-2'>Customer</th>
            <th className='py-3 px-5 text-sm text-right'>Date</th>
            <th className='py-3 px-5 text-sm text-right'>Total</th>
            <th className='py-3 px-5 text-sm'></th>
          </tr>
        </thead>
        <tbody className={cn(!orders ? 'w-full relative' : '')}>
          {!orders ? (
            <tr className='border border-t-0 !w-[100%] flex items-center justify-center absolute bg-white z-10'>
              <td className='px-3 py-1 text-sm inline-flex items-center gap-2'>
                <ItemLoader />
              </td>
            </tr>
          ) : (
            orders?.slice(0, 6)?.map((order, index) => {
              return <OrderListItem key={index} order={order} />;
            })
          )}
        </tbody>
      </table>
      {orders && <ListPagination />}
    </div>
  );
}
