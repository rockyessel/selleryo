import { Categories } from '@/constants/categories';
import { cardStyles } from '@/styles/classStyles';
import { Search } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import CategoryListItem from './category-list-item';
import ListPagination from '../common/list-pagination';
import { getItemsFromCollection } from '@/services/firebase/crud';
import ItemLoader from '../common/item-loader';
import { cn } from '@/lib/utils/helpers';

export default function CategoryList() {
  const [categories, setCategories] = useState<any[] | []>([]);
  const [loadingItems, setLoadingItems] = useState(true);

  useEffect(() => {
    const getAllCategories = () => {
      getItemsFromCollection('categories', undefined, (categories: any) => {
        // categories is an array containing all category documents
        setCategories(categories);
        // Perform additional actions with the retrieved categories
        setLoadingItems(false);
      });
    };
    getAllCategories();
  }, []);

  return (
    <div className={cardStyles.list}>
      <div className='p-4 sticky top-0 bg-white z-10'>
        <div className='relative'>
          <Search strokeWidth={1} size={18} className='absolute top-2 left-3' />

          <input
            type='text'
            placeholder='Start typing to search for categories'
            className='border bg-white pl-10 self-stretch flex items-stretch justify-between gap-2.5 outline-none pr-20 py-1 w-full '
          />
        </div>
      </div>
      {/* Table */}
      <table className='border-collapse'>
        <thead className='sticky top-[65px] bg-white z-10 uppercase text-sm'>
          <tr className='border-y'>
            <td className='w-[5%]'>
              <div className='w-16 h-10 flex items-center justify-center'>
                <input
                  type='checkbox'
                  className='w-3 h-3 accent-teal-500 fill-white'
                />
              </div>
            </td>
            <td className='text-sm px-3 py-2 w-[60%]'>name</td>
            <td className='px-3 w-[15%]'>visibility</td>
            <td className='px-3 py-2 w-[5%]'></td>
          </tr>
        </thead>
        <tbody className={cn(loadingItems ? 'w-full relative' : '')}>
          {loadingItems ? (
            <tr className='border border-t-0 !w-[100%] flex items-center justify-center absolute bg-white z-10'>
              <td className='px-3 py-1 text-sm inline-flex items-center gap-2'>
                <ItemLoader />
              </td>
            </tr>
          ) : (
            categories.map((cat, index) => {
              return <CategoryListItem key={index} category={cat} />;
            })
          )}
        </tbody>
      </table>
      {/* Control Buttons */}
      {!loadingItems && <ListPagination />}
    </div>
  );
}
