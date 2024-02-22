import React from "react";

const ItemLoader = () => {
  return (
    <div className="rounded-md p-4 w-full">
      <div className="animate-pulse flex items-center gap-2">
        <div className="rounded-full bg-gray-700 h-2.5 w-2.5" />
        <div className="rounded-full bg-gray-700 h-2.5 w-2.5" />
        <div className="rounded-full bg-gray-700 h-2.5 w-2.5" />
      </div>
    </div>
  );
};

export default ItemLoader;
