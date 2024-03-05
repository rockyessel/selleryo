'use client';

import NextImage from '@/components/native/next-image';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { SubVariant } from '@/types';
import { ImagePlus, Plus } from 'lucide-react';
import { Fragment } from 'react';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';

interface Props {
  op: SubVariant;
  id: string; // Add id prop
  handleInputChange: (id: string, field: string, value: string) => void; // Add handleInputChange prop
}

const VariantOptionFields = ({ op, id, handleInputChange }: Props) => {
  const fields = [
    { label: 'Option Value', name: 'value' },
    { label: 'Quantity', name: 'quantity' },
    { label: 'Price', name: 'price' },
    { label: 'Compare Price', name: 'compareAtPrice' },
    { label: 'Cost Price', name: 'costPrice' },
    { label: 'Shipping Option', name: 'shippingOptions[0].type' },
    { label: 'image', name: 'image' },
  ];

  return (
    <fieldset>
      <Dialog>
        <DialogTrigger asChild>
          <span className='text-xs cursor-pointer underline inline-flex items-center gap-1'>
            <Plus size={10} /> Add more properties
          </span>
        </DialogTrigger>
        <DialogContent className='sm:max-w-[425px]'>
          <fieldset className='grid grid-cols-2'>
            {fields.map((field) => (
              <Fragment key={field.name}>
                {field.name === 'image' ? (
                  op?.[field.name] === '' ? (
                    <fieldset className='col-span-2 w-full h-16 p-1 inline-flex flex-col items-center justify-center border border-gray-200 bg-gray-100 rounded-lg'>
                      <ImagePlus strokeWidth={0.5} />
                    </fieldset>
                  ) : (
                    <NextImage
                      src={op?.[field.name]}
                      alt={field.name}
                      width={100}
                      height={100}
                    />
                  )
                ) : (
                  <fieldset key={field.name}>
                    <Label>{field.label}:</Label>
                    <Input
                      id={`${id}_${field.name}`}
                      onChange={(e) =>
                        handleInputChange(id, field.name, e.target.value)
                      }
                      name={field.name}
                      className='w-full'
                    />
                  </fieldset>
                )}
              </Fragment>
            ))}
          </fieldset>
        </DialogContent>
      </Dialog>
    </fieldset>
  );
};

export default VariantOptionFields;
