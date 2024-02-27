'use client';

import { getClientUser } from '@/hooks/useGetClientUser';
import { useMutation } from 'convex/react';
import {
  ChangeEvent,
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  SyntheticEvent,
  useContext,
  useEffect,
  useState,
} from 'react';
import { toast } from 'sonner';
import { Id } from '../../convex/_generated/dataModel';
import { fileUpload, storageMethod } from '@/lib/convex';

interface Props {
  children: ReactNode;
}

interface ConvexStorageProps {
  handleUpload: (event: ChangeEvent<HTMLInputElement>) => void;
  handleSubmision: (event: SyntheticEvent) => Promise<void>;
  handleRemoveSelectedFiles: (name: string[]) => void;
  handleSelection: (file: File, type: 'select' | 'deselect') => void;
  setFiles: Dispatch<SetStateAction<File[]>>;
  isInCheckState: boolean;
  selectedFiles: File[];
  files: File[];
}

const ConvexStorageContext = createContext<ConvexStorageProps>({
  handleUpload: (_event) => {},
  handleSubmision: (_event) => Promise.resolve(),
  handleRemoveSelectedFiles: (_name) => {},
  handleSelection: (_file, _type) => {},
  setFiles: () => {},
  isInCheckState: false,
  selectedFiles: [],
  files: [],
});

export const ConvexStorageContextProvider = ({ children }: Props) => {
  const [files, setFiles] = useState<File[]>([]);
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [isInCheckState, setIsInCheckState] = useState(false);
  const user = getClientUser();

  const addFile = useMutation(storageMethod.file.createFile);

  const handleUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const { target } = event;
    if (target.files) {
      const selectedFiles = target.files;
      const arr = [...files, ...selectedFiles];
      const filesArr: File[] = Array.prototype.slice.call(arr);
      if (filesArr.length > 10) {
        toast.error('Upload limit is 4.');
        return;
      }
      setFiles(filesArr);
    }
  };

  const handleSubmision = async (event: SyntheticEvent) => {
    event.preventDefault();
    if (files && user) {
      for (let i = 0; i <= files.length; i++) {
        const file = files[i];
        console.log('file: ', file);
        const storageId: Id<'_storage'> = await fileUpload(file);
        const userId = user?._id as Id<'users'>;
        addFile({ storageId, uploadedBy: userId });
      }
    }
  };

  const handleSelection = (file: File, type: 'select' | 'deselect') => {
    setIsInCheckState(true);
    if (type === 'select') {
      setSelectedFiles((prevSelectedFiles) => [...prevSelectedFiles, file]);
    } else if (type === 'deselect') {
      setSelectedFiles((prevSelectedFiles) =>
        prevSelectedFiles.filter((selectedFile) => selectedFile !== file)
      );
    }
  };

const handleRemoveSelectedFiles = (names: string[]) => {
  const updatedFiles = files.filter((file) => !names.includes(file.name));
  setFiles(updatedFiles);

  const updatedSelectedFiles = selectedFiles.filter(
    (file) => !names.includes(file.name)
  );
  setSelectedFiles(updatedSelectedFiles);
};


  useEffect(() => {
    if (selectedFiles.length === 0) {
      setIsInCheckState(false);
    }
  }, [selectedFiles]);

  const values: ConvexStorageProps = {
    handleUpload,
    handleSubmision,
    handleRemoveSelectedFiles,
    handleSelection,
    setFiles,
    isInCheckState,
    selectedFiles,
    files,
  };

  return (
    <ConvexStorageContext.Provider value={values}>
      {children}
    </ConvexStorageContext.Provider>
  );
};

export const useCxStorage = () => useContext(ConvexStorageContext);
