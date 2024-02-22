import React from "react";
import Button from "./button";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function InboxPagination() {
  return (
    <div className="sticky top-0 z-10 bg-white border-y justify-between  content-center flex-wrap flex w-full gap-5 pl-5 pr-5 py-1">
      <div className="justify-end  flex gap-1 max-md:justify-center">
        <div className="flex items-center justify-center gap-3">
          <input
            type="checkbox"
            className="w-3 h-3 accent-teal-500 fill-white"
          />
          <p className="text-sm">Select All</p>
        </div>
      </div>
      <div className="self-center flex items-center gap-3 my-auto max-md:justify-center">
        <div className="text-neutral-800 text-xs leading-6">1-10 of 12</div>
        <div className=" flex justify-between items-center gap-3">
          <Button
            type="none"
            icon={<ChevronLeft className="w-4 h-4" />}
            className="!h-10 !min-w-10"
          />
          <Button
            type="none"
            icon={<ChevronRight className="w-4 h-4" />}
            className="!h-10 !min-w-10"
          />
        </div>
      </div>
    </div>
  );
}
