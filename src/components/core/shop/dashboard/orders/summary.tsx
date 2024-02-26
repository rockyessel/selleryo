"use client";

import OrderSummaryHeader from "./summary-header";
import OrderSummaryStatus from "./summary-status";
import OrderSummaryAddressBilling from "./summary-address-billing";
import OrderProductLists from "./product-lists";
import OrderTimeline from "./timeline";
import { useCart } from "@/context/cart";
import { OrderProps } from "@/interface";
import { Fragment } from "react";

interface Props {
  orders: OrderProps[];
}

const OrderSummary = ({ orders }: Props) => {
  const { orderId } = useCart();

  console.log("orderId: ", orderId);

  const order = orders.filter((order) => order.id === orderId)[0];
  return (
    <div className="border bg-white flex flex-col w-full px-5 py-6 h-[80vh]">
      {orderId ? (
        <Fragment>
          <OrderSummaryHeader order={order} />
          <OrderSummaryStatus order={order} className="mt-7" />
          <OrderSummaryAddressBilling order={order} />
          <div className="inline-flex self-center my-10">
            <OrderTimeline order={order} />
          </div>
          <OrderProductLists order={order} />
        </Fragment>
      ) : (
        <div>Click on the order lists to view more information.</div>
      )}
    </div>
  );
};

export default OrderSummary;
