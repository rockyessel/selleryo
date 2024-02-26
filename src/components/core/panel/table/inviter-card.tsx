// 'use client';
import { useEffect, useState } from 'react';
import NextImage from '../native/next-image';
import { UserProps } from '@/interface';
import { getUserByField } from '@/lib/server/services';
import { truncate } from '@/lib/utils/helpers';
import { Badge } from '../ui/badge';

interface Props {
  inviterId: string;
}

const InviterCard = async ({ inviterId }: Props) => {
  console.log('inviterId: ', inviterId);
  // const [loader, setLoader] = useState(true);
  // const [user, setUser] = useState<UserProps>();
  // const truncatedEmail = truncate(user?.email!, 5);
  // const domainPart = user?.email.split('@')[1];
  // const isUser = typeof truncatedEmail !== 'undefined' && typeof domainPart !== 'undefined';

  // useEffect(() => {
  //   setLoader(false);
  //   if (loader) {
  //     getUserByField('_id', inviterId).then((userRes) => {
  //       if (userRes.success) {
  //         setUser(userRes.data);
  //       }
  //     });
  //   }
  // }, [inviterId, loader]);

  let loader = true;

  const userRes = await getUserByField('_id', inviterId);
  const user = userRes.data as UserProps;

  if (userRes.success) {
    loader = false;
  }

  const truncatedEmail = truncate(user?.email!, 5);
  const domainPart = user?.email.split('@')[1];

  return loader ? (
    <p>Loading...</p>
  ) : (
    <div className='flex flex-col'>
      <div className='inline-flex items-center gap-1'>
        <NextImage
          width={250}
          height={250}
          src={user?.image!}
          alt={user?.name!}
          className='w-4 h-4 rounded-md'
        />

        <p className='text-sm'>{user?.name}</p>
      </div>
      <div className='inline-flex items-center gap-5'>
        <p> {loader ? `${truncatedEmail}@${domainPart}` : 'loading'}</p>
        <p>
          <Badge variant='outline'>admin</Badge>
        </p>
      </div>
    </div>
  );
};

export default InviterCard;
