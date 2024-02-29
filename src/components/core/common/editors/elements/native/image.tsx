import { css } from '@emotion/css';
import { Transforms } from 'slate';
import { Button } from '@/components/ui/button';
import NextImage from '@/components/native/next-image';
import { ReactEditor, useFocused, useSelected } from 'slate-react';
import { ElementProps, ImageType, ImageTypeString } from '../../types';

const ImageElement = ({ editor, renderProps }: ElementProps) => {
  const { attributes, children, element } = renderProps;
  const { alt, src, align } = element as ImageType<ImageTypeString>;
  const path = ReactEditor.findPath(editor, element);
  const selected = useSelected();
  const focused = useFocused();

  return (
    <div className='ml-14 p-0 m-0' {...attributes}>
      {children}
      <div
        contentEditable={false}
        className={css`
          position: relative;
        `}
      >
        <NextImage
          style={{ margin: 0, padding: 0 }}
          alt={alt}
          src={src}
          width={1000}
          height={1000}
          className={css`
            display: block;
            max-width: 100%;
            max-height: 20em;
            box-shadow: ${selected && focused ? '0 0 0 3px #B4D5FF' : 'none'};
          `}
        />
        <Button
          onClick={() => {
            // console.log('path: ', path);
            // console.log('Editor In Button: ', editor);
            Transforms.removeNodes(editor, { at: path });
          }}
          className={css`
            opacity: ${selected && focused ? '10' : '0'};
            display: inline;
            position: absolute;
            top: 0.5em;
            left: 0.5em;
            background-color: white;
          `}
        >
          <span>delete</span>
        </Button>
      </div>
    </div>
  );
};

export default ImageElement;
