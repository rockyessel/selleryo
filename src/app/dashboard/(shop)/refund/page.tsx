const RefundPage = () => {
  return (
    <div className="items-center shadow bg-white flex flex-col px-8 rounded-md max-md:px-5">
      <div className="justify-center text-gray-800 text-center text-xl font-bold leading-[140%]">
        My Refunds
      </div>
      <div className="justify-center items-stretch border border shadow-sm bg-white bg-opacity-0 self-stretch flex flex-col mt-11 mb-[487px] pt-px pb-4 border-solid max-md:max-w-full max-md:my-10">
        <div className="flex items-stretch justify-between gap-0 pr-0.5 max-md:max-w-full max-md:flex-wrap max-md:justify-center">
          <div className="justify-center text-gray-800 text-center text-sm font-bold leading-[143%] items-center bg-gray-100 px-5 py-5 border-b border-solid">
            ID
          </div>
          <div className="justify-center text-gray-800 text-sm font-bold leading-[143%] bg-gray-100 grow px-4 py-5 border-b border-solid">
            Reason
          </div>
          <div className="justify-center text-gray-800 text-center text-sm font-bold leading-[143%] items-center bg-gray-100 grow px-5 py-5 border-b border-solid">
            Status
          </div>
          <div className="justify-center text-gray-800 text-center text-sm font-bold leading-[143%] items-center bg-gray-100 grow px-5 py-4 border-b border-solid">
            Tracking Number
          </div>
          <div className="justify-end text-gray-800 text-right text-sm font-bold leading-[143%] bg-gray-100 grow px-5 py-5 border-b border-solid max-md:pr-0">
            Amount
          </div>
          <div className="justify-center text-gray-800 text-center text-sm font-bold leading-[143%] items-center bg-gray-100 grow px-5 py-5 border-b border-solid">
            Date
          </div>
          <div className="justify-center text-gray-800 text-center text-sm font-bold leading-[143%] items-center bg-gray-100 px-5 py-4 border-b border-solid max-md:-mr-px">
            Details
          </div>
          <div className="fill-gray-100 flex aspect-[0.35555555555555557] flex-col py-px">
            <div className="bg-neutral-100 flex w-px shrink-0 h-11 flex-col" />
          </div>
        </div>
        <div className="justify-center text-stone-500 text-center text-xs leading-[150%] items-center bg-white px-5 py-5 max-md:max-w-full">
          No Data
        </div>
      </div>
    </div>
  );
};

export default RefundPage;
