"use client";
import BreadCrumbsMenu from "@/components/common/bread-crumbs";
import Button from "@/components/common/button";
import CustomerList from "@/components/customers/customer-list";
import { layoutStyles } from "@/styles/classStyles";
import React from "react";

const CrumbsData = [{ label: "Dashboard", route: "/" }, { label: "Customers" }];

const CustomerLists = () => {
  return (
    <div className="h-full w-full flex flex-col space-y-4 pt-2">
      {/* Header */}
      <div className={layoutStyles.screen.header}>
        <div className="space-y-1">
          <BreadCrumbsMenu routes={CrumbsData} />
          <div className="text-neutral-800 text-3xl font-medium leading-9">
            Customers
          </div>
        </div>
        <div className=" overflow-hidden flex justify-between gap-2.5 ">
          <Button
            type="main"
            label="Add Customer"
            onClick={() => alert("New Product")}
          />
        </div>
      </div>
      {/* Content */}
      <div className="p-5">
        {/* Customer Lists */}
        <CustomerList />
      </div>
    </div>
  );
};

export default CustomerLists;
