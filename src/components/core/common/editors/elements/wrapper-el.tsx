import El from './el';
import ActionEl from './action-el';
import { MouseEvent } from 'react';
import { SlateEditor } from '../types';
import { RenderElementProps } from 'slate-react';
import { useNodeSettings } from '@/context/node-settings';

interface Props {
  editor: SlateEditor;
  renderProps: RenderElementProps;
}

const WrapperEl = (props: Props) => {
  const { editor, renderProps } = props;
  const { element, attributes } = renderProps;
  const [values, handlers] = useNodeSettings();
  const { onHoverElement } = handlers;
  const { hoveredElement } = values;

  if (element.nodeType === 'inline') {
    return <El {...renderProps} />;
  }

  const isHovered = hoveredElement?.id === element?.id;

  const onMouseEnter = (event: MouseEvent<HTMLDivElement>) => {
    onHoverElement(event, element);
  };

  return (
    <div
      data-element-id={element.id}
      data-element-type={element.type}
      data-element-node-type={element.nodeType}
      className='flex items-center relative'
      onMouseEnter={onMouseEnter}
      {...attributes}
    >
      {isHovered && (
        <ActionEl
          element={element}
          handlers={handlers}
          values={values}
          editor={editor}
        />
      )}
      <El {...renderProps} />
    </div>
  );
};

export default WrapperEl;
