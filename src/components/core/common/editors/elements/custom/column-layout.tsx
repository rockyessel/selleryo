import { ColumnLayoutType, ElementProps } from '../../types';

// 2 Column (Equal Width) - grid-template-columns: 1fr 1fr;
// 2 columns (25% - 75%) - grid-template-columns: 1fr 3fr;
// 3 columns (equal width) - grid-template-columns: 1fr 1fr 1fr;
// 3 columns (25% - 50% -25%) - grid-template-columns: 1fr 2fr 1fr;
// 4 columns (equal width) - grid-template-columns: 1fr 1fr 1fr 1fr;

const ColumnLayoutElement = ({ editor, renderProps }: ElementProps) => {
  const { attributes, children, element } = renderProps;
  const { columns } = element as ColumnLayoutType;

  const gridTemplateColumns = Array.from({ length: columns }, () => '1fr').join(
    ' '
  );

  return (
    <div
      {...attributes}
      style={{
        gridTemplateColumns,
        wordBreak: 'break-word',
        whiteSpace: 'pre-wrap',
      }}
      className='w-full grid gap-2.5 my-2.5 mr-0 ml-14 '
    >
      {children}
    </div>
  );
};

export default ColumnLayoutElement;
