'use client';

import React from 'react';
import StarRatings from 'react-star-ratings';
interface StarRatingProps {
  rating?: number;
  numberOfStars?: number;
  changeRating?: (rating: number) => void;
  starRatedColor?: string;
  starEmptyColor?: string;
  starHoverColor?: string;
  starDimension?: string;
  starSpacing?: string;
  gradientPathName?: string;
  ignoreInlineStyles?: boolean;
  svgIconPath?: string;
  svgIconViewBox?: string;
  name?: string;
}
const DisplayRating = ({ ...props }: StarRatingProps) => {
  return <StarRatings {...props} numberOfStars={5} />;
};

export default DisplayRating;
