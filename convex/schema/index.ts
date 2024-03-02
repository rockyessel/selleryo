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
  shopId: v.id('shops'),
  rating: v.number(),
  wouldRecommend: v.boolean(),
  title: v.optional(v.string()),
  comment: v.optional(v.string()),
  photos: v.optional(v.array(v.string())),
};

export const WishListSchema = {
  productId: v.id('products'),
  userId: v.id('users'),
};

export const marketplace = {
  tags: v.string(),
  categories: v.string(),
};

export const ProductSchema = {
  name: v.string(),
  slug: v.string(),
  description: v.string(),
  shortDescription: v.string(),
  // images: v.array(v.string()),
  images: v.string(),
  isProductOnMarket: v.boolean(),
  marketplace: v.optional(v.object(marketplace)),
  currentPrice: v.string(),
  previousPrice: v.string(),
  visibility: v.string(),
  // categories: v.array(v.object(CategorySchema)),
  categories: v.string(),
  // tags: v.array(v.object(TagSchema)),
  tags: v.string(),
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
  shopId: v.id('shops'),
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
};

export const ShopSchema = {
  shopAdmin: v.id('users'),
  createdBy: v.id('users'),
  name: v.string(),
  subdomain: v.string(),
  tags: v.optional(v.array(v.string())),
  image: v.optional(v.string()),
  categories: v.optional(v.string()),
  customDomain: v.optional(v.string()),
  favicon: v.optional(v.string()),
  title: v.optional(v.string()),
  description: v.optional(v.string()),
  currency: v.optional(v.string()),
  env: v.object({
    stripe_key: v.optional(v.string()),
    stripe_secrest: v.optional(v.string()),
    permission_key: v.optional(v.string()),
  }),
};

export const ShopRolesSchema = {
  role: v.string(),
  shopId: v.id('shops'),
  userId: v.id('users'),
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
  // shopRole: v.optional(v.array(v.object(ShopRolesSchema))),
};

export const FileSchema = {
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

export const AnswersSchema = {
  userId: v.optional(v.id('users')),
  ans: v.string(),
};

export const QuestionsSchema = {
  question: v.string(),
  answers: v.array(v.object(AnswersSchema)),
};
