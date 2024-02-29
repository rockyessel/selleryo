'use client';

import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import Content from './content';
import { useState } from 'react';
import Sidebar from './sidebar';

export type StorageModalSidebarItem =
  | 'recent-uploads'
  | 'files'
  | 'folders'
  | 'enter-url'
  | 'device';

const StorageModal = () => {
  const [selectItem, setSelectItem] =
    useState<StorageModalSidebarItem>('recent-uploads');

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant='outline'>Edit Profile</Button>
      </DialogTrigger>
      <DialogContent className='max-w-[60rem] h-[40rem] p-0'>
        <Sidebar setSelectItem={setSelectItem}>
          <Content selectItem={selectItem} />
        </Sidebar>
      </DialogContent>
    </Dialog>
  );
};

export default StorageModal;
