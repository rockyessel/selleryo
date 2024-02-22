import { LOADER_TYPES } from "@/lib/types";
import { Circle, Loader2 } from "lucide-react";
import React from "react";
import { useSelector } from "react-redux";

export default function FullPageLoader() {
  const { type } = useSelector(
    (state: { loader: LOADER_TYPES }) => state.loader
  );

  if (type === "full-page-loader")
    return (
      <div className="absolute top-0 bottom-0 left-0 right-0 z-50 bg-zinc-700/70 flex items-center justify-center">
        <div className="p-5 bg-white rounded-md relative">
          <div className="bg-transparent absolute top-0 bottom-0 left-0 right-0 z-10 flex items-center justify-center">
            <Loader2 className="w-10 h-10 text-teal-400 animate-spin" />
          </div>
          <Circle className="w-[36px] h-[36px] text-zinc-100" />
        </div>
      </div>
    );
}
