'use client';

import Image from 'next/image';
import { Trash } from 'lucide-react';
import { ProductProps } from '@/types';
import { useCart } from '@/context/cart';
import { truncate } from '@/lib/utils/helpers';

interface Props {
  product: ProductProps;
}

const CartItemCard = ({ product }: Props) => {
    const { increaseCartQuantity, decreaseCartQuantity, removeFromCart, getItemQuantity } = useCart();
    
  return (
    <div className='bg-white flex justify-between gap-1 py-5'>
      <div className='w-full h-full flex gap-1'>
        <Image
          alt={product.name}
          priority
          width={200}
          height={200}
          src={product.images[0]}
          className='w-10 border rounded-md p-1 overflow-hidden shrink-0 mt-2'
        />
        <div className='flex flex-col'>
          <p className='text-gray-700 text-sm font-semibold'>
            {truncate(product.name, 20)}
          </p>

          {/* Remove product button */}
          <button
            onClick={() => removeFromCart(product._id)}
            className='flex text-rose-700 items-center gap-1.5'
          >
            <span className='text-sm'>Remove</span>
            <Trash size={15} strokeWidth={2} />
          </button>
        </div>
      </div>

      {/* Price */}
      <div className='flex flex-col items-end'>
        <p className='text-gray-700 text-md font-semibold whitespace-nowrap'>
          GH¢{product.currentPrice}
        </p>

        {/* Button */}
        <div className='flex items-center gap-2'>
          <button
            className='p-1 px-2 rounded-md border'
            onClick={() => decreaseCartQuantity(product)}
          >
            -
          </button>
          <p className='p-1 px-2 rounded-md border'>
            {getItemQuantity(product._id)}
          </p>
          <button
            className='p-1 px-2 rounded-md border'
            onClick={() => increaseCartQuantity(product)}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItemCard;
// GH¢
