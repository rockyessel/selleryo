import { Dispatch, ReactNode, SetStateAction } from 'react';

export interface ChildrenProps {
  children: ReactNode;
}

export type AnyObject = {
  [key: string]: any;
};

export type ResObj<T> = {
  msg: string;
  success: boolean;
  data: T;
};

export type CatchError = {
  message: string;
};

export type CartContextProps = {
  getItemQuantity: (_id: number) => number;
  increaseCartQuantity: (_product: any) => void;
  decreaseCartQuantity: (_product: any) => void;
  removeFromCart: (_id: number) => void;
  getTotalPrice: () => number;
  getSelectOrderId: (_orderId: string) => void;
  orderId: string;
  cartQuantity: number;
  cartItems: any[];
  handleSelection: (_address: any) => void;
  selectedBillingAddress: any;
  selectedShippingAddress: any;
  setSchedule: Dispatch<any>;
  schedule: any;
  paymentMethod: string;
  setPaymentMethod: Dispatch<SetStateAction<string>>;
};

export interface Category {
  name: string;
  slug: string;
}

export interface Tag {
  name: string;
  slug: string;
}

export interface ProductReview {
  productId: string;
  userId: string;
  rating: number;
  comment?: string;
}

export interface WishList {
  productId: string;
  userId: string;
}

export interface Product {
  name: string;
  slug: string;
  description: string;
  shortDescription: string;
  images: string[];
  currentPrice: string;
  previousPrice: string;
  visibility: string;
  categories: Category[];
  tags: Tag[];
  stockQuantity: number;
  sku_barCode: string;
  addedById: string;
  date: string;
  shopId: string;
}

export interface Order {
  id: string;
  tax: string;
  discount: string;
  customer: string;
  subTotal: string;
  orderNumber: string;
  orders: Product[];
  shippingCharge: string;
  billingAddressId: string;
  shippingAddressId: string;
  paymentMethod: string;
  deliveryFee: string;
  total: number;
  orderId: string;
  totalItems: number;
  date: string;
  orderStatus: string;
  paymentStatus: string;
  shopId: string;
}

export interface Shop {
  tags: string[];
  image: string;
  name: string;
  categories: string;
  subdomain: string;
  customDomain: string;
  createdBy: string;
  favicon: string;
  title: string;
  description: string;
}

export interface ShopRole {
  role: string;
  shopId: string;
}

export interface User {
  name: string;
  username: string;
  email: string;
  password?: string;
  image?: string;
  bio?: string;
  location?: string;
  authType: string;
  phoneNumber?: string;
  isVerified?: boolean;
  shopRole?: ShopRole[];
}

export interface File {
  shopId: string;
  folderId?: string;
  storageId: string;
  uploadedBy: string;
}

export interface Folder {
  shopId: string;
  name: string;
  description: string;
  fileLists: string[];
}

export interface ImageDimensionsProps {
  width: number;
  height: number;
  src: string;
}
