'use client';

import { useCart } from '@/context/cart';
import { ProductProps } from '@/interface';
import { truncate } from '@/lib/utils/helpers';
import { Trash } from 'lucide-react';
import Image from 'next/image';

interface Props {
  product: ProductProps;
}

const CheckoutOrderCard = ({ product }: Props) => {
  const { removeFromCart } = useCart();
  return (
    <li className='flex justify-between gap-1 py-5'>
      <div className='w-full h-full flex gap-1'>
        <Image
          alt={product.title}
          priority
          width={200}
          height={200}
          src={product.image}
          className='w-10 border rounded-md p-1 overflow-hidden shrink-0 mt-2'
        />
        <div className='flex flex-col mt-1'>
          <p className='text-gray-700 text-sm font-semibold'>
            {truncate(product.title, 20)}
          </p>

          {/* Remove product button */}
          <button
            onClick={() => removeFromCart(product.id)}
            className='flex text-rose-700 items-center gap-1.5'
          >
            <span className='text-sm'>Remove</span>
            <Trash size={15} strokeWidth={2} />
          </button>
        </div>
      </div>

      {/* Price */}
      <div className='flex flex-col items-end mt-1'>
        <p className='text-gray-700 text-md font-semibold whitespace-nowrap'>
          GH¢{product.price}
        </p>

        <p className='w-full text-xs whitespace-nowrap'>
          ({product.quantity} X {product.price} = GH¢{' '}
          {product.quantity * product.price})
        </p>
      </div>
    </li>
  );
};

export default CheckoutOrderCard;
