import { OrderProps } from "@/interface";
import { Eye } from "lucide-react";
import Link from "next/link";

interface Props {
  order: OrderProps;
}

const OrderSummaryHeader = ({ order }: Props) => {
  return (
    <div className="flex justify-between gap-5">
      <p className="flex items-center gap-2.5 max-md:justify-center">
        <span className="justify-center text-gray-800 text-lg font-bold leading-[156%]">
          Order Details - {order?.orderId}
        </span>
      </p>
      <Link
        href={`/dashboard/orders/${order?.orderId}`}
        className="inline-flex items-center gap-1"
      >
        <Eye size={18} className="text-teal-600" />
        <span className="justify-center text-teal-600 text-sm font-bold leading-[143%] self-center my-auto">
          Details
        </span>
      </Link>
    </div>
  );
};

export default OrderSummaryHeader;
