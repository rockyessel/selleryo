import { Range, Transforms } from 'slate';
import { SlateEditor } from '../types';
import { Path } from 'slate';
import { Node } from 'slate';
import { Element } from 'slate';
import { Editor } from 'slate';
import { ParagraphNode } from '../nodes';
import { GenerateID } from '../utils/helpers';

export const withVoidNodes = (editor: SlateEditor) => {
  const { insertBreak, deleteBackward } = editor;

  editor.insertBreak = () => {
    if (!editor.selection || !Range.isCollapsed(editor.selection)) {
      return insertBreak();
    }

    const selectedNodePath = Path.parent(editor.selection.anchor.path);
    const selectedNode = Node.get(editor, selectedNodePath);
    const paragraph = ParagraphNode(GenerateID());

    if (Element.isElement(selectedNode) && Editor.isVoid(editor, selectedNode)) {
      Editor.insertNode(editor, paragraph);
      return;
    }

    insertBreak();
  };

  // if prev node is a void node, remove the current node and select the void node
  editor.deleteBackward = (unit) => {
    if (
      !editor.selection ||
      !Range.isCollapsed(editor.selection) ||
      editor.selection.anchor.offset !== 0
    ) {
      return deleteBackward(unit);
    }

    const parentPath = Path.parent(editor.selection.anchor.path);
    const parentNode = Node.get(editor, parentPath);
    const parentIsEmpty = Node.string(parentNode).length === 0;

    if (parentIsEmpty && Path.hasPrevious(parentPath)) {
      const prevNodePath = Path.previous(parentPath);
      const prevNode = Node.get(editor, prevNodePath);
      if (Element.isElement(prevNode) && Editor.isVoid(editor, prevNode)) {
        Transforms.removeNodes(editor);
        return Transforms.select(editor, prevNodePath);
      }
    }

    deleteBackward(unit);
  };

  return editor;
};
