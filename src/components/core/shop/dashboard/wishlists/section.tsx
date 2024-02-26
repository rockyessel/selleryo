import { ProductProps } from "@/interface";
import { db } from "@/lib/config/firebase";
import WishlistCard from "@/components/dashboard/wishlists/card";
import { collection, getDocs, query, where } from "firebase/firestore";

interface Props {
  products: ProductProps[];
  email: string | null | undefined;
}

const WishlistSection = async ({ products, email }: Props) => {
  const getUserWishlist = async (email: string | null | undefined) => {
    if (email) {
      const q = query(collection(db, "wishlists"), where("email", "==", email));
      const querySnapshot = await getDocs(q);
      console.log("querySnapshot: ", querySnapshot);
      const items: any[] = [];
      querySnapshot.forEach((doc) => items.push(doc.data()));
      return items;
    }
    return [];
  };

  const wishlists = await getUserWishlist(email);

  return (
    <ul className="w-full">
      {wishlists &&
        wishlists.map((wishlistItem, index) => (
          <WishlistCard
            products={products}
            key={index}
            productId={wishlistItem.productId}
          />
        ))}
    </ul>
  );
};

export default WishlistSection;
