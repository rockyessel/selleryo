import { RenderLeafProps } from 'slate-react';

interface Props {
  leafProps: RenderLeafProps;
}

const Leaf = ({ leafProps: { attributes, leaf, children } }: Props) => {
  if (leaf.bold) {
    children = <strong>{children}</strong>;
  }

  if (leaf.italic) {
    children = <em>{children}</em>;
  }

  if (leaf.underline) {
    children = <u>{children}</u>;
  }

  if (leaf.strikethrough) {
    children = <del>{children}</del>;
  }
  if (leaf.sub) {
    children = <sub>{children}</sub>;
  }

  if (leaf.sup) {
    children = <sup>{children}</sup>;
  }

  if (leaf.highlight) {
    children = (
      <span style={{ backgroundColor: leaf.highlight }}>{children}</span>
    );
  }

  if (leaf.color) {
    children = <span style={{ color: leaf.color }}>{children}</span>;
  }

  if (leaf.code) {
    children = (
      <code className='font-mono text-red-500 text-sm py-1 px-1.5 mx-0.5 bg-gray-100 rounded'>
        {children}
      </code>
    );
  }

  return <span {...attributes}>{children}</span>;
};

export default Leaf;
