import React from "react";
import OrderListItem from "./review-list-item";
import DummyOrders from "@/constants/orders";

export default function OrderList({ shortList }: { shortList?: boolean }) {
  /*
    
    Fetch Orders from firebase here
    
    */
  return (
    <div className="w-full">
      <dl className="-my-3 divide-y divide-gray-100 text-sm">
        <div className="grid grid-cols-1 gap-1 p-3 px-5 sm:grid-cols-7 sm:gap-4">
          <dt className="text-gray-400 text-xs">No.</dt>
          <dd className="text-gray-400 text-xs">Status</dd>
          <dd className="text-gray-400 text-xs">Country</dd>
          <dd className="text-gray-400 text-xs col-span-2">Customer</dd>
          <dd className="text-gray-400 text-xs">Date</dd>
          <dd className="text-gray-400 text-xs">Total</dd>
        </div>
        {DummyOrders?.slice(0, 6)?.map((order, index) => {
          return <OrderListItem key={index} order={order} />;
        })}
      </dl>
    </div>
  );
}
