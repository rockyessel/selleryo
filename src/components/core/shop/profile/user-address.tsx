'use client';

import AddAddressBtn from '../actions/add-address-btn';
import AddressCard from '../global/address-card';

interface Props {
  addresses: any[];
}

const UserAddress = ({ addresses }: Props) => {
  return (
    <div className='flex flex-col mx-3'>
      <div className='justify-between flex w-full gap-5'>
        <div className='text-gray-800 text-xl'>Addresses</div>
        <AddAddressBtn actionName='Add' />
      </div>
      <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mt-4'>
        {addresses.length === 0 ? (
          <p>No address added yet.</p>
        ) : (
          addresses.length > 0 &&
          addresses?.map((address, index) => (
            <AddressCard isSelectable={false} address={address} key={index} />
          ))
        )}
      </div>
    </div>
  );
};

export default UserAddress;
