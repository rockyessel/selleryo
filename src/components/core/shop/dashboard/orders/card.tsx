'use client';

import { useCart } from '@/context/cart';
import { OrderProps } from '@/interface';
import { truncate } from '@/lib/utils/helpers';
import moment from 'moment';

interface Props {
  order: OrderProps;
}

const OrdersCard = ({ order }: Props) => {
  const { getSelectOrderId } = useCart();
  return (
    <li
      onClick={() => getSelectOrderId(order.id)}
      className='bg-gray-100 flex w-[25rem] flex-col rounded-md border-2 border-teal-600'
    >
      <div className='w-full flex items-center justify-between gap-5 px-5 py-3.5 border-b'>
        <p className='flex gap-px my-auto'>
          <span className='text-gray-800 text-base font-bold '>Order</span>
          <span className='text-gray-800 text-base'>
            #{truncate(order.orderId, 10)}
          </span>
        </p>
        <p className='text-yellow-700 text-sm bg-yellow-700 bg-opacity-10 px-3 py-3 rounded-md'>
          {order.orderStatus}
        </p>
      </div>
      <div className='self-center flex w-full  justify-between gap-5'>
        <div className='w-full flex flex-col gap-4 px-3 py-5'>
          <p className='flex justify-between'>
            <span className='text-gray-800 text-sm'>Order Date :</span>
            <span className='text-gray-800 text-sm'>
              {moment(order.date).format('MMM Do YY')}
            </span>
          </p>
          <p className='flex justify-between'>
            <span className='text-gray-800 text-sm'>Delivery Time :</span>
            <span className='text-gray-800 text-sm'>Express Delivery</span>
          </p>
          <p className='flex justify-between'>
            <span className='text-gray-800 text-sm font-bold '>
              Item Quantity :
            </span>
            <span className='text-gray-800 text-sm font-bold self-end'>
              {order.totalItems}
            </span>
          </p>
          <p className='flex justify-between'>
            <span className='text-gray-800 text-sm font-bold '>
              Total Price :
            </span>
            <span className='text-gray-800 text-sm font-bold self-end'>
              GH¢ {order.total}
            </span>
          </p>
        </div>
      </div>
    </li>
  );
};

export default OrdersCard;
