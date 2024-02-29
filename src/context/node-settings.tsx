'use client';

import { ParagraphNode } from '@/components/core/common/editors/nodes';
import { EditorElementProps } from '@/components/core/common/editors/types';
import { GenerateID } from '@/components/core/common/editors/utils/helpers';

import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useMemo,
  MouseEvent,
} from 'react';
import { Path, Transforms } from 'slate';
import { Editor } from 'slate';
import { ReactEditor, useSlate } from 'slate-react';

export type NodeSettingsContextProps = [
  NodeSettingsContextValues,
  NodeSettingsContextEventHandlers
];
const defaultValues: NodeSettingsContextValues = {
  hoveredElement: null,
};

export type NodeSettingsContextEventHandlers = {
  triggerPlusButton: (_node: HoveredElement) => void;
  onHoverElement: (
    _event: MouseEvent<HTMLDivElement>,
    _node: EditorElementProps
  ) => void;
};

const NodeSettingsContext = createContext<NodeSettingsContextProps>([
  defaultValues,
  {
    triggerPlusButton: (_node: HoveredElement) => {},

    onHoverElement: (
      _event: MouseEvent<HTMLDivElement>,
      _node: EditorElementProps
    ) => {},
  },
]);

export type NodeSettingsContextValues = {
  hoveredElement: HoveredElement;
};

export type NodeSettingsContextType = [];

interface NodeSettingsProviderProps {
  children: ReactNode;
}

export type HoveredElement = EditorElementProps | null;

const getInitialState = ({ children }: Editor): HoveredElement => {
  if (children.length === 1) {
    const node = children[0] as unknown as EditorElementProps;
    return node;
  }

  return null;
};
export const NodeSettingsProvider = ({
  children,
}: NodeSettingsProviderProps) => {
  const editor = useSlate();
  const [hoveredElement, setHoveredElement] = useState<HoveredElement>(() =>
    getInitialState(editor)
  );
  const [isElementOptionsOpen, setNodeSettingsOpen] = useState<boolean>(false);
  // // console.log('hoveredElement: ', hoveredElement);
  const events = useMemo<NodeSettingsContextEventHandlers>(
    () => ({
      triggerPlusButton(elementNode) {
        // console.log('elementNode: ', elementNode);
        Editor.withoutNormalizing(editor, () => {
          if (!editor.selection || !elementNode) return;

          const elementPath = ReactEditor.findPath(editor, elementNode!);
          const nextTopLevelPath = Path.next([elementPath[0]]);
          const paragraph = ParagraphNode(GenerateID());

          Transforms.insertNodes(editor, paragraph, {
            at: nextTopLevelPath,
            select: true,
          });

          setHoveredElement(paragraph);
        });
      },
      onHoverElement: (
        event: MouseEvent<HTMLDivElement>,
        node: EditorElementProps
      ) => {
        if (isElementOptionsOpen) return event.preventDefault();
        setHoveredElement(node);
      },
    }),
    [editor, isElementOptionsOpen]
  );

  const value: NodeSettingsContextValues = { hoveredElement };
  const contextValue = useMemo<NodeSettingsContextProps>(
    () => [value, events],
    [hoveredElement, isElementOptionsOpen]
  );
  return (
    <NodeSettingsContext.Provider value={contextValue}>
      {children}
    </NodeSettingsContext.Provider>
  );
};

export const useNodeSettings = () =>
  useContext<NodeSettingsContextProps>(NodeSettingsContext);
