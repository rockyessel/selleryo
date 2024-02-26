"use client";

import { useCart } from "@/context/cart";
import { ProductProps } from "@/interface";
import { ShoppingCart } from "lucide-react";


interface Props {
  product: ProductProps;
}

const AddToCart = ({ product }: Props) => {
  const { increaseCartQuantity } = useCart();
  // const quantity = getItemQuantity(product);
  return (
    <button
      onClick={() => increaseCartQuantity(product)}
      className="w-10 h-10 flex justify-center rounded-full items-center text-center text-xs self-center bg-transparent hover:bg-teal-600 hover:text-white text-black"
    >
      <ShoppingCart strokeWidth={0.75} />
    </button>
  );
};

export default AddToCart;
