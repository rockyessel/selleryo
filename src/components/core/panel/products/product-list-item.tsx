import { generateItemStatusColor, toggleDropdowns } from '@/lib/utils/helpers';
import { btnStyles } from '@/styles/classStyles';
import clsx from 'clsx';
import { MoreVertical } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Dropdown from '../common/dropdown';

function getStockStatus(quantity: number) {
  return quantity > 5
    ? 'In Stock'
    : quantity > 0 && quantity <= 5
    ? 'Low Stock'
    : 'Out of Stock';
}
const ProductListItem = ({ product }: { product: any }) => {
  const POPUP_DATA: { label: string; route?: string; action?: any }[] = [
    {
      label: 'Edit',
      route: '/products/details/' + product?.id,
    },
  ];
  if (product)
    return (
      <tr className='bg-white border-b py-2'>
        <td className='w-16 h-[100%]'>
          <div className='h-full w-full flex items-center justify-center'>
            <input
              type='checkbox'
              className='self-center w-3 h-3 cursor-pointer accent-teal-500 text-whtie'
            />
          </div>
        </td>
        <td className='py-3'>
          <div className='items-stretch flex w-[220px] gap-5'>
            <Image
              alt=''
              priority
              width={500}
              height={500}
              src={product.images?.[0]?.url}
              className='aspect-square object-contain object-center w-10 overflow-hidden shrink-0'
            />
            <div className='flex grow basis-[0%] flex-col items-stretch mt-1 self-start'>
              <div className='text-neutral-800 text-sm leading-none whitespace-nowrap'>
                <Link
                  href={'/products/details/' + product.id}
                  className='hover:underline'
                >
                  {product.name}
                </Link>
              </div>
              <div className='items-stretch content-start flex-wrap lg:flex-nowrap flex justify-between gap-3.5 mt-1.5'>
                <div className='text-gray-500 text-[11px] whitespace-nowrap leading-none'>
                  ID: {product.id?.split('-')[0]}
                </div>
                <div className='text-gray-500 text-[11px] leading-none whitespace-nowrap items-stretch grow'>
                  SKU: {product.sku}
                </div>
              </div>
            </div>
          </div>
        </td>
        <td className='px-3 py-2 text-xs'>{product?.categories?.join(', ')}</td>
        <td className='px-3 py-2'>
          <div
            className={clsx(
              `text-center text-sm leading-3 items-stretch w-fit px-2 py-1 `,
              generateItemStatusColor(getStockStatus(Number(product.quantity)))
            )}
          >
            {getStockStatus(Number(product.quantity))}
          </div>
        </td>
        <td className='px-3 py-2 text-sm text-black'>{product.newPrice}</td>
        <td className='px-3 py-2'>
          <div className='relative flex items-center justify-end h-full w-full'>
            <div
              className={clsx(
                'w-6 h-6 text-grey-800  hover:bg-zinc-100 cursor-pointer flex items-center justify-center',
                'drop-btn ml-auto'
              )}
              onClick={() =>
                toggleDropdowns('product-list-item-dropdown' + product.id)
              }
            >
              <MoreVertical className='w-4 h-4' />
            </div>
            <Dropdown
              critical={
                product.stockStatus === 'Out of Stock'
                  ? [{ label: 'Remove', action: () => null }]
                  : []
              }
              data={POPUP_DATA}
              id={'product-list-item-dropdown' + product.id}
              className={clsx('!top-6 !w-32')}
            />
          </div>
        </td>
      </tr>
    );
};

export default ProductListItem;
