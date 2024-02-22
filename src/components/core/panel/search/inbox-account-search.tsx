import { inputStyles } from "@/styles/classStyles";
import clsx from "clsx";
import { Check, SearchCode } from "lucide-react";
import React, { useEffect, useState } from "react";

export default function InboxAccountSearch({
  selectedCustomers,
  setSelectedCustomers,
  customers,
}: {
  selectedCustomers: any[];
  setSelectedCustomers: (res: any) => void;
  customers: any[];
}) {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResult, setSearchResult] = useState<any[]>([]);

  useEffect(() => {
    // if (searchTerm.length > 0) {
    let res = customers?.filter(
      (customer) =>
        customer?.name
          ?.toLocaleLowerCase()
          ?.includes(searchTerm?.toLocaleLowerCase()) ||
        customer?.email
          ?.toLocaleLowerCase()
          ?.includes(searchTerm?.toLocaleLowerCase())
    );
    // ?.sort((a: any, b: any) => {
    //   return a?.name?.toLocaleLowerCase() - b?.name;
    // });
    setSearchResult(res);
    // }
  }, [searchTerm, customers]);

  function handleSearch(event: any) {
    setSearchTerm(event.target.value);
  }

  function checkExists(email: string) {
    return selectedCustomers.find((customer) => customer.email === email);
  }

  function removeCustomer(email: string) {
    let newCustomers = selectedCustomers?.filter(
      (customer) => customer?.email !== email
    );
    setSelectedCustomers(newCustomers);
  }
  return (
    <div className="absolute top-12 left-0 w-[92.5%] z-10 bg-white shadow-md ">
      <input
        type="text"
        name="searchTerm"
        placeholder="Type customer name or email"
        onChange={handleSearch}
        value={searchTerm}
        autoFocus={true}
        className={clsx(inputStyles.main, "flex-1 !mt-0")}
      />
      <div className="max-h-[250px] overflow-y-auto">
        {searchResult.length > 0
          ? searchResult?.map((result, index) => (
              <div
                key={index}
                className="flex items-center result-card px-4 py-3 border-t border-zinc-100 cursor-pointer hover:bg-zinc-100 space-x-3 "
                onClick={
                  checkExists(result.email)
                    ? () => null
                    : () => setSelectedCustomers([...selectedCustomers, result])
                }
              >
                {checkExists(result.email) ? (
                  <Check className="w-5 h-5 text-teal-500" />
                ) : null}
                {/* Render result card content */}
                <div className="">
                  <p className="text-xs capitalize">{result.name}</p>
                  <p className="text-xs text-zinc-400 font-light">
                    {result.email}
                  </p>
                </div>
              </div>
            ))
          : searchTerm && (
              <div className="text-center p-4 italic text-xs text-zinc-400">
                No user found for &ldquo;{searchTerm}&rdquo;
              </div>
            )}
      </div>
      <div className="flex items-center justify-end bg-zinc-400 space-x-2 py-2 px-4">
        <SearchCode className="w-4 h-4 text-zinc-400" />
        <p className="text-xs font-light text-right text-zinc-100">
          Search powered by EnfusionX
        </p>
      </div>
    </div>
  );
}
