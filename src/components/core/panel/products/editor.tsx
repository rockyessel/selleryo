'use client';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { ChangeEvent, useState } from 'react';
import StorageModal from '../../common/modal/storage';
import { ImagePlus } from 'lucide-react';
import { createSlug } from '@/lib/utils/helpers';
import TextEditor from '../../common/editors';

interface Props {
  userId: string;
}

const ProductEditor = ({ userId }: Props) => {
  const productInit = {
    name: '',
    slug: '',
    description: '',
    shortDescription: '',
    images: '',
    currentPrice: '',
    previousPrice: '',
    visibility: '',
    categories: '',
    tags: '',
    stockQuantity: 0,
    sku_barCode: '',
    addedById: '',
    date: '',
    shopId: '',
  };

  const [product, setProduct] = useState(productInit);

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
  );
};

export default ProductEditor;
