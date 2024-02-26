import { cn } from '@/lib/utils/helpers';
import { useRef, useEffect, useState } from 'react';
import { Editor, Range } from 'slate';
import { useFocused, useSlate, useSlateSelection } from 'slate-react';
import { ELEMENTS_CMD, MARKUPS_CMD } from '../utils/constants';

const FloatingToolbar = () => {
  const [isShowToolbar, setShowToolbar] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const editor = useSlate();
  const selection = useSlateSelection();
  const isFocused = useFocused();

  useEffect(() => {
    const toolbar = ref.current;

    if (!toolbar) return;

    if (
      !selection ||
      !isFocused ||
      Range.isCollapsed(selection) ||
      Editor.string(editor, selection) === ''
    ) {
      setShowToolbar(false);
      return;
    }

    const domSelection = window.getSelection();
    if (!domSelection) {
      setShowToolbar(false);
      return;
    }

    const domRange = domSelection.getRangeAt(0);
    const rect = domRange.getClientRects();

    if (rect[0] == null) return;

    toolbar.style.top = `${Math.max(
      10,
      rect[0].top + window.pageYOffset - 48
    )}px`;
    toolbar.style.left = `${Math.max(
      96,
      rect[0].left + window.scrollX - 96
    )}px`;

    setShowToolbar(true);
  }, [editor, selection, isFocused, setShowToolbar]);

  return (
    <aside
      ref={ref}
      className={cn(
        'absolute z-50 flex items-center bg-gray-50 space-x-1 rounded-lg border px-3 py-1 transition-opacity duration-300',
        isShowToolbar ? 'opacity-100' : 'opacity-0 pointer-events-none'
      )}
      onMouseDown={(e: any) => {
        e.preventDefault();
      }}
    >
      {/* Markup buttons (bold, italic, etc) */}
      {MARKUPS_CMD.map((mark, index) => {
        return <button key={index}>{mark.icon}</button>;
      })}

      {/* Elements button */}
      {/* {ELEMENTS_CMD.filter((el) => el.type !== 'paragraph').map(
        (filteredEl, index) => (
          <button key={index}>{filteredEl.icon}</button>
        )
      )} */}
    </aside>
  );
};

export default FloatingToolbar;
