import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Sidebar } from './sidebar';
import { Menu } from '../../menu';
import Content from './content';
import { useState } from 'react';

export type StorageModalSidebarItem =
  | 'recent-upload'
  | 'files'
  | 'folders'
  | 'enter-url'
  | 'device';

const StorageModal = () => {
  const [selectItem, setSelectItem] =
    useState<StorageModalSidebarItem>('device');

  return (
    <Dialog open>
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
