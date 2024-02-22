import { WifiOff } from "lucide-react";
import React, { useEffect, useState } from "react";

export default function Offline() {
  const [isOffline, setIsOffline] = useState(false);
  useEffect(() => {
    setInterval(() => {
      if (navigator.onLine) setIsOffline(false);
      else setIsOffline(true);
    }, 500);
  }, []);

  if (isOffline)
    return (
      <div className="absolute top-0 right-0 left-0 z-20 space-x-3 w-full h-[61px] bg-red-500 text-white flex items-center justify-center">
        <WifiOff className="w-6 h-6 text-white text-xs" />
        <p className="">You are offline, check your internet</p>
      </div>
    );
}
