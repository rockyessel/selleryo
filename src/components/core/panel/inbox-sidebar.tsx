import Image from "next/image";
import React, { useEffect, useState } from "react";
import Button from "./common/button";
import { Group, Inbox, SendHorizonal, Users } from "lucide-react";
import useNavigation from "@/lib/hooks/useNavigation";
import { useDispatch } from "react-redux";
import { _showModal } from "@/redux/modal-slice";
import clsx from "clsx";
import useCustomRouter from "@/lib/hooks/useRouter";
import { getItemsFromCollection } from "@/services/firebase/crud";
import useGetInboxMessages from "@/lib/hooks/useGetInboxMessages";
import useGetSentMessages from "@/lib/hooks/useGetSentMessages";

const InboxSidebar = () => {
  const nav = useNavigation();
  const { pathname } = useCustomRouter();
  const dispatch = useDispatch();

  const { inbox } = useGetInboxMessages();
  const { inbox: sentMessages } = useGetSentMessages();

  return (
    <div className="flex flex-col pl-4 pr-4 pt-4 pb-12 border-r lg:h-[83vh]">
      <Button
        type="main"
        label="Compose"
        className="w-full"
        onClick={() => dispatch(_showModal({ type: "compose-message" }))}
      />
      <div
        onClick={() => nav.push("/inbox")}
        className={clsx(
          "min-w-[180px] self-stretch cursor-pointer flex w-full justify-between gap-5 mt-3 px-3 py-2 hover:bg-slate-50",
          pathname === "/inbox" ? "bg-slate-50" : ""
        )}
      >
        <div className="flex justify-between items-center gap-3">
          <Inbox className="w-5 h-5" />
          <p className="text-neutral-800 text-sm leading-5 grow whitespace-nowrap my-auto">
            Inbox
          </p>
        </div>
        {inbox.length > 0 && (
          <span className="text-sky-800 text-center text-xs font-medium leading-3 whitespace-nowrap aspect-[1.4444444444444444] px-1.5 py-1.5 rounded-[800px] max-md:pr-0">
            {inbox.length || ""}
          </span>
        )}
      </div>
      <div
        onClick={() => nav.push("/inbox/sent-messages")}
        className={clsx(
          "min-w-[180px] self-stretch cursor-pointer flex w-full justify-between gap-5 mt-3 px-3 py-2 hover:bg-slate-50",
          pathname === "/inbox/sent-messages" ? "bg-slate-50" : ""
        )}
      >
        <div className="flex justify-between gap-3">
          <SendHorizonal className="w-5 h-5" />
          <p className="text-neutral-800 text-sm leading-5 grow whitespace-nowrap my-auto">
            Sent
          </p>
        </div>
        {sentMessages.length > 0 && (
          <span className="text-sky-800 text-center text-xs font-medium leading-3 whitespace-nowrap aspect-[1.4444444444444444] px-1.5 py-1.5 rounded-[800px]">
            {sentMessages.length || ""}
          </span>
        )}
      </div>
    </div>
  );
};

export default InboxSidebar;
