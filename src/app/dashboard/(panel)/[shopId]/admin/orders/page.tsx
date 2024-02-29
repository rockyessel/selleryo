import BreadCrumbsMenu from '@/components/core/panel/common/bread-crumbs';
import Button from '@/components/core/panel/common/button';
import OrderList from '@/components/core/panel/orders/order-list';
import { orderMethod } from '@/lib/convex';
import { layoutStyles } from '@/styles/classStyles';
import { fetchQuery } from 'convex/nextjs';
import { Id } from '../../../../../../../convex/_generated/dataModel';

const CrumbsData = [{ label: 'Dashboard', route: '/' }, { label: 'Orders' }];

interface Props {
  params: { shopId: Id<'orders'> };
}

const OrderLists = async ({ params }: Props) => {
  const orders = await fetchQuery(orderMethod.getShopOrders, {
    shopId: params.shopId,
  });

  // console.log('params: ', params);

  return (
    <div className='h-full w-full flex flex-col space-y-4 pt-2'>
      {/* Header */}
      <div className={layoutStyles.screen.header}>
        <div className='space-y-1'>
          <BreadCrumbsMenu routes={CrumbsData} />
          <div className='text-neutral-800 text-3xl font-medium leading-9'>
            Orders
          </div>
        </div>
        <div className=' overflow-hidden flex justify-between gap-2.5 '>
          <Button type='main' label='Add Order' />
        </div>
      </div>
      {/* Content */}
      <div className='p-5'>
        {/* Order Table Lists */}
        <OrderList orders={orders} />
      </div>
    </div>
  );
};

export default OrderLists;
