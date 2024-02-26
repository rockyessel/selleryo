import React from 'react';
import Leaf from './custom/leaf';
import { useCallback } from 'react';
import WrapperEl from './wrapper-el';
import { SlateEditor } from '../types';
import { RenderElementProps, RenderLeafProps } from 'slate-react';

const EditorRenderEl = (editor: SlateEditor) => {
  const renderLeaf = useCallback((props: RenderLeafProps) => {
    if (props.leaf.placeholder) {
      return (
        <span
          className='inline-flex pointer-events-none absolute top-0 bg-transparent opacity-30'
          contentEditable={false}
        >
          Type &apos;/&apos; for commands
        </span>
      );
    }

    return <Leaf leafProps={props} />;
  }, []);

  const renderElement = useCallback(
    (props: RenderElementProps) => {
      return <WrapperEl editor={editor} renderProps={props} />;
    },
    [editor]
  );

  return { renderLeaf, renderElement };
};

export default EditorRenderEl;
