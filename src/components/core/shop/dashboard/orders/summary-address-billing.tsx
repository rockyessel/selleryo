import { OrderProps } from "@/interface";
import React from "react";

interface Props {
  order: OrderProps;
}

const OrderSummaryAddressBilling = ({ order }: Props) => {
  return (
    <div className="w-full flex items-center gap-5 mt-6 pr-5 border-b ">
      {/* Address */}
      <div className="flex-1 flex flex-col pl-5 pr-10 pt-5 pb-7 border-r">
        <p className="inline-flex flex-col gap-0">
          <span className="text-gray-800 text-sm font-bold">
            Shipping Address
          </span>
          <span className="text-gray-500 text-sm">
            mermoz, Dakar, Dakar, 38169, Sénégal
          </span>
        </p>
        <p className="inline-flex flex-col gap-0">
          <span className="text-gray-800 text-sm font-bold">
            Billing Address
          </span>
          <span className="text-gray-500 text-sm">
            Voluptatum qui sunt, Quod et consequatur, Ipsum qui minus sint,
            51397, Aut fugiat
          </span>
        </p>
      </div>

      {/* Billing */}
      <div className="w-[20rem] flex flex-col">
        <p className="inline-flex justify-between text-gray-500 text-sm">
          <span>Sub Total</span>
          <span className="text-gray-800 text-sm">
            GH¢ {order?.subTotal || 0}
          </span>
        </p>
        <p className="inline-flex justify-between text-gray-500 text-sm">
          <span>Discount</span>
          <span className="text-gray-800 text-sm">{order?.discount || 0}</span>
        </p>
        <p className="inline-flex justify-between text-gray-500 text-sm">
          <span>Delivery Fee</span>
          <span className="text-gray-800 text-sm">
            GH¢ {order?.deliveryFee || 0}
          </span>
        </p>
        <p className="inline-flex justify-between text-gray-500 text-sm">
          <span>Tax</span>
          <span className="text-gray-800 text-sm">GH¢ {order?.tax || 0}</span>
        </p>
        <p className="inline-flex justify-between text-gray-800 text-sm font-bold">
          <span>Total</span>
          <span className="text-gray-800 text-sm font-bold">
            GH¢ {order?.total || 0}
          </span>
        </p>
      </div>
    </div>
  );
};

export default OrderSummaryAddressBilling;
