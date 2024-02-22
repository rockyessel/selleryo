'use client';

import { useQuery, useMutation } from 'convex/react';
import { Id } from '../../../convex/_generated/dataModel';
import { FormEvent, useRef, useState } from 'react';
import { messagesMethod, taskMethod } from '@/lib/convex';

export default function Home() {
  const tasks = useQuery(taskMethod.get);
  const updateTask = useMutation(taskMethod.updateTask);
  const id = 'j57ffyqzeehb2y5d1e70hp2p6h6kwj55' as Id<'tasks'>;
  const stId = 'kg26vs521876ceyr192b245zc56kzqtg' as Id<'_storage'>;
  const addTask = useMutation(taskMethod.createTask);
  const generateUploadUrl = useMutation(messagesMethod.generateUploadUrl);
  const sendImage = useMutation(messagesMethod.sendImage);
  const imageInput = useRef<HTMLInputElement>(null);
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [name] = useState(() => 'User ' + Math.floor(Math.random() * 10000));
  const deleteFile = useMutation(messagesMethod.deleteById);
  console.log('messagesMethod.list: ', useQuery(messagesMethod.list));

  async function handleSendImage(event: FormEvent) {
    event.preventDefault();

    const postUrl = await generateUploadUrl();

    const result = await fetch(postUrl, {
      method: 'POST',
      headers: { 'Content-Type': selectedImage!.type },
      body: selectedImage,
    });
    const { storageId } = await result.json();

    await sendImage({ storageId, author: name });

    const getImageUrl = new URL(
      `${process.env.NEXT_PUBLIC_CONVEX_URL}/getImage`
    );
    getImageUrl.searchParams.set('storageId', storageId);
    console.log('getImageUrl: ', getImageUrl);

    setSelectedImage(null);
    imageInput.current!.value = '';
  }

  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      {tasks?.map(({ _id, text }) => (
        <div key={_id}>{text}</div>
      ))}
      <button
        onClick={() =>
          addTask({ text: 'I love this life that GOD has given me.' })
        }
      >
        Add more todo shit here.
      </button>

      <button onClick={() => updateTask({ id })}>Update task</button>

      <button onClick={() => deleteFile({ storageId: stId })}>
        Delete Image
      </button>
      <form onSubmit={handleSendImage}>
        <input
          type='file'
          accept='image/*'
          ref={imageInput}
          onChange={(event) => setSelectedImage(event.target.files![0])}
          disabled={selectedImage !== null}
        />
        <input
          type='submit'
          value='Send Image'
          disabled={selectedImage === null}
        />
      </form>
    </main>
  );
}
