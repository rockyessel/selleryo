import { ProductProps } from "@/interface";
import { Heart, Plus, ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import AddProductWishlistsBtn from "../actions/add-product-wishlists-btn";
import AddToCart from "../actions/add-to-cart";

interface Props {
  product: ProductProps;
}

const ProductCard = ({ product }: Props) => {
  return (
    <li className="overflow-hidden flex flex-col gap-8 gap-y-2 border border-zinc-100 shadow-sm rounded-md bg-white py-3 pt-0">
      <header className="relative h-[90%] !z-0">
        <Image
          width={500}
          height={500}
          alt=""
          priority={true}
          src={product.image}
          className="w-[20rem] h-[20rem] relative z-0 inline"
        />
        <div className="absolute top-2 right-2 justify-center text-white text-xs font-semibold leading-[200%] items-center bg-teal-600 mb-0 w-[46px] max-w-full pl-2.5 pr-3.5 py-2 rounded-md self-end max-md:mb-2.5 z-0">
          {product.rating.rate * 10}%
        </div>
      </header>

      {/* Description */}
      <main className="flex flex-col gap-2 px-4 mt-2">
        <p className="flex items-center gap-1">
          <span className="text-gray-800 text-md font-semibold">
            GH¢{product.price}
          </span>
          <span className="line-through text-gray-400 text-[0.8rem]">
            GH¢{product.rating.count}
          </span>
        </p>
        <p className="text-gray-500 text-base">{product.title}</p>
      </main>

      {/* Button */}
      <footer className="flex items-center justify-between space-x-2 px-4 mt-2">
        <div className="flex items-center gap-1">
          <AddProductWishlistsBtn productId={product.id} />
          <AddToCart product={product} />
        </div>
        <Link
          href={`/products/${product.id}`}
          className="w-10 h-10 flex justify-center rounded-full items-center cursor-pointer gap-2 hover:bg-teal-600 hover:text-white text-black"
        >
          <Plus className="w-7 h-7 p-1" strokeWidth={1} />
        </Link>
      </footer>
    </li>
  );
};

export default ProductCard;

// you are not going to be successful if you don't become a master at self decline and self control
