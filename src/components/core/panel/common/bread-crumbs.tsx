import { useRouter } from "next/navigation";
import React from "react";

export default function BreadCrumbsMenu({
  routes,
}: {
  routes: { label: string | any; route?: string | any }[];
}) {
  const navigate = useRouter();
  return (
    <div className="min-h-10 flex items-center flex-wrap space-x-3">
      {routes?.map((route, index) => {
        return route.route ? (
          <div key={index} className="text-sm text-zinc-400 flex flex-nowrap">
            <div
              onClick={() => navigate.push(route.route)}
              className="hover:underline cursor-pointer text-teal-500"
            >
              {route.label}
            </div>
            {index + 1 !== routes.length ? (
              <p className="pl-3 text-zinc-300">/</p>
            ) : (
              ""
            )}
          </div>
        ) : (
          <p key={index} className="text-sm text-zinc-400 ">
            {route.label}
          </p>
        );
      })}
    </div>
  );
}
