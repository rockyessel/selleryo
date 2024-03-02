

const MarketPlaceReviewCard = () => {
  return (
    <div className='flex gap-5 justify-between items-start self-stretch px-6 py-6 mt-9 w-full rounded-xl border border-solid border-zinc-300 max-md:flex-wrap max-md:px-5 max-md:mr-0.5 max-md:max-w-full'>
      <div className='flex flex-col self-start'>
        <div className='flex gap-3 justify-between'>
          <div className='flex flex-col flex-1'>
            <div className='text-lg font-bold leading-6 text-zinc-800'>
              The Best
            </div>
            <div className='flex overflow-hidden relative flex-col justify-center items-center self-center py-0.5 pr-7 mt-4 aspect-[5.41] w-[119px] max-md:pr-5'>
              <img
                loading='lazy'
                src='https://cdn.builder.io/api/v1/image/assets/TEMP/ce3b24b3fdebdadc1ae1f67b8c5e8eb8cfd13fd71f62b22ed209944c4d1c0a20?'
                className='object-cover absolute inset-0 size-full'
              />
              <img
                loading='lazy'
                src='https://cdn.builder.io/api/v1/image/assets/TEMP/6280c4f5e81508bb6d9dd191902c97e9535a7f4a1510c5f4be6e399c263ddcba?'
                className='w-full aspect-[5]'
              />
            </div>
          </div>
          <div className='grow justify-center self-end py-1.5 pr-0.5 pl-9 mt-7 text-sm leading-5 text-green-800 border-l border-solid border-l-zinc-300 max-md:pl-5'>
            Would recommend
          </div>
        </div>
        <div className='mt-1.5 text-xs leading-4 text-green-900'>
          L - 3 days ago,{' '}
          <span className='text-green-900'>Verified purchaser</span>
        </div>
        <div className='mt-6 text-sm leading-5 whitespace-nowrap text-zinc-800'>
          Honestly the best pots- can’t beat them for the price!!!
        </div>
      </div>
      <div className='self-end mt-8 max-md:max-w-full'>
        <div className='flex gap-5 max-md:flex-col max-md:gap-0 max-md:'>
          <div className='flex flex-col w-[64%] max-md:ml-0 max-md:w-full'>
            <div className='flex flex-col grow text-xs text-stone-500 max-md:mt-10'>
              <div className='flex gap-5 justify-between px-px w-full text-sm font-bold leading-5'>
                <div className='flex gap-3 justify-between'>
                  <img
                    loading='lazy'
                    src='https://cdn.builder.io/api/v1/image/assets/TEMP/b0283c5f500a84d6200ad0560ae71caee4d411ec9df05cebe1123e0c6f41efcc?'
                    className='aspect-square w-[38px]'
                  />
                  <div className='my-auto'>
                    design
                    <br />
                    <span className=' text-stone-500'>out of 5</span>
                  </div>
                </div>
                <div className='flex gap-3 justify-between'>
                  <img
                    loading='lazy'
                    src='https://cdn.builder.io/api/v1/image/assets/TEMP/3782db3f016737b16d88968cb0f52acf9ac052a272b3f6e915d292a8ccd0d497?'
                    className='aspect-square w-[38px]'
                  />
                  <div className='self-start mt-2'>
                    value
                    <br />
                    <span className=' text-stone-500'>out of 5</span>
                  </div>
                </div>
              </div>
              <div className='mt-8 leading-[152%]'>
                Did you find this review helpful?
              </div>
              <div className='flex gap-2 justify-between mt-3.5 text-center whitespace-nowrap leading-[107%] text-zinc-800'>
                <div className='grow justify-center px-11 py-3 bg-white rounded border border-solid border-zinc-500 max-md:px-5'>
                  Helpful
                </div>
                <div className='grow justify-center px-8 py-3 bg-white rounded border border-solid border-zinc-500 max-md:px-5'>
                  Not helpful
                </div>
              </div>
            </div>
          </div>
          <div className='flex flex-col ml-5 w-[36%] max-md:ml-0 max-md:w-full'>
            <div className='flex flex-col text-stone-500 max-md:mt-10'>
              <div className='flex gap-3 justify-between text-sm font-bold leading-5'>
                <img
                  loading='lazy'
                  src='https://cdn.builder.io/api/v1/image/assets/TEMP/94dc2cd73a499aac2b1ab5f180edb1ec844ff485bec223f050cafcf52353ce92?'
                  className='aspect-square w-[38px]'
                />
                <div className='my-auto'>
                  quality
                  <br />
                  <span className=' text-stone-500'>out of 5</span>
                </div>
              </div>
              <div className='self-end mt-16 text-base leading-6 text-center underline whitespace-nowrap max-md:mt-10'>
                Report review
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketPlaceReviewCard;
