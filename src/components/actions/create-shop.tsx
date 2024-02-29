import { Dispatch, SetStateAction, useState } from 'react';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../ui/dialog';
import { PlusCircledIcon } from '@radix-ui/react-icons';

interface Props {
  setShowNewTeamDialog: Dispatch<SetStateAction<boolean>>;
}

const CreateShop = ({ setShowNewTeamDialog }: Props) => {
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Create Shop</DialogTitle>
        <DialogDescription>
          Create a shop to manage all your listing.
        </DialogDescription>
      </DialogHeader>
      <div>
        <div className='space-y-4 py-2 pb-4'>
          <div className='space-y-2'>
            <Label htmlFor='name'>Shop name</Label>
            <Input id='name' placeholder='Acme Inc.' />
          </div>
          <div className='space-y-2'>
            <Label htmlFor='plan'>Subscription plan</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder='Select a plan' />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value='free'>
                  <span className='font-medium'>Free</span> -{' '}
                  <span className='text-muted-foreground'>
                    Trial for two weeks
                  </span>
                </SelectItem>
                <SelectItem value='pro'>
                  <span className='font-medium'>Pro</span> -{' '}
                  <span className='text-muted-foreground'>
                    $9/month per user
                  </span>
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
      <DialogFooter>
        <Button variant='outline' onClick={() => setShowNewTeamDialog(false)}>
          Cancel
        </Button>
        <Button type='submit'>Continue</Button>
      </DialogFooter>
    </DialogContent>
  );
};

export default CreateShop;
