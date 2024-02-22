"use client";
import BreadCrumbsMenu from "@/components/common/bread-crumbs";
import Button from "@/components/common/button";
import ListPagination from "@/components/common/list-pagination";
import ProductList from "@/components/products/product-list";
import useNavigation from "@/lib/hooks/useNavigation";
import { layoutStyles } from "@/styles/classStyles";
import { Search, Sliders } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const CrumbsData = [{ label: "Dashboard", route: "/" }, { label: "Products" }];

const ProductLists = () => {
  const nav = useNavigation();
  return (
    <div className="h-full w-full flex flex-col space-y-4 pt-2">
      {/* Header */}
      <div className={layoutStyles.screen.header}>
        <div className="space-y-1">
          <BreadCrumbsMenu routes={CrumbsData} />
          <div className="text-neutral-800 text-3xl font-medium leading-9">
            Products
          </div>
        </div>
        <div className=" overflow-hidden flex justify-between gap-2.5 ">
          {/* <Button
            type="outline"
            label="Import"
            onClick={() => alert("Import")}
          /> */}
          <Button
            type="main"
            label="New product"
            onClick={() => nav.push("/products/details/new")}
          />
        </div>
      </div>
      {/* Content */}
      <div className="p-5">
        <div className="w-full flex items-start gap-5">
          {/* Filters */}
          {/* Main */}
          <div className="shadow-sm bg-white flex grow flex-col w-full mx-auto pt-0 ">
            {/* Product list */}
            <ProductList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductLists;
