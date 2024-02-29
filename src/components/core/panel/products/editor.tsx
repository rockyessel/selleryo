'use client';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { ChangeEvent, useState } from 'react';
import StorageModal from '../../common/modal/storage';
import { ImagePlus } from 'lucide-react';
import { createSlug } from '@/lib/utils/helpers';
import TextEditor from '../../common/editors';
import { initialValue } from '../../common/editors/utils/constants';
import { Button } from '@/components/ui/button';
import { useMutation } from 'convex/react';
import { productMethod } from '@/lib/convex';
import { ProductProps } from '@/types';
import { Id } from '../../../../../convex/_generated/dataModel';

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
  //   currentPrice: '200',
  //   previousPrice: '300',
  //   visibility: 'published',
  //   categories: 'Electronics',
  //   tags: 'Laptops Laptop-Case HP-Laptop',
  //   stockQuantity: 10,
  //   sku_barCode: 'SKU490340',
  //   addedById: 'jd7dcehxns3xad7d663jctqtxs6m7p8c',
  //   date: new Date().toISOString(),
  //   shopId: 'jn72p8srjdpqdf2g3zpbxadg0s6mb990',
  // };

  //  const reviews = [
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
  //     },
  //   ];

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

  return (
    <div>
      <div>
        <Button onClick={() => addProduct({ ...product })}>
          Publish Product
        </Button>
      </div>
      <form className='flex items-start gap-5'>
        <fieldset className='w-full flex-1  flex flex-col gap-5'>
          <fieldset className='rounded-lg border border-gray-200 p-4'>
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
              <TextEditor />
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

          <fieldset className='rounded-lg border border-gray-200 p-4'>
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

          <fieldset className='rounded-lg border border-gray-200 p-4'>
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
            <Label>Image</Label>

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
    </div>
  );
};

export default ProductEditor;
