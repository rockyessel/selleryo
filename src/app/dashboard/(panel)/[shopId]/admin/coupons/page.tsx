"use client";
import BreadCrumbsMenu from "@/components/common/bread-crumbs";
import Button from "@/components/common/button";
import CouponList from "@/components/coupons/coupon-list";
import useNavigation from "@/lib/hooks/useNavigation";
import { cardStyles, layoutStyles } from "@/styles/classStyles";
import React from "react";

const CrumbsData = [{ label: "Dashboard", route: "/" }, { label: "Coupons" }];
const Coupons = () => {
  const nav = useNavigation();
  return (
    <div className="h-full w-full flex flex-col space-y-4 pt-2">
      {/* Header */}
      <div className={layoutStyles.screen.header}>
        <div className="space-y-1">
          <BreadCrumbsMenu routes={CrumbsData} />
          <div className="text-neutral-800 text-3xl font-medium leading-9">
            Coupons
          </div>
        </div>
        <div className=" overflow-hidden flex justify-between gap-2.5 ">
          <Button
            type="main"
            label="Add coupon"
            onClick={() => nav.push("/coupons/details/create")}
          />
        </div>
      </div>

      {/* Main */}
      <div className="p-5">
        <div className={cardStyles.list}>
          <CouponList />
        </div>
      </div>
    </div>
  );
};

export default Coupons;
