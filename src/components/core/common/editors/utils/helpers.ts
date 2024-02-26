import isUrl from 'is-url';
import { Editor, Path, Range, Text } from 'slate';
import { Element } from 'slate';
import { Transforms } from 'slate';
import cloneDeep from 'lodash.clonedeep';
import {
  ElementTypes,
  LinkType,
  RegisteredFontNames,
  SlateEditor,
} from '../types';
import { LinkNode, ParagraphNode, PollNode, SeparatorNode } from '../nodes';

import { ReactEditor } from 'slate-react';
import { Node } from 'slate';

/**
 * Shuffles characters in a string to create a randomized output.
 * @param input - The input string to shuffle.
 * @returns A string with shuffled characters.
 */
const shuffleString = (input: string): string => {
  const shuffleRatio = Math.random() * 0.8;
  let characters = input.split('');
  characters = characters.sort(() => Math.random() - shuffleRatio);
  return characters.join('');
};

/**
 * Generates a unique identifier based on the provided type.
 * @param type - The type of identifier.
 * @returns A unique identifier string.
 */
export const GenerateID = (type?: string): string => {
  const characters = shuffleString(
    'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
  );
  const length = Math.floor(Math.random() * 6) + 5;
  const usedChars: string[] = [];
  let result = '';
  for (let i = 0; i < length; i++) {
    let index: number;
    do {
      index = Math.floor(Math.random() * characters.length);
    } while (usedChars.includes(characters[index]));
    result += characters[index];
    usedChars.push(characters[index]);
  }
  if (type) {
    return `${type}_${result}`;
  }

  return result;
};

export const isImageUrl = (url: string) => {
  if (!url) return false;
  if (!isUrl(url)) return false;
  const ext = new URL(url).pathname.split('.').pop();
  return typeof url === 'string' ? true : false;
};

// interface Node {
//   type: string;
//   id?: string;
//   children?: Node[];
// }

export const checkChildren = (
  targetId: string,
  children: Node[] | undefined
): number => {
  if (!children) {
    return -1;
  }

  for (let i = 0; i < children.length; i++) {
    const item = children[i];
    if (item.id === targetId) {
      return i;
    }
    if (item.children) {
      const childIndex = checkChildren(targetId, item.children);
      if (childIndex !== -1) {
        return childIndex;
      }
    }
  }
  return -1;
};

export const findNodeIndexById = (
  targetId: string,
  nodes: Node[] | undefined
): number => {
  if (!nodes) {
    return -1;
  }

  for (let i = 0; i < nodes.length; i++) {
    const node = nodes[i];
    if (node.id === targetId) {
      return i;
    }
    if (node.children) {
      const childIndex = findNodeIndexById(targetId, node.children);
      if (childIndex !== -1) {
        return childIndex;
      }
    }
  }
  return -1;
};
export const isBlockActive = (
  editor: SlateEditor,
  type: string,
  blockType = 'type'
) => {
  const { selection } = editor;
  if (!selection) return false;

  const [match] = Array.from(
    Editor.nodes(editor, {
      at: Editor.unhangRange(editor, selection),
      match: (n) =>
        !Editor.isEditor(n) && Element.isElement(n) && n[blockType] === type,
    })
  );

  return !!match;
};

export const toggleBlock = (
  editor: SlateEditor,
  type: string,
  blockType = 'type'
) => {
  const isActive = isBlockActive(editor, type, blockType);
  const newType = isActive ? 'paragraph' : type;

  Transforms.setNodes(
    editor,
    { [blockType]: newType },
    { match: (n) => Element.isElement(n) && !Editor.isEditor(n) }
  );
};

// export const toggleFont = (editor: SlateEditor, font: RegisteredFontNames) => {
//   const { selection } = editor;

//   if (!selection) return;

//   const [textNode] = Editor.texts(editor, {
//     at: selection,
//     match: Text.isText,
//   });

//   if (textNode) {
//     const [node, path] = textNode;
//     const newProperties: Partial<CustomText> = { font };

//     Transforms.setNodes(editor, newProperties, { at: path });
//     return;
//   }

//   const [blockNode] = Editor.nodes(editor, {
//     at: selection,
//     match: (n) => !Editor.isEditor(n) && Editor.isBlock(editor, n),
//   });

//   if (blockNode) {
//     const [node, path] = blockNode;
//     const newProperties: Partial<CustomText> = { font };

//     if (Text.isText(node)) {
//       Transforms.setNodes(editor, newProperties, { at: path });
//     } else if (node.children.length > 0) {
//       // If the block node has children, update the font property of the first text child
//       const textPath = path.concat(0);
//       const textProperties: Partial<CustomText> = { font };
//       Transforms.setNodes(editor, textProperties, { at: textPath });
//     }
//   }
// };

// export const isMarkActive = (
//   editor: BaseEditor & ReactEditor & HistoryEditor,
//   format: string
// ) => {
//   const marks = Editor.marks(editor);
//   return marks ? marks[format] === true : false;
// };

// export const toggleMark = (
//   editor: BaseEditor & ReactEditor & HistoryEditor,
//   format: string
// ) => {
//   const isActive = isMarkActive(editor, format);

//   if (isActive) {
//     Editor.removeMark(editor, format);
//   } else {
//     Editor.addMark(editor, format, true);
//   }
// };

// export const handleEditorHotkeys = (
//   event: KeyboardEvent,
//   editor: SlateEditor
// ) => {
//   event.preventDefault();
//   for (const hotkey in HOTKEYS) {
//     if (isHotkey(hotkey)(event)) {
//       event.preventDefault();
//       const mark = HOTKEYS[hotkey as keyof typeof HOTKEYS];
//       toggleMark(editor, mark);
//     }
//   }
// };

export const getNodeAtSelection = (editor: SlateEditor) => {
  const [node] = Editor.nodes(editor, {
    match: (n) => !Editor.isEditor(n) && Element.isElement(n),
  });
  return node;
};

export function deepClone(object: any) {
  if (typeof window.structuredClone === 'function')
    return window.structuredClone(object);

  return cloneDeep(object);
}

/* Block Helpers */

// export const isBlockActive = (editor: Editor, type: ElementTypes) => {
//   if (!editor.selection) return false;
//   const [match] = Array.from(
//     Editor.nodes(editor, {
//       at: Editor.unhangRange(editor, editor.selection),
//       match: (n) => Editor.isBlock(editor, n) && n.type === type,
//     })
//   );
//   return !!match;
// };

export const toggleCurrentBlock = (editor: Editor, type: ElementTypes) => {
  Transforms.setNodes(
    editor,
    { type: isBlockActive(editor, type) ? undefined : type },
    { match: (n) => Editor.isBlock(editor, n) }
  );
};

/* Markup Helpers */

export const isMarkActive = (editor: Editor, type: any) => {
  const marks = Editor.marks(editor);
  return marks ? marks[type] === true : false;
};

export const toggleMark = (editor: Editor, type: ElementTypes) => {
  Transforms.setNodes(
    editor,
    { [type]: isMarkActive(editor, type) ? false : true },
    { match: (n) => Text.isText(n), split: true }
  );
};

export const getBlockAbove = (editor: SlateEditor) => {
  return Editor.above<Element>(editor, {
    match: (n) => Editor.isBlock(editor, n),
  });
};

export const insertSeparator = (editor: SlateEditor) => {
  Editor.withoutNormalizing(editor, () => {
    // Remove empty paragraph
    const entry = getBlockAbove(editor);
    if (entry) {
      const [node, path] = entry;

      if (node.type === 'paragraph' && Editor.isEmpty(editor, node)) {
        Transforms.removeNodes(editor, { at: path });
      }
    }
    const separator = SeparatorNode();
    const paragraph = ParagraphNode(GenerateID());

    Transforms.insertNodes(editor, [separator, paragraph], {
      match: (_, path) => path.length === 1,
    });
  });
};

export const isLinkActive = (editor: SlateEditor) => {
  const [match] = Editor.nodes(editor, {
    match: (n) => Element.isElement(n) && (n as LinkType).type === 'link',
  });
  return !!match;
};

/**
 * You need to check that the selection is collapsed, first
 */
// export const insertLink = (editor: SlateEditor, url: string) => {
//   const link = LinkNode(url);
//   Transforms.insertNodes(editor, link);
// };

/**
 * You need to check that the selection is expanded, first
 * Nothing happens if there is already a link within the selection
 */
export const turnIntoLink = (
  editor: SlateEditor,
  url: string,
  whereCursor: 'middle' | 'end'
) => {
  const link = LinkNode(url);
  if (!isLinkActive(editor)) {
    // TODO before  {type: 'link', url, children: []}
    Transforms.wrapNodes(editor, link, { split: true });

    // Place cursor
    const selection = editor.selection;
    if (selection) {
      let point = Range.end(selection);

      if (whereCursor === 'middle') {
        point = {
          path: point.path,
          offset: point.offset - Math.round(point.offset / 2),
        };
      }

      Transforms.select(editor, point);
    }
  }
};

export const changeLinkUrl = (editor: SlateEditor, url: string) => {
  Transforms.setNodes<LinkType>(
    editor,
    { url },
    {
      match: (n) => Element.isElement(n) && (n as LinkType).type === 'link',
    }
  );
};
export const unlink = (editor: Editor) => {
  Transforms.unwrapNodes(editor, {
    match: (n) => Element.isElement(n) && n.type === 'link',
    split: true,
  });

  // TODO Improvement: when range is expanded, we only want to unlink the selected part of the link, not the whole link element
  /* const selection = editor.selection!;
    if (Range.isCollapsed(selection)) {
      Transforms.unwrapNodes(editor, {
        match: (n) => Element.isElement(n) && n.type === "link",
      });
    } else {
      Editor.withoutNormalizing(editor, () => {
        Transforms.splitNodes(editor, {
          match: (n) => Element.isElement(n) && n.type === "link",
          at: selection.anchor,
          always: true,
        });
        Transforms.splitNodes(editor, {
          match: (n) => Element.isElement(n) && n.type === "link",
          at: selection.focus,
          always: true,
        });
        Transforms.unwrapNodes(editor, {
          match: (n) => Element.isElement(n) && n.type === "link",
          split: true,
          at: {
            anchor: { path: selection.anchor.path, offset: 0 },
            focus: { path: selection.focus.path, offset: 0 },
          },
        });
      });
    } */
};

export const toggleLink = (editor: Editor, showLinkInput: () => void) => {
  if (isLinkActive(editor)) {
    unlink(editor);
  } else {
    if (editor.selection && Range.isExpanded(editor.selection)) {
      showLinkInput();
    }
  }
};

export const removeLink = (editor: SlateEditor, opts = {}) => {
  Transforms.unwrapNodes(editor, {
    ...opts,
    match: (n) =>
      !Editor.isEditor(n) && Element.isElement(n) && n.type === 'link',
  });
};

export const insertLink = (editor: SlateEditor, url: string) => {
  if (!url) return;

  const { selection } = editor;
  const link = LinkNode(url, 'New Link');

  ReactEditor.focus(editor);

  if (!!selection) {
    const [parentNode, parentPath] = Editor.parent(
      editor,
      selection.focus?.path
    );

    // Remove the Link node if we're inserting a new link node inside of another
    // link.
    if (parentNode.type === 'link') {
      removeLink(editor);
    }

    if (editor.isVoid(parentNode)) {
      // Insert the new link after the void node
      Transforms.insertNodes(editor, ParagraphNode(GenerateID(), [link]), {
        at: Path.next(parentPath),
        select: true,
      });
    } else if (Range.isCollapsed(selection)) {
      // Insert the new link in our last known location
      Transforms.insertNodes(editor, link, { select: true });
    } else {
      // Wrap the currently selected range of text into a Link
      Transforms.wrapNodes(editor, link, { split: true });
      // Remove the highlight and move the cursor to the end of the highlight
      Transforms.collapse(editor, { edge: 'end' });
    }
  } else {
    // Insert the new link node at the bottom of the Editor when selection
    // is falsey
    Transforms.insertNodes(editor, ParagraphNode(GenerateID(), [link]));
  }
};

export const insertColor = (editor: SlateEditor, url: string) => {
  if (!url) return;

  const { selection } = editor;
  const color = ColorNode(url, 'New Link');

  ReactEditor.focus(editor);

  if (!!selection) {
    const [parentNode, parentPath] = Editor.parent(
      editor,
      selection.focus?.path
    );

    // Remove the Link node if we're inserting a new link node inside of another
    // link.
    if (parentNode.type === 'link') {
      removeLink(editor);
    }

    if (editor.isVoid(parentNode)) {
      // Insert the new link after the void node
      Transforms.insertNodes(editor, ParagraphNode(GenerateID(), [color]), {
        at: Path.next(parentPath),
        select: true,
      });
    } else if (Range.isCollapsed(selection)) {
      // Insert the new link in our last known location
      Transforms.insertNodes(editor, color, { select: true });
    } else {
      // Wrap the currently selected range of text into a Link
      Transforms.wrapNodes(editor, color, { split: true });
      // Remove the highlight and move the cursor to the end of the highlight
      Transforms.collapse(editor, { edge: 'end' });
    }
  } else {
    // Insert the new link node at the bottom of the Editor when selection
    // is falsey
    Transforms.insertNodes(editor, ParagraphNode(GenerateID(), [color]));
  }
};

export const toggleColorMark = (
  editor: SlateEditor,
  color: string,
  type: string
) => {
  const { selection } = editor;
  if (selection) {
    if (type === 'color') {
      // Toggle the color mark
      Transforms.setNodes(
        editor,
        { color },
        { match: (n) => Text.isText(n), split: true }
      );
    }

    if (type === 'highlight') {
      // Toggle the color mark
      Transforms.setNodes(
        editor,
        { highlight: color },
        { match: (n) => Text.isText(n), split: true }
      );
    }
  }
};

export const toggleFont = (editor: SlateEditor, font: RegisteredFontNames) => {
  const { selection } = editor;
  if (selection) {
    // Check if the color mark is already applied
    const marks = Editor.marks(editor);
    const isActive = isMarkActive(editor, 'font');

    // Toggle the color mark
    Transforms.setNodes(
      editor,
      { font: isActive ? undefined : font },
      { match: (n) => Text.isText(n), split: true }
    );
  }
};

// export const insertPoll = (editor: SlateEditor): void => {
//   const poll = PollNode();
//   const paragraph = ParagraphNode(GenerateID());

//   if (editor.selection) {
//     const [parentNode] = Editor.parent(editor, editor.selection);
//     const isEmptyText = Text.isText(parentNode) && parentNode.text === '';

//     if (!isEmptyText) {
//       // Insert a new line before inserting poll and paragraph
//       Transforms.insertNodes(editor, paragraph);
//     }

//     const path = [...editor.selection.anchor.path];
//     const offset = isEmptyText ? 0 : 1; // If not empty, move one step forward
//     path[path.length - 1] += offset;

//     Transforms.insertNodes(editor, [poll, paragraph], { at: path });
//   } else {
//     // If no selection, insert at the end
//     Transforms.insertNodes(editor, [poll, paragraph], {
//       at: [...Editor.end(editor)],
//     });
//   }

//   // Set focus to the new paragraph
//   Transforms.select(editor, Editor.end(editor));
// };
export const insertPoll = (editor: SlateEditor): void => {
  const poll = PollNode();
  const paragraph = ParagraphNode(GenerateID()); // Create a new paragraph node

  if (editor.selection) {
    const [parentNode] = Editor.parent(editor, editor.selection);

    // Check if the selected node is an empty text node
    if (Text.isText(parentNode) && parentNode.text === '') {
      const path = [...editor.selection.anchor.path];
      path[path.length - 1] += 1;
      Transforms.insertNodes(editor, [poll, paragraph], { at: path });
    } else {
      // If the selected node is not an empty text node, insert after that node
      const afterPoint = Editor.after(editor);
      if (afterPoint) {
        const path = [...afterPoint.path];
        Transforms.insertNodes(editor, [poll, paragraph], { at: path });
      } else {
        // Handle the case when Editor.after(editor) returns undefined
        // For example, if the editor is empty
        Transforms.insertNodes(editor, [poll, paragraph], { at: [0] });
      }
    }
  } else {
    // If there's no selection, insert at the end of the editor
    const end = Editor.end(editor, []);
    Transforms.insertNodes(editor, [poll, paragraph], { at: end });
  }
};

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

export const isBlockEmpty = (editor: SlateEditor, node: Node): boolean => {
  // @ts-ignore
  const nodePath = ReactEditor.findPath(editor, node);
  return (
    !Editor.string(editor, nodePath) &&
    (!node.children ||
      (Array.isArray(node.children) &&
        node.children.every((child) => Text.isText(child) && !child.text)))
  );
};
