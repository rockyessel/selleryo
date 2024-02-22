import React, { useState } from "react";
import Button from "../common/button";
import { Plus, X } from "lucide-react";
import InboxAccountSearch from "./inbox-account-search";
import clsx from "clsx";
import { inputStyles } from "@/styles/classStyles";

export default function InboxCustomerList({
  dataToUse,
  sendToAllUsers,
  selectedCustomers,
  setSelectedCustomers,
  customers,
  noAction,
}: {
  dataToUse: any;
  sendToAllUsers: any;
  selectedCustomers: any;
  setSelectedCustomers: any;
  customers: any;
  noAction?: boolean;
}) {
  const [showSearchUser, setShowSearchUser] = useState(false);
  function removeCustomer(email: string) {
    let newCustomers = selectedCustomers?.filter(
      (customer: any) => customer?.email !== email
    );
    setSelectedCustomers(newCustomers);
  }
  return (
    <div className="relative flex-1">
      <div className="flex-1 flex items-center space-x-3">
        <div
          className={clsx(
            noAction ? "hidden" : "",
            inputStyles.main,
            "flex items-center space-x-3 h-10 !mt-0 w-full"
          )}
        >
          <p>To</p>
          <div
            className={clsx(
              "flex items-center space-x-3 h-10 !mt-0 overflow-x-scroll w-[93%]"
            )}
            onClick={() =>
              dataToUse.length === 0 || !sendToAllUsers
                ? setShowSearchUser(!showSearchUser)
                : null
            }
          >
            {dataToUse.length > 0 ? (
              dataToUse?.map((customer: any, index: number) => {
                return (
                  <div
                    key={index}
                    className="flex items-center space-x-2 bg-zinc-100 rounded-full py-1 px-2 pr-1 text-xs"
                  >
                    <p className="text-xs capitalize">
                      {customer?.name || customer}
                    </p>
                    <div
                      onClick={() => removeCustomer(customer.email)}
                      className="flex h-5 w-5 items-center rounded-full justify-center hover:bg-zinc-400 cursor-pointer hover:text-white text-black"
                    >
                      <X className="w-3 h-3" />
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="flex items-center space-x-3 p-1 text-zinc-500 italic">
                {/* Click the <span className="mr-1"></span>{" "}
                          <Search className="w-3 h-3 text-zinc-500" />{" "}
                          <span className="ml-1"></span>
                          icon to add customers */}
              </div>
            )}
          </div>
        </div>
        <Button
          onClick={() => setShowSearchUser(!showSearchUser)}
          type="none"
          icon={
            showSearchUser ? (
              <X className="w-5 h-5 text-zinc-500" />
            ) : (
              <Plus className="w-5 h-5 text-zinc-500" />
            )
          }
        />
      </div>
      {showSearchUser ? (
        <InboxAccountSearch
          customers={customers}
          selectedCustomers={selectedCustomers}
          setSelectedCustomers={setSelectedCustomers}
        />
      ) : null}
    </div>
  );
}
