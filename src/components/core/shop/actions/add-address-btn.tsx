'use client';

import { ChangeEvent, SyntheticEvent, useState } from 'react';
import { LocateFixed, Plus } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogHeader,
} from '@/components/ui/dialog';
import { useSession } from 'next-auth/react';

interface Props {
  actionName: string;
}

export const init = {
  email: '',
  addressType: '',
  title: '',
  location: '',
  country: '',
  state: '',
  city: '',
  zip: '',
  streetAddress: '',
};

const AddAddressBtn = ({ actionName }: Props) => {
  const [address, setAddress] = useState(init);
  const { data: session } = useSession();

  // console.log('address: ', address);

  const handleUpdate = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { target } = event;
    if (target.type === 'radio') {
      setAddress((prevValues) => ({
        ...prevValues,
        addressType: target.value,
      }));
    } else {
      setAddress((prevValues) => ({
        ...prevValues,
        [target.name]: target.value,
      }));
    }
  };

  const handleSubmission = async (event: SyntheticEvent) => {
    event.preventDefault();
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          title={actionName}
          className='flex items-center justify-between'
        >
          <Plus size={15} className='text-teal-600' />

          <span className='text-teal-600 text-center text-sm font-bold'>
            {actionName}
          </span>
        </button>
      </DialogTrigger>
      <DialogContent className='w-[50rem]'>
        <DialogHeader className='font-bold inline-flex items-center justify-center text-center'>
          Add New Address
        </DialogHeader>
        <form
          onSubmit={handleSubmission}
          className='w-full flex flex-col gap-4 rounded-xl'
        >
          <fieldset className='flex-col pr-20'>
            <label className='text-gray-600 text-sm font-bold'>Type</label>
            <fieldset className='flex items-center gap-4 mt-3'>
              <fieldset>
                <input
                  name='addressType'
                  type='radio'
                  onChange={handleUpdate}
                  value='Billing'
                  className='border border-gray-300 bg-white flex w-[18px] py-3 h-[18px] flex-col rounded-2xl'
                />
                <span className='text-gray-500 text-sm'>Billing</span>
              </fieldset>
              <fieldset>
                <input
                  name='addressType'
                  type='radio'
                  value='Shipping'
                  onChange={handleUpdate}
                  className='border border-gray-300 bg-white flex w-[18px] py-3 h-[18px] flex-col rounded-2xl'
                />
                <span className='text-gray-500 text-sm'>Shipping</span>
              </fieldset>
            </fieldset>
          </fieldset>
          <fieldset className='w-full'>
            <label className='text-gray-600 text-sm font-bold mt-8'>
              Title
            </label>
            <input
              name='title'
              type='text'
              value={address.title}
              onChange={handleUpdate}
              className='w-full border border-gray-300 outline-none focus:border-teal-600 pl-4 bg-white flex py-3 flex-col mt-2 rounded-md'
            />
          </fieldset>
          <fieldset className='flex flex-col'>
            <label className='text-gray-600 text-sm font-bold'>Location</label>
            <fieldset className='relative flex items-start justify-center w-full h-auto'>
              <LocateFixed className='w-5 text-teal-600 absolute top-0 right-0 mt-4 mr-3' />
              <input
                name='location'
                type='text'
                value={address.location}
                onChange={handleUpdate}
                className='w-full border border-gray-300 outline-none focus:border-teal-600 bg-white pl-4 pr-3.5 py-3.5 rounded-md'
                placeholder='Search location form here'
              />
            </fieldset>
          </fieldset>
          <fieldset className='w-full flex flex-col gap-4'>
            <fieldset className='flex items-center gap-4'>
              <fieldset className='w-full'>
                <label className='text-gray-600 text-sm font-bold'>
                  Country
                </label>
                <input
                  name='country'
                  type='text'
                  value={address.country}
                  onChange={handleUpdate}
                  className='w-full border border-gray-300 outline-none focus:border-teal-600 pl-4 bg-white flex py-3 flex-col rounded-md'
                />
              </fieldset>
              <fieldset className='w-full'>
                <label className='text-gray-600 text-sm font-bold'>State</label>
                <input
                  name='state'
                  type='text'
                  value={address.state}
                  onChange={handleUpdate}
                  className='w-full border border-gray-300 outline-none focus:border-teal-600 pl-4 bg-white flex py-3 flex-col rounded-md'
                />
              </fieldset>
            </fieldset>

            <fieldset className='flex items-center gap-4'>
              <fieldset className='w-full'>
                <label className='text-gray-600 text-sm font-bold'>City</label>
                <input
                  name='city'
                  type='text'
                  value={address.city}
                  onChange={handleUpdate}
                  className='w-full border border-gray-300 outline-none focus:border-teal-600 pl-4 bg-white flex py-3 flex-col rounded-md'
                />
              </fieldset>
              <fieldset className='w-full'>
                <label className='text-gray-600 text-sm font-bold'>ZIP</label>
                <input
                  name='zip'
                  value={address.zip}
                  onChange={handleUpdate}
                  type='text'
                  className='w-full border border-gray-300 outline-none focus:border-teal-600 pl-4 bg-white flex py-3 flex-col rounded-md'
                />
              </fieldset>
            </fieldset>
          </fieldset>
          <fieldset className='flex flex-col gap-2 mt-11'>
            <label className='text-gray-600 text-sm font-bold'>
              Street Address
            </label>
            <textarea
              name='streetAddress'
              value={address.streetAddress}
              onChange={handleUpdate}
              className='border pt-2 border-gray-300 outline-none focus:border-teal-600 pl-4 bg-white h-28 mt-3 rounded-md'
            />
          </fieldset>
          <button
            type='submit'
            className='bg-teal-600 px-5 py-4 rounded-md text-white inline-flex items-center justify-center font-bold'
          >
            Add Address
          </button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddAddressBtn;
