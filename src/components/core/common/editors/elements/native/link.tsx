import { useFocused, useSelected } from 'slate-react';
import { ElementProps, LinkType, SlateEditor } from '../../types';
import { cn, truncate } from '@/lib/utils/helpers';
import Link from 'next/link';
import { ExternalLink, Pencil, Repeat2, Unlink } from 'lucide-react';
import { changeLinkUrl, removeLink } from '../../utils/helpers';
import { useState } from 'react';
import { Input } from '@/components/ui/input';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';

const LinkElement = ({ editor, renderProps }: ElementProps) => {
  const selected = useSelected();
  const focused = useFocused();
  const [isInEditMode, setIsInEditMode] = useState(false);

  const { attributes, children, element } = renderProps;
  const { url } = element as LinkType;

  const [linkUrl, setLinkUrl] = useState(url);
  const handleEditMode = () =>
    setIsInEditMode((previousState) => !previousState);
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Link
          {...attributes}
          target='_blank'
          href={url}
          className={cn('hover:text-blue-700', {
            'bg-blue-200': selected && focused,
          })}
        >
          {children}
        </Link>
      </PopoverTrigger>

      <PopoverContent
        contentEditable={false}
        className='flex items-center gap-4 px-4 py-2 border rounded-lg'
      >
        <span>
          {isInEditMode ? (
            <Input
              className='w-52'
              value={linkUrl}
              onChange={(event) => setLinkUrl(event.target.value)}
              type='text'
            />
          ) : (
            <a
              className='inline-flex items-center gap-1'
              href={url}
              rel='noreferrer'
              target='_blank'
            >
              <ExternalLink size={16} strokeWidth={1.75} />
              <span>{truncate(url, 19)}</span>
            </a>
          )}
        </span>

        <span className='inline-flex items-center gap-2 px-2'>
          {isInEditMode ? (
            <button
              className='m-0 p-0'
              onClick={() => changeLinkUrl(editor, linkUrl)}
            >
              <Repeat2 size={20} strokeWidth={1.25} />
            </button>
          ) : (
            <button className='m-0 p-0' type='button' onClick={handleEditMode}>
              <Pencil size={16} strokeWidth={0.75} />
            </button>
          )}
          <button className='m-0 p-0' onClick={() => removeLink(editor)}>
            <Unlink size={16} strokeWidth={1.75} />
          </button>
        </span>
      </PopoverContent>
    </Popover>
  );
};

export default LinkElement;
