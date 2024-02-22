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

export const deleteFileById = mutation({
  args: {
    fileId: v.id('files'),
  },
  handler: async (ctx, args) => {
    const { fileId } = args;
    const file = await ctx.db.get(fileId);
    if (file.folderId) {
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
