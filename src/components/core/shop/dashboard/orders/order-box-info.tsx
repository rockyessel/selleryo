import { OrderProps } from "@/interface";



interface Props {
  order: OrderProps;
}



const OrderBoxInfo = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
      <div className="border border-gray-300 shadow-sm bg-white bg-opacity-0 flex flex-col pl-5 pr-20 py-4 rounded-md">
        <div className="text-gray-800 text-sm font-bold">Order Number</div>
        <div className="text-gray-600 text-sm mt-2">334983046149</div>
      </div>
      <div className="items-stretch border border-gray-300 shadow-sm bg-white bg-opacity-0 flex flex-col pl-5 pr-20 py-4 rounded-md">
        <div className="text-gray-800 text-sm font-bold">Date</div>
        <div className="text-gray-600 text-sm mt-2">December 1, 2022</div>
      </div>
      <div className="border border-gray-300 shadow-sm bg-white bg-opacity-0 flex flex-col pl-5 pr-20 py-4 rounded-md">
        <div className="text-gray-800 text-sm font-bold">Total</div>
        <div className="text-gray-600 text-sm mt-2">GH¢ 55.10</div>
      </div>
      <div className="border border-gray-300 shadow-sm bg-white bg-opacity-0 flex flex-col pl-5 pr-20 py-4 rounded-md">
        <div className="text-gray-800 text-sm font-bold">Payment Method</div>
        <div className="text-gray-600 text-sm mt-2">STRIPE</div>
      </div>
    </div>
  );
};

export default OrderBoxInfo;
