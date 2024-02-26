import OrdersCard from "./card";
import { OrderProps } from "@/interface";

interface Props {
  orders: OrderProps[];
}

const OrderListAside = ({ orders }: Props) => {
  return (
    <div className="border bg-white flex flex-col px-5 h-[80vh] pb-10 sticky top-20">
      <p className="justify-center text-gray-800 text-xl py-5 font-bold my-0">
        My Orders
      </p>
      <ul className="flex flex-col gap-1 overflow-y-auto">
        {orders.map((order, index) => (
          <OrdersCard order={order} key={index} />
        ))}
      </ul>
    </div>
  );
};

export default OrderListAside;
