import { ColumnItemType, ElementProps } from '../../types';

const ColumnItem = ({ renderProps }: ElementProps) => {
  const { attributes, children, element } = renderProps;
  const {} = element as ColumnItemType;

  // console.log('element: ', element);
  return (
    <div
      {...attributes}
      className='border-2 border-dashed border-gray-500 block py-2 px-4'
    >
      <p className='relative'>{children}</p>
    </div>
  );
};

export default ColumnItem;
