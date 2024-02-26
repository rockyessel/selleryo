import { Editor, Range, Transforms } from 'slate';
import { EditorElementProps, ParagraphType, SlateEditor } from '../types';

export const withDragAndDrop = (editor: SlateEditor) => {
  const { insertNode, deleteBackward } = editor;

  editor.insertNode = (node) => {
    insertNode(node);
    localStorage.setItem(
      'slate-editor-content',
      JSON.stringify(editor.children)
    );
  };

  editor.deleteBackward = (unit) => {
    const { selection } = editor;

    if (
      selection &&
      Range.isCollapsed(selection) &&
      Editor.isStart(editor, selection, unit)
    ) {
      const [match] = Editor.nodes<EditorElementProps>(editor, {
        match: (n) => n.type === 'paragraph',
      });

      if (match) {
        const [, path] = match;
        const start = Editor.start(editor, path);
        const end = selection.focus;

        if (start.offset === 0) {
          return;
        }

        const range = { anchor: start, focus: end };
        Transforms.select(editor, range);
        Transforms.delete(editor);
        return;
      }
    }

    deleteBackward(unit);
    localStorage.setItem(
      'slate-editor-content',
      JSON.stringify(editor.children)
    );
  };

  return editor;
};
