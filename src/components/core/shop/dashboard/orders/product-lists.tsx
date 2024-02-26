import { OrderProps } from '@/interface';
import { truncate } from '@/lib/utils/helpers';
import Image from 'next/image';

interface Props {
  order: OrderProps;
}

const OrderProductLists = ({ order }: Props) => {
  return (
    <div className='relative overflow-x-auto'>
      <table className='w-full text-sm text-left text-gray-500'>
        <thead className='text-xs text-gray-700 uppercase bg-gray-50'>
          <tr>
            <th className='px-6 py-3'>Item</th>
            <th className='px-6 py-3'>Quantity</th>
            <th className='px-6 py-3'>Price</th>
            <th className='px-6 py-3'></th>
          </tr>
        </thead>
        <tbody>
          {order?.orders?.map((product, index) => (
            <tr key={index} className='bg-white border-b'>
              <th className='px-6 py-4 text-gray-900 whitespace-nowrap'>
                <span className='flex items-start gap-4'>
                  <Image
                    width={100}
                    height={100}
                    alt={product?.title}
                    src={product?.image}
                    priority
                    className='w-16'
                  />
                  <span className='flex flex-col'>
                    <span className='flex justify-between gap-1.5'>
                      {truncate(product?.title, 15)}
                    </span>
                    <span className='text-teal-600 text-sm font-bold'>
                      GH¢ {product?.price}
                    </span>
                  </span>
                </span>
              </th>
              <td className='px-6 py-4'>{product?.quantity}</td>
              <td className='px-6 py-4'>
                GH¢ {product?.quantity * product.price}
              </td>
              <td className='px-6 py-4'>Write a review</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderProductLists;
