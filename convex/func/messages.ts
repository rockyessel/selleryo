import { v } from 'convex/values';
import { mutation, query } from '../_generated/server';

export const generateUploadUrl = mutation(async (ctx) => {
  return await ctx.storage.generateUploadUrl();
});

export const sendImage = mutation({
  args: { storageId: v.id('_storage'), author: v.string() },
  handler: async (ctx, args) => {
    await ctx.db.insert('messages', {
      body: args.storageId,
      author: args.author,
      format: 'image',
    });
  },
});

export const deleteById = mutation({
  args: {
    storageId: v.id('_storage'),
  },
  handler: async (ctx, args) => {
    return await ctx.storage.delete(args.storageId);
  },
});

export const list = query({
  args: {},
  handler: async (ctx) => {
    const messages = await ctx.db.query('messages').collect();
    return Promise.all(
      messages.map(async (message) => ({
        ...message,
        // If the message is an "image" its `body` is an `Id<"_storage">`
        ...(message.format === 'image'
          ? { url: await ctx.storage.getUrl(message.body) }
          : {}),
      }))
    );
  },
});
