'use client';

import { ShopProps } from '@/types';
import { cn, getInitials } from '@/lib/utils/helpers';
import { Button } from '@/components/ui/button';
import CreateShop from '@/components/actions/create-shop';
import { Dialog, DialogTrigger } from '@/components/ui/dialog';
import { ComponentPropsWithoutRef, useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  CaretSortIcon,
  CheckIcon,
  PlusCircledIcon,
} from '@radix-ui/react-icons';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from '@/components/ui/command';
import Link from 'next/link';

type PopoverTriggerProps = ComponentPropsWithoutRef<typeof PopoverTrigger>;

interface ShopsSwitcherProps extends PopoverTriggerProps {
  shops: ShopProps[];
}

const ShopsSwitcher = ({ className, shops }: ShopsSwitcherProps) => {
  const [open, setOpen] = useState(false);
  const [showNewTeamDialog, setShowNewTeamDialog] = useState(false);
  const [selectedShop, setSelectedShop] = useState<ShopProps>(shops[0]);

  return (
    <Dialog open={showNewTeamDialog} onOpenChange={setShowNewTeamDialog}>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant='outline'
            role='combobox'
            aria-expanded={open}
            aria-label='Select a team'
            className={cn('w-[200px] justify-between', className)}
          >
            <Avatar className='mr-2 h-5 w-5'>
              <AvatarImage
                src={
                  selectedShop.image ??
                  'https://dashboard.convex.dev/convex-logo-only.svg'
                }
                alt={selectedShop.name}
                className='grayscale'
              />
              <AvatarFallback>{getInitials(selectedShop.name)}</AvatarFallback>
            </Avatar>
            {selectedShop.name}
            <CaretSortIcon className='ml-auto h-4 w-4 shrink-0 opacity-50' />
          </Button>
        </PopoverTrigger>
        <PopoverContent className='w-[200px] p-0'>
          <Command>
            <CommandList>
              <CommandInput placeholder='Search team...' />
              <CommandEmpty>No team found.</CommandEmpty>
              <CommandGroup heading={'Shops'}>
                {shops.map((shop, index) => (
                  <Link
                    key={index}
                    target='_blank'
                    href={`/dashboard/${shop._id}/admin`}
                  >
                    <CommandItem
                      onSelect={() => {
                        setSelectedShop(shop);
                        setOpen(false);
                      }}
                      className='text-sm'
                    >
                      <Avatar className='mr-2 h-5 w-5'>
                        <AvatarImage
                          src={
                            shop.image ??
                            'https://dashboard.convex.dev/convex-logo-only.svg'
                          }
                          alt={shop.name}
                          className='grayscale'
                        />
                        <AvatarFallback>
                          {getInitials(shop.name)}
                        </AvatarFallback>
                      </Avatar>
                      {shop.name}
                      <CheckIcon
                        className={cn(
                          'ml-auto h-4 w-4',
                          selectedShop.subdomain === shop.subdomain
                            ? 'opacity-100'
                            : 'opacity-0'
                        )}
                      />
                    </CommandItem>
                  </Link>
                ))}
              </CommandGroup>
            </CommandList>
            <CommandSeparator />
            <CommandList>
              <CommandGroup>
                <DialogTrigger asChild>
                  <CommandItem
                    onSelect={() => {
                      setOpen(false);
                      setShowNewTeamDialog(true);
                    }}
                  >
                    <PlusCircledIcon className='mr-2 h-5 w-5' />
                    Create Shop
                  </CommandItem>
                </DialogTrigger>
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
      <CreateShop setShowNewTeamDialog={setShowNewTeamDialog} />
    </Dialog>
  );
};

export default ShopsSwitcher;
