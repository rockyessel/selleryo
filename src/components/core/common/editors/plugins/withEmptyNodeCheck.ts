import { Editor, Transforms } from 'slate';
import { ParagraphNode } from '../nodes';
import { SlateEditor } from '../types';
import { GenerateID } from '../utils/helpers';

export const withEmptyNodeCheck = (editor: SlateEditor) => {
  const { normalizeNode } = editor;

  editor.normalizeNode = (entry) => {
    const [node] = entry;

    if (Editor.isEditor(node) && editor.children.length === 0) {
      const paragraph = ParagraphNode(GenerateID());
      Transforms.insertNodes(editor, paragraph, {
        at: [0],
      });

      return;
    }

    normalizeNode(entry);
  };

  return editor;
};
