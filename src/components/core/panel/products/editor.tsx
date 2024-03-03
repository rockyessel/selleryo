'use client';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { ChangeEvent, SyntheticEvent, useState } from 'react';
import StorageModal from '../../common/modal/storage';
import { ImagePlus } from 'lucide-react';
import { cn, createSlug, getInitials } from '@/lib/utils/helpers';
import TextEditor from '../../common/editors';
import { Button } from '@/components/ui/button';
import { useMutation } from 'convex/react';
import { productMethod } from '@/lib/convex';
import {
  ProductProps,
  ProductVariant,
  SelectedVariant,
  SubVariant,
} from '@/types';
import { Id } from '../../../../../convex/_generated/dataModel';
import { CaretSortIcon } from '@radix-ui/react-icons';
import { Dialog, DialogTrigger } from '@/components/ui/dialog';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { CheckIcon, PlusCircledIcon } from '@radix-ui/react-icons';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from '@/components/ui/command';
import Link from 'next/link';
import {
  mainCategoriesList,
  marketStantardCateogries,
  subCategories,
} from '@/lib/utils/constants';
import { findNodeIndexById } from '../../common/editors/utils/helpers';
import { select } from 'slate';
import { toast } from 'sonner';
import { Separator } from '@/components/ui/separator';

interface Props {
  userId: Id<'users'>;
  exitinPproduct: ProductProps;
}

const ProductEditor = ({ userId, exitinPproduct }: Props) => {
  // const productInit = {
  //   name: `Upcoming Webinar: Using Cypress and Github Actions to Build an Automation Pipeline`,
  //   slug: createSlug(
  //     `Upcoming Webinar: Using Cypress and Github Actions to Build an Automation Pipeline`
  //   ),
  //   shortDescription: `Learn how to revolutionize your software testing process with automated CI/CD using Cypress and GitHub Actions. Join the webinar to explore the benefits of automation, see demos of setup and implementation, and get answers to your questions.`,
  //   description: JSON.stringify(initialValue),
  //   images: `https://cypress-io.ghost.io/blog/content/images/2024/02/Social_Customer-Spotlight_022624.png https://cypress-io.ghost.io/blog/content/images/2024/02/Social_Customer-Spotlight_022624.png https://cypress-io.ghost.io/blog/content/images/2024/02/Social_Customer-Spotlight_022624.png`,
  //   price: '200',
  //   compareAtPrice: '300',
  //   visibility: 'published',
  //   categories: 'Electronics',
  //   tags: 'Laptops Laptop-Case HP-Laptop',
  //   totalStockQuantity: 10,
  //   sku_barCode: 'SKU490340',
  //   addedById: 'jd7dcehxns3xad7d663jctqtxs6m7p8c',
  //   date: new Date().toISOString(),
  //   shopId: 'jn72p8srjdpqdf2g3zpbxadg0s6mb990',
  //   reviews: [
  //     {
  //       productId: 'js7d8gxm1e45yqjan5w8gpexp16matq9',
  //       userId: 'jd7dcehxns3xad7d663jctqtxs6m7p8c',
  //       shopId: 'jn72p8srjdpqdf2g3zpbxadg0s6mb990',
  //       rating: 5,
  //       title: 'Loved it.',
  //       comment: 'I enjoyed using this product',
  //       photos: [
  //         'https://cdn.shopify.com/s/files/1/2303/2711/files/2_e822dae0-14df-4cb8-b145-ea4dc0966b34.jpg?v=1617059123',
  //         'https://expertphotography.b-cdn.net/wp-content/uploads/2018/04/product-photography-tips-2-1.jpg',
  //       ],
  //       wouldRecommend: true,
  //       recommendationCount: 100,
  //     },
  //   ],
  //   isVariantEnabled: true,
  //   variants: [
  //     {
  //       optionName: 'size',
  //       optionsValues: [
  //         {
  //           value: 1,
  //           quantity: 2,
  //           images: [''],
  //           price: '',
  //           compareAtPrice: '',
  //           costPrice: '',
  //           shippingOption: [
  //             { type: 'pickup' },
  //             { type: 'delivery' },
  //             { type: 'shipping' },
  //           ],
  //         },
  //       ],
  //     },
  //     {
  //       optionName: 'color',
  //       optionsValues: [
  //         {
  //           value: 'black',
  //           quantity: 2,
  //         },
  //         {
  //           value: 'yellow',
  //           quantity: 5,
  //         },
  //         {
  //           value: 'blue',
  //           quantity: 3,
  //         },
  //         {
  //           value: 'red',
  //           quantity: 1,
  //         },
  //       ],
  //       images: [''],
  //       price: '',
  //       compareAtPrice: '',
  //       costPrice: '',
  //       shippingOption: [{ type: 'pickup' }, { type: 'delivery' }],
  //     },
  //     {
  //       optionName: 'material',
  //       optionsValues: ['soil', 'plastics', 'wood', 'metal'],
  //       images: [''],
  //       price: '',
  //       compareAtPrice: '',
  //       costPrice: '',
  //       shippingOption: [
  //         { type: 'pickup' },
  //         { type: 'delivery' },
  //         { type: 'shipping' },
  //       ],
  //     },
  //     {
  //       optionName: 'style',
  //       optionsValues: ['paris', 'africa', 'euro', 'japan'],
  //       images: [''],
  //       price: '',
  //       compareAtPrice: '',
  //       costPrice: '',
  //       shippingOption: [
  //         { type: 'pickup' },
  //         { type: 'delivery' },
  //         { type: 'shipping' },
  //       ],
  //     },
  //   ],
  // };

  const productVariant: ProductVariant = {
    // Top level properties
    totalStockQuantity: 100,

    // Options array with nested variants
    options: [
      {
        optionName: 'size',
        value: 'S',
        image:
          'https://target.scene7.com/is/image/Target/GUEST_ecdc8b46-7393-4104-8681-4623390ef41c',
        variants: [
          {
            optionName: 'colors',
            options: [
              {
                value: 'Red',
                quantity: 4,
                price: '2',
                compareAtPrice: '323',
                costPrice: '100',
                shippingOptions: [
                  { type: 'pickup' },
                  { type: 'delivery' },
                  { type: 'shipping' },
                ],
                image:
                  'https://target.scene7.com/is/image/Target/GUEST_ecdc8b46-7393-4104-8681-4623390ef41c',
              },
              {
                value: 'Blue',
                quantity: 1,
                price: '3342',
                compareAtPrice: '323',
                costPrice: '100',
                shippingOptions: [{ type: 'pickup' }, { type: 'delivery' }],
                image:
                  'https://target.scene7.com/is/image/Target/GUEST_ecdc8b46-7393-4104-8681-4623390ef41c',
              },
            ],
          },
          {
            optionName: 'materials',
            options: [
              {
                value: 'Wood',
                quantity: 4,
                price: '23467',
                compareAtPrice: '323',
                costPrice: '100',
                shippingOptions: [
                  { type: 'pickup' },
                  { type: 'delivery' },
                  { type: 'shipping' },
                ],
                image:
                  'https://target.scene7.com/is/image/Target/GUEST_ecdc8b46-7393-4104-8681-4623390ef41c',
              },
              {
                value: 'Metal',
                quantity: 1,
                price: '42',
                compareAtPrice: '323',
                costPrice: '100',
                shippingOptions: [{ type: 'pickup' }, { type: 'delivery' }],
                image:
                  'https://target.scene7.com/is/image/Target/GUEST_ecdc8b46-7393-4104-8681-4623390ef41c',
              },
            ],
          },
        ],
      },
      {
        optionName: 'size',
        value: 'L',
        image:
          'https://target.scene7.com/is/image/Target/GUEST_ecdc8b46-7393-4104-8681-4623390ef41c',
        variants: [
          {
            optionName: 'colors',
            options: [
              {
                value: 'Red',
                quantity: 4,
                price: '1246',
                compareAtPrice: '323',
                costPrice: '100',
                shippingOptions: [
                  { type: 'pickup' },
                  { type: 'delivery' },
                  { type: 'shipping' },
                ],
                image:
                  'https://target.scene7.com/is/image/Target/GUEST_ecdc8b46-7393-4104-8681-4623390ef41c',
              },
              {
                value: 'Blue',
                quantity: 1,
                price: '32',
                compareAtPrice: '323',
                costPrice: '100',
                shippingOptions: [{ type: 'pickup' }, { type: 'delivery' }],
                image:
                  'https://target.scene7.com/is/image/Target/GUEST_ecdc8b46-7393-4104-8681-4623390ef41c',
              },
            ],
          },
        ],
      },
    ],
  };

  const addProduct = useMutation(productMethod.createProduct);

  const [product, setProduct] = useState(exitinPproduct);

  const handleOnChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { target } = event;

    const updatedChange = {
      ...product,
      [target.name]: target.value,
    };

    setProduct(updatedChange);
  };

  const handleSubmission = async (event: SyntheticEvent) => {
    event.preventDefault();
  };

  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedSubCategory, setSelectedSubCatefory] = useState('');

  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const [tagInput, setTagInput] = useState('');
  const [dialogState, setDialogState] = useState(false);

  const [mainOptionField, setMainOptionField] = useState<any>();

  const handleAddTags = (tag: string) => {
    if (selectedTags.includes(tag)) {
      toast.error(`Tag ${tag} is already added.`);
      return;
    }

    setSelectedTags((previousTags) => [...previousTags, tag]);
  };

  const f = {
    options: [{ ...mainOptionField, ...{ vairants: [{}] } }],
  };

  return (
    <div>
      <div>
        <Button
          onClick={() =>
            addProduct({
              ...product,
              isProductOnMarket: true,
            })
          }
        >
          Publish Product
        </Button>
      </div>
      <form onSubmit={handleSubmission} className='flex items-start gap-5'>
        <fieldset className='w-full flex-1  flex flex-col gap-5'>
          <fieldset className=''>
            <fieldset>
              <Label>Name</Label>
              <Input
                onChange={handleOnChange}
                type='text'
                name='name'
                value={product.name}
                placeholder=''
              />
            </fieldset>
            <fieldset>
              <Label>Product URL</Label>
              <Input
                onChange={handleOnChange}
                type='text'
                name='slug'
                value={createSlug(product.slug)}
                placeholder=''
              />
            </fieldset>
            <fieldset>
              <Label>Description</Label>
              <fieldset className='h-[40rem] overflow-y-auto'>
                <TextEditor />
              </fieldset>
            </fieldset>
            <fieldset>
              <Label>Short Description</Label>
              <Input
                name='shortDescription'
                onChange={handleOnChange}
                type='text'
                value={product.shortDescription}
                placeholder=''
              />
            </fieldset>
          </fieldset>

          <fieldset className=''>
            <fieldset className='flex items-start'>
              <fieldset>
                <Label>Current Price</Label>
                <Input
                  onChange={handleOnChange}
                  type='text'
                  name='currentPrice'
                  value={product.currentPrice}
                  placeholder=''
                />
              </fieldset>
              <fieldset>
                <Label>Previous Price</Label>
                <Input
                  onChange={handleOnChange}
                  type='text'
                  name='previousPrice'
                  value={product.previousPrice}
                  placeholder=''
                />
              </fieldset>
            </fieldset>
          </fieldset>

          <fieldset className=''>
            <fieldset>
              <Label>SKU</Label>
              <Input
                onChange={handleOnChange}
                type='text'
                name='sku_barCode'
                value={product.sku_barCode}
                placeholder=''
              />
            </fieldset>
            <fieldset>
              <Label>Stock quantity </Label>
              <Input
                onChange={handleOnChange}
                type='text'
                name='stockQuantity'
                value={product.stockQuantity}
                placeholder=''
              />
            </fieldset>
          </fieldset>

          <fieldset className='rounded-lg border border-gray-200 p-4'>
            <Label>Media</Label>

            <fieldset className='w-full p-10 inline-flex flex-col items-center justify-center border border-gray-200 bg-gray-100 rounded-lg'>
              <ImagePlus />
              <p>{`Drag 'n' drop some images here, or click to select images`}</p>
              <StorageModal />
            </fieldset>
          </fieldset>
        </fieldset>

        <fieldset className='flex flex-col gap-5'>
          <fieldset className='rounded-lg border border-gray-200 p-4'>
            <Label>Visibility </Label>
            <RadioGroup
              name='visibility'
              // @ts-ignore
              onChange={handleOnChange}
              defaultValue='publish'
            >
              <div className='flex items-center space-x-2'>
                <RadioGroupItem value='default' id='r1' />
                <Label htmlFor='r1'>Publish</Label>
              </div>
              <div className='flex items-center space-x-2'>
                <RadioGroupItem value='Schedule' id='r2' />
                <Label htmlFor='r2'>Schedule</Label>
              </div>
              <div className='flex items-center space-x-2'>
                <RadioGroupItem value='Hide' id='r3' />
                <Label htmlFor='r3'>Hide</Label>
              </div>
            </RadioGroup>
          </fieldset>

          <fieldset className='rounded-lg border border-gray-200 p-4'>
            <Label>Tags </Label>
            <Input
              onChange={handleOnChange}
              name='tags'
              type='text'
              value={product.tags}
            />
          </fieldset>

          <fieldset className='rounded-lg border border-gray-200 p-4'>
            <Label>Categories </Label>
            <Input
              name='categories'
              onChange={handleOnChange}
              type='text'
              value={product.categories}
            />
          </fieldset>
        </fieldset>
      </form>

      <fieldset className='border rounded-lg p-2'>
        <div className='flex items-start'>
          <fieldset className='w-full h-full p-1 inline-flex flex-col items-center justify-center border border-gray-200 bg-gray-100 rounded-lg'>
            <ImagePlus strokeWidth={0.5} />
          </fieldset>

          <fieldset className='flex items-start gap-2'>
            <fieldset>
              <Label>Option name</Label>
              <Input type='text' placeholder='Enter main variant name' />
            </fieldset>
            <fieldset>
              <Label>Option Value</Label>
              <Input />
            </fieldset>
          </fieldset>
        </div>

        <Separator />

        <fieldset>
          <Label>Vairant:</Label>

          <fieldset>
            <fieldset>
              <Label>Image</Label>
              <Input type='file' />
            </fieldset>
          </fieldset>
        </fieldset>
      </fieldset>

      {/* Tags Addition */}
      <fieldset>
        <Dialog open>
          <Popover
            open={dialogState}
            onOpenChange={(open) => setDialogState(open)}
          >
            <PopoverTrigger asChild>
              <Button
                variant='outline'
                role='combobox'
                aria-expanded={open}
                aria-label='Select a team'
                className={cn('w-[300px] justify-between')}
              >
                {selectedTags.join(' ') || 'Add tags'}
                <CaretSortIcon className='ml-auto h-4 w-4 shrink-0 opacity-50' />
              </Button>
            </PopoverTrigger>
            <PopoverContent className='w-[300px] p-0'>
              <Input
                type='text'
                onChange={(event) => setTagInput(event.target.value)}
                placeholder='Add tags..'
              />

              <ul className='bg-gray-100 w-full flex flex-col'>
                <li
                  onClick={() => {
                    setTagInput('');

                    handleAddTags(tagInput);
                    setDialogState(false);
                  }}
                >
                  Add tags
                </li>
              </ul>
            </PopoverContent>
          </Popover>
        </Dialog>
      </fieldset>

      {/* Display tags */}
      {selectedTags && (
        <span className='inline-flex items-center gap-2'>
          {selectedTags.map((tag, index) => (
            <span className='bg-gray-500 rounded-lg p-1' key={index}>
              {tag}
            </span>
          ))}
        </span>
      )}

      <Separator />

      {/* Main Category */}
      <fieldset>
        <Dialog open>
          <Popover>
            <PopoverTrigger asChild>
              {/* @ts-ignore */}
              <Button
                variant='outline'
                role='combobox'
                aria-expanded={open}
                aria-label='Select a team'
                className={cn('w-[200px] justify-between')}
              >
                {selectedCategory || 'Pick a category'}
                <CaretSortIcon className='ml-auto h-4 w-4 shrink-0 opacity-50' />
              </Button>
            </PopoverTrigger>
            <PopoverContent className='w-[300px] p-0'>
              <Command>
                <CommandList>
                  <CommandInput placeholder='Search Category...' />
                  <CommandEmpty>No team found.</CommandEmpty>
                  <CommandGroup heading={'Select a category'}>
                    {mainCategoriesList.map((category, index) => (
                      <CommandItem
                        key={index}
                        onSelect={() => {
                          setSelectedCategory(category);
                        }}
                        className='text-sm'
                      >
                        {category}
                        <CheckIcon
                          className={cn(
                            'ml-auto h-4 w-4',
                            selectedCategory === category
                              ? 'opacity-100'
                              : 'opacity-0'
                          )}
                        />
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </CommandList>
              </Command>
            </PopoverContent>
          </Popover>
        </Dialog>
      </fieldset>

      {/* Sub Category Selection */}
      {selectedCategory && (
        <fieldset>
          <Dialog open>
            <Popover>
              <PopoverTrigger asChild>
                {/* @ts-ignore */}
                <Button
                  variant='outline'
                  role='combobox'
                  aria-expanded={open}
                  aria-label='Select a team'
                  className={cn('w-[200px] justify-between')}
                >
                  {selectedSubCategory || 'Pick a sub category'}
                  <CaretSortIcon className='ml-auto h-4 w-4 shrink-0 opacity-50' />
                </Button>
              </PopoverTrigger>
              <PopoverContent className='w-[300px] p-0'>
                <Command>
                  <CommandList>
                    <CommandInput placeholder='Search Category...' />
                    <CommandEmpty>No team found.</CommandEmpty>
                    <CommandGroup heading={'Select a sub category'}>
                      {subCategories(selectedCategory).map(
                        (category, index) => (
                          <CommandItem
                            key={index}
                            onSelect={() => {
                              setSelectedSubCatefory(category);
                            }}
                            className='text-sm'
                          >
                            {category}
                            <CheckIcon
                              className={cn(
                                'ml-auto h-4 w-4',
                                selectedSubCategory === category
                                  ? 'opacity-100'
                                  : 'opacity-0'
                              )}
                            />
                          </CommandItem>
                        )
                      )}
                    </CommandGroup>
                  </CommandList>
                </Command>
              </PopoverContent>
            </Popover>
          </Dialog>
        </fieldset>
      )}
    </div>
  );
};

export default ProductEditor;
