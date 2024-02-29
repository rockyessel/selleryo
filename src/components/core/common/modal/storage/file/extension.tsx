'use client';

import FileIcon from './icon';
import { useEffect, useState } from 'react';
import { Checkbox } from '@/components/ui/checkbox';
import { useCxStorage } from '@/context/convex-storage';
import { cn, getFileExtensionNType, truncate } from '@/lib/utils/helpers';
import NextImage from '@/components/native/next-image';

interface Props {
  file?: File;
  dbFile?: string;
  type: 'selection' | 'upload';
}

const FileCard = ({ file, dbFile, type }: Props) => {
  const {
    isInCheckState,
    handleSelection,
    selectedFiles,
    handleSelectionDBFiles,
    selectedDBFile,
  } = useCxStorage();
  const [isChecked, setChecked] = useState(false);
  console.log('selectedDBFile: ', selectedDBFile);
  useEffect(() => {
    // Update isChecked state based on whether the file is in selectedFiles
    setChecked(
      selectedFiles.some((selectedFile) => selectedFile.name === file?.name)
    );
  }, [selectedFiles, file]);

  const handleCheckboxChange = (checked: boolean) => {
    if (checked) {
      if (type === 'selection') {
        handleSelectionDBFiles(dbFile!, 'select');
      } else {
        handleSelection(file!, 'select');
      }
    } else {
      if (type === 'upload') {
        handleSelectionDBFiles(dbFile!, 'deselect');
      } else {
        handleSelection(file!, 'deselect');
      }
    }
  };

  return (
    <div className='group flex flex-col w-40 h-32 relative'>
      <span className='inline-flex w-full p-1.5 absolute top-0 items-start justify-between'>
        <span className={cn(isInCheckState ? '' : 'hidden group-hover:block')}>
          <Checkbox
            className='z-[90]'
            checked={isChecked}
            onCheckedChange={(checked) => handleCheckboxChange(!!checked)}
          />
        </span>
      </span>
      <div
        className={`grow bg-transparent overflow-hidden rounded-lg flex items-center justify-center border-[1px]`}
      >
        <div className='w-full h-full inline-flex items-center justify-center'>
          {type === 'selection'
            ? dbFile && (
                <NextImage
                  className='w-full object-cover object-center'
                  width={150}
                  height={150}
                  src={dbFile}
                  alt=''
                />
              )
            : file && <FileIcon extension={getFileExtensionNType(file)} />}
        </div>
      </div>
      <p className='text-center'>{`${truncate(
        file?.name!,
        5
      )}.${getFileExtensionNType(file!).split(' ').pop()!}`}</p>
    </div>
  );
};

export default FileCard;
