import Link from "next/link";
import React from "react";

const OrderListItem = ({ order }: { order: any }) => {
  return (
    <div className="grid grid-cols-1 gap-1 p-3 px-5 sm:grid-cols-7 sm:gap-4">
      <dt className="text-black text-xs">
        <Link href={"/orders/" + order.id} className="hover:underline">
          #{order.id}
        </Link>
      </dt>
      <dd className="text-black text-xs">{order.status}</dd>
      <dd className="text-black text-xs">{order.country}</dd>
      <dd className="text-black text-xs col-span-2">
        <Link href={"/customers/" + order.customer} className="hover:underline">
          {order.customer}
        </Link>
      </dd>
      <dd className="text-black text-xs">{order.date}</dd>
      <dd className="text-black text-xs">{order.total}</dd>
    </div>
  );
};

export default OrderListItem;
