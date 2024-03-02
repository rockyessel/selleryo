'use client';

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
import { CartContextProps, ProductProps, ResObj } from '@/types';
import { TableColumnHeader } from '@/components/core/panel/table/column-header';
import { TableRowActions } from '@/components/core/panel/table/row-actions';

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
  addedById: 'user123',
  date: '2024-02-22',
  shopId: 'shop123',
};

export const sampleOrderData = {
  tax: '5.00',
  discount: '10.00',
  customer: 'user456',
  subTotal: '100.00',
  orderNumber: 'ORD123456',
  orders: [sampleProductData, sampleProductData],
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
  shopId: 'shop123',
};

export const errorRes: ResObj<null> = {
  msg: '',
  success: false,
  data: null,
};

export const cartContextInitValues: CartContextProps = {
  getItemQuantity: (_id): number => 0,
  increaseCartQuantity: (_product): void => {},
  decreaseCartQuantity: (_product): void => {},
  removeFromCart: (_id): void => {},
  getTotalPrice: (): number => 0,
  getSelectOrderId: (_orderId): void => {},
  orderId: '',
  cartQuantity: 0,
  cartItems: [],
  handleSelection: (_address): void => {},
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
    label: 'Support',
    value: 'upport',
    icon: ArrowRightIcon,
  },
  {
    label: 'Admin',
    value: 'admin',
    icon: ArrowUpIcon,
  },
];

export const col = (shopId: string) => {
  const columns: ColumnDef<ProductProps>[] = [
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
      cell: ({ row }) => row && <>Hello</>,
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

        // console.log('role: ', role);

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

export const marketStantardCateogries = [
  {
    category: 'Electronics',
    subcategories: [
      'Smartphones & Accessories',
      'Laptops & Computers',
      'Audio & Headphones',
      'Cameras & Photography',
      'Wearable Technology',
    ],
  },
  {
    category: 'Outdoor Living & Garden',
    subcategories: ['Lawn & Garden', 'Planters', 'Floor Planters'],
  },
  {
    category: 'Fashion',
    subcategories: [
      "Men's Clothing",
      "Women's Clothing",
      'Shoes & Footwear',
      'Accessories (Bags, Hats, Sunglasses)',
      'Jewelry & Watches',
    ],
  },
  {
    category: 'Home & Furniture',
    subcategories: [
      'Furniture',
      'Bedding & Linens',
      'Home Decor',
      'Kitchen & Dining',
      'Appliances',
    ],
  },
  {
    category: 'Beauty & Personal Care',
    subcategories: [
      'Skincare',
      'Haircare',
      'Makeup & Cosmetics',
      'Fragrances',
      'Personal Hygiene',
    ],
  },
  {
    category: 'Sports & Outdoors',
    subcategories: [
      'Exercise & Fitness',
      'Outdoor Recreation',
      'Sports Equipment',
      'Activewear',
      'Camping & Hiking',
    ],
  },
  {
    category: 'Toys & Games',
    subcategories: [
      'Action Figures & Toys',
      'Board Games & Puzzles',
      'Educational Toys',
      'Outdoor Play',
      'Video Games & Consoles',
    ],
  },
  {
    category: 'Books & Stationery',
    subcategories: [
      'Fiction & Literature',
      'Non-fiction',
      "Children's Books",
      'Office Supplies',
      'Writing Instruments',
    ],
  },
  {
    category: 'Health & Wellness',
    subcategories: [
      'Vitamins & Supplements',
      'Health Monitors',
      'Wellness & Relaxation',
      'Medical Supplies',
    ],
  },
  {
    category: 'Automotive',
    subcategories: [
      'Car Accessories',
      'Tools & Equipment',
      'Tires & Wheels',
      'Automotive Parts',
    ],
  },
  {
    category: 'Jewelry',
    subcategories: [
      'Necklaces & Pendants',
      'Earrings',
      'Bracelets & Bangles',
      'Rings',
      'Jewelry Sets',
    ],
  },
  {
    category: 'Pets',
    subcategories: [
      'Pet Food & Treats',
      'Pet Care & Grooming',
      'Pet Toys',
      'Pet Beds & Furniture',
    ],
  },
  {
    category: 'Baby & Kids',
    subcategories: [
      'Baby Clothing',
      'Diapers & Wipes',
      'Baby Gear',
      'Toys & Games for Kids',
    ],
  },
  {
    category: 'Grocery & Gourmet',
    subcategories: [
      'Pantry Staples',
      'Snacks & Sweets',
      'Beverages',
      'Organic & Natural Foods',
    ],
  },
  {
    category: 'Art & Crafts',
    subcategories: [
      'Painting & Drawing Supplies',
      'Craft Kits',
      'Sculpting & Modeling',
      'Printmaking',
    ],
  },
  {
    category: 'Electrical Appliances',
    subcategories: [
      'Kitchen Appliances',
      'Home Appliances',
      'Personal Care Appliances',
      'Smart Home Devices',
    ],
  },
];

export const mimeTypes = [
  'deb',
  'rpm',
  'app',
  'ipa',
  'dmg',
  'msi',
  'rs',
  'c',
  'cpp',
  'cs',
  'java',
  'py',
  'js',
  'rb',
  'php',
  'swift',
  'go',
  'rust',
  'ts',
  'html',
  'css',
  'json',
  'xml',
  'sh',
  'pl',
  'kt',
  'lua',
  'objc',
  'ps1',
  'sql',
  'vb',
  'cr',
  'ex',
  'f90',
  'ml',
  'groovy',
  'puppet',
  'matlab',
  'r',
  'scala',
  'haskell',
  'dart',
  'erlang',
  'julia',
  'perl',
  'kotlin',
  'lisp',
  'ada',
  'pro',
  'cob',
  'scm',
  'e',
  'awk',
  'ahk',
  'purs',
  'elm',
  're',
  'crystal',
  'groovy',
  'julia',
  'mips',
  'ps',
  'rkt',
  'lua',
  'vb',
  'rexx',
  'hack',
  'abap',
  'elixir',
  'dylan',
  'factor',
  'forth',
  'io',
  'j',
  'nim',
  'oz',
  'pli',
  'sather',
  'vhdl',
  'x10',
  'bal',
  'bef',
  'chpl',
  'd',
  'hx',
  'ttf',
  'otf',
  'woff',
  'woff2',
  'eot',
  'svg',
  'pfa',
  'pfb',
  'ps',
  'zip',
  'rar',
  '7z',
  'tar',
  'gz',
  'bz2',
  'xz',
  'lz',
  'Z',
  'lha',
  'lzh',
  'cab',
  'iso',
  'gltf',
  'glb',
];

export const assignedMimeTypes: { [key: string]: string } = {
  zip: 'application/zip',
  rar: 'application/x-rar-compressed',
  '7z': 'application/x-7z-compressed',
  tar: 'application/x-tar',
  gz: 'application/gzip',
  gltf: 'model/gltf+json',
  glb: 'model/gltf-binary',
  bz2: 'application/x-bzip2',
  xz: 'application/x-xz',
  lz: 'application/x-lzip',
  Z: 'application/x-compress',
  lha: 'application/x-lha',
  lzh: 'application/x-lha',
  cab: 'application/vnd.ms-cab-compressed',
  iso: 'application/x-iso9660-image',
  ttf: 'application/font-sfnt',
  otf: 'application/font-sfnt',
  woff: 'font/woff',
  woff2: 'font/woff2',
  eot: 'application/vnd.ms-fontobject',
  svg: 'font/svg',
  pfa: 'application/x-font-type1',
  pfb: 'application/x-font-type1',
  ps: 'application/postscript',
  deb: 'application/vnd.debian.binary-package',
  rpm: 'application/x-rpm',
  app: 'application/octet-stream',
  ipa: 'application/octet-stream',
  dmg: 'application/x-apple-diskimage',
  msi: 'application/x-msdownload',
  xls: 'application/vnd.ms-excel',
  xlsx: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  doc: 'application/msword',
  docx: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document ',
  ppt: 'application/vnd.ms-powerpoint',
  pptx: 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
  pdf: 'application/pdf',
  rs: 'text/x-rustsrc',
  c: 'text/x-csrc',
  cpp: 'text/x-c++src',
  cs: 'text/x-csharp',
  java: 'text/x-java-source',
  py: 'text/x-python',
  js: 'text/javascript',
  rb: 'text/x-ruby',
  php: 'text/x-php',
  swift: 'text/x-swift',
  go: 'text/x-go',
  rust: 'text/x-rustsrc',
  ts: 'text/typescript',
  html: 'text/html',
  css: 'text/css',
  json: 'text/json',
  xml: 'text/xml',
  sh: 'text/x-sh',
  pl: 'text/x-perl',
  kt: 'text/x-kotlin',
  lua: 'text/x-lua',
  objc: 'text/x-objectivec',
  ps1: 'text/x-powershell',
  sql: 'text/sql',
  cr: 'text/x-crystal',
  ex: 'text/x-elixir',
  f90: 'text/x-fortran',
  ml: 'text/x-ocaml',
  groovy: 'text/x-groovy',
  puppet: 'text/x-puppet',
  matlab: 'text/matlab',
  r: 'text/x-rsrc',
  scala: 'text/x-scala',
  haskell: 'text/x-haskell',
  dart: 'text/dart',
  erlang: 'text/x-erlang',
  julia: 'text/julia',
  perl: 'text/perl',
  kotlin: 'text/x-kotlin',
  lisp: 'text/x-lisp',
  ada: 'text/x-ada',
  pro: 'text/x-prolog',
  cob: 'text/x-cobol',
  scm: 'text/x-scheme',
  e: 'text/x-eiffel',
  awk: 'text/x-awk',
  ahk: 'text/x-autohotkey',
  purs: 'text/x-purescript',
  elm: 'text/x-elm',
  re: 'text/x-reasonml',
  crystal: 'text/x-crystal',
  mips: 'text/x-mips',
  rkt: 'text/x-racket',
  vb: 'text/x-vb',
  rexx: 'text/rexx',
  hack: 'text/x-hack',
  abap: 'text/plain',
  elixir: 'text/x-elixir',
  dylan: 'text/x-dylan',
  factor: 'text/x-factor',
  forth: 'text/x-forth',
  io: 'text/x-io',
  j: 'text/plain',
  nim: 'text/x-nim',
  oz: 'text/x-oz',
  pli: 'text/x-pli',
  sather: 'text/plain',
  vhdl: 'text/x-vhdl',
  x10: 'text/x-x10',
  bal: 'text/plain',
  bef: 'text/plain',
  chpl: 'text/x-chapel',
  d: 'text/x-d',
  hx: 'text/plain',
};
