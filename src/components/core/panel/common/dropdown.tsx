import { DROPDOWN_ID_TYPES } from "@/lib/types";
import clsx from "clsx";
import { LogOut } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Dropdown({
  id,
  className,
  data,
  critical,
  onClose,
}: {
  id: DROPDOWN_ID_TYPES | any;
  className?: string;
  data: any[];
  critical?: any[];
  onClose: any[];
}) {
  return (
    <div
      id={id}
      className={clsx(
        "dropdown-content absolute hidden end-0 top-0 z-50 mt-2 w-56 divide-y divide-gray-100  border border-gray-100 bg-white shadow-lg text-xs",
        className
      )}
      role="menu"
    >
      <div className="py-0">
        {data?.map((item, index) => {
          return item.route ? (
            <Link
              key={index}
              href={item.route}
              onClick={onClose}
              className="block px-4 py-2 text-inherit text-gray-500 hover:bg-gray-50 hover:text-gray-700"
              role="menuitem"
            >
              {item.label}
            </Link>
          ) : item.action ? (
            <div
              key={index}
              onClick={() => {
                item.action();
                onClose();
              }}
              className="block px-4 py-2 text-inherit text-gray-500 hover:bg-gray-50 hover:text-gray-700"
              role="menuitem"
            >
              {item.label}
            </div>
          ) : null;
        })}
      </div>
      {critical ? (
        <div className="py-0">
          {critical?.map((item, index) => {
            return (
              <button
                key={index}
                onClick={item.action}
                type="submit"
                className="flex w-full items-center space-x-3 px-4 py-2 text-xs !text-red-500 hover:bg-red-50"
                role="menuitem"
              >
                {item.label}
              </button>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}
