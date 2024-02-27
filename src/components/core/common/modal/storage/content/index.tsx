import { StorageModalSidebarItem } from '..';
import DeviceUpload from './device';

interface Props {
  selectItem: StorageModalSidebarItem;
}

const Content = ({ selectItem }: Props) => {
  switch (selectItem) {
    case 'recent-upload':
      return <>Recent Upload</>;

    case 'files':
      return <>Files</>;

    case 'folders':
      return <>Folders</>;

    case 'enter-url':
      return <>Enter URL</>;

    case 'device':
      return <DeviceUpload />;

    default:
      return <>{`Shit! Happens that's life.`}</>;
  }
};

export default Content;
