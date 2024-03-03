import NextImage from '@/components/native/next-image';
import React from 'react';
import MarketPlaceCanvasComponent from '../3d/canvas';

const MarketPlaceProductImages = () => {
  return (
    <div className='flex flex-col w-6/12 max-md:ml-0 max-md:w-full'>
      <div className='flex flex-col grow max-md:mt-10 max-md:max-w-full'>
        {/* <div className='flex gap-1.5 justify-between text-sm text-stone-500 max-md:flex-wrap max-md:max-w-full'>
          <div className='underline leading-[159%]'>Target</div>
          <div className='self-start w-1.5 border-r border-solid border-r-zinc-800 h-[11px]' />
          <div className='flex-auto underline leading-[150%]'>
            Outdoor Living & Garden
          </div>
          <div className='self-start w-1.5 border-r border-solid border-r-zinc-800 h-[11px]' />
          <div className='underline leading-[149%]'>Lawn & Garden</div>
          <div className='self-start w-1.5 border-r border-solid border-r-zinc-800 h-[11px]' />
          <div className='underline leading-[151%]'>Planters</div>
          <div className='self-start w-1.5 border-r border-solid border-r-zinc-800 h-[11px]' />
          <div className='flex-auto underline leading-[150%]'>
            Floor Planters
          </div>
        </div> */}
        <div className='flex flex-col justify-center mt-5 text-xs leading-3 text-center whitespace-nowrap rounded-lg bg-neutral-100 text-zinc-800 max-md:max-w-full'>
          <div className='flex overflow-hidden relative flex-col px-5 py-5 w-full min-h-[660px] max-md:max-w-full'>
            <NextImage
              alt=''
              width={1000}
              height={1000}
              src='https://target.scene7.com/is/image/Target/GUEST_6e977bc2-85a9-4f2c-a894-9e20dac1ff40?wid=1200&hei=1200&qlt=80&fmt=webp'
              className='object-cover absolute inset-0 size-full'
            />
            <div className='relative self-end w-8 h-8 bg-white border border-solid border-zinc-500 rounded-[32px]' />
            <div className='flex relative gap-5 justify-between px-0.5 mt-[560px] max-md:flex-wrap max-md:mt-10 max-md:max-w-full'>
              <div className='justify-center py-3 pr-2.5 pl-9 bg-white rounded border border-solid border-zinc-500 max-md:pl-5'>
                Shop the look
              </div>
              <div className='w-8 h-8 bg-white rounded-2xl border border-solid border-zinc-300' />
            </div>
          </div>
        </div>
        {/* Other images */}
        <div className='mt-4'>
          <div className='flex gap-5 max-md:flex-col max-md:gap-0 max-md:'>
            <div className='flex overflow-hidden relative flex-col items-end pt-4 pr-4 pb-12 pl-16 w-full aspect-square max-md:pl-5'>
              <NextImage
                alt=''
                width={1000}
                height={1000}
                src='https://target.scene7.com/is/image/Target/GUEST_aa67e3fc-872a-4cd8-85ba-215a95527005?wid=600&hei=600&qlt=80&fmt=webp'
                className='object-cover absolute inset-0 size-full'
              />
              <div className='relative mb-44 w-8 h-8 bg-white border border-solid border-zinc-500 rounded-[32px] max-md:mb-10' />
            </div>
            <div className='flex overflow-hidden relative flex-col items-end pt-4 pr-4 pb-12 pl-16 w-full aspect-square max-md:pl-5'>
              <NextImage
                alt=''
                width={1000}
                height={1000}
                src='https://target.scene7.com/is/image/Target/GUEST_1ba6bc0c-346b-44b3-a51f-ae8c7922105f?qlt=85&fmt=webp&hei=720&wid=720&fit=crop'
                className='object-cover absolute inset-0 size-full'
              />
              <div className='relative mb-44 w-8 h-8 bg-white border border-solid border-zinc-500 rounded-[32px] max-md:mb-10' />
            </div>
            <div className='flex overflow-hidden relative flex-col items-end pt-4 pr-4 pb-12 pl-16 w-full aspect-square max-md:pl-5'>
              <NextImage
                alt=''
                width={1000}
                height={1000}
                src='https://target.scene7.com/is/image/Target/GUEST_2c41136e-7147-420b-b50e-13d722347275?wid=600&hei=600&qlt=80&fmt=webp'
                className='object-cover absolute inset-0 size-full'
              />
              <div className='relative mb-44 w-8 h-8 bg-white border border-solid border-zinc-500 rounded-[32px] max-md:mb-10' />
            </div>
            <div className='flex overflow-hidden relative flex-col px-5 py-5 text-xs font-bold leading-4 whitespace-nowrap aspect-square text-zinc-800 max-md:mt-4'>
              <NextImage
                alt=''
                width={1000}
                height={1000}
                src='https://target.scene7.com/is/image/Target/GUEST_aa67e3fc-872a-4cd8-85ba-215a95527005?wid=600&hei=600&qlt=80&fmt=webp'
                className='object-cover absolute inset-0 size-full'
              />
              <div className='relative self-end w-8 h-8 bg-white border border-solid border-zinc-500 rounded-[32px]' />
              <div className='relative justify-center items-start py-4 pr-16 pl-3 mt-52 rounded bg-white bg-opacity-90 max-md:pr-5 max-md:mt-10'>
                KWhites
              </div>
            </div>
          </div>
        </div>

        {/*  */}
        <div className='flex gap-4 justify-between mt-4 text-sm leading-5 text-center whitespace-nowrap text-zinc-800 max-md:flex-wrap max-md:max-w-full'>
          <MarketPlaceCanvasComponent />
          <div className='grow justify-center px-11 py-5 rounded-lg border border-solid border-zinc-500 leading-[147%] max-md:px-5'>
            See it in your space
          </div>
          <div className='grow justify-center px-6 py-5 rounded-lg border border-solid border-zinc-500 max-md:px-5'>
            Plan a space with this item
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketPlaceProductImages;
