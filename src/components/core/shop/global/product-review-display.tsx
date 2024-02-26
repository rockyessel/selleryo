import { ProductReviewProps } from '@/interface';
import { getUserByEmail } from '@/lib/utils/services/firebase';
import Image from 'next/image';
import React from 'react';
import StarRatings from 'react-star-ratings';
import DisplayRating from './display-rating';

interface Props {
  review: ProductReviewProps;
}

const ProductReviewDisplay = async ({ review }: Props) => {
  let user = await getUserByEmail(review.user);

  if (user !== null) {
    return (
      <div className='m-0 py-5 flex flex-col gap-1'>
        <span className='flex items-start gap-2'>
          <Image
            width={100}
            height={100}
            className='w-10 h-10 rounded-lg'
            alt={user.name}
            src={user.image}
          />
          <span
            id='rating'
            className='inline-flex flex-col items-start gap-1 m-0 p-0'
          >
            <DisplayRating
              starRatedColor='orange'
              numberOfStars={5}
              name='rating'
              starDimension='10px'
              starSpacing='2.5px'
              rating={review.rating}
            />
            <span className='font-medium text-xs'>{user.name}</span>
          </span>
        </span>

        <p className='border rounded-lg p-2'>{review.comment}</p>
      </div>
    );
  }
};

export default ProductReviewDisplay;
