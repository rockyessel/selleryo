import { generateItemStatusColor } from '@/lib/utils/helpers';
import clsx from 'clsx';
import React from 'react';

export default function Status({ status }: { status: string }) {
  if (status)
    return (
      <span
        className={clsx(
          'h-fit text-center text-xs capitalize leading-3 whitespace-nowrap px-2 py-1 ',
          generateItemStatusColor(status)
        )}
      >
        {status?.replaceAll('-', ' ')}
      </span>
    );
}
