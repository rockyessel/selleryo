import { OrderProps } from '@/interface';
import { cn } from '@/lib/utils/helpers';
import { HTMLAttributes } from 'react';

interface Props extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  order: OrderProps;
}

const OrderSummaryStatus = ({ order, className, ...props }: Props) => {
  return (
    <div
      {...props}
      className={cn(
        'justify-between bg-slate-50 flex gap-5 py-4 px-5',
        className
      )}
    >
      <p className='flex items-center justify-between gap-5'>
        <span className='text-gray-800 text-base font-bold'>
          Order Status :
        </span>
        <span className='text-yellow-700 text-sm font-bold bg-yellow-700 bg-opacity-10 px-3 py-2.5 rounded-full'>
          {order?.orderStatus}
        </span>
      </p>
      <p className='flex items-center justify-between gap-5'>
        <span className='text-gray-800 text-base font-bold'>
          Payment Status :
        </span>
        <span className='text-teal-600 text-sm font-bold bg-teal-600 bg-opacity-10 px-3 py-2.5 rounded-full'>
          {order?.paymentStatus}
        </span>
      </p>
    </div>
  );
};

export default OrderSummaryStatus;
