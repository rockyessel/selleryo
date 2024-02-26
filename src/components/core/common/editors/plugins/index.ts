import pipe from 'lodash/fp/pipe';
// import { withFont } from './withFont';
import { withReact } from 'slate-react';
import { withImages } from './withImages';
import { withHistory } from 'slate-history';
import { withChecklists } from './withCheckList';
import { withEmptyNodeCheck } from './withEmptyNodeCheck';
import { withVoidNodes } from './withVoidNodes';
import { withEnterHandling } from './withEnterHandling';
import { withSeparator } from './withSeparator';
import { withLinks } from './withLinks';
import { withPolls } from './withPolls';


export const createEditorWithPlugins = pipe(
  withPolls,
  // withFont,
  withReact,
  withHistory,
  withImages,
  withLinks,
  withSeparator,
  withVoidNodes,
  withChecklists,
  // withEnterHandling,
  withEmptyNodeCheck
);
