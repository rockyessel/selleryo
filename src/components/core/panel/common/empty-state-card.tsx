import { cardStyles } from "@/styles/classStyles";
import clsx from "clsx";
import { SearchX } from "lucide-react";
import React, { useEffect, useState } from "react";

export default function EmptyStateCard({
  _className,
  text,
  hideIcon,
}: {
  _className?: string;
  text?: string;
  hideIcon?: boolean;
}) {
  const [isOnline, setIsOnline] = useState(true);
  useEffect(() => {
    setIsOnline(navigator.onLine);
  }, []);

  return (
    <div
      className={clsx(
        "min-h-[200px] flex !flex-col !items-center !justify-center space-y-4 p-4",
        cardStyles.single,
        _className
      )}
    >
      {!hideIcon && <SearchX className="w-8 h-8 text-zinc-300" />}
      <p className="text-center text-xs text-zinc-500">
        {!isOnline
          ? "Poor or No connection to Server. \nCheck your internet connection and try again!"
          : text || "Nothing to show at the moment"}
      </p>
    </div>
  );
}
