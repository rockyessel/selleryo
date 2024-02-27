import { v } from 'convex/values';
import { mutation } from '../../_generated/server';
import { FileSchema } from '../../schema';
import { Id } from '../../_generated/dataModel';

export const createFile = mutation({
  args: { ...FileSchema },
  handler: async (ctx, args) => {
    return await ctx.db.insert('files', { ...args });
  },
});

export const listAllFilesByUserId = mutation({
  args: { userId: v.id('users') },
  handler: async (ctx, args) => {
    const files = await ctx.db
      .query('files')
      .filter((q) => q.eq(q.field('uploadedBy'), args.userId))
      .collect();

    return Promise.all(
      files.map(async (file) => ({
        ...file,
        ...{ fileUrl: await ctx.storage.getUrl(file.storageId) },
      }))
    );
  },
});

export const deleteFileById = mutation({
  args: {
    fileId: v.id('files'),
    userId: v.id('users'),
  },
  handler: async (ctx, args) => {
    const { fileId, userId } = args;
    const file = await ctx.db.get(fileId);
    const user = await ctx.db.get(userId);
    if (file.folderId && user) {
      const folder = await ctx.db.get(file.folderId);
      const filteredFolder = folder.fileLists.filter(
        (id: Id<'files'>) => id !== fileId
      );
      await ctx.db.patch(file.folderId, { ...filteredFolder });
    }
    await ctx.db.delete(fileId);
    return await ctx.storage.delete(file.storageId);
  },
});

export const generateUploadUrl = mutation(async (ctx) => {
  return await ctx.storage.generateUploadUrl();
});
