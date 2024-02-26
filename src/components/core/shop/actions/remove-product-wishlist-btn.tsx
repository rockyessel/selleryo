"use client";

import { db } from "@/lib/config/firebase";
import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { Heart, Trash } from "lucide-react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState, useTransition } from "react";
import { toast } from "sonner";

interface Props {
  productId: number;
}

const RemoveProductWishlistBtn = ({ productId }: Props) => {
  const { data: session } = useSession();
  const [isInWishlist, setIsInWishlist] = useState(false);
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  console.log("isPending: ", isPending);

  useEffect(() => {
    const checkWishlist = async () => {
      if (session?.user && productId) {
        const q = query(
          collection(db, "wishlists"),
          where("email", "==", session.user.email),
          where("productId", "==", productId)
        );
        const querySnapshot = await getDocs(q);
        setIsInWishlist(!querySnapshot.empty);
      }
    };
    checkWishlist();
  }, [session, productId]);

  const removeFromWishlist = async () => {
    const loadId = toast.loading(`Removing ${productId} from wishlist.`);
    if (session?.user && productId && isInWishlist) {
      const q = query(
        collection(db, "wishlists"),
        where("email", "==", session.user.email),
        where("productId", "==", productId)
      );
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        const docId = querySnapshot.docs[0].id;
        startTransition(async () => {
          await deleteDoc(doc(db, "wishlists", docId));
          toast.dismiss(loadId);
          toast.success(`Removed product(${productId}) from your wishlist.`);
          router.refresh();
        });
      }
    }
  };

  return (
    <button
      onClick={removeFromWishlist}
      className={`w-10 h-10 flex justify-center rounded-full items-center text-center text-xs self-center text-rose-900 hover:bg-rose-600 hover:text-white`}
    >
      {isPending ? (
        "Refreshing..."
      ) : (
        <Trash className="w-7 h-7 p-1" strokeWidth={1} />
      )}
    </button>
  );
};

export default RemoveProductWishlistBtn;
