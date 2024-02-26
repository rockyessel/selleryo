import { OrderProps } from "@/interface";
import { Check } from "lucide-react";

interface Props {
  order: OrderProps;
}

const OrderTimeline = ({ order }: Props) => {
  return (
    <div className="flex items-center gap-0">
      <div className="inline-flex flex-col self-center">
        <div className="justify-center items-center flex">
          <div className="bg-transparent flex mr-0 w-[91px] shrink-0 h-1 flex-col" />
          <div className="text-teal-600 text-sm font-bold flex items-center justify-center border border-teal-600 w-10 h-10 p-3 rounded-full border-dashed">
            <Check size={18} strokeWidth={4} className="text-teal-600" />
          </div>
          <div className="bg-teal-600 flex mr-0 w-[91px] shrink-0 h-1 flex-col" />
        </div>
        <div className="text-gray-600 text-center font-bold capitalize">
          Order Processing
        </div>
      </div>

      <div className="inline-flex flex-col self-center">
        <div className="justify-center items-center flex">
          <div className="bg-teal-600 flex mr-0 w-[91px] shrink-0 h-1 flex-col" />
          <div className="text-teal-600 text-sm font-bold justify-center border border-teal-600 px-3.5 py-2 rounded-full border-dashed">
            2
          </div>
          <div className="bg-teal-600 flex mr-0 w-[91px] shrink-0 h-1 flex-col" />
        </div>
        <div className="text-gray-600 text-center font-bold capitalize">
          Order Processing
        </div>
      </div>

      <div className="inline-flex flex-col self-center">
        <div className="justify-center items-center flex">
          <div className="bg-teal-600 flex mr-0 w-[91px] shrink-0 h-1 flex-col" />
          <div className="text-teal-600 text-sm font-bold justify-center border border-teal-600 px-3.5 py-2 rounded-full border-dashed">
            3
          </div>
          <div className="bg-teal-600 flex mr-0 w-[91px] shrink-0 h-1 flex-col" />
        </div>
        <div className="text-gray-600 text-center font-bold capitalize">
          Order At Local Facility
        </div>
      </div>

      <div className="inline-flex flex-col self-center">
        <div className="justify-center items-center flex">
          <div className="bg-teal-600 flex mr-0 w-[91px] shrink-0 h-1 flex-col" />
          <div className="text-teal-600 text-sm font-bold justify-center border border-teal-600 px-3.5 py-2 rounded-full border-dashed">
            4
          </div>
          <div className="bg-teal-600 flex mr-0 w-[91px] shrink-0 h-1 flex-col" />
        </div>
        <div className="text-gray-600 text-center font-bold capitalize">
          Order Out For Delivery
        </div>
      </div>

      <div className="inline-flex flex-col self-center">
        <div className="justify-between items-center flex gap-0 pr-12 max-md:pr-5">
          <div className="bg-teal-600 flex mr-0 w-[91px] shrink-0 h-1 flex-col" />
          <div className="text-teal-600 text-sm font-bold justify-center border border-teal-600 bg-white self-stretch aspect-square px-3.5 py-2 rounded-full border-dashed">
            5
          </div>
        </div>
        <div className="text-gray-600 text-center font-bold capitalize">
          Order Completed
        </div>
      </div>
    </div>
  );
};

export default OrderTimeline;
