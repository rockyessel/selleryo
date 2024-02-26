'use client';

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useCart } from '@/context/cart';

const CheckoutPaymentMethod = () => {
  const { paymentMethod, setPaymentMethod } = useCart();
  return (
    <Select
      defaultValue={paymentMethod}
      onValueChange={(value: string) => setPaymentMethod(value)}
    >
      <SelectTrigger className='w-full p-4'>
        <SelectValue placeholder='Select payment method.' />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value='cash-on-delivery'>Cash on Delivery</SelectItem>
          <SelectItem value='stripe'>Stripe</SelectItem>
          <SelectItem value='pay-stack'>PayStack</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default CheckoutPaymentMethod;
