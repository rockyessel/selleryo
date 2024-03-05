import ProductEditor from '@/components/core/panel/products/editor';
import { getServerUser } from '@/lib/server';
import { Id } from '../../../../../../../../convex/_generated/dataModel';
import { fetchQuery } from 'convex/nextjs';
import { docMethod } from '@/lib/convex';
import { notFound } from 'next/navigation';

interface Props {
  params: { shopId: Id<'shops'>; id: Id<'products'> };
}

const PanelProductPage = async ({ params }: Props) => {
  const { id, shopId } = params;
  const product = await fetchQuery(docMethod.getDocByField, {
    docType: 'products',
    field: '_id',
    value: id,
  });

  if (!product) return notFound();

  // console.log('shop: ', shopId);
  // console.log('id: ', id);
  // console.log('params: ', params);
  // console.log('productId: ', product);
  const user = await getServerUser();

  return (
    <div>
      <ProductEditor exitinPproduct={product} userId={user?._id!} />
    </div>
  );
};

export default PanelProductPage;
