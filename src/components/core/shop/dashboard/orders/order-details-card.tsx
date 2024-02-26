import { OrderProps } from '@/interface';
import { truncate } from '@/lib/utils/helpers';

interface Props {
  order: OrderProps;
}

const OrderDetailsCard = ({ order }: Props) => {
  return (
    <div className='gap-5 flex max-md:flex-col'>
      <div className='w-6/12'>
        <div className=' flex flex-col gap-10'>
          <p className='text-gray-800 text-xl font-bold'>Total Amount</p>
          <div className='flex flex-col pr-20'>
            <p className='flex w-[212px] justify-between gap-5'>
              <span className='text-gray-800 text-sm font-bold'>
                Sub Total :
              </span>
              <span className='flex  justify-between gap-4'>
                <span className='text-gray-600 text-sm'>
                  GH¢ {order?.total}
                </span>
              </span>
            </p>
            <p className='flex w-[212px] justify-between gap-5 mt-5'>
              <span className='text-gray-800 text-sm font-bold'>
                Shipping Charge :
              </span>
              <span className='flex  justify-between gap-4'>
                <span className='text-gray-600 text-sm'>
                  GH¢ {order?.shippingCharge}
                </span>
              </span>
            </p>
            <p className='flex w-[212px] justify-between gap-5 mt-5'>
              <span className='text-gray-800 text-sm font-bold'>Tax :</span>
              <span className='flex  justify-between gap-4'>
                <span className='text-gray-600 text-sm'>GH¢ {order?.tax}</span>
              </span>
            </p>
            <p className='flex w-[212px] justify-between gap-5 mt-5'>
              <span className='text-gray-800 text-sm font-bold'>
                Discount :
              </span>
              <span className='flex  justify-between gap-4'>
                <span className='text-gray-600 text-sm'>
                  GH¢ {order?.discount}
                </span>
              </span>
            </p>
            <p className='flex w-[212px] justify-between gap-5 mt-5'>
              <span className='text-gray-800 text-sm font-bold'>Total :</span>
              <span className='flex  justify-between gap-4'>
                <span className='text-gray-600 text-sm'>
                  GH¢ {order?.total}
                </span>
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className='w-6/12'>
        <div className='flex flex-col gap-10'>
          <p className='text-gray-800 text-xl font-bold'>Order Details</p>
          <div className='flex flex-col gap-5'>
            <p className='flex justify-between'>
              <span className='text-gray-800 text-sm font-bold'>Name :</span>
              <span className='flex  justify-between gap-4'>
                <span className='text-gray-600 text-sm'>Item name</span>
              </span>
            </p>
            <p className='flex justify-between'>
              <span className='text-gray-800 text-sm font-bold'>
                Total Item :
              </span>
              <span className='flex  justify-between gap-4'>
                <span className='text-gray-600 text-sm'>
                  {order?.totalItems} Item
                </span>
              </span>
            </p>
            <p className='flex justify-between'>
              <span className='text-gray-800 text-sm font-bold'>
                Delivery Schedule :
              </span>
              <span className='flex justify-between'>
                <span className='text-gray-600 text-sm'>
                  90 min express delivery
                </span>
              </span>
            </p>
            <p className='flex justify-between'>
              <span className='text-gray-800 text-sm font-bold'>
                Shipping Address :
              </span>
              <span className='flex justify-between'>
                <span className='truncate text-gray-600 text-sm'>
                  mermoz, Dakar, Dakar, 38169, Sénégal
                </span>
              </span>
            </p>
            <p className='flex justify-between'>
              <span className='text-gray-800 text-sm font-bold'>
                Billing Address :
              </span>
              <span className='flex justify-between'>
                <span className='truncate text-gray-600 text-sm'>
                  {truncate(
                    `Voluptatum qui sunt, Quod et consequatur, Ipsum qui minus
                  sint, 51397, Aut fugiat iusto do`,
                    50
                  )}
                </span>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetailsCard;
