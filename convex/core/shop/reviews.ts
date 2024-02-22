import { v } from 'convex/values';
import { mutation, query } from '../../_generated/server';
import { ProductReviewSchema } from '../../schema';

export const createReview = mutation({
  args: { ...ProductReviewSchema },
  handler: async (ctx, args) => {
    return await ctx.db.insert('reviews', { ...args });
  },
});

export const getProductReviews = query({
  args: { productId: v.id('products') },
  handler: async (ctx, args) => {
    const products = await ctx.db
      .query('reviews')
      .filter((q) => q.eq(q.field('productId'), args.productId))
      .order('asc')
      .take(100);

    return products;
  },
});
