import { ResObj } from '@/types';

// Sample data for ProductSchema
export const sampleProductData = {
  name: 'Sample Product',
  slug: 'sample-product',
  description: 'This is a sample product description.',
  shortDescription: 'Sample short description.',
  images: ['image1.jpg', 'image2.jpg'],
  currentPrice: '50.00',
  previousPrice: '60.00',
  visibility: 'public',
  categories: ['Electronics', 'Gadgets'],
  stockQuantity: 100,
  sku_barCode: 'ABC123',
  addedById: 'user123', // Replace with a valid user ID
  date: '2024-02-22',
  shopId: 'shop123', // Replace with a valid shop ID
};

// Sample data for OrderSchema
export const sampleOrderData = {
  tax: '5.00',
  discount: '10.00',
  customer: 'user456', // Replace with a valid user ID
  subTotal: '100.00',
  orderNumber: 'ORD123456',
  orders: [sampleProductData, sampleProductData], // Array of sample product data
  shippingCharge: '8.00',
  billingAddressId: 'address123',
  shippingAddressId: 'address456',
  paymentMethod: 'Credit Card',
  deliveryFee: '5.00',
  total: 113.0,
  orderId: 'order456',
  totalItems: 2,
  date: '2024-02-22',
  orderStatus: 'Pending',
  paymentStatus: 'Paid',
  shopId: 'shop123', // Replace with a valid shop ID
};

export const errorRes: ResObj<null> = {
  msg: '',
  success: false,
  data: null,
};

export const cartContextInitValues = {
  getItemQuantity: (_id: number): number => 0,
  increaseCartQuantity: (_product: any): void => {},
  decreaseCartQuantity: (_product: any): void => {},
  removeFromCart: (_id: number): void => {},
  getTotalPrice: (): number => 0,
  getSelectOrderId: (_orderId: string): void => {},
  orderId: '',
  cartQuantity: 0,
  cartItems: [],
  handleSelection: (_address: any): void => {},
  selectedBillingAddress: {},
  selectedShippingAddress: {},
  setSchedule: () => {},
  schedule: {},
  paymentMethod: '',
  setPaymentMethod: () => {},
};
