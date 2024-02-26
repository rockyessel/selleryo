import React from 'react';
import { BulletListType, ElementProps } from '../../types';

const BulletListElement = ({ renderProps }: ElementProps) => {
  const { attributes, children, element } = renderProps;

  const { align } = element as BulletListType;

  return (
    <ul className='ml-14 p-0 m-0' {...attributes} style={{ textAlign: align }}>
      {children}
    </ul>
  );
};

export default BulletListElement;
