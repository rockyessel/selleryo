import { v } from 'convex/values';
import { mutation, query } from '../../_generated/server';
import { ShopRolesSchema, ShopSchema } from '../../schema';

export const createShop = mutation({
  args: { ...ShopSchema },
  handler: async (ctx, args) => {
    return await ctx.db.insert('shops', { ...args });
  },
});

export const createShopRoles = mutation({
  args: { ...ShopRolesSchema },
  handler: async (ctx, args) => {
    return await ctx.db.insert('shopRoles', { ...args });
  },
});

export const getShopRoleByUserId = query({
  args: { userId: v.id('users') },
  handler: async (ctx, args) => {
    const roles = await ctx.db
      .query('shopRoles')
      .filter((q) => q.eq(q.field('userId'), args.userId))
      .order('asc')
      .collect();

    return roles;
  },
});

export const getShopById = query({
  args: { shopId: v.id('shops') },
  handler: async (ctx, args) => {
    const shops = await ctx.db
      .query('shops')
      .filter((q) => q.eq(q.field('_id'), args.shopId))
      .order('asc')
      .collect();

    return shops;
  },
});
