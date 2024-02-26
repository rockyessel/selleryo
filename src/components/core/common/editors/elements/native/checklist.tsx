import { css } from '@emotion/css';
import { Transforms } from 'slate';
import { Element } from 'slate';
import { ReactEditor, useReadOnly } from 'slate-react';
import { CheckListType, ElementProps } from '../../types';

const CheckListElement = ({ editor, renderProps }: ElementProps) => {
  const readOnly = useReadOnly();
  const { element, attributes, children } = renderProps;
  const { checked } = element as CheckListType;
  return (
    <div
      {...attributes}
      className={css`
        margin: 0 0 0 56px;
        padding: 0;
        display: flex;
        flex-direction: row;
        align-items: center;

        & + & {
          margin-top: 0;
        }
      `}
    >
      <span
        contentEditable={false}
        className={css`
          margin-right: 0.75em;
        `}
      >
        <input
          type='checkbox'
          checked={checked}
          onChange={(event) => {
            const path = ReactEditor.findPath(editor, element);
            const newProperties: Partial<Element> = {
              checked: event.target.checked,
            };
            Transforms.setNodes(editor, newProperties, { at: path });
          }}
        />
      </span>
      <span
        contentEditable={!readOnly}
        defaultValue={'dd'}
        suppressContentEditableWarning
        className={css`
          flex: 1;
          opacity: ${checked ? 0.666 : 1};
          text-decoration: ${!checked ? 'none' : 'line-through'};

          &:focus {
            outline: none;
          }
        `}
      >
        {children}
      </span>
    </div>
  );
};

export default CheckListElement;
