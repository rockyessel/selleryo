import Navbar from '@/components/core/common/navbar';
import { Sidebar } from '@/components/core/common/sidebar';
import { ReactNode } from 'react';

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <main>
      <Navbar />
      <div className='bg-background flex items-start'>
        <Sidebar />
        <div className='m-8'>{children}</div>
      </div>
    </main>
  );
}
