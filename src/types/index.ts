import { Id } from '../../convex/_generated/dataModel';
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
  getItemQuantity: (_id: Id<'products'>) => number;
  increaseCartQuantity: (_product: ProductProps) => void;
  decreaseCartQuantity: (_product: ProductProps) => void;
  removeFromCart: (_id: Id<'products'>) => void;
  getTotalPrice: () => number;
  getSelectOrderId: (_orderId: Id<'orders'>) => void;
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

export interface CategoryProps {
  name: string;
  slug: string;
}

export interface TagProps {
  name: string;
  slug: string;
}

export interface ProductReviewProps {
  productId: string;
  userId: string;
  rating: number;
  comment?: string;
}

export interface WishListProps {
  productId: string;
  userId: string;
}

export interface ProductProps {
  _id: Id<'products'>;
  name: string;
  slug: string;
  description: string;
  quantity: number;
  shortDescription: string;
  images: string[];
  currentPrice: string;
  previousPrice: string;
  visibility: string;
  categories: CategoryProps[];
  tags: TagProps[];
  stockQuantity: number;
  sku_barCode: string;
  addedById: Id<'users'>;
  date: string;
  shopId: Id<'shops'>;
}

export interface OrderProps {
  id: string;
  tax: string;
  discount: string;
  customer: string;
  subTotal: string;
  orderNumber: string;
  orders: ProductProps[];
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
  shopId: Id<'shops'>;
}

export interface ShopProps {
  _id: Id<'shops'>;
  shopAdmin: Id<'users'>;
  createdBy: Id<'users'>;
  tags: string;
  image: string;
  name: string;
  categories: string;
  subdomain: string;
  customDomain: string;
  favicon: string;
  title: string;
  description: string;
}

export interface ShopRoleProps {
  shopId: Id<'shops'>;
  userId: Id<'users'>;
  role: 'admin' | 'support';
}

export interface UserProps {
  _id: Id<'users'>;
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
  shopRoles: ShopRoleProps[];
}

export interface FileProps {
  folderId?: string;
  storageId: string;
  uploadedBy: string;
  fileUrl: string;
}

export interface FolderProps {
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

export interface ShippingOption {
  type: 'pickup' | 'delivery' | 'shipping';
}

export interface SubVariant {
  value: string;
  quantity: number;
  price: number;
  compareAtPrice: number;
  costPrice: number;
  shippingOptions: ShippingOption[];
  image: string;
}

export interface MainProductVariant {
  optionName: string
  options: SubVariant[];
}

export interface Option {
  id:string,
  optionName: string;
  value: string;
  image: string;
  variants: MainProductVariant[];
}

export interface ProductVariant {
  totalStockQuantity: number;
  options: Option[];
}

export interface SelectedVariant {
  optionName: string;
  value: string;
  subVariant: SubVariant;
}
