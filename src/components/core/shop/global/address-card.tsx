'use client';

import { useCart } from '@/context/cart';
import { cn } from '@/lib/utils/helpers';

interface Props {
  address: any;
  isSelectable: boolean;
}

const AddressCard = ({ address, isSelectable }: Props) => {
  const { handleSelection, selectedBillingAddress, selectedShippingAddress } =
    useCart();

  return (
    <li
      onClick={() => handleSelection(address)}
      className={cn(
        'flex grow flex-col pl-4 pr-20 py-4 rounded-md',
        (isSelectable && selectedBillingAddress?.title === address.title) ||
          selectedShippingAddress?.title === address.title
          ? 'bg-white border border-green-600'
          : 'bg-gray-100'
      )}
    >
      <div className='text-gray-800 text-sm font-bold leading-[143%] capitalize'>
        {address.addressType}
      </div>
      <div className='max-w-[329px] text-gray-700 text-sm leading-[143%] mt-3'>
        {`${address?.streetAddress}, ${address?.state}, ${address?.city}, ${address?.zip}, ${address?.country}`}
      </div>
    </li>
  );
};

export default AddressCard;
