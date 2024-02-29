'use client';

import { NEXT_PUBLIC_STRIPE_PUB_KEY } from '@/lib/config/env';
import React from 'react';
import { PaystackButton } from 'react-paystack';

interface Props {
  amount: number;
  email: string;
}

const PaystackBtn = ({ amount, email }: Props) => {
  const [reference, setReference] = React.useState('');

  const handlePaystackSuccessAction = (reference: string) => {
    // handle payment success
    // console.log('Reference: ', reference);
  };

  const componentProps = {
    email,
    amount,
    publicKey: NEXT_PUBLIC_STRIPE_PUB_KEY,
    text: 'Pay Now',
    onSuccess: (reference: string) => handlePaystackSuccessAction(reference),
    onClose: () => alert('Payment canceled by user.'),
  };

  return <PaystackButton {...componentProps} />;
};

export default PaystackBtn;
