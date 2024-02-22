'use client';

// import { BUTTON_TYPES } from "@/lib/types";

import clsx from 'clsx';
import React, { ReactElement, useEffect, useState } from 'react';

const Button = ({
  type,
  label,
  onClick,
  icon,
  className,
}: {
  type: any;
  label?: string;
  onClick?: any;
  icon?: ReactElement;
  className?: string;
}) => {
  const [isOnline, setIsOnline] = useState(true);
  useEffect(() => {
    setIsOnline(navigator.onLine);
  }, []);

  let buttonStyles = '';

  switch (type) {
    case 'main':
      buttonStyles = 'bg-teal-500 text-white';
      break;
    case 'outline':
      buttonStyles = 'border bg-white text-black';
      break;
    default:
      buttonStyles = 'bg-transparent text-black hover:bg-zinc-100 min-w-fit';
  }

  return (
    <div
      className={clsx(
        `h-[38px] min-w-[80px] flex justify-center items-center px-3 gap-x-3 cursor-pointer ${buttonStyles}`,
        className
      )}
      onClick={() =>
        !isOnline
          ? alert(
              'Action failed. Check your internet connection and try again!'
            )
          : onClick()
      }
    >
      {icon}
      {label && <p className='text-sm'>{label}</p>}
    </div>
  );
};

export default Button;
