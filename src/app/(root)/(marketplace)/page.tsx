import ProductCard from '@/components/core/common/cards/product';
import { productMethod } from '@/lib/convex';
import { fetchQuery } from 'convex/nextjs';

const MarketHome = async () => {
  const products = await fetchQuery(productMethod.getAllMartketableProduct);

  console.log('products: ', products);

  return (
    <div>
      <div>
        {products.map((product, index) => (
          <ProductCard product={product} key={index} />
        ))}
      </div>

      <div></div>
    </div>
  );
};

export default MarketHome;
