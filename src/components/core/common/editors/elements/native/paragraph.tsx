import { cn } from '@/lib/utils/helpers';
import { ElementProps } from '../../types';

const ParagraphElement = ({ renderProps }: ElementProps) => {
  const { attributes, children } = renderProps;

  return (
    <p className={cn('ml-14 p-0 mt-0 mb-0 mr-0')} {...attributes}>
      {children}
    </p>
  );
};

export default ParagraphElement;
