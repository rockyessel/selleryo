'use client';

import { StorageModalSidebarItem } from '.';
import StorageHeaderMenu from './header-menu';
import { Button } from '@/components/ui/button';
import { Dispatch, ReactNode, SetStateAction } from 'react';
import { FolderUp, FileText, Folder, Link, MonitorUp } from 'lucide-react';

interface Props {
  children: ReactNode;
  setSelectItem: Dispatch<SetStateAction<StorageModalSidebarItem>>;
}

const Sidebar = ({ children, setSelectItem }: Props) => {
  return (
    <div className='w-full h-full flex items-start'>
      <div className='pb-12 w-[250px] h-full sticky top-16 border-r'>
        <div className='space-y-4 py-4'>
          <div className='px-3 py-2'>
            <h2 className='mb-2 px-4 text-lg font-semibold tracking-tight'>
              Documents
            </h2>
            <div className='space-y-1'>
              <Button
                onClick={() => setSelectItem('recent-uploads')}
                variant='secondary'
                className='w-full justify-start'
              >
                <FolderUp strokeWidth={0.5} />
                Recent Uploads
              </Button>
              <Button
                onClick={() => setSelectItem('files')}
                variant='ghost'
                className='w-full justify-start'
              >
                <FileText strokeWidth={0.5} />
                Files
              </Button>
              <Button
                onClick={() => setSelectItem('folders')}
                variant='ghost'
                className='w-full justify-start'
              >
                <Folder strokeWidth={0.5} />
                Folder
              </Button>
            </div>
          </div>
          <div className='px-3 py-2'>
            <h2 className='mb-2 px-4 text-lg font-semibold tracking-tight'>
              Media Upload
            </h2>
            <div className='space-y-1'>
              <Button
                onClick={() => setSelectItem('enter-url')}
                variant='ghost'
                className='w-full justify-start'
              >
                <Link strokeWidth={0.5} />
                Enter URL
              </Button>
              <Button
                onClick={() => setSelectItem('device')}
                variant='ghost'
                className='w-full justify-start'
              >
                <MonitorUp strokeWidth={0.5} />
                Device
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className='w-full h-full'>
        <StorageHeaderMenu />
        <div className='p-4 h-full'>{children}</div>
      </div>
    </div>
  );
};

export default Sidebar;
