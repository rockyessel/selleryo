"use client";

import { db } from "@/lib/config/firebase";
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { Heart } from "lucide-react";
import { useSession } from "next-auth/react";
import { toast } from "sonner";
import { useEffect, useState } from "react";

interface Props {
  productId: number;
}

const AddProductWishlistsBtn = ({ productId }: Props) => {
  const { data: session } = useSession();
  const [isInWishlist, setIsInWishlist] = useState(false);

  useEffect(() => {
    const checkWishlist = async () => {
      if (session?.user && productId) {
        const q = query(collection(db, "wishlists"), where("email", "==", session.user.email), where("productId", "==", productId));
        const querySnapshot = await getDocs(q);
        setIsInWishlist(!querySnapshot.empty);
      }
    };
    checkWishlist();
  }, [session, productId]);

  const addToWishlist = async () => {
    const loadId = toast.loading(`Adding ${productId} to wishlist.`)
    if (session?.user && productId) {
      const itemObj = { email: session.user.email, productId };
      // Check if the product is already in the wishlist
      if (isInWishlist) {
        toast.dismiss(loadId)
        toast.info(`Product(${productId}) is already in your wishlist.`);
      } else {
        const docRef = await addDoc(collection(db, "wishlists"), itemObj);
        console.log("DocRef: ", docRef);
        if (docRef.id) {
          setIsInWishlist(true);
          toast.dismiss(loadId)
          toast.success(`Add product(${productId}) to your wishlist.`);
        }
      }
    }
  };

  return (
    <button
      onClick={addToWishlist}
      className={`w-10 h-10 flex justify-center rounded-full items-center text-center text-xs self-center ${
        isInWishlist
          ? "bg-teal-600 text-white"
          : "bg-transparent hover:bg-teal-600 hover:text-white text-black"
      }`}
    >
      <Heart className="w-7 h-7 p-1" strokeWidth={1} />
    </button>
  );
};

export default AddProductWishlistsBtn;
