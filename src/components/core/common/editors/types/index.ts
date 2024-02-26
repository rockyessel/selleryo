import { NextFont } from 'next/dist/compiled/@next/font';
import { ReactNode } from 'react';
import { BaseEditor } from 'slate';
import { HistoryEditor } from 'slate-history';
import { ReactEditor, RenderElementProps } from 'slate-react';

export type PollEditor = {
  insertPoll: () => void;
};

export type SlateEditor = BaseEditor & ReactEditor & HistoryEditor & PollEditor;

declare module 'slate' {
  interface CustomTypes {
    Editor: SlateEditor;
    Element: EditorElementProps;
    Text: CustomText;
  }
}

// Define your Slate renderer options interface
export interface SlateRendererOptions {
  className?: string;
  // Add other options as needed
}

export type EditorElementProps =
  | ParagraphType
  | HeadingType<HeadingTypesString>
  | NumberListType
  | LinkType
  | ImageType<ImageTypeString>
  | GridImagesType
  | BlockQuoteType
  | CodeType
  | CheckListType
  | BulletListType
  | ColumnLayoutType
  | ColumnItemType
  | SeparatorType;

export type ElementTypes = EditorElementProps['type'];

export type CustomText = {
  text: string;
  color?: string;
  placeholder?: boolean;
  bold?: boolean;
  italic?: boolean;
  underline?: boolean;
  code?: boolean;
  strikethrough?: boolean;
  sub?: boolean;
  sup?: boolean;
  highlight?: string;
};

export type ImageTypeString =
  | 'image'
  | 'inline-image'
  | 'url-image'
  | 'gif-image';

export type HeadingTypesString =
  | 'heading-one'
  | 'heading-two'
  | 'heading-three'
  | 'heading-four'
  | 'heading-five'
  | 'heading-six';

export type LeafStrings = keyof CustomText;

export type ColumnItemType = {
  nodeType: 'inline';
  type: 'column-item';
  children: CustomText[];
};

export type ColumnLayoutType = {
  id: string;
  nodeType: 'block';
  type: 'column-layout';
  columns: number;
  children: ColumnItemType[];
};

export type ParagraphType = {
  id: string;
  nodeType: 'block';
  type: 'paragraph';
  align?: 'left' | 'center' | 'right' | 'justify';
  children: CustomText[];
};

export type GridImagesType = {
  id: string;
  nodeType: 'void';
  type: 'grid-image';
  images: { src: string; alt: string; width: number; height: number }[];
  children: CustomText[];
};

export type SeparatorType = {
  id: string;
  nodeType: 'void';
  type: 'separator';
  children: CustomText[];
};

export type ImageType<T extends ImageTypeString> = {
  id: string;
  nodeType: 'void';
  type: T;
  src: string;
  alt: string;
  align?: 'left' | 'center' | 'right' | 'justify';
  position?: 'left' | 'right';
  children: CustomText[];
};

export type BlockQuoteType = {
  id: string;
  nodeType: 'block';
  type: 'block-quote';
  align?: 'left' | 'center' | 'right' | 'justify';
  children: CustomText[];
};

export type CheckListType = {
  id: string;
  nodeType: '';
  type: 'check-list';
  checked: boolean;
  align?: 'left' | 'center' | 'right' | 'justify';
  children: CustomText[];
};

export type HeadingType<T extends HeadingTypesString> = {
  id: string;
  nodeType: 'block';
  type: T;
  align?: 'left' | 'center' | 'right' | 'justify';
  children: CustomText[];
};

export type BulletListType = {
  id: string;
  nodeType: '';
  type: 'bullet-list';
  align?: 'left' | 'center' | 'right' | 'justify';
  children: CustomText[];
};

export type NumberListType = {
  id: string;
  nodeType: 'block';
  type: 'numbered-list';
  align?: 'left' | 'center' | 'right' | 'justify';
  ordered: boolean;
  children: CustomText[];
};

export type LinkType = {
  id: string;
  nodeType: 'inline';
  type: 'link';
  align?: 'left' | 'center' | 'right' | 'justify';
  url: string;
  children: CustomText[];
};

export type CodeType = {
  id: string;
  nodeType: 'block';
  type: 'code';
  language: string;
  code: string;
};

export type ElementProps = {
  editor: SlateEditor;
  renderProps: RenderElementProps;
};

/**
 * ButtonHeadingEl TODO
 *
 *
 */
export interface ButtonHeadingEl<T extends HeadingTypesString | 'default'> {
  icon: ReactNode;
  type: T;
  tooltip: string;
}
