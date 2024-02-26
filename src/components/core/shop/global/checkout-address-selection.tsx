'use client';

import React, { Fragment } from 'react';
import AddAddressBtn from '../actions/add-address-btn';
import AddressCard from './address-card';

interface Props {
  addresses: any[];
}

const CheckoutAddressSelection = ({ addresses }: Props) => {
  return (
    <Fragment>
      {/* Billing Address */}
      <div className='shadow-sm bg-white flex flex-col p-5'>
        <div className='flex w-full justify-between gap-5'>
          <p className='inline-flex items-center gap-2'>
            <span className='text-white text-xl bg-teal-600 p-2 w-10 h-10 text-center rounded-full'>
              2
            </span>
            <span className='text-gray-800 text-xl font-semibold'>
              Billing Address
            </span>
          </p>
          <AddAddressBtn actionName='Add' />
        </div>
        <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mt-4'>
          {addresses.length === 0 ? (
            <p>No address added yet.</p>
          ) : (
            addresses.length > 0 &&
            addresses?.map(
              (address, index) =>
                address.addressType === 'Billing' && (
                  <AddressCard
                    isSelectable={true}
                    address={address}
                    key={index}
                  />
                )
            )
          )}
        </div>
      </div>

      {/* Shipping Address */}
      <div className='shadow-sm bg-white flex flex-col p-5'>
        <div className='flex w-full justify-between gap-5'>
          <p className='inline-flex items-center gap-2'>
            <span className='text-white text-xl bg-teal-600 p-2 w-10 h-10 text-center rounded-full'>
              3
            </span>
            <span className='text-gray-800 text-xl font-semibold'>
              Shipping Address
            </span>
          </p>
          <AddAddressBtn actionName='Add' />
        </div>

        <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mt-4'>
          {addresses.length === 0 ? (
            <p>No address added yet.</p>
          ) : (
            addresses.length > 0 &&
            addresses?.map(
              (address, index) =>
                address.addressType === 'Shipping' && (
                  <AddressCard
                    isSelectable={true}
                    address={address}
                    key={index}
                  />
                )
            )
          )}
        </div>
      </div>
    </Fragment>
  );
};

export default CheckoutAddressSelection;
