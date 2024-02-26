import { IdGen } from '@/lib/utils/helpers';
import {
  EditorElementProps,
  HeadingTypesString,
  LinkType,
  PollQuestionType,
  PollType,
} from '../types';
import { GenerateID } from '../utils/helpers';

/**
 * Creates a link element node for the Lleryo Editor.
 * @param href - The URL of the link.
 * @param text - The text content of the link.
 * @returns The LinkElement node.
 */
export const LinkNode = (href: string, text: string): LinkType => {
  return {
    id: GenerateID(),
    type: 'link',
    url: href,
    align: undefined,
    nodeType: 'inline',
    children: [{ text }],
  };
};

export const PollQuestionNode = (value?: string): PollQuestionType => {
  return {
    id: IdGen('pollItem'),
    type: 'poll-item',
    question: value || 'Edit this text',
    nodeType: 'inline',
    children: [{ text: '' }],
  };
};

export const PollNode = (): PollType => {
  return {
    id: GenerateID(),
    nodeType: 'void',
    type: 'poll',
    children: [PollQuestionNode()],
  };
};

export const ColumnItemNode = (): EditorElementProps => {
  return {
    nodeType: 'inline',
    type: 'column-item',
    children: [{ text: '' }],
  };
};

/**
 * Creates a bullet list element node for the Lleryo Editor.
 * @returns The BulletListElement node.
 */
export const BulletListNode = (): EditorElementProps => {
  return {
    id: GenerateID(),
    nodeType: '',
    type: 'bullet-list',
    align: undefined,
    children: [{ text: '' }],
  };
};

/**
 * Creates a number list element node for the Lleryo Editor.
 * @param ordered - Indicates whether the list is ordered (true) or unordered (false).
 * @returns The NumberListElement node.
 */
export const NumberListNode = (ordered: boolean): EditorElementProps => {
  return {
    id: GenerateID(),
    nodeType: 'block',
    type: 'numbered-list',
    align: undefined,
    ordered,
    children: [{ text: '' }],
  };
};

/**
 * Creates a heading element node for the Lleryo Editor.
 * @param level - The level of the heading (1 to 6).
 * @returns The HeadingElement node.
 */
export const HeadingNode = (type: HeadingTypesString): EditorElementProps => {
  return {
    id: GenerateID(),
    nodeType: 'block',
    type,
    children: [{ text: '' }],
  };
};

/**
 * Creates a heading element node for the Lleryo Editor.
 * @param level - The level of the heading (1 to 6).
 * @returns The HeadingElement node.
 */
export const SeparatorNode = (): EditorElementProps => {
  return {
    id: GenerateID(),
    nodeType: 'block',
    type: 'separator',
    children: [{ text: '' }],
  };
};

/**
 * Creates a code block element node for the Lleryo Editor.
 * @param language - The programming language associated with the code.
 * @param code - The code content.
 * @returns The CodeElement node.
 */
export const CodeNode = (
  language: string,
  code: string
): EditorElementProps => {
  return {
    id: GenerateID(),
    nodeType: 'block',
    type: 'code',
    language,
    code,
  };
};

/**
 * Creates a paragraph element node for the Lleryo Editor.
 * @returns The ParagraphElement node.
 */
export const ParagraphNode = (
  id: string,
  children = [{ text: '' }]
): EditorElementProps => {
  return {
    id,
    nodeType: 'block',
    type: 'paragraph',
    align: undefined,
    children,
  };
};

/**
 * Creates an inline image element node for the Lleryo Editor.
 * @param src - The source URL of the image.
 * @param alt - The alternative text for the image.
 * @param position - The position of the inline image ('left' or 'right').
 * @returns The InlineImageElement node.
 */
export const InlineImageNode = (
  src: string,
  alt: string,
  position: 'left' | 'right'
): EditorElementProps => {
  return {
    id: GenerateID(),
    nodeType: 'void',
    type: 'inline-image',
    src,
    align: undefined,
    alt,
    position,
    children: [{ text: '' }],
  };
};

/**
 * Creates an image URL element node for the Lleryo Editor.
 * @param src - The source URL of the image.
 * @param alt - The alternative text for the image.
 * @returns The ImageURLElement node.
 */
export const ImageURLNode = (src: string, alt: string): EditorElementProps => {
  return {
    id: GenerateID(),
    nodeType: 'void',
    type: 'url-image',
    src,
    align: undefined,
    alt,
    children: [{ text: '' }],
  };
};

/**
 * Creates an image element node for the Lleryo Editor.
 * @param src - The source URL of the image.
 * @param alt - The alternative text for the image.
 * @returns The ImageElement node.
 */
export const ImageNode = (src: string, alt: string): EditorElementProps => {
  return {
    id: GenerateID(),
    nodeType: 'void',
    type: 'image',
    src,
    align: undefined,
    alt,
    children: [{ text: '' }],
  };
};

/**
 * Creates a grid images element node for the Lleryo Editor.
 * @param images - An array of objects with 'src' and 'alt' properties for each image.
 * @returns The GridImagesElement node.
 */
export const GridImagesNode = (
  images: { src: string; alt: string }[]
): EditorElementProps => {
  return {
    id: GenerateID(),
    nodeType: 'void',
    type: 'grid-image',
    images,
    children: [{ text: '' }],
  };
};

/**
 * Creates a check list item element node for the Lleryo Editor.
 * @param checked - Indicates whether the item is checked (true) or unchecked (false).
 * @returns The CheckListItemElement node.
 */
export const CheckListNode = (checked: boolean): EditorElementProps => {
  return {
    id: GenerateID(),
    nodeType: '',
    type: 'check-list',
    checked,
    align: undefined,
    children: [{ text: '' }],
  };
};

/**
 * Creates a block quote element node for the Lleryo Editor.
 * @returns The BlockQuoteElement node.
 */
export const BlockQuoteNode = (): EditorElementProps => {
  return {
    id: GenerateID(),
    nodeType: 'block',
    type: 'block-quote',
    align: undefined,
    children: [{ text: '' }],
  };
};
