
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth/options";
import WishlistSection from "@/components/core/shop/dashboard/wishlists/section";


const WishlistsPage = async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  const products: any[] = await res.json();
  const session = await getServerSession(authOptions);

  return (
    <div className="shadow bg-white flex flex-col px-8 rounded-md">
      <p className="text-gray-800 text-center text-xl font-bold">
        My Wishlists
      </p>

      <WishlistSection products={products} email={session?.user?.email} />
    </div>
  );
};

export default WishlistsPage;
