"use client";
import CategoryList from "@/components/categories/category-list";
import BreadCrumbsMenu from "@/components/common/bread-crumbs";
import Button from "@/components/common/button";
import useNavigation from "@/lib/hooks/useNavigation";
import { layoutStyles } from "@/styles/classStyles";
import React from "react";

const CrumbsData = [
  { label: "Dashboard", route: "/" },
  { label: "Categories" },
];

const CategoryLists = () => {
  const nav = useNavigation();
  return (
    <div className="h-full w-full flex flex-col space-y-4 pt-2">
      {/* Header */}
      <div className={layoutStyles.screen.header}>
        <div className="space-y-1">
          <BreadCrumbsMenu routes={CrumbsData} />
          <div className="text-neutral-800 text-3xl font-medium leading-9">
            Categories
          </div>
        </div>
        <div className=" overflow-hidden flex justify-between gap-2.5 ">
          <Button
            type="main"
            label="New categories"
            onClick={() => nav.push("/categories/details/create")}
          />
        </div>
      </div>
      {/* Content */}
      <div className="p-5">
       3 {/* Table */}
        <CategoryList />
      </div>
    </div>
  );
};

export default CategoryLists;
