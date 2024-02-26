'use client';

import { useCart } from '@/context/cart';
import { deliverySchedule } from '@/lib/utils/constant';
import { cn } from '@/lib/utils/helpers';

const ScheduleSection = () => {
  const { schedule, setSchedule } = useCart();
  const selectedSchedule = schedule

  return (
    <div className='shadow-sm bg-white flex  p-5 flex-col gap-5'>
      <p className='inline-flex items-center gap-2'>
        <span className='text-white text-xl bg-teal-600 p-2 w-10 h-10 text-center rounded-full'>
          4
        </span>
        <span className='text-gray-800 text-xl font-semibold'>
          Delivery Schedule
        </span>
      </p>
      <ul className='grid grid-cols-2 sm:grid-cols-3 gap-3'>
        {deliverySchedule.map((schedule, index) => (
          <li
            onClick={() => setSchedule(schedule)}
            key={index}
            className={cn(
              'border shadow-sm flex grow flex-col pl-4 pr-7 py-5 rounded-md ',
              selectedSchedule?.name === schedule.name
                ? 'bg-white border-teal-600 bg-opacity-0'
                : 'bg-gray-100'
            )}
          >
            <p className=' text-gray-800 text-sm font-bold'>{schedule.name}</p>
            <p className=' text-gray-800 text-sm'>{schedule.type}</p>
          </li>
        ))}
        {/* <div className="bg-gray-100 flex grow basis-[0%] flex-col pl-4 pr-14 py-6 rounded-md max-md:pr-5">
              <div className="text-gray-800 text-sm font-bold">Morning</div>
              <div className="text-gray-800 text-sm">8:00 AM - 11:00 AM</div>
            </div> */}
      </ul>
    </div>
  );
};

export default ScheduleSection;
