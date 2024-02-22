"use client";
import Language from "@/constants/language";
import {
  Gauge,
  LayoutDashboard,
  Lock,
  ShieldClose,
  ShieldHalf,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import MultilevelNavListItem from "./side-bar-comps/multilevel-item";
import SidebarData from "@/constants/sidebar-data";
import { useState } from "react";
import { SIDEBAR_STATUS_TYPE } from "@/lib/types";
import clsx from "clsx";
import { useRouter } from "next/navigation";
import useCustomRouter from "@/lib/hooks/useRouter";

const Sidebar = ({ isOpened }: { isOpened: boolean }) => {
  const [activeRoute, setActiveRoute] = useState("/dashboard");
  const navigate = useRouter();
  const { pathname } = useCustomRouter();
  return (
    <div
      className={clsx(
        "h-screen sticky top-0 !overflow-y-auto bg-teal-950 flex flex-col pb-12 transition-all ease-in-out duration-500",
        isOpened ? "visible " : "hidden"
      )}
    >
      <div className="sticky top-0 !text-white bg-teal-500 flex">
        <div className="h-[60px] flex items-center space-x-4 px-4">
          <ShieldHalf className="w-8 h-8" />
          <div className="uppercase font-bold text-sm">
            {Language.business_name}
          </div>
        </div>
      </div>
      <div className="flex flex-col items-stretch mt-6">
        <p className="px-4 mb-2 justify-center text-slate-400 text-xs font-medium leading-3 uppercase whitespace-nowrap">
          Application
        </p>
        {SidebarData.map((item, index) => {
          return item?.subroutes?.length > 0 ? (
            <MultilevelNavListItem
              key={index}
              onClick={() =>
                item.route === activeRoute
                  ? setActiveRoute("")
                  : setActiveRoute(item.route)
              }
              active={activeRoute === item.route}
              {...item}
            />
          ) : (
            <div
              key={index}
              onClick={() => navigate.push(item.route)}
              className={clsx(
                "cursor-pointer flex h-10 items-center space-x-4 px-4 hover:bg-teal-500/10",
                pathname === item.route ? "bg-teal-500/10" : ""
                // pathname === "/" && "bg-teal-500/10"
              )}
            >
              {item.icon}
              <div className="text-white text-sm leading-5">{item.label}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
