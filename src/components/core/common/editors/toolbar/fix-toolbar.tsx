import ColorPicker from 'react-pick-color';
import { useSlate, useSlateStatic } from 'slate-react';
import { cn } from '@/lib/utils/helpers';
import { ChevronDown, Link2, Rows4, Type } from 'lucide-react';
import { useState } from 'react';
import { buttonVariants } from '@/components/ui/button';
import {
  insertLink,
  insertSeparator,
  isBlockActive,
  isMarkActive,
  toggleBlock,
  toggleColorMark,
  toggleCurrentBlock,
  toggleMark,
} from '../utils/helpers';
import {
  MARKUPS_CMD,
  additionalMarkUp,
  blockInsertElArr,
  colorsElArr,
  doActionElArr,
  headingElArr,
  positionsArr,
} from '../utils/constants';
import { ButtonHeadingEl, HeadingTypesString, SlateEditor } from '../types';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const FixToolbar = () => {
  return (
    <div
      contentEditable={false}
      className='sticky top-1 w-full flex items-start justify-between px-1 py-1 rounded-t-xl md:flex-wrap divide-x'
    >
      <DoActions />
      <HeadersActions />
      <MarkBlock />
      <Positions />
    </div>
  );
};

export default FixToolbar;

const Positions = () => {
  const [selectedBlock, setSelectedBlock] = useState<
    (typeof blockInsertElArr)[0]
  >(blockInsertElArr[0]);

  const editor = useSlate();

  const handleOnClick = (selectedBlock: (typeof blockInsertElArr)[0]) => {
    toggleCurrentBlock(editor, selectedBlock.type as any);
    setSelectedBlock(selectedBlock);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className='flex items-center gap-1 hover:bg-gray-100 p-2 rounded-lg cursor-pointer'>
          <Rows4 size={16} strokeWidth={1.25} className='my-auto' />
          <p className='justify-center text-neutral-500 text-sm leading-5 self-center my-auto'>
            Position
          </p>
          <ChevronDown size={16} strokeWidth={1.25} className='my-auto' />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='shadow-black shadow border bg-slate-900 flex flex-col'>
        {positionsArr
          .filter((position) => position.default !== true)
          .map((position, index) => (
            <DropdownMenuItem key={index}>
              <span className='w-full inline-flex items-center gap-2 text-gray-200'>
                {position.icon} {position.tooltip}
              </span>
            </DropdownMenuItem>
          ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

const Link = () => {
  const editor = useSlateStatic();
  const handleInsertLink = () => {
    const url = prompt('Enter a URL');
    insertLink(editor, url!);
  };

  return (
    <button type='button' onClick={handleInsertLink} className='p-0 m-0'>
      <Link2
        size={35}
        strokeWidth={1.25}
        className='my-auto hover:bg-gray-100 p-2 rounded-lg cursor-pointer'
      />
    </button>
  );
};

const DoActions = () => {
  const editor = useSlate();
  return (
    <div className='inline-flex items-center gap-1'>
      {doActionElArr.map((block, index) => (
        <TooltipProvider key={index}>
          <Tooltip>
            <TooltipTrigger asChild>
              <button onClick={() => toggleCurrentBlock(editor, block.type)}>
                {block.icon}
              </button>
            </TooltipTrigger>
            <TooltipContent className='bg-slate-950 border-none text-gray-200'>
              <span>{block.tooltip}</span>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      ))}
    </div>
  );
};

const HeadersActions = () => {
  const [findDefault] = headingElArr.filter(
    (heading) => heading.type === 'default'
  );
  const [selectedBlock, setSelectedBlock] =
    useState<ButtonHeadingEl<HeadingTypesString | 'default'>>(findDefault);

  const editor = useSlate();

  const handleOnClick = (
    selectedHeading: ButtonHeadingEl<HeadingTypesString | 'default'>
  ) => {
    toggleBlock(editor, selectedHeading.type);
    setSelectedBlock(selectedHeading);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className='flex items-center gap-1 hover:bg-gray-100 p-2 rounded-lg cursor-pointer'>
          {selectedBlock.icon}
          {selectedBlock.tooltip}
          <ChevronDown size={16} strokeWidth={1.25} className='my-auto' />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='shadow-black shadow border-none bg-slate-900 flex flex-col'>
        {headingElArr
          .filter((heading) => heading.type !== 'default')
          .map((heading, index) => (
            <DropdownMenuItem
              onClick={() => handleOnClick(heading)}
              className={cn(
                '!bg-transparent',
                buttonVariants({
                  variant: isBlockActive(editor, heading.type)
                    ? 'destructive'
                    : 'default',
                })
              )}
              key={index}
            >
              <span className='w-full inline-flex items-center gap-2 text-gray-200'>
                {heading.icon} {heading.tooltip}
              </span>
            </DropdownMenuItem>
          ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

const MarkBlock = () => {
  const editor = useSlate();
  const handleToggleMark = (type: string) => {
    toggleMark(editor, type);
  };

  return (
    <div className='flex items-center gap-2'>
      {MARKUPS_CMD.map((mark, index) => (
        <button
          key={index}
          className={`m-0 p-0 ${
            isMarkActive(editor, mark.type) ? 'active' : ''
          }`}
          onClick={() => handleToggleMark(mark.type)}
        >
          {mark.icon}
        </button>
      ))}
      {additionalMarkUp.map((mark, index) => (
        <button
          key={index}
          className={`m-0 p-0`}
          onClick={() => insertSeparator(editor)}
        >
          {mark.icon}
        </button>
      ))}
      <Link />
      <F />
    </div>
  );
};

const F = () => {
  const editor = useSlateStatic();

  return (
    <span className='flex items-center gap-2'>
      {colorsElArr.map((colorEl, index) => (
        <DropdownMenu key={index}>
          <DropdownMenuTrigger asChild>{colorEl.icon}</DropdownMenuTrigger>
          <DropdownMenuContent>
            <ColorPicker
              onChange={(color) => {
                toggleColorMark(editor, color.hex, colorEl.type);
              }}
              color='#3573CB'
              theme={{
                background: '#020617',
                inputBackground: '#0f172a',
                borderColor: '#020617',
                borderRadius: '8px',
                color: '#DCCECE',
                width: '320px',
              }}
            />
          </DropdownMenuContent>
        </DropdownMenu>
      ))}
    </span>
  );
};
