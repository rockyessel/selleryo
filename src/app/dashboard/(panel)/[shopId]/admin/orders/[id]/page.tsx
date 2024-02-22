'use client';
import BreadCrumbsMenu from '@/components/common/bread-crumbs';
import Button from '@/components/common/button';
import { generateItemStatusColor } from '@/lib/utils/helpers';
import {
  cardStyles,
  inputStyles,
  layoutStyles,
  textStyles,
} from '@/styles/classStyles';
import clsx from 'clsx';
import { PenSquare } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
const CrumbsData = [
  { label: 'Dashboard', route: '/' },
  { label: 'Orders', route: '/orders' },
  { label: 'Order #9387' },
];
const OrderDetails = () => {
  return (
    <div className='h-full w-full flex flex-col space-y-4 pt-2'>
      {/* Header */}
      <div className={layoutStyles.screen.header}>
        <div className='space-y-1'>
          <BreadCrumbsMenu routes={CrumbsData} />
          <div className='text-neutral-800 text-3xl font-medium leading-9'>
            Order #9387
          </div>
        </div>
        <div className=' overflow-hidden flex justify-between gap-2.5 '>
          <Button
            type='outline'
            label='Delete'
            onClick={() => alert('Import')}
          />
          <Button
            type='main'
            label='Edit'
            onClick={() => alert('New Product')}
          />
        </div>
      </div>

      {/* Main */}
      <div className='p-5'>
        <div className='w-full border-t border-b border-gray-500/20 py-2 divide-x inline-flex items-center gap-2.5'>
          <p className='text-neutral-800 text-sm'>October 7, 2020 at 9:08 pm</p>

          <p className='text-neutral-800 text-sm px-3'>6 items</p>

          <p className='text-neutral-800 text-sm px-3 '>Total $5,882.00</p>

          <p
            className={clsx(
              'text-xs w-fit font-medium px-3 py-1',
              generateItemStatusColor('shipped')
            )}
          >
            Shipped
          </p>
        </div>
        <div className='gap-5 mt-8 flex flex-col lg:flex-row'>
          <div className='flex grow flex-1 flex-col gap-6'>
            {/* Order Lists */}
            <div className={cardStyles.single}>
              <div className='flex items-center justify-between'>
                <h2 className={textStyles.cardSingleTitle}>Items</h2>
              </div>
              <div className=''>
                <table className='w-full'>
                  {/* List */}
                  <tbody>
                    <tr className='border-b py-2 w-full'>
                      <td className='py-8 pt-0'>
                        <div className='flex space-4 gap-4'>
                          <div className='p-4 lg:w-[200px] lg:h-[200px] border'>
                            <Image
                              alt=''
                              priority
                              width={500}
                              height={500}
                              src='https://cdn.builder.io/api/v1/image/assets/TEMP/c6fd951d-2907-418d-88d9-0bc8993f3766?apiKey=331e0e30f65c4a9dafd410e2c2e475a4&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/c6fd951d-2907-418d-88d9-0bc8993f3766?apiKey=331e0e30f65c4a9dafd410e2c2e475a4&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c6fd951d-2907-418d-88d9-0bc8993f3766?apiKey=331e0e30f65c4a9dafd410e2c2e475a4&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/c6fd951d-2907-418d-88d9-0bc8993f3766?apiKey=331e0e30f65c4a9dafd410e2c2e475a4&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/c6fd951d-2907-418d-88d9-0bc8993f3766?apiKey=331e0e30f65c4a9dafd410e2c2e475a4&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c6fd951d-2907-418d-88d9-0bc8993f3766?apiKey=331e0e30f65c4a9dafd410e2c2e475a4&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/c6fd951d-2907-418d-88d9-0bc8993f3766?apiKey=331e0e30f65c4a9dafd410e2c2e475a4&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/c6fd951d-2907-418d-88d9-0bc8993f3766?apiKey=331e0e30f65c4a9dafd410e2c2e475a4&'
                              className='aspect-square object-cover object-center w-full h-full overflow-hidden shrink-0 max-w-full'
                            />
                          </div>
                          <div className='gap-4'>
                            <p className='text-neutral-800 text-xl pt-3 font-semibold whitespace-wrap'>
                              Twin Exhaust Pipe From Brandix Z54
                            </p>
                            <p className='text-sm mt-3'>
                              Price per unit:{' '}
                              <span className='font-semibold'>$849.00</span>
                            </p>
                            <p className='text-sm mt-3'>
                              Quantity: <span className='font-semibold'>1</span>
                            </p>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>

                  {/* Calculation */}
                  <div className='h-4'></div>
                  <tbody className=''>
                    <tr>
                      <td className='pr-3 py-2'>Subtotal</td>
                      <td className='text-right'>$ 5,877.00</td>
                    </tr>
                    <tr>
                      <td className='pr-3 py-2'>Store Credit</td>
                      <td className='text-right'>- $2.00</td>
                    </tr>
                    <tr>
                      <td className='pr-3 py-2'>
                        Shipping
                        <div className='text-gray-600 text-xs'>
                          via FedEx International
                        </div>
                      </td>
                      <td className='text-right'>$2.55</td>
                    </tr>
                  </tbody>
                  <tbody>
                    <tr>
                      <td className='pr-3 py-2'>Total</td>
                      <td className='text-right'>$5880.44</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Transaction */}
            <div className={cardStyles.single}>
              <div className='flex items-center justify-between border-b pb-4'>
                <h2 className={textStyles.cardSingleTitle}>Transactions</h2>
              </div>
              <div className=''>
                <table className='w-full'>
                  <tbody className='divide-y'>
                    <tr className='bg-white py-2'>
                      <td className='pr-3 py-2'>
                        Payment
                        <p className='text-xs text-gray-700'>via PayPal</p>
                      </td>
                      <td className='pr-3 py-2'>October 7, 2020</td>
                      <td className='text-right'>$2,000.00</td>
                    </tr>
                    <tr className='bg-white py-2'>
                      <td className='pr-3 py-2'>
                        Payment
                        <p className='text-xs text-gray-700'>
                          from account balance
                        </p>
                      </td>
                      <td className='pr-3 py-2'>November 2, 2020</td>
                      <td className='text-right'>$ 50.00</td>
                    </tr>
                    <tr className='bg-white py-2'>
                      <td className='pr-3 py-2'>
                        Refund
                        <p className='text-xs text-gray-700'>to PayPal</p>
                      </td>
                      <td className='pr-3 py-2'>December 10, 2020</td>
                      <td className='text-right'>- $ 325.00</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Sidebar Content */}
          <div className='w-[30%] flex flex-col items-stretch'>
            <div className='flex flex-col items-stretch max-md:mt-6 gap-4'>
              <div className={cardStyles.single}>
                <div className='flex items-stretch justify-between gap-5'>
                  <div className='text-neutral-800 text-base font-medium leading-5'>
                    Customer
                  </div>
                  <Link
                    href='/customer-details'
                    className='text-xs text-teal-500 leading-5 whitespace-wrap'
                  >
                    Details
                  </Link>
                </div>
                <div className='flex items-stretch justify-between gap-3 mt-5'>
                  <Image
                    alt=''
                    priority
                    width={500}
                    height={500}
                    src='https://cdn.builder.io/api/v1/image/assets/TEMP/55ee8e3d-a2f9-41a2-99b8-e41519f17878?apiKey=331e0e30f65c4a9dafd410e2c2e475a4&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/55ee8e3d-a2f9-41a2-99b8-e41519f17878?apiKey=331e0e30f65c4a9dafd410e2c2e475a4&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/55ee8e3d-a2f9-41a2-99b8-e41519f17878?apiKey=331e0e30f65c4a9dafd410e2c2e475a4&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/55ee8e3d-a2f9-41a2-99b8-e41519f17878?apiKey=331e0e30f65c4a9dafd410e2c2e475a4&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/55ee8e3d-a2f9-41a2-99b8-e41519f17878?apiKey=331e0e30f65c4a9dafd410e2c2e475a4&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/55ee8e3d-a2f9-41a2-99b8-e41519f17878?apiKey=331e0e30f65c4a9dafd410e2c2e475a4&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/55ee8e3d-a2f9-41a2-99b8-e41519f17878?apiKey=331e0e30f65c4a9dafd410e2c2e475a4&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/55ee8e3d-a2f9-41a2-99b8-e41519f17878?apiKey=331e0e30f65c4a9dafd410e2c2e475a4&'
                    className='aspect-square object-contain object-center w-10 overflow-hidden shrink-0 max-w-full'
                  />
                  <div className='self-center flex grow basis-[0%] flex-col items-stretch my-auto'>
                    <div className=' text-neutral-800 text-sm font-medium leading-5 whitespace-nowrap'>
                      Jessica Moore
                    </div>
                    <div className=' text-gray-500 text-sm leading-5 whitespace-nowrap mt-1'>
                      This is a first order
                    </div>
                  </div>
                </div>
              </div>
              <div className={cardStyles.single}>
                <div className='flex items-stretch justify-between gap-5'>
                  <div className='text-neutral-800 text-base font-medium leading-5'>
                    Contact person
                  </div>
                </div>
                <div className=' text-neutral-800 text-sm leading-5 whitespace-nowrap mt-4'>
                  Jessica Moore
                </div>
                <div className=' text-teal-500 text-sm leading-5 whitespace-nowrap mt-1.5'>
                  moore@example.com
                </div>
                <div className=' text-gray-500 text-sm leading-5 whitespace-nowrap'>
                  +38 (094) 730-24-25
                </div>
              </div>
              <div className={cardStyles.single}>
                <div className='flex items-stretch justify-between gap-5'>
                  <div className=' text-neutral-800 text-base font-medium leading-5'>
                    Shipping Address
                  </div>
                </div>
                <div className=' text-neutral-800 text-sm leading-5 mt-4'>
                  Jessica Moore
                  <br />
                  Random Federation
                  <br />
                  115302, Accra Ghana
                  <br />
                  ul. Spintex, 15-2-178
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
