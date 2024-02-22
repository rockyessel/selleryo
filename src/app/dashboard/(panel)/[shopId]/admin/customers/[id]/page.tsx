"use client";
import BreadCrumbsMenu from "@/components/common/bread-crumbs";
import Button from "@/components/common/button";
import { cardStyles, layoutStyles, textStyles } from "@/styles/classStyles";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

const CrumbsData = [
  { label: "Dashboard", route: "/" },
  { label: "Customers", route: "/customers" },
  { label: "Jessica Moore" },
];

const Customer = () => {
  return (
    <div className="h-full w-full flex flex-col space-y-4 pt-2">
      {/* Header */}
      <div className={layoutStyles.screen.header}>
        <div className="space-y-1">
          <BreadCrumbsMenu routes={CrumbsData} />
          <div className="text-neutral-800 text-3xl font-medium leading-9">
            Jessica Moore
          </div>
        </div>
        <div className=" overflow-hidden flex justify-between gap-2.5 ">
          <Button
            type="outline"
            label="Delete"
            onClick={() => alert("Import")}
          />
          <Button
            type="main"
            label="Edit"
            onClick={() => alert("New Product")}
          />
        </div>
      </div>
      {/* Content */}
      <div className="p-5">
        <div className="gap-5 flex">
          <div className="flex flex-col">
            {/* Customer General Information */}
            <div
              className={`${cardStyles.single} !self-start !h-fit !justify-start sticky top-0 !grow-none !items-start !flex-0`}
            >
              <div className="flex justify-center items-center flex-col text-center pt-4 pb-6">
                <Image
                  alt=""
                  priority
                  width={500}
                  height={500}
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/d3045276-ef20-446b-ad28-f2dc282ce4fd?apiKey=331e0e30f65c4a9dafd410e2c2e475a4&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/d3045276-ef20-446b-ad28-f2dc282ce4fd?apiKey=331e0e30f65c4a9dafd410e2c2e475a4&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d3045276-ef20-446b-ad28-f2dc282ce4fd?apiKey=331e0e30f65c4a9dafd410e2c2e475a4&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/d3045276-ef20-446b-ad28-f2dc282ce4fd?apiKey=331e0e30f65c4a9dafd410e2c2e475a4&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/d3045276-ef20-446b-ad28-f2dc282ce4fd?apiKey=331e0e30f65c4a9dafd410e2c2e475a4&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d3045276-ef20-446b-ad28-f2dc282ce4fd?apiKey=331e0e30f65c4a9dafd410e2c2e475a4&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/d3045276-ef20-446b-ad28-f2dc282ce4fd?apiKey=331e0e30f65c4a9dafd410e2c2e475a4&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/d3045276-ef20-446b-ad28-f2dc282ce4fd?apiKey=331e0e30f65c4a9dafd410e2c2e475a4&"
                  className="aspect-[0.92] object-contain object-center w-24 justify-end items-center overflow-hidden self-center max-w-full"
                />
                <p className="justify-center text-neutral-800 text-center text-base font-medium leading-6 self-center whitespace-nowrap mt-3.5">
                  Jessica Moore
                </p>
                <p className="justify-center text-teal-500 text-center text-sm leading-5 self-center whitespace-nowrap mt-2">
                  jessica-moore@example.com
                </p>
                <p className="justify-center text-gray-500 text-center text-sm leading-5 self-center whitespace-nowrap">
                  +38 (094) 730-24-25
                </p>
              </div>
              {/* Customer Details */}
              <div className=" self-stretch flex flex-col items-stretch border-t px-1">
                <div>
                  <p className="justify-center text-neutral-800 text-sm font-medium leading-5 whitespace-nowrap mt-6">
                    Last Order
                  </p>
                  <div className="flex items-stretch justify-between gap-1.5 mt-2">
                    <span className="justify-center text-gray-500 text-xs leading-5">
                      7 days ago -{" "}
                    </span>
                    <span className="justify-center text-teal-500 text-xs leading-5 whitespace-nowrap self-start">
                      #80294
                    </span>
                  </div>
                </div>
                <div>
                  <p className="justify-center text-neutral-800 text-sm font-medium leading-5 whitespace-nowrap mt-4">
                    Average Order Value
                  </p>
                  <span className="justify-center text-gray-500 text-xs leading-5 whitespace-nowrap">
                    $574.00
                  </span>
                </div>
                <div>
                  <p className="justify-center text-neutral-800 text-sm font-medium leading-5 whitespace-nowrap mt-5">
                    Registered
                  </p>
                  <span className="justify-center text-gray-500 text-xs leading-5 whitespace-nowrap">
                    2 months ago
                  </span>
                </div>
                <div>
                  <p className="justify-center text-neutral-800 text-sm font-medium leading-5 whitespace-nowrap mt-4">
                    Email Marketing
                  </p>
                  <span className="justify-center text-gray-500 text-xs leading-5 whitespace-nowrap">
                    Subscribed
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-stretch w-full max-md:w-full max-md:ml-0">
            <div className="flex grow flex-col items-stretch max-md:mt-6 gap-4">
              {/* Table */}
              <div className={cardStyles.list}>
                <div className="w-full border-b flex py-4 px-4 items-center justify-between">
                  <h2
                    className={clsx(
                      textStyles.cardSingleTitle,
                      "!mb-0 leading-1"
                    )}
                  >
                    Orders
                  </h2>
                  <p className="">
                    Total spent{" "}
                    <span className="text-teal-700 text-sm font-bold">
                      $34,980.34
                    </span>{" "}
                    on 7 orders
                  </p>
                </div>
                <div className="w-full">
                  <table className="w-full">
                    <tbody>
                      <tr className="bg-white border-b py-2">
                        <td className="p-4 text-sm">
                          <a href="">#80294</a>
                        </td>
                        <td className="p-4 text-sm">Today at 6:10 pm</td>
                        <td className="p-4 text-sm">Pending</td>
                        <td className="p-4 text-sm">4 items</td>
                        <td className="p-4 text-sm">$320.00</td>
                      </tr>
                      <tr className="bg-white border-b py-2">
                        <td className="p-4 text-sm">
                          <a href="">#63736</a>
                        </td>
                        <td className="p-4 text-sm">May 15, 2019</td>
                        <td className="p-4 text-sm">Completed</td>
                        <td className="p-4 text-sm">7 items</td>
                        <td className="p-4 text-sm">$2,574.31</td>
                      </tr>
                      <tr className="bg-white border-b py-2">
                        <td className="p-4 text-sm">
                          <a href="">#63501</a>
                        </td>
                        <td className="p-4 text-sm">January 7, 2019</td>
                        <td className="p-4 text-sm">Completed</td>
                        <td className="p-4 text-sm">1 items</td>
                        <td className="p-4 text-sm">$34.00</td>
                      </tr>
                      <tr className="bg-white border-b py-2">
                        <td className="p-4 text-sm">
                          <a href="">#40278</a>
                        </td>
                        <td className="p-4 text-sm">October 19, 2018</td>
                        <td className="p-4 text-sm">Completed</td>
                        <td className="p-4 text-sm">2 items</td>
                        <td className="p-4 text-sm">$704.00</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="p-4 text-sm text-center">
                  <Link href="/orders">View all 7 orders</Link>
                </div>
              </div>

              <div className={clsx(cardStyles.list, "py-4")}>
                <div className="self-center flex w-[722px] max-w-full items-stretch justify-between gap-5 px-4 max-md:flex-wrap">
                  <div className="justify-center text-neutral-800 text-lg font-medium leading-6">
                    Addresses
                  </div>
                  <div className="justify-center text-teal-500 text-sm leading-5 whitespace-nowrap">
                    New address
                  </div>
                </div>
                <div className="bg-neutral-800 bg-opacity-10 flex shrink-0 h-px flex-col mt-5" />
                <div className="self-center flex w-[724px] max-w-full items-stretch justify-between gap-5 mt-4 max-md:flex-wrap">
                  <div className="flex grow basis-[0%] flex-col items-stretch px-4">
                    <div className="justify-center text-neutral-800 text-base leading-6 whitespace-nowrap -mr-5">
                      Jessica Moore
                    </div>
                    <div className="justify-center text-gray-500 text-sm leading-5 whitespace-nowrap -mr-5 mt-1.5">
                      Random Federation 115302, Moscow ul. Varshavskaya,
                      15-2-178
                    </div>
                  </div>
                </div>
                <div className="bg-neutral-800 bg-opacity-10 flex shrink-0 h-px flex-col mt-4" />
                <div className="self-center flex w-[724px] max-w-full items-stretch justify-between gap-5 mt-4 max-md:flex-wrap">
                  <div className="flex grow basis-[0%] flex-col items-stretch px-4">
                    <div className="justify-center text-neutral-800 text-base leading-6 whitespace-nowrap -mr-5">
                      Neptune Saturnov
                    </div>
                    <div className="justify-center text-gray-500 text-sm leading-5 whitespace-nowrap -mr-5">
                      Earth 4b4f53, MarsGrad Sun Orbit, 43.3241-85.239
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customer;
