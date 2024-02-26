'use client'


// TypeScript users only add this t'code

import { Product } from '@/types';
import { proxy } from 'valtio';
import {
  ArrowDownIcon,
  ArrowRightIcon,
  ArrowUpIcon,
  CircleIcon,
  QuestionMarkCircledIcon,
  StopwatchIcon,
} from '@radix-ui/react-icons';


import { Badge } from '@/components/ui/badge';
import moment from 'moment';

import { Checkbox } from '@radix-ui/react-checkbox';
import { ColumnDef } from '@tanstack/react-table';

import { ResObj } from '@/types';
import { TableColumnHeader } from '@/components/core/panel/table/column-header';
import { TableRowActions } from '@/components/core/panel/table/row-actions';

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



export const labels = [
  {
    value: 'bug',
    label: 'Bug',
  },
  {
    value: 'feature',
    label: 'Feature',
  },
  {
    value: 'documentation',
    label: 'Documentation',
  },
];

export const statuses = [
  {
    value: 'accepted',
    label: 'Accepted',
    icon: QuestionMarkCircledIcon,
  },
  {
    value: 'pending',
    label: 'Pending',
    icon: CircleIcon,
  },
  {
    value: 'denied',
    label: 'Denied',
    icon: StopwatchIcon,
  },
];

export const roles = [
  {
    label: 'collaborator',
    value: 'collaborator',
    icon: ArrowDownIcon,
  },
  {
    label: 'editor',
    value: 'editor',
    icon: ArrowRightIcon,
  },
  {
    label: 'admin',
    value: 'admin',
    icon: ArrowUpIcon,
  },
];

export const col = (shopId: string) => {
  const columns: ColumnDef<Product>[] = [
    {
      id: 'select',
      header: ({ table }) => (
        <Checkbox
          checked={
            table.getIsAllPageRowsSelected() ||
            (table.getIsSomePageRowsSelected() && 'indeterminate')
          }
          onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
          aria-label='Select all'
          className='translate-y-[2px]'
        />
      ),
      cell: ({ row }) => (
        <Checkbox
          checked={row?.getIsSelected()}
          onCheckedChange={(value) => row?.toggleSelected(!!value)}
          aria-label='Select row'
          className='translate-y-[2px]'
        />
      ),
      enableSorting: false,
      enableHiding: false,
    },
    {
      id: 'InvitedBy',
      accessorKey: 'invitedBy',
      header: ({ column }) => (
        <TableColumnHeader column={column} title='Inviters' />
      ),
      cell: ({ row }) =>
        row && <>Hello</>,
      enableSorting: false,
      enableHiding: false,
    },
    {
      id: 'invitee',
      accessorKey: 'invitee',
      header: ({ column }) => (
        <TableColumnHeader column={column} title='Invitee' />
      ),
      cell: ({ row }) => (
        <div className='w-[80px]'>{row.getValue('invitee')}</div>
      ),
      enableSorting: false,
      enableHiding: false,
    },
    {
      id: 'Sent on',
      accessorKey: 'createdAt',
      header: ({ column }) => (
        <TableColumnHeader column={column} title='Sent on' />
      ),
      cell: ({ row }) => (
        <div className='w-[80px]'>
          {moment(row.getValue('createdAt')).format('MMM Do YY')}
        </div>
      ),
      enableSorting: false,
      enableHiding: false,
    },
    {
      id: 'Invitee status',
      accessorKey: 'isOpened',
      header: ({ column }) => (
        <TableColumnHeader column={column} title='Invitee status' />
      ),
      cell: ({ row }) => {
        return (
          <div className='flex space-x-2'>
            <Badge variant='outline'>
              {row.getValue('isOpened') ? 'Opened' : 'Not opened'}
            </Badge>
          </div>
        );
      },
    },
    {
      id: 'status',
      accessorKey: 'status',
      header: ({ column }) => (
        <TableColumnHeader column={column} title='Status' />
      ),
      cell: ({ row }) => {
        const status = statuses.find(
          (status) => status.value === row.getValue('status')
        );

        if (!status) {
          return null;
        }

        return (
          <div className='flex w-[100px] items-center'>
            {status.icon && (
              <status.icon className='mr-2 h-4 w-4 text-muted-foreground' />
            )}
            <span>{status.label}</span>
          </div>
        );
      },
      filterFn: (row, id, value) => {
        return value.includes(row.getValue(id));
      },
    },
    {
      id: 'role',
      accessorKey: 'givenRole',
      header: ({ column }) => (
        <TableColumnHeader column={column} title='Role' />
      ),
      cell: ({ row }) => {
        const role = roles.find(
          (role) => role.value === row.getValue('givenRole')
        );

        console.log('role: ', role);

        if (!role) {
          return null;
        }

        return (
          <div className='flex items-center'>
            {role.icon && (
              <role.icon className='mr-2 h-4 w-4 text-muted-foreground' />
            )}
            <span>{role.label}</span>
          </div>
        );
      },
      filterFn: (row, id, value) => {
        return value.includes(row.getValue(id));
      },
    },
    {
      id: 'actions',
      cell: ({ row }) => <TableRowActions shopId={shopId} row={row} />,
    },
  ];

  return columns;
};

export const INVITATION_STATUS = {
  PENDING: 'pending',
  ACCEPTED: 'accepted',
  REJECTED: 'rejected',
};
