import { v } from 'convex/values';
import { mutation, query } from '../../_generated/server';
import { ProductSchema } from '../../schema';

export const getPublishedProducts = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query('products').collect();
  },
});

export const createProduct = mutation({
  args: { ...ProductSchema },
  handler: async (ctx, args) => {
    return await ctx.db.insert('products', { ...args });
  },
});

export const getShopProducts = query({
  args: { shopId: v.id('shops') },
  handler: async (ctx, args) => {
    const products = await ctx.db
      .query('products')
      .filter((q) => q.eq(q.field('shopId'), args.shopId))
      .order('asc')
      .take(100);

    return products;
  },
});
