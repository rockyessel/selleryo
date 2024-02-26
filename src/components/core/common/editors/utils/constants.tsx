import { Descendant } from 'slate';
import { generateRandomImages } from '@/lib/utils/helpers';
import {
  ButtonHeadingEl,
  HeadingTypesString,
} from '../types';
import {
  Bold,
  BookImage,
  Code,
  FileImage,
  ImageIcon,
  Italic,
  LayoutPanelTop,
  Link2,
  PaintBucket,
  Plus,
  Redo2,
  SpellCheck2,
  SplitSquareVertical,
  Strikethrough,
  Subscript,
  Superscript,
  Underline,
  Undo2,
} from 'lucide-react';
import Image from 'next/image';
import NextImage from '@/components/native/next-image';
import { GenerateID } from './helpers';

export const initialValue: Descendant[] = [
  {
    id: GenerateID(),
    type: 'heading-one',
    nodeType: 'block',
    align: undefined,
    children: [
      {
        text: 'Hello World!!!!!!',
      },
    ],
  },
  {
    id: 'unique-id',
    nodeType: 'block',
    type: 'inline-image',
    position: '',
    align: 'left',
    src: 'https://source.unsplash.com/kFrdX5IeQzI',
    alt: 'Image Alt Text',
    children: [{ text: 'Text alongside image', bold: true, italic: false }],
  },
  {
    id: GenerateID(),
    type: 'heading-three',
    nodeType: 'block',
    align: 'center',
    children: [
      {
        text: 'In addition to nodes that contain editable text, you can also create other types of nodes, like images or videos.',
      },
    ],
  },
  {
    id: GenerateID(),
    type: 'grid-image',
    nodeType: 'void',
    images: generateRandomImages(5),
    children: [
      {
        text: 'Gallery',
      },
    ],
  },
  {
    id: 'initial-column-layout-id',
    nodeType: 'block',
    type: 'column-layout',
    columns: 2,
    children: [
      {
        type: 'column-item',
        nodeType: 'inline',
        children: [{ text: 'Column 1 Text' }],
      },
      {
        type: 'column-item',
        nodeType: 'inline',
        children: [{ text: 'Column 2 Text' }],
      },
    ],
  },
  {
    id: '3',
    type: 'block-quote',
    nodeType: 'block',
    align: 'right',
    children: [{ text: 'A wise quote.' }],
  },
  {
    id: '4',
    type: 'bullet-list',
    nodeType: '',
    align: 'right',
    children: [{ text: 'A wise quote.' }],
  },
  {
    id: '5',
    type: 'check-list',
    nodeType: '',
    checked: false,
    children: [{ text: 'Criss-cross.' }],
  },
  {
    id: '6',
    type: 'image',
    nodeType: 'void',
    src: 'https://source.unsplash.com/kFrdX5IeQzI',
    alt: '',
    children: [{ text: '' }],
  },
  {
    id: GenerateID(),
    type: 'paragraph',
    nodeType: 'block',
    children: [
      {
        text: 'This example shows images in action. It features two ways to add images. You can either add an image via the toolbar icon above, or if you want in on a little secret, copy an image src to your clipboard and paste it anywhere in the editor!',
      },
    ],
  },
  {
    id: '8',
    type: 'paragraph',
    nodeType: 'block',
    children: [
      {
        text: 'You can delete images with the cross in the top left. Try deleting this sheep:',
      },
    ],
  },
  {
    id: GenerateID(),
    type: 'image',
    nodeType: 'void',
    src: 'https://source.unsplash.com/zOwZKwZOZq8',
    alt: '',
    children: [{ text: '' }],
  },
  {
    id: '10',
    nodeType: 'block',
    type: 'paragraph',
    align: undefined,
    children: [{ text: 'fontLists is the list of all font' }],
  },
];

export const ELEMENTS_CMD = [
  {
    key: ['ctrl', 'k'],
    icon: '❡',
    type: 'paragraph',
  },
  {
    key: ['ctrl', '1'],
    icon: 'H1',
    type: 'heading-one',
  },
  {
    key: ['ctrl', '2'],
    icon: 'H2',
    type: 'heading-two',
  },
  {
    key: ['ctrl', '3'],
    icon: 'H3',
    type: 'heading-three',
  },
  {
    key: ['ctrl', '4'],
    icon: 'H4',
    type: 'heading-four',
  },
  {
    key: ['ctrl', '5'],
    icon: 'H5',
    type: 'heading-five',
  },
  {
    key: ['ctrl', '6'],
    icon: 'H6',
    type: 'heading-six',
  },
  {
    key: ['ctrl', '/'],
    icon: <span className='font-mono text-sm'>&lt;/&gt;</span>,
    type: 'paragraph',
  },
  {
    key: ['ctrl', 'q'],
    icon: '❝',
    type: 'paragraph',
  },
  {
    key: ['ctrl', 'd'],
    icon: '─',
    type: 'paragraph',
  },
  {
    key: ['ctrl', 't'],
    icon: '☑',
    type: 'paragraph',
  },
  {
    key: ['ctrl', 'i'],
    icon: '🖼️',
    type: 'paragraph',
  },
];

export const MARKUPS_CMD = [
  {
    key: ['ctrl', 'b'],
    icon: (
      <Bold
        size={32}
        strokeWidth={1.25}
        className='my-auto hover:bg-gray-100 active:bg-gray-200 p-2 rounded-lg cursor-pointer'
      />
    ),
    type: 'bold',
  },
  {
    key: ['ctrl', 'i'],
    icon: (
      <Italic
        size={32}
        strokeWidth={1.25}
        className='my-auto hover:bg-gray-100 active:bg-gray-200 p-2 rounded-lg cursor-pointer'
      />
    ),

    type: 'italic',
  },
  {
    key: ['ctrl', 'u'],
    icon: (
      <Underline
        size={35}
        strokeWidth={1.25}
        className='my-auto hover:bg-gray-100 active:bg-gray-200 p-2 rounded-lg cursor-pointer'
      />
    ),

    type: 'underline',
  },
  {
    key: ['ctrl', 's'],
    icon: (
      <Strikethrough
        size={35}
        strokeWidth={1.25}
        className='my-auto hover:bg-gray-100 active:bg-gray-200 p-2 rounded-lg cursor-pointer'
      />
    ),

    type: 'strikethrough',
  },
  {
    key: ['ctrl', '`'],
    icon: (
      <Code
        size={35}
        strokeWidth={1.25}
        className='my-auto hover:bg-gray-100 active:bg-gray-200 p-2 rounded-lg cursor-pointer'
      />
    ),
    type: 'code',
  },
  {
    key: ['ctrl', '`'],
    icon: (
      <Subscript
        size={37}
        strokeWidth={1.25}
        className='my-auto hover:bg-gray-100 active:bg-gray-200 p-2 rounded-lg cursor-pointer'
      />
    ),
    type: 'sub',
  },
  {
    key: ['ctrl', '`'],
    icon: (
      <Superscript
        size={37}
        strokeWidth={1.25}
        className='my-auto hover:bg-gray-100 active:bg-gray-200 p-2 rounded-lg cursor-pointer'
      />
    ),
    type: 'sup',
  },
];

export const positionsArr = [
  {
    position: '',
    default: true,
    icon: (
      <Superscript
        size={37}
        strokeWidth={1.25}
        className='my-auto hover:bg-gray-100 active:bg-gray-200 p-2 rounded-lg cursor-pointer'
      />
    ),
    tooltip: 'Position',
  },
  {
    position: 'right',
    default: false,
    icon: (
      <Superscript
        size={37}
        strokeWidth={1.25}
        className='my-auto hover:bg-gray-100 active:bg-gray-200 p-2 rounded-lg cursor-pointer'
      />
    ),
    tooltip: 'Right Align',
  },
  {
    position: 'left',
    default: false,
    icon: (
      <Superscript
        size={37}
        strokeWidth={1.25}
        className='my-auto hover:bg-gray-100 active:bg-gray-200 p-2 rounded-lg cursor-pointer'
      />
    ),
    tooltip: 'Left Align',
  },
  {
    position: 'justify',
    default: false,
    icon: (
      <Superscript
        size={37}
        strokeWidth={1.25}
        className='my-auto hover:bg-gray-100 active:bg-gray-200 p-2 rounded-lg cursor-pointer'
      />
    ),
    tooltip: 'Justify Align',
  },
  {
    position: 'start',
    default: false,
    icon: (
      <Superscript
        size={37}
        strokeWidth={1.25}
        className='my-auto hover:bg-gray-100 active:bg-gray-200 p-2 rounded-lg cursor-pointer'
      />
    ),
    tooltip: 'Start Align',
  },
  {
    position: 'end',
    default: false,
    icon: (
      <Superscript
        size={37}
        strokeWidth={1.25}
        className='my-auto hover:bg-gray-100 active:bg-gray-200 p-2 rounded-lg cursor-pointer'
      />
    ),
    tooltip: 'End Align',
  },
];

export const additionalMarkUp = [
  {
    icon: (
      <SplitSquareVertical
        size={35}
        strokeWidth={1.25}
        className='my-auto hover:bg-gray-100 active:bg-gray-200 p-2 rounded-lg cursor-pointer'
      />
    ),
    type: 'separator',
  },
];

export const doActionElArr = [
  {
    icon: (
      <Undo2
        size={32}
        strokeWidth={1.25}
        className='my-auto hover:bg-gray-100 active:bg-gray-200 p-2 rounded-lg cursor-pointer'
      />
    ),
    type: 'undo',
    tooltip: 'Undo (Ctrl + Z)',
  },
  {
    icon: (
      <Redo2
        size={32}
        strokeWidth={1.25}
        className='my-auto hover:bg-gray-100 active:bg-gray-200 p-2 rounded-lg cursor-pointer'
      />
    ),
    type: 'redo',
    tooltip: 'Redo (Ctrl + Y)',
  },
];

export const colorsElArr = [
  {
    icon: (
      <SpellCheck2
        size={32}
        strokeWidth={1.25}
        className='my-auto hover:bg-gray-100 active:bg-gray-200 p-2 rounded-lg cursor-pointer'
      />
    ),
    type: 'color',
    tooltip: 'Text color',
  },
  {
    icon: (
      <PaintBucket
        size={32}
        strokeWidth={1.25}
        className='my-auto hover:bg-gray-100 active:bg-gray-200 p-2 rounded-lg cursor-pointer'
      />
    ),
    type: 'highlight',
    tooltip: 'Highlight',
  },
];

export const headingElArr: ButtonHeadingEl<HeadingTypesString | 'default'>[] = [
  {
    icon: <Link2 size={18} strokeWidth={0.5} />,
    type: 'default',
    tooltip: 'Heading',
  },
  {
    icon: <Link2 size={18} strokeWidth={0.5} />,
    type: 'heading-one',
    tooltip: 'Heading One',
  },
  {
    icon: <Link2 size={18} strokeWidth={0.5} />,
    type: 'heading-two',
    tooltip: 'Heading Two',
  },

  {
    icon: <BookImage size={18} strokeWidth={0.5} />,
    type: 'heading-three',
    tooltip: 'Heading Three',
  },
  {
    icon: <ImageIcon size={18} strokeWidth={0.5} />,
    type: 'heading-four',
    tooltip: 'Heading Four',
  },
  {
    icon: <LayoutPanelTop size={18} strokeWidth={0.5} />,
    type: 'heading-five',
    tooltip: 'Heading Five',
  },
  {
    icon: <LayoutPanelTop size={18} strokeWidth={0.5} />,
    type: 'heading-six',
    tooltip: 'Heading Six',
  },
];

export const blockInsertElArr = [
  {
    icon: <Plus size={16} strokeWidth={1.25} className='my-auto' />,
    type: 'default',
    tooltip: 'Insert',
  },
  {
    icon: <FileImage size={16} strokeWidth={1.25} className='my-auto' />,
    type: 'image',
    tooltip: 'Image',
  },
  {
    icon: <BookImage size={16} strokeWidth={1.25} className='my-auto' />,
    type: 'inline-image',
    tooltip: 'Inline Image',
  },
  {
    icon: <ImageIcon size={16} strokeWidth={1.25} className='my-auto' />,
    type: 'url-image',
    tooltip: 'Url Image',
  },
  {
    icon: <LayoutPanelTop size={16} strokeWidth={1.25} className='my-auto' />,
    type: 'grid-image',
    tooltip: 'Grid Image',
  },
  {
    icon: <NextImage alt='GIF' src='/gif.svg' width={100} height={100} />,
    type: 'grid-image',
    tooltip: 'Grid Image',
  },
];

export const LIST_TYPES = ['number-list', 'bullet-list'];
export const TEXT_ALIGN_TYPES = ['left', 'center', 'right', 'justify'];
