import { mutation } from '../../_generated/server';
import { CategorySchema } from '../../schema';

export const createCategory = mutation({
  args: { ...CategorySchema },
  handler: async (ctx, args) => {
    return await ctx.db.insert('categories', { ...args });
  },
});
