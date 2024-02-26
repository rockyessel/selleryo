import { Button } from '@/components/ui/button';
import { SlidersHorizontal } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from '@/components/ui/sheet';
import Subcategory from './subcategory';
import { cn } from '@/lib/utils/helpers';
import Link from 'next/link';

const SubcategoryListAside = ({ className }: { className: string }) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant='outline'
          className={cn('flex items-start gap-4 lg:hidden', className)}
        >
          <SlidersHorizontal size={20} strokeWidth={0.5} />
          <span>Filter</span>
        </Button>
      </SheetTrigger>
      <SheetContent side={'left'}>
        <SheetHeader>
          <Link href='/'>
            {/* <Logo /> */}
            <h2 className='text-left text-3xl font-medium mr-1 mb-4 lg:mr-5'>
              Sakyi Handy
            </h2>
          </Link>
          <p className='text-zinc-500 text-left'>Categories</p>
        </SheetHeader>
        <Subcategory className='block' />
      </SheetContent>
    </Sheet>
  );
};

export default SubcategoryListAside;
