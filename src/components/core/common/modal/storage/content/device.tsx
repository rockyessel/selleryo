import { ImagePlus } from 'lucide-react';
import { cn } from '@/lib/utils/helpers';
import FileCard from '../file/extension';
import { useCxStorage } from '@/context/convex-storage';

const DeviceUpload = () => {
  const { files, handleUpload, handleSubmision } = useCxStorage();

  return (
    <div
      className={cn(
        'w-full h-full ',
        files.length === 0 ? 'flex items-center justify-center' : ''
      )}
    >
      {files.length === 0 && (
        <form onSubmit={handleSubmision}>
          <fieldset>
            <label>
              <fieldset className='w-full border-dashed border-2 p-10 inline-flex flex-col items-center justify-center border-gray-200 bg-gray-100 rounded-lg'>
                <ImagePlus />
                <p>{`Drag 'n' drop some images here, or click to select images`}</p>
              </fieldset>
              <input
                multiple
                onChange={handleUpload}
                type='file'
                className='m-0 p-0 w-0 h-0'
              />
            </label>
          </fieldset>
        </form>
      )}

      {files.length > 0 && (
        <div className='flex items-center flex-wrap gap-2'>
          {files.map((file, index) => (
            <FileCard file={file} key={index} />
          ))}
          {/* <button onClick={handleSubmision}>Upload</button> */}
        </div>
      )}
    </div>
  );
};

export default DeviceUpload;
