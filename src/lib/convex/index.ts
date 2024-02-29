import { fetchMutation } from 'convex/nextjs';
import { api } from '../../../convex/_generated/api';

export const taskMethod = api.func.tasks;

export const messagesMethod = api.func.messages;

export const orderMethod = api.core.shop.orders;

export const usersMethod = api.core.users.index;

export const docMethod = api.func.doc;

export const storageMethod = api.core.storage;

export const categoryMethod = api.core.shop.categories;

export const productMethod = api.core.shop.products;

export const reviewsMethod = api.core.shop.reviews;

export const tagsMethod = api.core.shop.tags;

export const shopsMethod = api.core.shop.index;

export const fileUpload = async (file: File) => {
  const uploadURL = await fetchMutation(storageMethod.file.generateUploadUrl);
  // console.log('file.type: ', file.type);
  const result = await fetch(uploadURL, {
    method: 'POST',
    headers: { 'Content-Type': file.type },
    body: file,
  });
  const { storageId } = await result.json();
  return storageId;
};
