import { Gift } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { RefAttributes } from 'react';
import { cn } from '@/lib/utils/helpers';

interface Props extends RefAttributes<HTMLDivElement> {
  className?: string;
}

const Subcategory = (props: Props) => {
  const { className, ...rest } = props;
  const f = [
    { name: 'Fruits & Vegetables' },
    { name: 'Meat & Fish' },
    { name: 'Snacks' },
    { name: 'Pet Care' },
    { name: 'Home & Cleaning' },
    { name: 'Dairy' },
    { name: 'Cooking' },
    { name: 'Breakfast' },
    { name: 'Beverage' },
    { name: 'Health & Beaut' },
  ];

  return (
    <Accordion
      type='single'
      {...rest}
      collapsible
      className={cn('divide-y-0 py-5 lg:py-6', className)}
    >
      {f.map((s, i) => (
        <AccordionItem className='divide-y-0' key={i} value={`item-${i + 1}`}>
          <AccordionTrigger className='flex gap-4 py-1 hover:no-underline text-sm group text-gray-700'>
            <p className='inline-flex items-center gap-4 py-2 group-hover:text-teal-600 font-semibold my-0'>
              <Gift className='group-hover:text-teal-600' strokeWidth={1} />
              <span className='group-hover:text-teal-600'>{s.name}</span>
            </p>
          </AccordionTrigger>
          <AccordionContent>
            <div className='flex items-start flex-col gap-2'>
              {['Dog', 'Cat', 'Mouse', 'Chicken', 'Rat'].map((s, i) => (
                <button key={i} className='group ml-10 font-semibold py-1'>
                  <span className='text-gray-700 group-hover:text-teal-600'>
                    {s}
                  </span>
                </button>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default Subcategory;
