import { BlockQuoteType, ElementProps } from '../../types';

const BlockQuoteELement = ({ renderProps }: ElementProps) => {
  const { attributes, children, element } = renderProps;

  const { align } = element as BlockQuoteType;

  const styles = { textAlign: align };

  return (
    <blockquote className='ml-14 p-0 m-0' style={styles} {...attributes}>
      {children}
    </blockquote>
  );
};

export default BlockQuoteELement;
