'use client';

import { toast } from 'sonner';
import { useCart } from '@/context/cart';
import { IdGen, cn } from '@/lib/utils/helpers';
import { db } from '@/lib/config/firebase';
import { useRouter } from 'next/navigation';
import { addDoc, collection } from 'firebase/firestore';
import { ButtonHTMLAttributes, useTransition } from 'react';
import { useSession } from 'next-auth/react';
import axios from 'axios';
import { loadStripe } from '@stripe/stripe-js';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

const CheckoutOrderBtn = ({ className, ...props }: Props) => {
  const {
    cartItems,
    getTotalPrice,
    selectedBillingAddress,
    schedule,
    paymentMethod,
    selectedShippingAddress,
  } = useCart();
  const [isPending, startTransition] = useTransition();
  const { data: session } = useSession();

  const orderInitialValue = {
    tax: '', //Don't know how you want me to do this.
    discount: '', //Don't know how you want me to do this.
    subTotal: '', //Don't know how you want me to do this.
    orders: cartItems,
    schedule,
    shippingCharge: '', //Don't know how you want me to do this.
    billingData: selectedBillingAddress,
    shippingData: selectedShippingAddress,
    paymentMethod: paymentMethod,
    total: getTotalPrice(),
    orderId: IdGen('ORDER'),
    owner: session?.user?.email,
    totalItems: cartItems.length,
    date: new Date().toISOString(),
    orderStatus: 'Order Processing',
    paymentStatus: paymentMethod,
  };

  const redirectToCheckout = async () => {
    try {
      const stripe = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUB_KEY!);

      if (!stripe) throw new Error('Stripe failed to initialize.');

      const checkoutResponse = await fetch('/api/checkout_sessions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ cartItems }),
      });

      const { sessionId } = await checkoutResponse.json();
      const stripeError = await stripe.redirectToCheckout({ sessionId });

      if (stripeError) {
        console.error(stripeError);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleOrderSubmission = async () => {
    const loadId = toast.loading('Initiating order request...');
    if (cartItems.length === 0) {
      toast.error('Please add an item to the cart.');
      toast.dismiss(loadId);
      return;
    }

    try {
      const ordersCollection = collection(db, 'orders');
      startTransition(async () => {
        const docRef = await addDoc(ordersCollection, orderInitialValue);
        // Access the order ID from the DocumentReference
        const orderDocId = docRef.id;
        // Redirect to order page.
        if (orderDocId) {
          toast.success('Order placed successfully.');
          // await redirectToCheckout();
          // console.log('orderInitialValue: ', orderInitialValue);
          toast.info('Redirecting you to checkout.');
          // router.push(`/dashboard/orders/${orderDocId}`);
        }
      });
    } catch (error) {
      console.error('Error submitting order:', error);
    } finally {
      toast.dismiss(loadId);
    }
  };

  return (
    <button
      {...props}
      onClick={async () => await handleOrderSubmission()}
      className={cn(
        'text-center text-base font-bold items-center border mt-6 px-5 py-4 rounded-md',
        className
      )}
    >
      Order Now
    </button>
  );
};

export default CheckoutOrderBtn;
