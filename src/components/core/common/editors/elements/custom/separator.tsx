import { useFocused, useSelected } from 'slate-react';
import { ElementProps } from '../../types';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils/helpers';

export const SeparatorElement = ({ renderProps }: ElementProps) => {
  const selected = useSelected();
  const focused = useFocused();

  const { attributes, children } = renderProps;

  return (
    <div {...attributes} className='w-full ml-14 p-0 m-0'>
      {children}
      <div
        className={cn(
          'w-full ml-14 pt-5 pb-5 px-0 pl-0 pr-0 m-0 cursor-default ',
          selected && focused
            ? 'ring-gray-700 ring-2'
            : 'hover:ring-2 hover:ring-gray-400'
        )}
        contentEditable={false}
      >
        <Separator />
      </div>
    </div>
  );
};
