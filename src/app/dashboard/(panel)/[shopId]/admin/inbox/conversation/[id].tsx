import Button from '@/components/common/button';
import EmptyStateCard from '@/components/common/empty-state-card';
import Status from '@/components/common/status';
import InboxBoxCard from '@/components/inbox-box-card';
import InboxSidebar from '@/components/inbox-sidebar';
import useNavigation from '@/lib/hooks/useNavigation';
import useCustomRouter from '@/lib/hooks/useRouter';
import { formatSentAtTime } from '@/lib/utils/helpers';
import { _showLoader } from '@/redux/loading-slice';
import { _clearModals } from '@/redux/modal-slice';
import sendConfirmationEmail from '@/services/emails/sendEmails';
import {
  addItemToCollection,
  getItemsFromCollection,
} from '@/services/firebase/crud';
import { inputStyles } from '@/styles/classStyles';
import clsx from 'clsx';
import { ArrowLeft } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

const Conversation = () => {
  const [loading, setLoading] = useState(true);
  const [messages, setMessages] = useState([]);
  const [reply, setReply] = useState('');
  const nav = useNavigation();
  const { query } = useCustomRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    if (query.id) {
      setLoading(true);
      getItemsFromCollection('inbox', ['id', '==', query.id], (res) => {
        if (res.length > 0) {
          setMessages(res?.reverse());
        }
        setLoading(false);
      });
    }
  }, [query.id]);

  function handleSendEmail() {
    if (!reply) return alert('Please add a message for this email');
    sendConfirmationEmail(
      messages[0]?.recipients,
      {
        subject: messages[0]?.message?.subject,
        body: reply,
      },
      (res: any) =>
        dispatch(_showLoader({ type: res ? 'full-page-loader' : '' })),
      (res: any) => {
        addMessagesToFirestore(res, () => {
          dispatch(_clearModals());
          setReply('');
        });
      }
    );
  }

  function addMessagesToFirestore(res: any[], onDone?: any) {
    addItemToCollection(
      'inbox',
      {
        // todo: change to actual role
        id: messages[0]?.id || uuidv4(),
        senderDetails: {
          name: 'Bismark',
          email: 'bismarkamanor@gmail.com',
          role: 'customer-service',
        },
        senderId: 'bismarkamanor@gmail.com',
        message: {
          subject: messages[0]?.message?.subject,
          body: encodeURIComponent(reply),
        },
        timeSent: new Date().getTime(),
        recipients: res,
      },
      'Reply sent successfully',
      onDone
    );
  }

  function configMsg(arr: any[]) {
    return arr?.reverse();
  }

  return (
    <div className='justify-between bg-white flex gap-0'>
      {/* Sub Sidebar */}
      <InboxSidebar />
      <div className='w-full divide-y h-[83vh] overflow-y-auto'>
        {loading ? (
          <EmptyStateCard
            _className='!border-none'
            hideIcon
            text='Loading conversation...'
          />
        ) : messages.length > 0 ? (
          <>
            <div className='flex w-full justify-between gap-5 pl-2.5 pr-4 py-2.5  border-b'>
              <div className='flex justify-between gap-0'>
                <Button
                  className='!gap-x-5'
                  onClick={() => nav.back()}
                  type='none'
                  icon={<ArrowLeft />}
                  // label="Back"
                />
              </div>
            </div>
            <div className='flex w-full justify-between gap-5 p-5'>
              <div className='flex flex-col gap-2.5'>
                <div className='text-neutral-800 text-lg font-medium leading-7 dd max-md:max-w-full capitalize'>
                  {messages[0]?.message?.subject}
                </div>
                <div className='flex gap-1 self-start'>
                  <Status
                    state={messages[messages.length - 1]?.senderDetails?.role}
                  />
                  <div className='text-sky-800 text-center text-xs font-medium leading-3 dd items-stretch bg-blue-100 grow px-2 py-1  max-md:pr-0'>
                    {messages[messages.length - 1]?.senderDetails?.role}
                  </div>
                </div>
              </div>
            </div>
            <div className='items-stretch self-stretch flex flex-col max-md:max-w-full'>
              {messages?.map((message: any, index: any) => {
                return (
                  <InboxBoxCard
                    key={index}
                    message={message?.message?.body}
                    sender={message?.senderDetails?.name}
                    time={formatSentAtTime(Number(message?.timeSent))}
                  />
                );
              })}
            </div>
            {/* <div className="self-stretch flex items-start justify-between gap-2 mt-5 px-5 max-md:max-w-full max-md:flex-wrap max-md:justify-center">
              <InboxCustomerList
                dataToUse={message?.recipients}
                customers={message?.recipients}
                selectedCustomers={message?.recipients}
                setSelectedCustomers={() => null}
              />
            </div> */}
            <div className='border-t flex flex-col space-y-3 px-5 py-3'>
              <div className='flex items-center p-3 border bg-zinc-100 text-sm'>
                Reply to: {messages[0]?.recipients?.join(`,   `)}
              </div>
              <textarea
                placeholder='Send a reply...'
                className={clsx(inputStyles.textarea)}
                value={reply}
                onChange={(e) => setReply(e.target.value)}
              />
              <Button
                type='main'
                label='Send'
                className='ml-auto'
                onClick={handleSendEmail}
              />
            </div>
          </>
        ) : (
          <EmptyStateCard
            text={`Message with id of "${query?.id}" was either moved or deleted!`}
          />
        )}
      </div>
    </div>
  );
};

export default Conversation;
