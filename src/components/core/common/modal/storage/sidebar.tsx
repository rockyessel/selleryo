import { Button } from '@/components/ui/button';

import { cn } from '@/lib/utils/helpers';
import { HTMLAttributes } from 'react';
import { FolderUp, FileText, Folder, Link, MonitorUp } from 'lucide-react';
interface SidebarProps extends HTMLAttributes<HTMLDivElement> {}

export function Sidebar({ className }: SidebarProps) {
  return (
    <div className={cn('pb-12 w-[250px] sticky top-16', className)}>
      <div className='space-y-4 py-4'>
        <div className='px-3 py-2'>
          <h2 className='mb-2 px-4 text-lg font-semibold tracking-tight'>
            Documents
          </h2>
          <div className='space-y-1'>
            <Button variant='secondary' className='w-full justify-start'>
              <FolderUp strokeWidth={0.5} />
              Recent Uploads
            </Button>
            <Button variant='ghost' className='w-full justify-start'>
              <FileText strokeWidth={0.5} />
              Files
            </Button>
            <Button variant='ghost' className='w-full justify-start'>
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
            <Button variant='ghost' className='w-full justify-start'>
              <Link strokeWidth={0.5} />
              Enter URL
            </Button>
            <Button variant='ghost' className='w-full justify-start'>
              <MonitorUp strokeWidth={0.5} />
              Device
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
