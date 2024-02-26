'use client';

import { saveProductReview } from '@/lib/utils/services/firebase';
import React, { useState } from 'react';
import StarRatings from 'react-star-ratings';

interface Props {
  productId: number;
  user: string;
}

const ProductReview = ({ productId, user }: Props) => {
  const [inputData, setInputData] = useState('');
  const [rating, setRating] = useState(0);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputData(e.target.value);
  };

  const handleRatingChange = (newRating: number) => {
    setRating(newRating);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Call the function to save data to Firebase
    await saveProductReview({ comment: inputData, rating, productId, user });

    // Clear the input field and rating after submitting
    setInputData('');
    setRating(0);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Data:
        <input type='text' value={inputData} onChange={handleInputChange} />
      </label>
      <div>
        <label>Rating:</label>
        <StarRatings
          rating={rating}
          starRatedColor='orange'
          changeRating={handleRatingChange}
          numberOfStars={5}
          name='rating'
        />
      </div>
      <button type='submit'>Submit</button>
    </form>
  );
};

export default ProductReview;
