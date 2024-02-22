import { v } from 'convex/values';
import { query } from '../_generated/server';

/**
 * A query function to retrieve a document based on a specific field value.
 *
 * @function getDocByField
 * @param {Object} args - The arguments object containing parameters for the query.
 * @param {string} args.docType - The type of document to query.
 * @param {string} args.field - The field within the document to match against.
 * @param {string} args.value - The value to match within the specified field.
 * @returns {Promise<void>} - Asynchronous function that collects and processes the query results.
 */
export const getDocByField = query({
  args: { docType: v.string(), field: v.string(), value: v.string() },
  handler: async (ctx, args) => {
    // Destructuring the arguments for ease of use
    const { docType, field, value } = args;

    // Querying the database for documents of the specified type
    // where the specified field matches the given value
    const [matchingDocs] = await ctx.db
      .query(docType)
      .filter((q) => q.eq(q.field(field), value))
      .collect();

    return matchingDocs;
  },
});
