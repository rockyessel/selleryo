import { Fragment, HTMLAttributes, useEffect, useState } from 'react';
import { Salad, ChevronDown, Boxes } from 'lucide-react';
import * as DropDown from '@/components/ui/dropdown-menu';
import { cn } from '@/lib/utils/helpers';
import { getAllCategories } from '@/lib/utils/services/firebase';
import Link from 'next/link';
import { CategoryProps } from '@/interface';

interface Props extends HTMLAttributes<HTMLDivElement> {
  className?: string;
}

const CategoryDropdown = (props: Props) => {
  const [categories, setCategories] = useState<CategoryProps[]>([]);

  console.log('categories: ', categories);

  useEffect(() => {
    getAllCategories().then((categories) => setCategories(categories));
  }, []);

  const { className, ...rest } = props;
  return (
    <DropDown.DropdownMenu>
      <DropDown.DropdownMenuTrigger asChild>
        <div
          {...rest}
          className={cn(
            'border group bg-white flex items-center gap-1 rounded-md p-2 py-1.5',
            className
          )}
        >
          <Boxes className='text-teal-600 w-5 h-5 mr-2' strokeWidth={1} />
          <div className='justify-center text-sm text-teal-600 text-center font-regular  mr-auto'>
            Bags
          </div>
          <ChevronDown className='text-teal-600 w-4 h-4' strokeWidth={3} />
        </div>
      </DropDown.DropdownMenuTrigger>
      <DropDown.DropdownMenuContent className='w-54'>
        {categories?.map((category, index) => (
          <Fragment key={index}>
            <DropDown.DropdownMenuItem className='flex items-center gap-5 text-sm'>
              <Link
                href={`/categories/${category.slug}`}
                className='inline-flex items-start gap-2 text-gray-700 group'
              >
                <Salad
                  className='group-hover:text-teal-600 w-4 h-4'
                  strokeWidth={1}
                />
                <span className='justify-center group-hover:text-teal-600 text-center font-semibold'>
                  {category.name}
                </span>
              </Link>
            </DropDown.DropdownMenuItem>
            {index === categories.length - 1 ? null : (
              <DropDown.DropdownMenuSeparator />
            )}
          </Fragment>
        ))}
      </DropDown.DropdownMenuContent>
    </DropDown.DropdownMenu>
  );
};

export default CategoryDropdown;
