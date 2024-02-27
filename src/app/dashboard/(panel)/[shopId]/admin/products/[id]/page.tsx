import ProductEditor from '@/components/core/panel/products/editor';
import { getServerUser } from '@/lib/server';

const PanelProductPage = async () => {
  const user = await getServerUser();

  return (
    <div>
      <ProductEditor userId={user?._id} />
    </div>
  );
};

export default PanelProductPage;
