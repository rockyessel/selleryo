import { useCxStorage } from '@/context/convex-storage';
import { toast } from 'sonner';

export function StorageHeaderMenu() {
  const { selectedFiles, handleRemoveSelectedFiles, files } = useCxStorage();
  console.log('files: ', files);
  console.log('selectedFiles: ', selectedFiles);

  const handleRemoveFiles = () => {
    if (selectedFiles.length === 0) {
      toast.error('Cannot remove selection, since it does not exist.');
      return;
    }
    const names = selectedFiles.map((file) => file.name);
    handleRemoveSelectedFiles(names);
  };

  return (
    <div className='!max-w-full flex items-center justify-between border-b p-2'>
      <ul>
        <li onClick={handleRemoveFiles}>Delete</li>
      </ul>

      <ul>
        <li>Upload</li>
      </ul>
    </div>
  );
}
