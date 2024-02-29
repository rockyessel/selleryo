'use client';

import { UploadCloud } from 'lucide-react';
import Image from 'next/image';
import { SyntheticEvent, useState } from 'react';

interface Props {
  session: any;
}

const UserProfile = ({ session }: Props) => {
  const [bio, setBio] = useState('');
  const [name, setName] = useState('');

  // console.log('session: ', session);

  const handleSubmission = async (event: SyntheticEvent) => {
    event.preventDefault();
  };

  if (session?.user) {
    const { user } = session;
    return (
      <form
        onSubmit={handleSubmission}
        className='shadow bg-white flex flex-col  py-8 rounded-md'
      >
        <div className='flex flex-col  px-8 max-md:px-5'>
          {user.image === '' ? (
            <label className='justify-center items-center border-gray-300 flex flex-col px-5 py-8 rounded-md border-2 border-dashed'>
              <fieldset className='flex  flex-col '>
                <UploadCloud
                  size={38}
                  className='aspect-[1.37] object-contain object-center w-[41px] overflow-hidden self-center max-w-full'
                />
                <input type='file' className='w-0 h-0' />
                <label className='mt-5'>
                  <span className='text-teal-600'>Upload an image</span>{' '}
                  <span className='text-gray-'>or drag and drop</span>
                </label>
                <p className='text-gray-500 text-center text-xs leading-[133%] self-center'>
                  PNG, JPG
                </p>
              </fieldset>
            </label>
          ) : (
            <Image
              priority
              height={100}
              width={100}
              src={user.image!}
              alt={name}
            />
          )}
          <fieldset className=' flex flex-col mt-10'>
            <label className='text-gray-600 text-sm font-bold leading-[100%]'>
              Name
            </label>
            <input
              value={user.name! || name}
              onChange={(event) => setName(event.target.value)}
              type='text'
              placeholder='Customer'
              className='text-gray-800 text-sm border border-gray-300 bg-white outline-none focus:border-teal-600 mt-3 px-4 py-4 rounded-md border-solid'
            />
          </fieldset>
          {/* <fieldset className=' flex flex-col mt-6'>
            <label className='text-gray-600 text-sm font-bold leading-[100%]'>
              Bio
            </label>
            <textarea
              value={bio}
              onChange={(event) => setBio(event.target.value)}
              placeholder='A little about yourself'
              className='px-4 py-4 border border-gray-300 bg-white outline-none focus:border-teal-600 flex shrink-0 h-[106px] flex-col mt-3 rounded-md border-solid'
            />
          </fieldset> */}
        </div>
        <button
          type='submit'
          className='text-white text-center text-base font-bold leading-[100%] justify-center  bg-teal-600 w-[79px] max-w-full mr-8 mt-6 px-5 py-4 rounded-md self-end max-md:mr-2.5 max-md:px-px'
        >
          Save
        </button>
      </form>
    );
  }
};

export default UserProfile;
