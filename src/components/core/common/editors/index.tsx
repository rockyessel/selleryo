'use client';

import './styles/index.css';
import EditorRenderEl from './elements';
import { createEditorWithPlugins } from './plugins';
import { Editable, ReactEditor, Slate } from 'slate-react';
import { Transforms, createEditor } from 'slate';
import { NodeSettingsProvider } from '@/context/node-settings';
import { KeyboardEvent, useMemo, useRef, useState } from 'react';
import { toggleBlock, toggleMark } from './utils/helpers';
import { ELEMENTS_CMD, MARKUPS_CMD, initialValue } from './utils/constants';
import FixToolbar from './toolbar/fix-toolbar';
import { Eye, Paperclip, X } from 'lucide-react';
import { ElementSettingsProvider } from '@/context/element-settings';
import FloatingToolbar from './toolbar/floating-toolbar';

const TextEditor = () => {
  const titleRef = useRef<HTMLInputElement>(null);
  const editor = useMemo(() => createEditorWithPlugins(createEditor()), []);
  const handleEditorKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    // Handle arrow up and arrow left and focus to title
    if (
      (event.key === 'ArrowUp' || event.key === 'ArrowLeft') &&
      editor.selection?.anchor.path[0] === 0 &&
      editor.selection?.anchor.offset === 0
    ) {
      event.preventDefault();
      titleRef.current?.focus();
      return;
    }

    // Handle Ctrl keys
    if (event.ctrlKey) {
      // Match key combination for elements
      const match = ELEMENTS_CMD.find(
        (el) => el.key[0] === 'ctrl' && el.key[1] === event.key
      );
      console.log('match: ', match);
      if (match) {
        event.preventDefault();
        toggleBlock(editor, match.type as any);
        return;
      }

      // Match key combination for markups
      const match_m = MARKUPS_CMD.find(
        (markup) => markup.key[0] === 'ctrl' && markup.key[1] === event.key
      );
      console.log('match_m: ', match_m);
      if (match_m) {
        event.preventDefault();
        toggleMark(editor, match_m.type as any);
        return;
      }
    }

    // Handle soft line breaks (So Shift + Enter won't create a new paragraph)
    if (event.shiftKey && event.key === 'Enter') {
      event.preventDefault();
      Transforms.insertText(editor, '\n');
    }
  };

  const handleInputKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (
      event.key === 'Enter' ||
      event.key === 'ArrowDown' ||
      (event.key === 'ArrowRight' &&
        titleRef.current?.selectionEnd === title.length)
    ) {
      event.preventDefault();
      ReactEditor.focus(editor);
    }
  };

  const { renderElement, renderLeaf } = EditorRenderEl(editor);

  return (
    <div className='flex flex-col pb-20 lg:w-[65rem] rounded-lg border border-gray-200'>
      <Slate editor={editor} initialValue={initialValue}>
        <NodeSettingsProvider>
          <ElementSettingsProvider>
            <FixToolbar />
            <FloatingToolbar />
            <div className='px-2 flex w-full flex-col items-stretch pt-4 pb-2.5 overflow-y-auto'>
              <Editable
                id='editor'
                autoFocus
                spellCheck
                className='h-full w-full border-none outline-none mt-5'
                renderElement={renderElement}
                renderLeaf={renderLeaf}
                onKeyDown={handleEditorKeyDown}
              />
            </div>
          </ElementSettingsProvider>
        </NodeSettingsProvider>
      </Slate>
    </div>
  );
};
export default TextEditor;
