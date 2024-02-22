import { v } from 'convex/values';
import { mutation } from '../../_generated/server';
import { UserSchema } from '../../schema';

export const createUser = mutation({
  args: { ...UserSchema },
  handler: async (ctx, args) => {
    return await ctx.db.insert('users', { ...args });
  },
});

export const updateUser = mutation({
  args: { id: v.id('users'), ...UserSchema },
  handler: async (ctx, args) => {
    const { id, ...rest } = args;
    console.log(await ctx.db.get(id));
    return await ctx.db.patch(id, { ...rest });
  },
});

export const deleteUser = mutation({
  args: { id: v.id('users') },
  handler: async (ctx, args) => {
    await ctx.db.delete(args.id);
  },
});
