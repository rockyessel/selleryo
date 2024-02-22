import React from "react";

export default function Chip({ text, remove }: { text: string; remove: any }) {
  return (
    <div className="w-fit items-center bg-gray-700 bg-opacity-70 flex justify-between gap-1.5 pl-0 pr-2 ">
      <div
        onClick={remove}
        className="text-white text-xs px-2 font-bold leading-6 my-auto hover:cursor-pointer hover:bg-gray-900"
      >
        x
      </div>
      <div className="text-white text-xs leading-6 self-stretch whitespace-nowrap">
        {text}
      </div>
    </div>
  );
}
