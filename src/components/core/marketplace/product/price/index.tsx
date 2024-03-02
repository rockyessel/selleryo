'use client';

import NextImage from '@/components/native/next-image';
import { Separator } from '@radix-ui/react-dropdown-menu';
import { Fragment, useState } from 'react';

interface ShippingOption {
  type: 'pickup' | 'delivery' | 'shipping';
}

interface SubVariant {
  value: string;
  quantity: number;
  price: string;
  compareAtPrice: string;
  costPrice: string;
  shippingOptions: ShippingOption[];
  image: string;
}

interface MainProductVariant {
  optionName: 'colors' | 'materials' | 'size' | 'style';
  options: SubVariant[];
}

interface Option {
  optionName: string;
  value: string;
  image: string;
  variants: MainProductVariant[];
}

interface ProductVariant {
  totalStockQuantity: number;
  options: Option[];
}

const productVariant: ProductVariant = {
  // Top level properties
  totalStockQuantity: 100,

  // Options array with nested variants
  options: [
    {
      optionName: 'size',
      value: 'S',
      image:
        'https://target.scene7.com/is/image/Target/GUEST_ecdc8b46-7393-4104-8681-4623390ef41c',
      variants: [
        {
          optionName: 'colors',
          options: [
            {
              value: 'Red',
              quantity: 4,
              price: '2',
              compareAtPrice: '323',
              costPrice: '100',
              shippingOptions: [
                { type: 'pickup' },
                { type: 'delivery' },
                { type: 'shipping' },
              ],
              image:
                'https://target.scene7.com/is/image/Target/GUEST_ecdc8b46-7393-4104-8681-4623390ef41c',
            },
            {
              value: 'Blue',
              quantity: 1,
              price: '3342',
              compareAtPrice: '323',
              costPrice: '100',
              shippingOptions: [{ type: 'pickup' }, { type: 'delivery' }],
              image:
                'https://target.scene7.com/is/image/Target/GUEST_ecdc8b46-7393-4104-8681-4623390ef41c',
            },
          ],
        },
        {
          optionName: 'materials',
          options: [
            {
              value: 'Wood',
              quantity: 4,
              price: '23467',
              compareAtPrice: '323',
              costPrice: '100',
              shippingOptions: [
                { type: 'pickup' },
                { type: 'delivery' },
                { type: 'shipping' },
              ],
              image:
                'https://target.scene7.com/is/image/Target/GUEST_ecdc8b46-7393-4104-8681-4623390ef41c',
            },
            {
              value: 'Metal',
              quantity: 1,
              price: '42',
              compareAtPrice: '323',
              costPrice: '100',
              shippingOptions: [{ type: 'pickup' }, { type: 'delivery' }],
              image:
                'https://target.scene7.com/is/image/Target/GUEST_ecdc8b46-7393-4104-8681-4623390ef41c',
            },
          ],
        },
      ],
    },
    {
      optionName: 'size',
      value: 'L',
      image:
        'https://target.scene7.com/is/image/Target/GUEST_ecdc8b46-7393-4104-8681-4623390ef41c',
      variants: [
        {
          optionName: 'colors',
          options: [
            {
              value: 'Red',
              quantity: 4,
              price: '1246',
              compareAtPrice: '323',
              costPrice: '100',
              shippingOptions: [
                { type: 'pickup' },
                { type: 'delivery' },
                { type: 'shipping' },
              ],
              image:
                'https://target.scene7.com/is/image/Target/GUEST_ecdc8b46-7393-4104-8681-4623390ef41c',
            },
            {
              value: 'Blue',
              quantity: 1,
              price: '32',
              compareAtPrice: '323',
              costPrice: '100',
              shippingOptions: [{ type: 'pickup' }, { type: 'delivery' }],
              image:
                'https://target.scene7.com/is/image/Target/GUEST_ecdc8b46-7393-4104-8681-4623390ef41c',
            },
          ],
        },
      ],
    },
  ],
};

const MarketPlacePriceBox = () => {
  const [selectedVariant, setSelectedVariant] = useState(
    productVariant.options[0] // select the first variant by default
  );

  const [productSubVariant, setProductSubVariant] = useState<SubVariant>(
    selectedVariant.variants[0].options[0]
  );

  const handleChange = (option: any) => {
    setSelectedVariant(option);
  };
  console.log('selectState: ', selectedVariant);
  return (
    <div>
      <p className='mt-2.5 text-xl font-bold leading-8 text-zinc-800 max-md:max-w-full'>
        ${productSubVariant.price}.00
      </p>
      <span className='mt-4 text-sm leading-5 text-zinc-800 max-md:max-w-full'>
        When purchased online
      </span>
      <Separator />
      {
        <Fragment>
          <div className='flex flex-col gap-2'>
            {/* Size selection */}
            <p className='mt-6 whitespace-nowrap text-zinc-800'>
              <span className='text-base leading-6'>
                {selectedVariant.optionName}:{' '}
              </span>
              <span className='text-base font-bold'>
                {selectedVariant.value}
              </span>
            </p>
            <div className='flex gap-2 mt-3.5 max-w-full w-[416px]'>
              {productVariant.options.map((option, index) => (
                <NextImage
                  key={index}
                  className='h-11 w-11 rounded-lg ring-2 ring-green-500'
                  alt=''
                  width={100}
                  height={100}
                  src={option.image}
                  onClick={() => handleChange(option)}
                />
              ))}
            </div>

            {/* Selected variant details */}
            {selectedVariant.variants?.map((variant, index) => (
              <div key={index} className='flex flex-col gap-2 mt-4'>
                <p className='text-base leading-6 whitespace-nowrap'>
                  {variant.optionName}:
                  <span className='font-bold'>{variant.options[0].value}</span>
                </p>
                {/* Assuming only one option per variant, use the first option */}
                <div className='flex gap-2 mt-3.5 max-w-full w-[416px]'>
                  {variant.options.map((op, index) => (
                    <NextImage
                      onClick={() => {
                        console.log('op: ', op);
                        setProductSubVariant(op);
                      }}
                      key={index}
                      className='h-11 w-11 rounded-lg ring-2 ring-green-500'
                      alt=''
                      width={100}
                      height={100}
                      src={op.image}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Fragment>
      }
      <div className='shrink-0 mt-7 h-px border-t border-solid border-t-zinc-100 max-md:max-w-full' />
      <div className='flex gap-2 justify-between pr-20 mt-5 whitespace-nowrap max-md:flex-wrap max-md:pr-5 max-md:max-w-full'>
        <div className='flex flex-col flex-1 justify-center pt-11 pr-8 pb-4 pl-3.5 bg-white rounded-lg border-2 border-green-800 border-solid max-md:pr-5'>
          <div className='text-base font-bold leading-4 text-center text-zinc-800'>
            Pickup
          </div>
          <div className='mt-2 text-xs leading-4 text-green-800'>
            Ready within 2 hours
          </div>
        </div>
        <div className='flex flex-col flex-1 justify-center px-3.5 pt-11 pb-4 bg-white rounded-lg border border-solid border-zinc-500 max-md:pr-5'>
          <div className='text-base font-bold leading-4 text-center text-zinc-800'>
            Delivery
          </div>
          <div className='mt-2 text-xs leading-4 text-stone-500'>
            As soon as 5pm today
          </div>
        </div>
        <div className='flex flex-col flex-1 justify-center pt-11 pr-9 pb-4 pl-3.5 bg-white rounded-lg border border-solid border-zinc-500 max-md:pr-5'>
          <div className='text-base font-bold leading-4 text-center text-zinc-800'>
            Shipping
          </div>
          <div className='mt-2 text-xs leading-4 text-stone-500'>
            Get it by Sun, Mar 3
          </div>
        </div>
      </div>
      <div className='flex gap-3.5 self-start mt-5 whitespace-nowrap'>
        <div className='grow text-base font-bold leading-6 underline text-zinc-800'>
          Pick up at <span className='underline'>Mountain View</span>
        </div>
        <div className='grow text-sm leading-5 text-center underline text-stone-500'>
          Check other stores
        </div>
      </div>
      <div className='mt-4 text-base leading-6 text-zinc-800 max-md:max-w-full'>
        Ready within 2 hours
        <span className='text-zinc-800'> for pickup inside the store</span>
      </div>
    </div>
  );
};

export default MarketPlacePriceBox;
