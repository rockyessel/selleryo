import EmptyStateCard from "@/components/common/empty-state-card";
import InboxPagination from "@/components/common/inbox-pagination";
import ListPagination from "@/components/common/list-pagination";
import InboxListCard from "@/components/inbox-list-card";
import InboxSidebar from "@/components/inbox-sidebar";
import useGetSentMessages from "@/lib/hooks/useGetSentMessages";
import { getItemsFromCollection } from "@/services/firebase/crud";
import { useEffect, useState } from "react";

const SentMessagesList = () => {
  const { loading, inbox } = useGetSentMessages();

  return (
    <div className="w-full justify-between bg-white flex gap-0">
      {/* Sub Sidebar */}
      <InboxSidebar />

      {/* Inbox Lists */}
      <div className="w-full divide-y h-[83vh] overflow-y-auto">
        {/* <InboxPagination /> */}
        <div className="border-t h-24 bg-white flex items-center justify-between px-5">
          <p className="text-3xl font-medium">Sent Messages</p>
        </div>
        {loading ? (
          <EmptyStateCard hideIcon text="Loading messages..." />
        ) : inbox.length > 0 ? (
          inbox.map((item, index) => {
            return <InboxListCard key={index} inbox={item} />;
          })
        ) : (
          <EmptyStateCard text="You have no sent messages" />
        )}
      </div>
    </div>
  );
};

export default SentMessagesList;
