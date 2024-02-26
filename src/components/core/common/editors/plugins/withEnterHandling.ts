import { Editor, Transforms, Element, Path, Node, Range } from 'slate';
import { EditorElementProps, ParagraphType, SlateEditor } from '../types';
import { ParagraphNode } from '../nodes';
import { GenerateID } from '../utils/helpers';

export const withEnterHandling = (editor: SlateEditor) => {
  const { insertBreak, deleteBackward } = editor;

  const paragraph = ParagraphNode(GenerateID());

  editor.insertBreak = () => {
    const { selection } = editor;

    if (selection && Range.isCollapsed(selection)) {
      const [start] = Range.edges(selection);
      const startNode = Editor.node(editor, start);

      // Check if the current node is a paragraph
      if (
        Element.isElement(startNode[0]) &&
        startNode[0].type === 'paragraph'
      ) {
        const [parentNode, parentPath] = Editor.parent(editor, start.path);

        // Check if the parent node is a list item
        if (
          Element.isElement(parentNode) &&
          parentPath.length > 1 &&
          parentPath[parentPath.length - 1] > 0
        ) {
          console.log('paragraph: ', paragraph);
          // Insert a new list item
          Transforms.splitNodes(editor, { always: true });
          Transforms.setNodes<EditorElementProps>(editor, paragraph);

          // Move to the new paragraph
          Transforms.moveNodes(editor, {
            at: start.path,
            to: Path.next(parentPath),
          });

          return;
        }
      }
    }

    insertBreak();
  };

  editor.deleteBackward = (...args) => {
    const { selection } = editor;

    if (selection && Range.isCollapsed(selection)) {
      const [start] = Range.edges(selection);
      const startNode = Editor.node(editor, start);

      // Check if the current node is a paragraph
      if (
        Element.isElement(startNode[0]) &&
        startNode[0].type === 'paragraph'
      ) {
        const [parentNode, parentPath] = Editor.parent(editor, start.path);

        // Check if the parent node is a list item
        if (
          Element.isElement(parentNode) &&
          parentPath.length > 1 &&
          parentPath[parentPath.length - 1] > 0
        ) {
          // Delete the list item and move to the previous paragraph
          Transforms.removeNodes(editor, { at: parentPath });
          Transforms.moveNodes(editor, {
            at: parentPath,
            to: Path.previous(parentPath),
          });

          return;
        }
      }
    }

    deleteBackward(...args);
  };

  return editor;
};
