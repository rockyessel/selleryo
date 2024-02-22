import DummyProducts from '@/constants/products';
import React, { useEffect, useState } from 'react';
import ProductListItem from './product-list-item';
import Button from '../common/button';
import { Search, Sliders } from 'lucide-react';
import ListPagination from '../common/list-pagination';
import EmptyListCard from '../common/empty-list-card';
import {
  addItemToCollection,
  getItemsFromCollection,
} from '@/services/firebase/crud';
import ItemLoader from '../common/item-loader';
import { cn } from '@/lib/utils/helpers';

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const [loadingItems, setLoadingItems] = useState(true);
  useEffect(() => {
    setLoading(true);
    getItemsFromCollection('products', '', (res: any) => {
      setProducts(res);
      setLoading(false);
      setLoadingItems(false);
    });
    // updloadDummyProducts();
    // console.log("api key", products);
  }, []);

  function updloadDummyProducts() {
    DummyProducts?.map((prod) => {
      addItemToCollection('products', prod, '');
    });
  }

  return (
    <div className='w-full bg-white'>
      <div className='sticky top-0 bg-white flex items-center p-3 space-x-3'>
        <Button
          type='none'
          icon={<Sliders className='w-4 h-4 text-black' />}
          onClick={() => alert('filter')}
        />
        <div className='relative h-full w-full'>
          <Search strokeWidth={1} size={18} className='absolute top-2 left-3' />

          <input
            type='text'
            placeholder='Start typing to search for categories'
            className='text-sm w-full h-[38px] border bg-white pl-10 self-stretch flex items-stretch justify-between gap-2.5 outline-none py-1 w-full '
          />
        </div>
      </div>

      <table className='w-full text-sm text-left rtl:text-right text-gray-500'>
        <thead className='sticky top-[61.8px] bg-white text-xs text-gray-700 uppercase border-collapse h-10 border-y'>
          <tr>
            <th className='w-16 h-10 flex items-center justify-center '>
              <input
                type='checkbox'
                className='w-3 h-3 accent-teal-500 text-whtie'
              />
            </th>
            <th className='px-3 py-2'>Product</th>
            <th className='px-3 py-2'>Category</th>
            <th className='px-3 py-2'>Stack</th>
            <th className='px-3 py-2'>Price</th>
            <th className='px-3 py-2'></th>
          </tr>
        </thead>
        <tbody className={cn(loadingItems ? 'w-full relative' : '')}>
          {loadingItems ? (
            <tr className='border border-t-0 !w-[100%] flex items-center justify-center absolute bg-white z-10'>
              <td className='px-3 py-1 text-sm inline-flex items-center gap-2'>
                <ItemLoader />
              </td>
            </tr>
          ) : products.length > 0 ? (
            products?.map((product, index) => {
              return <ProductListItem key={index} product={product} />;
            })
          ) : (
            <EmptyListCard text={loading ? 'Loading items...' : ''} />
          )}
        </tbody>
      </table>
      {products.length > 0 && <ListPagination />}
    </div>
  );
}
