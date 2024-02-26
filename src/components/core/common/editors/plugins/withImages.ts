import { GenerateID, isImageUrl } from '../utils/helpers';
import { Transforms } from 'slate';
import { ImageNode, ParagraphNode } from '../nodes';
import { SlateEditor } from '../types';

export const withImages = (editor: SlateEditor) => {
  const { insertData, isVoid } = editor;
  editor.isVoid = (element) => {
    return element.type === 'image' ? true : isVoid(element);
  };
  editor.insertData = (data: DataTransfer) => {
    const text = data.getData('text/plain');

    const { files } = data;

    console.log('Files: ', files);

    if (files && files.length > 0) {
      for (const file of files) {
        const reader = new FileReader();
        const [mime] = file.type.split('/');

        if (mime === 'image') {
          reader.addEventListener('load', () => {
            const url = reader.result;
            console.log('READER URL: ', url);
            //TODO fix URL Type: Current Type is: "string | ArrayBuffer | null"
            insertImage(editor, String(url)!);
          });

          reader.readAsDataURL(file);
        }
      }
    } else if (isImageUrl(text)) {
      insertImage(editor, text);
    } else {
      insertData(data);
    }
  };

  Transforms.move(editor);

  const paragraph = ParagraphNode(GenerateID());

  if (editor.children.length === 0) {
    Transforms.insertNodes(editor, paragraph);
  }

  return editor;
};

export const insertImage = (editor: SlateEditor, url: string) => {
  const image = ImageNode(url, '');
  Transforms.insertNodes(editor, image);
};
