const WalletPoint = () => {
  return (
    <div className="w-full border border-gray-200 bg-white flex flex-col items-start justify-center p-10 rounded-md">
      <div className="w-full text-gray-800 text-base font-bold border-b-gray-200 pb-4 border-b border-solid">
        Wallet Points
      </div>
      <div className="mt-4 divide-x flex items-start gap-3 font-bold">
        <p className="border-r-gray-200 flex flex-col items-center">
          <span className="text-gray-800 text-xs">0</span>
          <span className="text-gray-800 text-xs">Total</span>
        </p>
        <p className="border-r-gray-200 flex flex-col pl-4 items-center">
          <span className="text-gray-800 text-xs">0</span>
          <span className="text-gray-800 text-xs">Used</span>
        </p>
        <p className="justify-center flex flex-col my-auto pl-4 items-center">
          <span className="text-gray-800 text-xs">0</span>
          <span className="text-gray-800 text-xs self-stretch">Available</span>
        </p>
      </div>
    </div>
  );
};

export default WalletPoint;
