import { ImageDimensionsProps } from '@/interface';
import NextImage from '@/components/native/next-image';
import { getImageDimensions } from '@/lib/utils/helpers';
import { CSSProperties, useEffect, useState } from 'react';
import { ElementProps, ImageType, ImageTypeString } from '../../types';

const InlineImageElement = ({ renderProps }: ElementProps) => {
  const { attributes, children, element } = renderProps;
  const { alt, src, position } = element as ImageType<ImageTypeString>;
  const [imageObj, setImageObj] = useState<ImageDimensionsProps>();

  let style: CSSProperties = {};

  if (position) {
  }

  useEffect(() => {
    getImageDimensions(src).then((imgObj) => setImageObj(imgObj));
  }, [src]);
  return (
    <p {...attributes} className='inline-block relative ml-14 mb-0 mr-0 mt-0'>
      <span className='w-[50%] mt-2 ml-2 mb-0 mr-0 float-right'>
        <NextImage
          className='block h-[100%] w-full'
          {...imageObj!}
          style={{ maxWidth: '100%' }}
          alt={alt}
        />
      </span>
      <span className='inline'>{children}</span>
    </p>
  );
};

export default InlineImageElement;
