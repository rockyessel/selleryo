import Image from 'next/image';
import { Star } from 'lucide-react';
import { ProductProps } from '@/interface';
import { truncate } from '@/lib/utils/helpers';
import RemoveProductWishlistBtn from '@/components/actions/remove-product-wishlist-btn';
import AddToCart from '@/components/actions/add-to-cart';

interface Props {
  productId: number;
  products: ProductProps[];
}

const WishlistCard = ({ productId, products }: Props) => {
  const product = products.filter((product) => product.id === productId)[0];

  return (
    <li className='justify-between flex w-full gap-5 mt-11 pr-px pt-7 pb-5 border-b'>
      <div className='flex justify-between gap-5'>
        {product && (
          <Image
            alt=''
            width={100}
            height={100}
            priority
            src={product.image}
            className='w-[74px] overflow-hidden shrink-0'
          />
        )}
        <div className='flex flex-col items-stretch'>
          <div className='text-gray-800 text-lg font-bold'>
            {truncate(product?.title, 55)}
          </div>
          <div className='text-gray-600 text-sm font-bold capitalize'>
            {product?.category}
          </div>
          <div className='text-white w-fit bg-teal-600 inline-flex items-center gap-2 px-2 py-2 rounded-md'>
            <div className='text-sm'>{product?.rating.rate}</div>
            <Star size={13} strokeWidth={2} />
          </div>
        </div>
      </div>
      <div className='flex` flex-col my-auto'>
        <div className='text-gray-800 text-xl font-bold leading-[140%]'>
          GH¢{product?.price}
        </div>
        <div className='self-stretch flex items-stretch justify-between gap-5 mt-4 max-md:justify-center'>
          <AddToCart product={product} />
          <hr className='border-r-gray-300 flex w-px shrink-0 h-7 flex-col border-r' />
          <RemoveProductWishlistBtn productId={product?.id} />
        </div>
      </div>
    </li>
  );
};

export default WishlistCard;
