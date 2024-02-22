import { v } from 'convex/values';
import { mutation, query } from '../../_generated/server';
import { OrderSchema } from '../../schema';

export const createOrder = mutation({
  args: { ...OrderSchema },
  handler: async (ctx, args) => {
    return await ctx.db.insert('orders', { ...args });
  },
});

export const getShopOrders = query({
  args: { shopId: v.id('shops') },
  handler: async (ctx, args) => {
    const orders = await ctx.db
      .query('orders')
      .filter((q) => q.eq(q.field('shopId'), args.shopId))
      .order('asc')
      .take(100);

    return orders;
  },
});
