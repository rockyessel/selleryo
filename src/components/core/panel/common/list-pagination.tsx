import { inputStyles } from "@/styles/classStyles";
import clsx from "clsx";
import Image from "next/image";
import React from "react";

export default function ListPagination() {
  return (
    <div className="justify-between  content-center flex-wrap flex w-full gap-5 pl-5 pr-5 py-4">
      <div className="justify-end  flex gap-1 max-md:justify-center">
        <div className="text-gray-400 text-right text-xs font-medium leading-5 whitespace-nowrap border-slate-200 bg-gray-100 px-2.5 py-1.5  border-solid">
          Previous
        </div>
        <div className="text-white text-right text-xs font-medium leading-5 whitespace-nowrap bg-teal-500 px-2.5 py-1.5  border-solid">
          1
        </div>
        <div className="text-neutral-800 text-right text-xs font-medium leading-5 whitespace-nowrap aspect-square px-2.5 py-1.5  border-solid">
          2
        </div>
        <div className="text-neutral-800 text-right text-xs font-medium leading-5 whitespace-nowrap aspect-[1.6785714285714286] px-2.5 py-1.5  border-solid max-md:pr-px">
          Next
        </div>
      </div>
      <div className="self-center flex items-center gap-3 my-auto max-md:justify-center">
        <div className="text-neutral-800 text-xs leading-6">
          Showing 1 to 10 of 12
        </div>
        <div className="text-gray-500 text-xs leading-6 opacity-50 my-auto">
          /
        </div>
        <div className=" flex justify-between items-center gap-2.5">
          <div className="text-neutral-800 text-xs leading-6">
            Rows per page
          </div>
          <input
            type="number"
            className={clsx(inputStyles.main, "!w-16 !px-1 !h-6 !mt-0")}
          />
        </div>
      </div>
    </div>
  );
}
