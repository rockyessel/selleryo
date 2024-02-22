import Image from 'next/image';
import React from 'react';
import Status from './common/status';
import { formatSentAtTime, getInitials } from '@/lib/utils/helpers';
import clsx from 'clsx';
import useNavigation from '@/lib/hooks/useNavigation';
import { format } from 'date-fns';

const InboxListCard = ({ inbox }: { inbox: any }) => {
  const nav = useNavigation();
  const timeSent = Number(inbox?.timeSent);
  if (inbox)
    return (
      <div
        className={clsx(
          'flex border-b items-center pl-0 h-10 pr-5 hover:bg-white hover:shadow-md cursor-pointer'
        )}
      >
        <div className='relative lg:pl-4 flex items-center gap-y-5 w-[25%] h-full'>
          <div className='h-full px-1 pr-5 flex items-center justify-center cursor-pointer hover:bg-slate-100'>
            <input
              type='checkbox'
              className='w-3 h-3 accent-teal-500 fill-white'
            />
          </div>
          <div
            className='w-full h-full flex flex-row items-center space-x-4'
            onClick={() => nav.push('/inbox/conversation/' + inbox.id)}
          >
            {/* <p className="text-gray-500 text-xs font-medium  bg-gray-200 w-8 h-8 flex items-center justify-center text-center rounded-full">
              {getInitials(inbox?.senderDetails?.name)}
            </p> */}
            <p className='text-neutral-800 text-sm leading-5 grow overflow-hidden whitespace-nowrap overflow-ellipsis'>
              {inbox?.senderDetails?.name}
            </p>
          </div>
        </div>
        <div
          className='flex items-center w-[75%] h-full space-x-5'
          onClick={() => nav.push('/inbox/conversation/' + inbox.id)}
        >
          <p className='text-neutral-800 text-sm w-full overflow-hidden whitespace-nowrap overflow-ellipsis space-x-2'>
            {/* <Status status={inbox?.senderDetails?.role} /> */}
            <span
              className={clsx(inbox?.tag ? 'ml-2' : '', 'font-medium')}
              title={inbox?.message?.subject}
            >
              {inbox?.message?.subject}
            </span>
            <span className='font-light text-zinc-500 ml-1'>
              - {`  `}
              {decodeURIComponent(inbox?.message?.body)}
            </span>
          </p>
          <p className='bg-real-200 text-gray-500 text-right text-[12px] whitespace-nowrap leading-5'>
            {formatSentAtTime(timeSent)}
          </p>
        </div>
      </div>
    );
};

export default InboxListCard;
