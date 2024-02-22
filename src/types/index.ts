import { Dispatch, ReactNode, SetStateAction } from 'react';

export interface ChildrenProps {
  children: ReactNode;
}

export type AnyObject = {
  [key: string]: any;
};

export type ResObj<T> = {
  msg: string;
  success: boolean;
  data: T;
};

export type CatchError = {
  message: string;
};

export type CartContextProps = {
  getItemQuantity: (_id: number) => number;
  increaseCartQuantity: (_product: any) => void;
  decreaseCartQuantity: (_product: any) => void;
  removeFromCart: (_id: number) => void;
  getTotalPrice: () => number;
  getSelectOrderId: (_orderId: string) => void;
  orderId: string;
  cartQuantity: number;
  cartItems: any[];
  handleSelection: (_address: any) => void;
  selectedBillingAddress: any;
  selectedShippingAddress: any;
  setSchedule: Dispatch<any>;
  schedule: any;
  paymentMethod: string;
  setPaymentMethod: Dispatch<SetStateAction<string>>;
};
