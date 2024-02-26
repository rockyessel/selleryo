'use client'


import OrderList from '@/components/core/panel/orders/order-list';
import { cardStyles, layoutStyles, textStyles } from '@/styles/classStyles';

export default function Home() {
  return (
    <div className='h-full w-full flex flex-col'>
      <div className={layoutStyles.screen.header}>
        <div className='text-neutral-800 text-3xl font-medium leading-9'>
          Dashboard
        </div>
        <div className='bg-white  overflow-hidden flex justify-between gap-2.5 h-10 '>
          <div className='border w-[200px] px-2 '>
            <select
              name='MonthDropdown'
              id='MonthDropdown'
              className='h-full w-full outline-none border-gray-300 text-gray-700 sm:text-sm'
            >
              <option value='01'>January</option>
              <option value='02'>February</option>
              <option value='03'>March</option>
              <option value='04'>April</option>
              <option value='05'>May</option>
              <option value='06'>June</option>
              <option value='07'>July</option>
              <option value='08'>August</option>
              <option value='09'>September</option>
              <option value='10'>October</option>
              <option value='11'>November</option>
              <option value='12'>December</option>
            </select>
          </div>
        </div>
      </div>
      <div className='self-center w-full max-w-[1312px] mt-6 px-5 pb-8 space-y-8 max-md:max-w-full'>
        <div className={cardStyles.list}>
          <h3 className={textStyles.cardTitle}>Recent orders</h3>
          {/* <OrderList /> */}
        </div>
      </div>
    </div>
  );
}
