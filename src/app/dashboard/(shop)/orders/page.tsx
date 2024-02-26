import OrderListAside from "@/components/core/shop/dashboard/orders/list-aside";
import OrderSummary from "@/components/core/shop/dashboard/orders/summary";







const OrdersPage = async () => {



  const orders:any[] = []
  
  return (
    <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
      <OrderListAside orders={orders} />
      <OrderSummary orders={orders} />
    </div>
  );
};

export default OrdersPage;
