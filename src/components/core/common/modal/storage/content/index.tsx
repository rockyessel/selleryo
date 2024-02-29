'use client';

import { StorageModalSidebarItem } from '..';
import DeviceUpload from './device';
import RecentUploads from './recent-uploads';

interface Props {
  selectItem: StorageModalSidebarItem;
}

const Content = ({ selectItem }: Props) => {
  switch (selectItem) {
    case 'recent-uploads':
      return <RecentUploads />;

    case 'files':
      return (
        <div className='w-full h-full flex items-center justify-center'>
          <p className='text-2xl font-medium text-gray-200'>
            Under Contruction
          </p>
        </div>
      );

    case 'folders':
      return (
        <div className='w-full h-full flex items-center justify-center'>
          <p className='text-2xl font-medium text-gray-200'>
            Under Contruction
          </p>
        </div>
      );

    case 'enter-url':
      return (
        <div className='w-full h-full flex items-center justify-center'>
          <p className='text-2xl font-medium text-gray-200'>
            Under Contruction
          </p>
        </div>
      );

    case 'device':
      return <DeviceUpload />;

    default:
      return <>{`Shit! Happens that's life.`}</>;
  }
};

export default Content;
