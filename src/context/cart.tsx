'use client';

import { CartContextProps } from '@/types';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { cartContextInitValues } from '@/lib/utils/constants';
import { createContext, ReactNode, useContext, useState } from 'react';

interface CartProviderProps {
  children: ReactNode;
}

const CartContext = createContext<CartContextProps>(cartContextInitValues);

export const CartProvider = ({ children }: CartProviderProps) => {
  const [orderId, setOrderId] = useState('');
  const [cartItems, setCartItems] = useLocalStorage<any[] | []>('cart', []);
  const [schedule, setSchedule] = useLocalStorage<any>('schedule', {});
  const [paymentMethod, setPaymentMethod] = useLocalStorage<string>(
    'payment-method',
    ''
  );
  const [selectedShippingAddress, setSelectedShippingAddress] =
    useLocalStorage<any>('shipping', {});
  const [selectedBillingAddress, setSelectedBillingAddress] =
    useLocalStorage<any>('billing', {});

  const handleSelection = (address: any) => {
    const { addressType } = address;

    if (addressType === 'Shipping') {
      setSelectedShippingAddress(address);
    } else if (addressType === 'Billing') {
      setSelectedBillingAddress(address);
    }
  };

  const getSelectOrderId = (orderId: string) => setOrderId(orderId);
  const cartQuantity = cartItems.reduce(
    (quantity, item) => item.quantity + quantity,
    0
  );
  const getItemQuantity = (id: number) =>
    cartItems.find((item) => item.id === id)?.quantity || 0;
  const getTotalPrice = (): number =>
    cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  const removeFromCart = (id: number) =>
    setCartItems((currItems) => currItems.filter((item) => item.id !== id));

  const increaseCartQuantity = (product: any) => {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === product.id) == null) {
        return [...currItems, { ...product, quantity: 1 }];
      } else {
        return currItems.map((item) => {
          if (item.id === product.id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const decreaseCartQuantity = (product: any) => {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === product.id)?.quantity === 1) {
        return currItems.filter((item) => item.id !== product.id);
      } else {
        return currItems.map((item) => {
          if (item.id === product.id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const values = {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
    getTotalPrice,
    getSelectOrderId,
    handleSelection,
    setSchedule,
    setPaymentMethod,
    selectedBillingAddress,
    selectedShippingAddress,
    orderId,
    cartItems,
    cartQuantity,
    schedule,
    paymentMethod,
  };

  return <CartContext.Provider value={values}>{children}</CartContext.Provider>;
};

export const useCart = () => useContext(CartContext);
