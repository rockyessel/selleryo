import { mutation } from '../../_generated/server';
import { TagSchema } from '../../schema';

export const createReview = mutation({
  args: { ...TagSchema },
  handler: async (ctx, args) => {
    return await ctx.db.insert('tags', { ...args });
  },
});
