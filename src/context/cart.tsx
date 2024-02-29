'use client';

import { Id } from '../../convex/_generated/dataModel';
import { CartContextProps, ProductProps } from '@/types';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { cartContextInitValues } from '@/lib/utils/constants';
import { createContext, ReactNode, useContext, useState } from 'react';

interface CartProviderProps {
  children: ReactNode;
}

const CartContext = createContext<CartContextProps>(cartContextInitValues);

export const CartProvider = ({ children }: CartProviderProps) => {
  const [orderId, setOrderId] = useState('');
  const [schedule, setSchedule] = useLocalStorage<any>('schedule', {});
  const [cartItems, setCartItems] = useLocalStorage<ProductProps[] | []>('cart', []);
  const [paymentMethod, setPaymentMethod] = useLocalStorage<string>('payment-method', '');
  const [selectedBillingAddress, setSelectedBillingAddress] = useLocalStorage<any>('billing', {});
  const [selectedShippingAddress, setSelectedShippingAddress] = useLocalStorage<any>('shipping', {});

  const handleSelection = (address: any) => {
    const { addressType } = address;
    if (addressType === 'Shipping') {
      setSelectedShippingAddress(address);
    } else if (addressType === 'Billing') {
      setSelectedBillingAddress(address);
    }
  };

  const getSelectOrderId = (orderId: Id<'orders'>) => setOrderId(orderId);
  const cartQuantity = cartItems.reduce((quantity, item) => item.quantity + quantity, 0);
  const getItemQuantity = (id: Id<'products'>) => cartItems.find((item) => item._id === id)?.quantity || 0;
  const getTotalPrice = (): number => cartItems.reduce((total, item) => total + Number(item.currentPrice) * item.quantity, 0);
  const removeFromCart = (id: Id<'products'>) => setCartItems((currItems) => currItems.filter((item) => item._id !== id));

  const increaseCartQuantity = (product: ProductProps) => {
    setCartItems((currItems) => {
      if (currItems.find((item) => item._id === product._id) == null) {
        return [...currItems, { ...product, quantity: 1 }];
      } else {
        return currItems.map((item) => {
          if (item._id === product._id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const decreaseCartQuantity = (product: ProductProps) => {
    setCartItems((currItems) => {
      if (currItems.find((item) => item._id === product._id)?.quantity === 1) {
        return currItems.filter((item) => item._id !== product._id);
      } else {
        return currItems.map((item) => {
          if (item._id === product._id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const values: CartContextProps = {
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
