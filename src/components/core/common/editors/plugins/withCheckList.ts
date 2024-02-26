import { Transforms, Range, Editor, Element, Point } from 'slate';
import { CheckListNode } from '../nodes';
import { SlateEditor } from '../types';

export const withChecklists = (editor: SlateEditor) => {
  const { deleteBackward } = editor;

  editor.deleteBackward = (...args) => {
    const { selection } = editor;

    if (selection && Range.isCollapsed(selection)) {
      const [match] = Editor.nodes(editor, {
        match: (n) =>
          !Editor.isEditor(n) &&
          Element.isElement(n) &&
          n.type === 'check-list',
      });

      if (match) {
        const [, path] = match;
        const start = Editor.start(editor, path);

        if (Point.equals(selection.anchor, start)) {
          const newProperties: Partial<Element> = {
            type: 'paragraph',
          };
          Transforms.setNodes(editor, newProperties, {
            match: (n) =>
              !Editor.isEditor(n) &&
              Element.isElement(n) &&
              n.type === 'check-list',
          });
          return;
        }
      }
    }

    deleteBackward(...args);
  };

  return editor;
};

export const insertCheckList = (editor: SlateEditor, status: boolean) => {
  const checkList = CheckListNode(status);
  Transforms.insertNodes(editor, checkList);
};
