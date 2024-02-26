import { Search } from "lucide-react";

const SearchNav = () => {
  // TODO
  // Search your products from {category}
  return (
    <div className="relative flex items-start justify-center w-full rounded-md overflow-hidden h-auto border">
      <Search
        strokeWidth={1}
        width={20}
        height={20}
        className="ml-2 flex items-center self-center text-sm"
      />
      <input
        type="text"
        className="w-full h-full justify-center text-gray-500 text-xs items-center bg-white py-2.5 outline-none ml-2"
        placeholder="Search your products from here"
      />
    </div>
  );
};

export default SearchNav;
