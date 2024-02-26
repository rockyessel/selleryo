import LinkElement from './native/link';
import ImageElement from './native/image';
import ColumnItem from './custom/column-item';
import ParagraphElement from './native/paragraph';
import CheckListElement from './native/checklist';
import GridImageElement from './custom/grid-image';
import { SeparatorElement } from './custom/separator';
import InlineImageElement from './custom/inline-image';
import ColumnLayoutElement from './custom/column-layout';
import { RenderElementProps, useSlate } from 'slate-react';

const El = (props: RenderElementProps) => {
  const editor = useSlate();
  const { align } = props.element as any;
  const style = { textAlign: align };
  switch (props.element.type) {
    case 'image':
      return <ImageElement editor={editor} renderProps={props} />;
    case 'gif-image':
      return <ImageElement editor={editor} renderProps={props} />;
    case 'grid-image':
      return <GridImageElement editor={editor} renderProps={props} />;
    case 'url-image':
      return <ImageElement editor={editor} renderProps={props} />;
    case 'inline-image':
      return <InlineImageElement editor={editor} renderProps={props} />;
    case 'check-list':
      return <CheckListElement editor={editor} renderProps={props} />;
    case 'column-layout':
      return <ColumnLayoutElement editor={editor} renderProps={props} />;
    case 'column-item':
      return <ColumnItem editor={editor} renderProps={props} />;
    case 'block-quote':
      return (
        <blockquote
          className='ml-14 p-0 m-0'
          style={style}
          {...props.attributes}
        >
          {props.children}
        </blockquote>
      );
    case 'bullet-list':
      return (
        <ul className='ml-14 p-0 m-0' style={style} {...props.attributes}>
          {props.children}
        </ul>
      );
    case 'heading-one':
      return (
        <h1 className='ml-14 p-0 m-0' style={style} {...props.attributes}>
          {props.children}
        </h1>
      );
    case 'heading-two':
      return (
        <h2 className='ml-14 p-0 m-0' style={style} {...props.attributes}>
          {props.children}
        </h2>
      );
    case 'heading-three':
      return (
        <h3 className='ml-14 p-0 m-0' style={style} {...props.attributes}>
          {props.children}
        </h3>
      );
    case 'heading-four':
      return (
        <h4 className='ml-14 p-0 m-0' style={style} {...props.attributes}>
          {props.children}
        </h4>
      );
    case 'heading-five':
      return (
        <h5 className='ml-14 p-0 m-0' style={style} {...props.attributes}>
          {props.children}
        </h5>
      );
    case 'heading-six':
      return (
        <h6 className='ml-14 p-0 m-0' style={style} {...props.attributes}>
          {props.children}
        </h6>
      );
    case 'numbered-list':
      return (
        <ol className='ml-14 p-0 m-0' style={style} {...props.attributes}>
          {props.children}
        </ol>
      );
    case 'link':
      return <LinkElement editor={editor} renderProps={props} />;
    case 'separator':
      return <SeparatorElement editor={editor} renderProps={props} />;
    default:
      return <ParagraphElement editor={editor} renderProps={props} />;
  }
};

export default El;
