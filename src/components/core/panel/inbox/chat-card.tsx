import React from "react";

export default function ChatCard({ message, author }) {
  return (
    <div className="flex w-full items-stretch justify-between gap-5 pl-5 pr-3 py-4  border-t border-solid max-md:max-w-full max-md:flex-wrap">
      <div className="flex items-stretch justify-between gap-4 max-md:max-w-full max-md:flex-wrap">
        <div className="self-center flex grow basis-[0%] flex-col items-stretch my-auto max-md:max-w-full">
          <div className="text-neutral-800 text-base font-medium leading-5 dd max-md:max-w-full">
            {author}
          </div>
          <div className="text-gray-500 text-sm leading-5 dd mt-1.5 max-md:max-w-full">
            {message}
          </div>
        </div>
      </div>
      <div className="flex items-center gap-0 self-start max-md:justify-center">
        <div className="text-gray-500 text-sm leading-5 my-auto">
          12 Oct 2020, 17:02
        </div>
      </div>
    </div>
  );
}
