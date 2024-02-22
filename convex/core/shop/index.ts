import { mutation, query } from '../../_generated/server';
import { ShopSchema } from '../../schema';

export const createShop = mutation({
  args: { ...ShopSchema },
  handler: async (ctx, args) => {
    return await ctx.db.insert('shops', { ...args });
  },
});

// export const getShopByRoles = query()
