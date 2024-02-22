import React, { useEffect, useState } from "react";

export default function EmptyListCard({
  text,
  colSpan,
}: {
  text?: string;
  colSpan?: number;
}) {
  const [isOnline, setIsOnline] = useState(true);
  useEffect(() => {
    setIsOnline(navigator.onLine);
  }, []);
  return (
    <tr>
      <td
        colSpan={colSpan || 6}
        height={100}
        className="text-center text-xs bg-slate-100 text-zinc-500"
      >
        {!isOnline
          ? "Poor or No connection to Server. \nCheck your internet connection and try again!"
          : text || "Nothing to show at the moment"}
      </td>
    </tr>
  );
}
