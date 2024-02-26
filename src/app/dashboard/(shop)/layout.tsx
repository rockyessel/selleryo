import SidebarContainer from '@/components/core/shop/dashboard/global/sidebar';
import { ReactNode } from 'react';

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return  <main className="bg-gray-100 flex flex-col">
      <div className="mt-20 bg-gray-100 w-full pl-14 pr-16 py-12">
        <div className="gap-5 flex">
          <div className="flex flex-col">
            <div className="flex flex-col mt-1.5 sticky top-20">
              <SidebarContainer />
            </div>
          </div>
          <div className="flex flex-col w-[82%] ml-5">{children}</div>
        </div>
      </div>
    </main>
}
