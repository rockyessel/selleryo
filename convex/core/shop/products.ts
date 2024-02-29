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

export const getAllMartketableProduct = query({
  args: {},
  handler: async (ctx) => {
    const products = await ctx.db
      .query('products')
      .filter((q) => q.eq(q.field('visibility'), 'published'))
      .filter((q) => q.eq(q.field('displayOnMartket'), true))
      .collect();

    console.log('products: ', products);

    const p = products.map(async (product) => {
      const shop = await ctx.db.get(product.shopId);
      const reviews = await ctx.db
        .query('reviews')
        .filter((q) => q.eq(q.field('shopId'), product.shopId))
        .filter((q) => q.eq(q.field('productId'), product._id))
        .collect();

      return {
        ...product,
        ...{ reviews, shop },
      };
    });
    const f = await Promise.all(p);
    return f;
  },
});
