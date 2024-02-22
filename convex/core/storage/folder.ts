import { v } from 'convex/values';
import { mutation } from '../../_generated/server';
import { FolderSchema } from '../../schema';
import { api } from '../../_generated/api';
import { Id } from '../../_generated/dataModel';
import { deleteFileById } from './file';

export const createFolder = mutation({
  args: { ...FolderSchema },
  handler: async (ctx, args) => {
    return await ctx.db.insert('folders', { ...args });
  },
});

export const deleteFolderById = mutation({
  args: {
    folderId: v.id('folders'),
  },
  handler: async (ctx, args) => {
    const { folderId } = args;
    const folder = await ctx.db.get(folderId);
    if (folder) {
      const totalFilesLength = folder.fileLists.length;

      if (totalFilesLength > 0) {
        for (let i = 0; i <= totalFilesLength; i++) {
          const id = folder.fileLists[i] as Id<'files'>;
          deleteFileById(ctx, { fileId: id });
        }
      }
      await ctx.db.delete(folderId);
    }
  },
});
