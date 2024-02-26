'use client';

import { useCart } from '@/context/cart';
import { ShoppingBag } from 'lucide-react';
import React from 'react';
import CheckoutOrderCard from './checkout-order-card';
import { cn } from '@/lib/utils/helpers';
import CheckoutOrderBtn from '../actions/checkout-order-btn';
import axios from 'axios';
import CheckoutPaymentMethod from './checkout-payment-method';
import PaystackBtn from '../actions/paystack-btn';

const CheckoutOrdersAside = () => {
  const { cartItems, getTotalPrice } = useCart();

  const isCartEmpty = cartItems.length === 0;
  return (
    <aside className='w-[30rem] flex flex-col'>
      <div className='flex flex-col mt-12'>
        <div className='text-gray-800 text-base font-bold'>Your Order(s)</div>

        {!isCartEmpty && (
          <ul className='flex flex-col divide-y'>
            {cartItems.map((item, index) => (
              <CheckoutOrderCard key={index} product={item} />
            ))}
          </ul>
        )}

        {isCartEmpty && (
          <div className='flex flex-col items-center justify-center'>
            <ShoppingBag size={48} strokeWidth={0.5} />
            <p className='text-black text-base font-bold'>No products found</p>
          </div>
        )}
        {!isCartEmpty && (
          <div className='flex flex-col gap-1 text-gray-500 text-sm'>
            <div className='flex justify-between'>
              <p>Sub Total</p>
              <p>GH¢ {getTotalPrice()}</p>
            </div>
            <div className='flex justify-between'>
              <p>Tax</p>
              <p>Calculated at checkout</p>
            </div>
            <div className='flex justify-between'>
              <p>Estimated shipping</p>
              <p>Calculated at checkout</p>
            </div>
          </div>
        )}
        <CheckoutPaymentMethod />
        <PaystackBtn amount={0} email={''} />
        <CheckoutOrderBtn
          disabled={isCartEmpty}
          className={cn(
            isCartEmpty
              ? 'text-gray-500 border-gray-300 bg-gray-300 cursor-not-allowed'
              : 'bg-teal-600 text-white border-teal-200'
          )}
        />
      </div>
    </aside>
  );
};

export default CheckoutOrdersAside;
