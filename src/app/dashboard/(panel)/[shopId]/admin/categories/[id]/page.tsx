'use client';
import BreadCrumbsMenu from '@/components/common/bread-crumbs';
import Button from '@/components/common/button';
import CustomDropZone from '@/components/common/drop-zone';
import Required from '@/components/common/required';
import useNavigation from '@/lib/hooks/useNavigation';
import useCustomRouter from '@/lib/hooks/useRouter';
import { _clearLoader, _showLoader } from '@/redux/loading-slice';
import {
  addItemToCollection,
  getItemsFromCollection,
  updateItem,
} from '@/services/firebase/crud';
import uploadImages from '@/services/firebase/files';
import {
  cardStyles,
  inputStyles,
  layoutStyles,
  textStyles,
} from '@/styles/classStyles';
import clsx from 'clsx';
import { X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { Fragment, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

const AddImagePreview = ({ image, alt }: { image: any; alt: string }) => {
  const [order, setOrder] = useState(1);
  console.log('selected image: ', image);
  return (
    <div>
      <div className='relative overflow-hidden bg-slate-50 border border-slate-200 w-full h-44 shadow-md'>
        <div className='border-0 flex items-center gap-3 flex-wrap lg:flex-nowrap'>
          <Image
            alt=''
            priority
            width={500}
            height={500}
            src={typeof image === 'object' ? URL.createObjectURL(image) : image}
            className='w-full h-full aspect-square object-cover object-center overflow-hidden max-md:ml-1'
          />
        </div>
      </div>
      <input
        type='text'
        placeholder='ALT text'
        className={`${inputStyles.main} !mt-0`}
      />
    </div>
  );
};

const CategoryPage = () => {
  const { query } = useCustomRouter();
  const router = useRouter();
  const { id } = router.query;
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [visibility, setVisibility] = useState('visible');
  const [image, setImage] = useState<any>();
  const [categoryNotFound, setCategoryNotFound] = useState(false);
  const [refId, setRefId] = useState('');
  const dispatch = useDispatch();
  const CrumbsData = [
    { label: 'Dashboard', route: '/' },
    { label: 'Categories', route: '/categories' },
    { label: query.id === 'create' ? 'Create' : query.id },
  ];

  function handleOnchage(e: Event | any) {
    let name = e?.target?.name;
    switch (name) {
      case 'name':
        setName(e.target.value);
        break;
      case 'description':
        setDescription(e.target.value);
        break;
      default:
        setVisibility(e.target.value);
        break;
    }
  }

  const nav = useNavigation();

  const resetForm = () => {
    setName('');
    setDescription('');
    setImage({});
    setRefId('');
  };

  const updateState = (category: any) => {
    setName(category.name || '');
    setDescription(category.description || '');
    setImage(category.images || []);
    setRefId(category.refId || '');
  };

  console.log(image);
  // Function to handle image selection
  const handleImageSelection = (imagesData: any) => {
    const newObj = { file: imagesData[0], alt: '' };

    console.log('newObj: ', newObj);

    setImage(newObj);
  };

  const handleSubmission = async () => {
    console.log('Image: ', image);

    // Check if required fields are filled
    if (!name || !description || !image) {
      alert('Error\nPlease fill in all required * fields.');
      return;
    }

    uploadImages([image], '/images/products/', (res) => {
      // Create the product object with updated image URLs
      const category = {
        name,
        description,
        image: res,
        id: uuidv4(),
        createdAt: Date.now(),
      };

      if (id === 'create') {
        // Submit the 'product' object to Firestore
        addItemToCollection(
          'categories',
          category,
          'Category added successfully!',
          () => {
            nav.push('/categories');
            resetForm();
            dispatch(_clearLoader());
          },
          () => dispatch(_clearLoader())
        );
      }
      if (id?.length! > 10) {
        // Update the 'product' object in Firestore
        updateItem(
          'categories',
          refId,
          category,
          'Category updated successfully!',
          () => {
            nav.push('/categories');
            resetForm();
            dispatch(_clearLoader());
          },
          () => dispatch(_clearLoader())
        );
      }
    });
  };

  // get product by id
  useEffect(() => {
    if (id && id !== 'new') {
      dispatch(_showLoader({ type: 'full-page-loader' }));
      getItemsFromCollection('categories', ['id', '==', id], (res: any[]) => {
        updateState(res.length > 0 ? res[0] : '');
        dispatch(_clearLoader());
        if (res.length === 0) {
          setCategoryNotFound(true);
        }
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <div className='h-full w-full flex flex-col space-y-4 pt-2'>
      {/* Header */}
      <div className={layoutStyles.screen.header}>
        <div className='space-y-1'>
          <BreadCrumbsMenu routes={CrumbsData} />
          <div className='text-neutral-800 text-3xl font-medium leading-9'>
            {query.id === 'create' ? 'Create Category' : query.id}
          </div>
        </div>
        <div className=' overflow-hidden flex justify-between gap-2.5 '>
          {query.id !== 'create' ? (
            <Button
              type='outline'
              label='Delete'
              onClick={() => alert('Import')}
            />
          ) : null}
          <Button
            type='main'
            label='Save'
            onClick={async () => await handleSubmission()}
          />
        </div>
      </div>
      {/* Content */}
      <div className='p-5'>
        <div className='gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0'>
          <div className='flex flex-col items-stretch w-[70%] max-md:w-full max-md:ml-0'>
            <div className='space-y-6 max-w-[1296px] items-stretch self-stretch flex grow flex-col max-md:max-w-full max-md:mt-6'>
              <div className={cardStyles.single}>
                <div className={textStyles.cardSingleTitle}>
                  Basic information
                </div>
                <div>
                  <div className='text-neutral-800 text-sm font-medium leading-5 whitespace-nowrap mt-2 max-md:max-w-full'>
                    Name
                  </div>
                  <input
                    onChange={handleOnchage}
                    name='name'
                    value={name}
                    className={`${inputStyles.main} mt-2.5`}
                    placeholder='Eg. Brandix Screwdriver SCREW150'
                  />
                </div>
                <div>
                  <div className='text-neutral-800 text-sm font-medium leading-5 whitespace-nowrap mt-4 max-md:max-w-full'>
                    Slug
                  </div>
                  <div className='mt-2.5 flex flex-wrap text-zinc-500 bg-zinc-200  items-center'>
                    <div className='h-10 flex items-center pl-3'>
                      https://example.com/categories/details/
                    </div>
                    <div className='h-10 flex items-center border lowercase'>
                      {name.replaceAll(' ', '-')}
                    </div>
                  </div>
                  <div>
                    <div className='text-gray-500 text-xs leading-5 whitespace-nowrap max-md:max-w-full'>
                      Unique human-readable product identifier. No longer than
                      255 characters.
                    </div>
                  </div>
                </div>
                <div>
                  <div className='text-neutral-800 text-sm font-medium leading-5 whitespace-nowrap mt-4 max-md:max-w-full'>
                    Description
                  </div>
                  <textarea
                    name='description'
                    value={description}
                    onChange={handleOnchage}
                    className={inputStyles.textarea}
                  />
                </div>

                <div className={cardStyles.single}>
                  <div className={textStyles.cardSingleTitle}>
                    Image <Required />
                  </div>
                  {!image?.file ? (
                    <CustomDropZone onDone={handleImageSelection} />
                  ) : (
                    <Fragment>
                      <div className='gap-4 md:grid md:grid-cols-2 lg:grid-cols-3 w-full mt-0 py-3'>
                        <AddImagePreview image={image?.file} alt={image?.alt} />
                      </div>

                      <div className='mt-5 self-start max-md:ml-1'>
                        <div className='flex items-center mt-1'>
                          <label
                            htmlFor='fileInput'
                            className='text-teal-500 cursor-pointer'
                          >
                            Change image
                          </label>
                          <input
                            type='file'
                            id='fileInput'
                            accept='image/*'
                            multiple
                            className='hidden'
                            onChange={(e) =>
                              handleImageSelection(e?.target?.files)
                            }
                          />
                        </div>
                      </div>
                    </Fragment>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className='flex flex-col items-stretch w-[30%] max-md:w-full max-md:ml-0'>
            <div className='max-w-sm items-stretch self-stretch flex flex-col max-md:mt-6  space-y-6'>
              <div className={cardStyles.single}>
                <div className={textStyles.cardSingleTitle}>Visibility</div>
                <div className='flex w-full max-w-full gap-2 mt-2 self-start space-x-3'>
                  <input
                    checked={visibility === 'visible'}
                    onChange={handleOnchage}
                    name='visibility'
                    value='visible'
                    type='radio'
                    className='w-4 h-4 mt-1 accent-teal-500 fill-white'
                  />
                  <div className='text-neutral-800 text-base leading-6 grow whitespace-nowrap'>
                    Publish
                  </div>
                </div>
                <div className='flex w-full max-w-full gap-2 mt-3 self-start space-x-3'>
                  <input
                    checked={visibility === 'hidden'}
                    onChange={handleOnchage}
                    value='hidden'
                    name='visibility'
                    type='radio'
                    className='w-4 h-4 mt-1 accent-teal-500 fill-white'
                  />
                  <div className='text-neutral-800 text-base leading-6 grow whitespace-nowrap'>
                    Hide
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
