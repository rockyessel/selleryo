import React from 'react';
import { HeadingTypesString, ElementProps, HeadingType } from '../../types';
import ParagraphElement from './paragraph';
import { useSlate } from 'slate-react';
import { cn } from '@/lib/utils/helpers';

const HeadingElement = ({ renderProps }: ElementProps) => {
  const editor = useSlate();
  const { attributes, children, element } = renderProps;

  const { type, align } = element as HeadingType<HeadingTypesString>;

  const styledAttributes = {
    ...attributes,
    style: {
      textAlign: align,
    },
  };
  const defaultCSS = 'ml-14 m-0 p-0';

  switch (type) {
    case 'heading-one':
      return <h1 className={cn(defaultCSS)} {...styledAttributes}>{children}</h1>
    case 'heading-two':
      return <h2 className={cn(defaultCSS)} {...styledAttributes}>{children}</h2>;
    case 'heading-three':
      return <h3 className={cn(defaultCSS)} {...styledAttributes}>{children}</h3>;
    case 'heading-four':
      return <h4 className={cn(defaultCSS)} {...styledAttributes}>{children}</h4>;
    case 'heading-five':
      return <h5 className={cn(defaultCSS)} {...styledAttributes}>{children}</h5>;
    case 'heading-six':
      return <h6 className={cn(defaultCSS)} {...styledAttributes}>{children}</h6>;
    default:
      return <ParagraphElement editor={editor} renderProps={renderProps} />;
  }
};

export default HeadingElement;
