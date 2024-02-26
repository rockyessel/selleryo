import OrderBoxInfo from "@/components/core/shop/dashboard/orders/order-box-info";
import OrderDetailsCard from "@/components/core/shop/dashboard/orders/order-details-card";
import OrderProductLists from "@/components/core/shop/dashboard/orders/product-lists";
import OrderSummaryStatus from "@/components/core/shop/dashboard/orders/summary-status";
import OrderTimeline from "@/components/core/shop/dashboard/orders/timeline";


interface Props {
  params: { id: string };
}

const OrderDetailedPage = async ({ params }: Props) => {

  const order = {}

  return (
    <div className="flex flex-col">
      <div className="border border-gray-300 shadow-sm bg-white bg-opacity-0 flex flex-col py-px rounded-md">
        <OrderSummaryStatus order={order} />
        <div className="bg-white flex flex-col gap-10 p-12">
          <OrderBoxInfo />
          <div className="inline-flex self-center mt-10">
            <OrderTimeline order={order} />
          </div>
          <OrderDetailsCard order={order} />
          <OrderProductLists order={order} />
        </div>
      </div>
    </div>
  );
};

export default OrderDetailedPage;
