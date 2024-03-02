'use client';

import React, { useState } from 'react';

const ShopsPage = () => {
  return <ProductPage />;
};

export default ShopsPage;

interface VariantOption {
  value: string | number;
  quantity: number;
  images: string[];
}

interface ShippingOption {
  type: 'pickup' | 'delivery' | 'shipping';
}

interface Variant {
  optionName: string;
  optionsValues: VariantOption[];
  images: string[];
  price: string;
  compareAtPrice: string;
  costPrice: string;
  shippingOptions: ShippingOption[];
}

interface Product {
  variants: Variant[];
}

const ProductPage = () => {
  const [selectedVariant, setSelectedVariant] = useState<Variant | null>(null);
  const [selectedOptionValues, setSelectedOptionValues] = useState<
    Record<string, string | number>
  >({});

  const handleOptionChange = (optionName: string, value: string | number) => {
    setSelectedOptionValues((prevValues) => ({
      ...prevValues,
      [optionName]: value,
    }));
  };

  const handleVariantSelect = () => {
    const matchingVariant = product.variants.find((variant) =>
      variant.optionsValues.every(
        (option) => selectedOptionValues[variant.optionName] === option.value
      )
    );

    setSelectedVariant(matchingVariant || null);
  };

  const product: Product = {
    variants: [
      {
        optionName: 'size',
        optionsValues: [
          {
            value: 'L',
            quantity: 2,
            images: [''],
            price: '',
            compareAtPrice: '',
            costPrice: '',
            shippingOptions: [
              { type: 'pickup' },
              { type: 'delivery' },
              { type: 'shipping' },
            ],
          },
        ],
        images: [''],
        price: '',
        compareAtPrice: '',
        costPrice: '',
        shippingOptions: [{ type: 'pickup' }, { type: 'delivery' }],
      },
      {
        optionName: 'color',
        optionsValues: [
          { value: 'black', quantity: 2 },
          { value: 'yellow', quantity: 5 },
          { value: 'blue', quantity: 3 },
          { value: 'red', quantity: 1 },
        ],
        images: [''],
        price: '',
        compareAtPrice: '',
        costPrice: '',
        shippingOptions: [{ type: 'pickup' }, { type: 'delivery' }],
      },
      {
        optionName: 'material',
        optionsValues: ['soil', 'plastics', 'wood', 'metal'].map((value) => ({
          value,
          quantity: 0,
          images: [''],
          price: '',
          compareAtPrice: '',
          costPrice: '',
          shippingOptions: [
            { type: 'pickup' },
            { type: 'delivery' },
            { type: 'shipping' },
          ],
        })),
        images: [''],
        price: '',
        compareAtPrice: '',
        costPrice: '',
        shippingOptions: [
          { type: 'pickup' },
          { type: 'delivery' },
          { type: 'shipping' },
        ],
      },
      {
        optionName: 'style',
        optionsValues: ['paris', 'africa', 'euro', 'japan'].map((value) => ({
          value,
          quantity: 0,
          images: [''],
          price: '',
          compareAtPrice: '',
          costPrice: '',
          shippingOptions: [
            { type: 'pickup' },
            { type: 'delivery' },
            { type: 'shipping' },
          ],
        })),
        images: [''],
        price: '',
        compareAtPrice: '',
        costPrice: '',
        shippingOptions: [
          { type: 'pickup' },
          { type: 'delivery' },
          { type: 'shipping' },
        ],
      },
    ],
  };
  return (
    <div>
      <h1>Product Page</h1>

      {/* Render dropdowns for each variant option */}
      {product.variants.map((variant) => (
        <div key={variant.optionName}>
          <label>{`Select ${variant.optionName}:`}</label>
          <select
            onChange={(e) =>
              handleOptionChange(variant.optionName, e.target.value)
            }
          >
            <option value=''>Select</option>
            {variant.optionsValues.map((option) => (
              <option key={option.value} value={option.value}>
                {option.value}
              </option>
            ))}
          </select>
        </div>
      ))}

      <button onClick={handleVariantSelect}>Select Variant</button>

      {/* Display selected variant data */}
      {selectedVariant && (
        <div>
          <h2>Selected Variant</h2>
          <p>Price: {selectedVariant.price}</p>
          <p>Compare At Price: {selectedVariant.compareAtPrice}</p>
          <p>Cost Price: {selectedVariant.costPrice}</p>
          <p>
            Quantity:{' '}
            {
              selectedVariant.optionsValues.find(
                (option) =>
                  option.value ===
                  selectedOptionValues[selectedVariant.optionName]
              )?.quantity
            }
          </p>
          <p>
            Shipping Options:{' '}
            {selectedVariant.shippingOptions
              .map((option) => option.type)
              .join(', ')}
          </p>
        </div>
      )}
    </div>
  );
};

