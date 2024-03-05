'use client';

import VariantOptionFields from '@/components/core/panel/products/variant-field';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { generateId } from '@/lib/utils/helpers';
import { MainProductVariant, Option, SubVariant } from '@/types';
import { ImagePlus, Plus } from 'lucide-react';
import { ChangeEvent, Fragment, useState } from 'react';
import { toast } from 'sonner';

const MarketHome = () => {
  const [mainVariant, setMainVariant] = useState<any[]>([]);

  const [mainVariantInput, setMainVariantInput] = useState<Option>({
    id: generateId(),
    image: '',
    optionName: '',
    value: '',
    variants: [],
  });

  interface ProductVariant {
    options: Option[];
  }
  const [productVariants, setProductVariants] = useState<ProductVariant>({
    options: [],
  });

  console.log('productVariants: ', productVariants);

  const handleMainVariantInput = (event: ChangeEvent<HTMLInputElement>) => {
    const updated = {
      ...mainVariantInput,
      [event.target.name]: event.target.value,
    };
    setMainVariantInput(updated);
  };

  const productVariant = {
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

  const initialOption: SubVariant = {
    value: '',
    quantity: 0,
    price: 0,
    compareAtPrice: 0,
    costPrice: 0,
    image: '',
    shippingOptions: [{ type: '' }],
  };

  const [showVaraint, setShowVariant] = useState(false);

  const handleAdd = () => {
    mainVariantInput.id = generateId();
    const updatedOptions = [...productVariants.options, mainVariantInput];

    setProductVariants({ options: updatedOptions });
    setShowVariant(false);
  };

  const handleInputChange = (id: string, field: string, value: string) => {
    // Find the main variant with the matching id
    const mainVariantIndex = productVariants.options.findIndex(
      (variant) => variant.id === id
    );

    // Update the state based on the found main variant
    if (mainVariantIndex !== -1) {
      const updatedVariants = [...productVariants.options];
      const variantToUpdate = updatedVariants[mainVariantIndex];

      // Update the specific variant's field
      variantToUpdate[field] = value;

      // Update the state with the modified variants
      setProductVariants((prev) => ({
        ...prev,
        options: updatedVariants,
      }));
    }
  };

  return (
    <div>
      <button onClick={() => setShowVariant(true)}>Add variant</button>

      {showVaraint && (
        <div className='flex items-start gap-2'>
          <fieldset className='w-16 h-16 p-1 inline-flex flex-col items-center justify-center border border-gray-200 bg-gray-100 rounded-lg'>
            <ImagePlus strokeWidth={0.5} />
          </fieldset>

          <fieldset className='flex items-start gap-2'>
            <fieldset>
              <Label>Option name</Label>
              <Input
                onChange={handleMainVariantInput}
                name='optionName'
                value={mainVariantInput.optionName}
                type='text'
                placeholder='Enter main variant name'
              />
            </fieldset>

            <fieldset>
              <Label>Option Value</Label>
              <Input
                value={mainVariantInput.value}
                onChange={handleMainVariantInput}
                name='value'
              />
            </fieldset>
          </fieldset>

          <fieldset
            onClick={handleAdd}
            className='w-10 h-16 p-1 inline-flex flex-col items-center justify-center border border-gray-200 bg-gray-100 rounded-lg'
          >
            <Plus strokeWidth={0.5} />
          </fieldset>
        </div>
      )}

      <fieldset className='border rounded-lg p-2 max-w-2xl'>
        {productVariants.options.map((op, index) => (
          <Fragment key={index}>
            <div key={index} className='flex items-start gap-2'>
              <fieldset className='w-16 h-16 p-1 inline-flex flex-col items-center justify-center border border-gray-200 bg-gray-100 rounded-lg'>
                <ImagePlus strokeWidth={0.5} />
              </fieldset>
              <div className='w-full flex justify-between items-start'>
                <div className='flex flex-col items-start gap-2'>
                  <p className=''>
                    {op?.optionName}:{' '}
                    <span className='font-medium'>{op?.value}</span>
                  </p>

                  <span className='inline-flex gap-2'>
                    <span className='text-sm text-gray-500'>Variants: </span>

                    {op.variants.length === 0 ? (
                      <VariantOptionFields
                        op={op.variants[0]}
                        id={op.id}
                        handleInputChange={handleInputChange}
                      />
                    ) : (
                      <span className='inline-flex items-center gap-2'>
                        <span className='p-1 text-xs font-medium bg-gray-200 rounded-md'>
                          Color
                        </span>
                        <span className='p-1 text-xs font-medium bg-gray-200 rounded-md'>
                          Material
                        </span>
                        <span className='p-1 text-xs font-medium bg-gray-200 rounded-md'>
                          Styles
                        </span>
                      </span>
                    )}
                  </span>
                </div>

                <Button variant='outline'>Edit</Button>
              </div>
            </div>
          </Fragment>
        ))}

        <fieldset></fieldset>
      </fieldset>
    </div>
  );
};

export default MarketHome;
