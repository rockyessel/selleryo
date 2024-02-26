import { GripVertical, MoreVertical, Plus } from 'lucide-react';
import React from 'react';
import { EditorElementProps, SlateEditor } from '../types';
import {
  NodeSettingsContextEventHandlers,
  NodeSettingsContextValues,
} from '@/context/node-settings';
import OptionsEl from './options-el';

interface Props {
  editor: SlateEditor;
  handlers: NodeSettingsContextEventHandlers;
  values: NodeSettingsContextValues;
  element: EditorElementProps;
}

const ActionEl = (props: Props) => {
  const { editor, element, handlers, values } = props;
  const { triggerPlusButton } = handlers;
  const {} = values;
  return (
    <div
      contentEditable={false}
      className='absolute top-0 inline-flex items-center gap-1'
    >
      <button onClick={() => triggerPlusButton(element)}>
        <Plus size={16} strokeWidth={1.75} />
      </button>

      <button>
        <GripVertical size={16} strokeWidth={1.75} />
      </button>

      <OptionsEl element={element} editor={editor} />
    </div>
  );
};

export default ActionEl;
