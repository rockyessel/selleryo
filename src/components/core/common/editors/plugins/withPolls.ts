import { Transforms, Range, Editor, Element, Point } from 'slate';
import { PollNode } from '../nodes';
import { SlateEditor } from '../types';
import { isBlockEmpty } from '../utils/helpers';

export const withPolls = (editor: SlateEditor) => {
  const { insertNode } = editor;

  editor.insertPoll = () => {
    const pollNode = PollNode();
    const selection = editor.selection;

    if (selection) {
      const [match] = Editor.nodes(editor, {
        match: (n) =>
          !Editor.isEditor(n) && Element.isElement(n) && n.type === 'paragraph',
      });

      if (match) {
        const [paragraph, path] = match;

        if (isBlockEmpty(editor, paragraph)) {
          // If the paragraph is empty, remove the entire node and insert the poll on selection
          Transforms.removeNodes(editor, { at: path });
          insertNode(pollNode, { at: selection });
          return;
        }
      }

      // If there's a non-empty node at the selection, insert the poll below the node
      Transforms.insertNodes(editor, pollNode, {
        at: Editor.after(editor, selection),
      });
      // normalizeNode(editor, { at: Editor.after(editor, selection) });
    } else {
      // If there's no selection, insert the poll at the bottom of the editor
      insertNode(pollNode);
      // normalizeNode(editor, { at: Editor.end(editor, []) });
    }
  };

  return editor;
};

// export const withPolls = (editor: SlateEditor) => {
//   const { deleteBackward, insertNode } = editor;

//   editor.insertPoll = () => {
//     const pollNode = PollNode();
//     insertNode(pollNode);
//   };

//   editor.deleteBackward = (...args) => {
//     const { selection } = editor;

//     if (selection && Range.isCollapsed(selection)) {
//       const [match] = Editor.nodes(editor, {
//         match: (n) =>
//           !Editor.isEditor(n) && Element.isElement(n) && n.type === 'poll',
//       });

//       if (match) {
//         // If the selection is at the start of a poll node, remove the poll
//         const [pollNode] = match;
//         const pollStart = Editor.start(editor, pollNode[1]);
//         if (Point.equals(selection.anchor, pollStart)) {
//           Transforms.removeNodes(editor, { at: pollNode[1] });
//           return;
//         }
//       }
//     }

//     deleteBackward(...args);
//   };

//   return editor;
// };
