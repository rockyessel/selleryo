'use client';
import React, { PropsWithChildren } from 'react';
import Sidebar from './sidebar';
import Navbar from './navbar';
import { useSelector } from 'react-redux';
import { NAV_SLICE_TYPES } from '@/lib/types';
import clsx from 'clsx';
import Footer from './footer';
import Chart from 'chart.js/auto';
import { CategoryScale } from 'chart.js';
import FullPageLoader from './common/full-page-loader';
import ModalWrapper from './modal-wrapper';

Chart.register(CategoryScale);

export default function SidebarAndNavWrapper({
  children,
}: PropsWithChildren<{}>) {
  const { sidebarStatus } = useSelector((state: NAV_SLICE_TYPES) => state.nav);
  return (
    <main
      className={clsx(
        'w-full h-screen overflow-hidden',
        sidebarStatus
          ? 'grid grid-cols-6 items-start'
          : 'flex flex-col items-start'
      )}
    >
      <div className={clsx(sidebarStatus ? 'col-span-1' : 'w-0')}>
        <Sidebar isOpened={sidebarStatus} />
      </div>
      <section
        className={clsx(
          'relative flex flex-col bg-slate-50 gap-0',
          sidebarStatus ? 'col-span-5' : 'w-full'
        )}
      >
        <Navbar />
        <section className='h-screen'>
          <section
            className={clsx(
              'w-full flex-1 h-[83vh] !overflow-y-scroll',
              sidebarStatus ? 'md:!px-3 lg:!px-10' : 'md:!px-10 lg:!px-16'
            )}
          >
            {children}
          </section>
          <Footer />
        </section>
      </section>
      <FullPageLoader />
      <ModalWrapper />
    </main>
  );
}
