'use client';

import Link from 'next/link';
import CartItemCard from './item';
import { useCart } from '@/context/cart';
import { cn } from '@/lib/utils/helpers';
import { Frown, ShoppingCart } from 'lucide-react';
import { DetailedHTMLProps, HTMLAttributes } from 'react';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { getClientUser } from '@/hooks/useGetClientUser';

interface Props
  extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {}

const AsideCart = ({ className, ...props }: Props) => {
  const { cartItems, getTotalPrice } = useCart();
  const session = getClientUser();

  console.log('session: ', session);

  return (
    <aside className={cn(className)} {...props}>
      <Sheet>
        <SheetTrigger className='relative'>
          <Button variant='outline' className='p-1'>
            {session && session._id && (
              <span className='absolute -top-1 right-0 inline-flex items-center justify-center self-center text-xs p-1 rounded-full bg-black text-white w-4 h-4'>
                {cartItems.length}
              </span>
            )}
            <ShoppingCart strokeWidth={0.5} />
          </Button>
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
