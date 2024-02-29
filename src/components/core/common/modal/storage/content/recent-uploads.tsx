'use client';

import { FileProps } from '@/types';
import FileCard from '../file/extension';
import { fetchQuery } from 'convex/nextjs';
import { useEffect, useState } from 'react';
import { storageMethod } from '@/lib/convex';
import { getClientUser } from '@/hooks/useGetClientUser';
import { Id } from '../../../../../../../convex/_generated/dataModel';

const RecentUploads = () => {
  const [loading, setLoading] = useState(true);
  const [files, setFiles] = useState<FileProps[]>([]);
  const user = getClientUser();
  // console.log('files: ', files);

  const fetchUserFiles = async (userId: Id<'users'>) => {
    const files = await fetchQuery(storageMethod.file.listAllFilesByUserId, {
      userId,
    });
    if (files.length) {
      setFiles(files);
      setLoading(false);
    }
  };

  useEffect(() => {
    console.log('user?._id: ', user?._id);
    if (user?._id) {
      fetchUserFiles(user._id);
    }
  }, [user]);

  return (
    <div className='flex items-center flex-wrap gap-2'>
      {loading && <>Loading...</>}
      {files?.map((file, index) => (
        <FileCard key={index} dbFile={file.fileUrl} type='selection' />
      ))}
    </div>
  );
};

export default RecentUploads;
