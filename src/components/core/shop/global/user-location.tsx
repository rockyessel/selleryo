'use client';

import { FormHTMLAttributes, useState } from 'react';
import { MapPin, ChevronDown, LocateFixed, ChevronUp } from 'lucide-react';
import { cn } from '@/lib/utils/helpers';

interface Props extends FormHTMLAttributes<HTMLFormElement> {
  className?: string;
  isSticky?: boolean;
  setIsSticky?: any;
}

const UserLocation = (props: Props) => {
  const [showInputLocation, setShowInputLocation] = useState(false);

  const { className, isSticky, setIsSticky, ...rest } = props;

  return (
    <form
      {...rest}
      className={cn(
        'items-center gap-1 text-base font-regular flex-shrink-0 flex-col ',
        className
      )}
    >
      <fieldset
        onClick={() => {
          setShowInputLocation((preState) => !preState);
          setIsSticky((preState: boolean) => !preState);
        }}
        className='inline-flex items-center flex-shrink-0 border rounded-md p-2 py-1.5'
      >
        <MapPin className='text-teal-600 w-4 h-4 mr-2' strokeWidth={2} />
        <label className='text-sm'>
          <span
            className={cn(
              'text-white text-center my-auto',
              isSticky ? 'text-black' : ''
            )}
          >
            Your location
          </span>
        </label>
        {showInputLocation ? (
          <ChevronUp className='text-teal-600 w-4 h-4 ml-3' strokeWidth={2} />
        ) : (
          <ChevronDown className='text-teal-600 w-4 h-4 ml-3' strokeWidth={2} />
        )}
      </fieldset>

      {showInputLocation && (
        <fieldset className='w-full right-0 left-0 top-[3.5rem] absolute bottom-0 flex flex-col h-40'>
          <fieldset
            className={cn(
              'w-full h-20 rounded-t-none rounded-b-lg py-4 px-4 bg-white',
              isSticky ? 'border-b shadow-md' : ''
            )}
          >
            <fieldset className='relative flex items-start justify-center'>
              <LocateFixed className='w-5 text-teal-600 absolute top-0 right-0 mt-3 mr-3' />
              <input
                type='text'
                className='w-full border border-gray-300 py-4 outline-none h-full focus:border-teal-600 bg-white pl-4'
                placeholder='Search location form here'
              />
            </fieldset>
          </fieldset>
        </fieldset>
      )}
    </form>
  );
};

export default UserLocation;
