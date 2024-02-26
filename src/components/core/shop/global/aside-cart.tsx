'use client';

import Link from 'next/link';
import { cn } from '@/lib/utils/helpers';
import { useCart } from '@/context/cart';
import CartItemCard from './cart-item-card';
import { Frown, ShoppingCart } from 'lucide-react';
import { DetailedHTMLProps, Fragment, HTMLAttributes } from 'react';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

interface Props
  extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  isSticky?: boolean;
}

const AsideCart = (props: Props) => {
  const { isSticky, ...rest } = props;
  const { cartItems, getTotalPrice } = useCart();

  return (
    <aside {...rest}>
      <Sheet>
        <SheetTrigger>
          <span className='relative'>
            <span className='absolute -top-1 right-0 inline-flex items-center justify-center self-center text-xs p-1 rounded-full bg-red-500 text-white w-4 h-4'>
              {cartItems.length}
            </span>
            <ShoppingCart
              className={cn(
                'mt-1.5 p-1 bg-transparent text-white rounded-full hover:bg-teal-700 hover:text-teal-200',
                isSticky ? 'text-black bg-gray-200' : ''
              )}
              strokeWidth={1}
              size={28}
            />
          </span>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle className='!text-left'>Your Cart</SheetTitle>
          </SheetHeader>
          {cartItems.length === 0 && (
            <div className='w-full h-full flex flex-col items-center justify-center'>
              <Frown className='text-zinc-300 w-16 h-16 lg:text-32' />
              <SheetDescription className='text-xs text-center mt-6 mx-3'>
                Your cart is currently empty.
              </SheetDescription>
            </div>
          )}
          {cartItems.length > 0 && (
            <ul className='flex flex-col gap-0 divide-y h-[80vh] overflow-y-auto'>
              {cartItems.map((item, index) => (
                <CartItemCard key={index} product={item} />
              ))}
            </ul>
          )}
          {cartItems.length > 0 && (
            <div className='flex flex-col gap-4'>
              <p className='text-base'>
                Total Price:{' '}
                <span className='font-bold'>GH¢ {getTotalPrice()}</span>
              </p>
              <Link
                className='w-full p-4 text-white text-center bg-teal-600  rounded-lg font-semibold'
                href='/checkout'
              >
                Checkout
              </Link>
            </div>
          )}
        </SheetContent>
      </Sheet>
    </aside>
  );
};

export default AsideCart;
