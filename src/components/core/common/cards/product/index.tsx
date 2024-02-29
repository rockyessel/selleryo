import { Heart } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

interface Props {
  product: any;
}

const ProductCard = ({ product }: Props) => {
  return (
    <div className='flex flex-col px-5 py-4 border-r border-b border-solid border-b-zinc-300 border-r-zinc-300 max-w-[348px]'>
      <div className='flex justify-center items-center aspect-square bg-neutral-100'>
        <img
          loading='lazy'
          src='https://target.scene7.com/is/image/Target/GUEST_03886a0d-d68d-400c-ad40-f14376067607?qlt=65&fmt=webp&hei=350&wid=350'
          className='w-full aspect-square'
        />
      </div>
      <div className='flex gap-5 justify-between mt-3 text-base font-bold leading-6 text-zinc-800'>
        <div>{product.name}™</div>
        <div className='self-start w-8 h-8 bg-white rounded-2xl border border-solid border-zinc-300'>
          <Heart strokeWidth={0.5} />
        </div>
      </div>
      <div className='flex gap-1 self-start text-sm text-stone-500'>
        <div className='py-1 pr-1.5 whitespace-nowrap border-r aspect-[2.05] border-r-zinc-300'>
          Spritz
        </div>

        <div className='flex gap-0.5 self-center'>
          <div className='flex overflow-hidden relative flex-col justify-center items-center py-0.5 w-full'>
            <img
              loading='lazy'
              src='https://cdn.builder.io/api/v1/image/assets/TEMP/f4247ff1cf307428da03b33551acdbd22589bb2f3de62ea21524d74660ef8bb0?'
              className='object-cover absolute inset-0 size-full'
            />
            <img
              loading='lazy'
              src='https://cdn.builder.io/api/v1/image/assets/TEMP/93c0254d20e4580aaaeb9f78487fd54e8923a8df3ea8cbdeffcb7799eea45654?'
              className='w-full aspect-[5]'
            />
          </div>
          <Link href={`/p/${product.slug}#reviews`} className='hover:underline'>
            <span className='grow text-xs leading-4 underline text-stone-500'>
              {product.reviews.length}
            </span>
          </Link>
        </div>
      </div>
      <div className='mt-4 text-sm leading-6 text-zinc-800'>
        ${product.currentPrice}
      </div>
      <div className='mt-6 text-xs leading-4 text-stone-500'>
        Free shipping over $35 orders
      </div>
      <div className='justify-center self-start px-2.5 py-3 mt-4 text-xs font-bold leading-3 text-center text-white whitespace-nowrap bg-red-700 rounded border border-red-700 border-solid'>
        Add to cart
      </div>
    </div>
  );
};

export default ProductCard;
