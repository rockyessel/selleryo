import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import {
  Keyboard,
  MoreVertical,
  RemoveFormatting,
  StretchVertical,
  Table,
  Vote,
  Workflow,
} from 'lucide-react';
import { EditorElementProps, SlateEditor } from '../types';
import { Badge } from '@/components/ui/badge';
import { insertPoll } from '../utils/helpers';
import { useCallback } from 'react';

interface Props {
  element: EditorElementProps;
  editor: SlateEditor;
}

const OptionsEl = ({ element, editor }: Props) => {
  const insertPollOnClick = useCallback(() => {
    // Call the insertPoll function when the button is clicked
    editor.insertPoll();
  }, [editor]);
  return (
    <Popover>
      <PopoverTrigger asChild>
        <MoreVertical size={16} strokeWidth={1.75} />
      </PopoverTrigger>
      <PopoverContent className='w-48 p-2'>
        <div
          contentEditable={false}
          className='flex flex-col gap-1.5 dark:text-gray-400 text-xs'
        >
          <button className='flex items-center gap-2 p-1 hover:rounded-md hover:bg-slate-900'>
            <Workflow size={20} strokeWidth={1.5} />
            Embed
          </button>
          <button className='flex items-center gap-2 p-1 hover:rounded-md hover:bg-slate-900'>
            <Table size={20} strokeWidth={1.5} />
            Table
          </button>
          <button className='flex items-center gap-2 p-1 hover:rounded-md hover:bg-slate-900'>
            <StretchVertical size={20} strokeWidth={1.5} />
            Columns layout
          </button>
          <button
            onClick={insertPollOnClick}
            className='flex items-center gap-2 p-1 hover:rounded-md hover:bg-slate-900'
          >
            <Vote size={20} strokeWidth={1.5} />
            Poll
          </button>
          <button className='flex items-center gap-2 p-1 hover:rounded-md hover:bg-slate-900'>
            <RemoveFormatting size={20} strokeWidth={1.5} /> Clear formatting
          </button>
          <button className='flex items-center gap-2 p-1 hover:rounded-md hover:bg-slate-900'>
            <Keyboard size={20} strokeWidth={1.5} /> Shortcut{' '}
            <Badge>Ctrl + .</Badge>
          </button>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default OptionsEl;
