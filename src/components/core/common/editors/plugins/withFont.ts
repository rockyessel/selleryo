// import { Editor, Transforms } from 'slate';
// import { CustomText, SlateEditor } from '../types';

// // Create the withFontInsertion plugin
// export const withFont = (editor: SlateEditor) => {
//   const { insertText, isInline } = editor;

//   // Override insertText to insert the selected font along with text
//   editor.insertText = (text) => {
//     const { selection } = editor;

//     if (selection && isInline(editor, editor.children[0])) {
//       const [parentNode] = Editor.parent(editor, selection);
//       const font = (parentNode as unknown as CustomText)?.font;

//       if (font) {
//         console.log('withFont: ', font);
//         Transforms.setNodes(
//           editor,
//           { font },
//           { match: (n) => Editor.isText(editor, n) }
//         );
//       }
//     }

//     insertText(text);
//   };

//   return editor;
// };
