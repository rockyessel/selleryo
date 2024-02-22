import EmptyStateCard from "@/components/common/empty-state-card";
import InboxListCard from "@/components/inbox-list-card";
import InboxSidebar from "@/components/inbox-sidebar";
import useGetInboxMessages from "@/lib/hooks/useGetInboxMessages";

const InboxList = () => {
  const { loading, inbox } = useGetInboxMessages();

  return (
    <div className="w-full justify-between bg-white flex gap-0">
      {/* Sub Sidebar */}
      <InboxSidebar />

      {/* Inbox Lists */}
      <div className="w-full divide-y h-[83vh] overflow-y-auto">
        {/* <InboxPagination /> */}
        <div className="border-t h-24 bg-white flex items-center justify-between px-5">
          <p className="text-3xl font-medium">Inbox Messages</p>
        </div>
        {loading ? (
          <EmptyStateCard hideIcon text="Loading messages..." />
        ) : inbox.length > 0 ? (
          inbox.map((item, index) => {
            return <InboxListCard key={index} inbox={item} />;
          })
        ) : (
          <EmptyStateCard text="Your Inbox is empty" />
        )}
      </div>
    </div>
  );
};

export default InboxList;
