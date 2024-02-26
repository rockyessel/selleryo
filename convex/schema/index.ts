import { v } from 'convex/values';

export const CategorySchema = {
  name: v.string(),
  slug: v.string(),
};

export const TagSchema = {
  name: v.string(),
  slug: v.string(),
};

export const ProductReviewSchema = {
  productId: v.id('products'),
  userId: v.id('users'),
  rating: v.number(),
  comment: v.optional(v.string()),
};

export const WishListSchema = {
  productId: v.id('products'),
  userId: v.id('users'),
};

export const ProductSchema = {
  name: v.string(),
  slug: v.string(),
  description: v.string(),
  shortDescription: v.string(),
  images: v.array(v.string()),
  currentPrice: v.string(),
  previousPrice: v.string(),
  visibility: v.string(),
  categories: v.array(v.object(CategorySchema)),
  tags: v.array(v.object(TagSchema)),
  stockQuantity: v.number(),
  sku_barCode: v.string(),
  addedById: v.id('users'),
  date: v.string(),
  shopId: v.id('shops'),
};

export const OrderSchema = {
  id: v.string(),
  tax: v.string(),
  discount: v.string(),
  customer: v.id('users'),
  subTotal: v.string(),
  orderNumber: v.string(),
  orders: v.array(v.object(ProductSchema)),
  shippingCharge: v.string(),
  billingAddressId: v.string(),
  shippingAddressId: v.string(),
  paymentMethod: v.string(),
  deliveryFee: v.string(),
  total: v.number(),
  orderId: v.string(),
  totalItems: v.number(),
  date: v.string(),
  orderStatus: v.string(),
  paymentStatus: v.string(),
  shopId: v.id('shops'),
};

export const ShopSchema = {
  tags: v.array(v.string()),
  image: v.string(),
  name: v.string(),
  categories: v.string(),
  subdomain: v.string(),
  customDomain: v.string(),
  createdBy: v.id('users'),
  favicon: v.string(),
  title: v.string(),
  description: v.string(),
};

export const shopRole = {
  role: v.string(),
  shopId: v.id('shops'),
};

export const UserSchema = {
  name: v.string(),
  username: v.string(),
  email: v.string(),
  password: v.optional(v.string()),
  image: v.optional(v.string()),
  bio: v.optional(v.string()),
  location: v.optional(v.string()),
  authType: v.string(),
  phoneNumber: v.optional(v.string()),
  isVerified: v.optional(v.boolean()),
  shopRole: v.optional(v.array(v.object(shopRole))),
};

export const FileSchema = {
  shopId: v.id('shops'),
  folderId: v.optional(v.id('folders')),
  storageId: v.id('_storage'),
  uploadedBy: v.id('users'),
};

export const FolderSchema = {
  shopId: v.id('shops'),
  name: v.string(),
  description: v.string(),
  fileLists: v.array(v.id('files')),
};
