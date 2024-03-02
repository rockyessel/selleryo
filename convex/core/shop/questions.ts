import { mutation } from '../../_generated/server';
import { QuestionsSchema } from '../../schema';

export const createProductQuestion = mutation({
  args: { ...QuestionsSchema },
  handler: async (ctx, args) => {
    return await ctx.db.insert('questions', { ...args });
  },
});
