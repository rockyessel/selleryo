import clsx from "clsx";
import { ChevronDown, ChevronUp } from "lucide-react";
import Link from "next/link";
import React, { ReactElement } from "react";

export default function MultilevelNavListItem({
  icon,
  active,
  label,
  subroutes,
  onClick,
}: {
  active?: boolean;
  icon: any;
  label: string;
  subroutes: { label: string; route: string }[];
  onClick?: any;
}) {
  return (
    <div>
      <div className="h-auto">
        <div
          onClick={onClick}
          className="h-10 flex items-center text-white text-sm leading-5 grow px-4 whitespace-nowrap space-x-4 cursor-pointer hover:bg-teal-500/10"
        >
          {icon}
          <div className="flex-1">{label}</div>
          {active ? (
            <ChevronUp className="w-4 h-4 text-slate-400" />
          ) : (
            <ChevronDown className="w-4 h-4 text-slate-400" />
          )}
        </div>
        {active && (
          <div className={clsx("min-h-20 w-full pt-1")}>
            {subroutes?.map((item, index) => {
              return (
                <div
                  className="w-full h-10 flex items-center text-white text-sm leading-5 grow whitespace-nowrap space-x-4 cursor-pointer hover:bg-teal-500/10"
                  key={index}
                >
                  <Link href={item.route} className="p-1 pl-12 w-full">
                    {item.label}
                  </Link>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
