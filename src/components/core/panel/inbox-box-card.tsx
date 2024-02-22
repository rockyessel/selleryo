import Image from "next/image";
import React from "react";

const InboxBoxCard = ({
  sender,
  message,
  time,
}: {
  sender: string;
  message: string;
  time: string;
}) => {
  let msg = message ? `${decodeURIComponent(message)}` : "";
  return (
    <div className="flex items-start border-t p-5">
      <div className="flex grow basis-[0%] flex-col items-stretch self-start max-md:max-w-full">
        <div className="flex items-center justify-between text-neutral-800 text-base font-medium leading-5 pr-4">
          <p>{sender}</p>
          <p className="text-xs">{time}</p>
        </div>
        {/* <div
          className="text-gray-500 text-sm leading-5 dd mt-1.5 max-md:max-w-full"
          dangerouslySetInnerHTML={{ __html: msg }}
        /> */}
        <div className="text-gray-700 text-sm leading-5 font-regular dd mt-1.5 w-full">
          <pre style={{ whiteSpace: "pre-wrap" }}>{msg}</pre>
        </div>
      </div>
    </div>
  );
};

export default InboxBoxCard;
