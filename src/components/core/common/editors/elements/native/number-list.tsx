import React from 'react';
import { ElementProps, NumberListType } from '../../types';

const NumberListElement = ({ renderProps }: ElementProps) => {
  const { attributes, children, element } = renderProps;
  const { align } = element as NumberListType;

  return (
    <ol className='ml-14 p-0 m-0' style={{ textAlign: align }} {...attributes}>
      {children}
    </ol>
  );
};

export default NumberListElement;
