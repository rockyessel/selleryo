'use client';

import { useEffect, useState } from 'react';
import StarRatings from 'react-star-ratings';
const MarketPlaceProductHeader = () => {
  const [rating, setRating] = useState<number>(4.5);

  return (
    <div>
      <p className='mt-3 text-2xl font-bold leading-7 text-zinc-800 max-md:max-w-full'>
        Self-Watering Plastic Indoor Outdoor Planter Pot - Room Essentials™
      </p>
      <div className='flex gap-1 justify-between items-start self-start mt-3 text-sm whitespace-nowrap text-stone-500'>
        
          <StarRatings
            rating={4}
            starRatedColor='orange'
            // changeRating={this.changeRating}
            numberOfStars={5}
            name='rating'
            starDimension='15px'
            starSpacing='0px'
          />
        
        <div className='self-stretch underline leading-[147%]'>6617</div>
        <div className='grow justify-center py-1.5 pl-2.5 text-sm leading-5 underline border-l border-solid border-l-zinc-300'>
          99 Questions
        </div>
      </div>
    </div>
  );
};

export default MarketPlaceProductHeader;
