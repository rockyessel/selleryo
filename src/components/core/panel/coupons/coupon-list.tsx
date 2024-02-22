import React, { useEffect, useState } from "react";
import ListPagination from "../common/list-pagination";
import { Search } from "lucide-react";
import { cardStyles, inputStyles } from "@/styles/classStyles";
import CouponListItem from "./coupon-list-item";
import clsx from "clsx";
import { getItemsFromCollection } from "@/services/firebase/crud";
import EmptyListCard from "../common/empty-list-card";

export default function CouponList() {
  const [coupons, setCoupons] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getItemsFromCollection("coupons", "", (res: any) => {
      setCoupons(res);
      setLoading(false);
    });
  }, []);

  return (
    <div className={cardStyles.list}>
      <div className="sticky top-0 bg-white p-4 z-10">
        <div className="relative">
          <Search strokeWidth={1} size={18} className="absolute top-2 left-3" />
          <input
            type="text"
            placeholder="Start typing to search for categories"
            className={clsx(inputStyles.main, "!mt-0 pl-12")}
          />
        </div>
      </div>

      {/* Customer Table */}
      <table className="w-full text-left rtl:text-right border-collapse">
        <thead className="sticky top-[65px] bg-white z-10">
          <tr className="border-y">
            <th className="w-[5%]">
              <div className="w-16 h-10 flex items-center justify-center">
                <input
                  type="checkbox"
                  className="w-3 h-3 accent-teal-500 fill-white"
                />
              </div>
            </th>
            <th className="px-3 py-2 text-neutral-500 text-xs uppercase font-regular leading-6">
              Code
            </th>
            <th className="px-3 py-2 text-neutral-500 text-xs uppercase font-regular leading-6">
              Type
            </th>
            <th className="px-3 py-2 text-neutral-500 text-xs uppercase font-regular leading-6">
              Discount
            </th>
            <th className="px-3 py-2 text-neutral-500 text-xs uppercase font-regular leading-6">
              Status
            </th>
            <th className="px-3 py-2 text-neutral-500 text-xs uppercase font-regular leading-6">
              Start date
            </th>
            <th className="px-3 py-2 text-neutral-500 text-xs uppercase font-regular leading-6">
              End Date
            </th>

            <th className="px-3 py-2 text-neutral-800 text-sm uppercase font-medium leading-6 w-[5%]"></th>
          </tr>
        </thead>
        <tbody>
          {coupons.length > 0 ? (
            coupons?.map((coupon, index) => {
              return <CouponListItem key={index} coupon={coupon} />;
            })
          ) : (
            <EmptyListCard
              colSpan={8}
              text={loading ? "Loading items..." : ""}
            />
          )}
        </tbody>
      </table>
      {coupons.length > 0 && <ListPagination />}
    </div>
  );
}
