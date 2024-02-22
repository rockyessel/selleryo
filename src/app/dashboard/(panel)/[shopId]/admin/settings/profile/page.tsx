"use client";
import BreadCrumbsMenu from "@/components/common/bread-crumbs";
import Button from "@/components/common/button";
import Status from "@/components/common/status";
import { cardStyles, layoutStyles, textStyles } from "@/styles/classStyles";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

const CrumbsData = [
  { label: "Dashboard", route: "/" },
  { label: "Settings", route: "/settings" },
  { label: "Profile" },
];

const Profile = () => {
  return (
    <div className="h-full w-full flex flex-col space-y-4 pt-2">
      {/* Header */}
      <div className={layoutStyles.screen.header}>
        <div className="space-y-1">
          <BreadCrumbsMenu routes={CrumbsData} />
          <div className="text-neutral-800 text-3xl font-medium leading-9">
            Profile
          </div>
        </div>
        <div className=" overflow-hidden flex justify-between ">
          <Button
            type="main"
            label="Log Out"
            className="!bg-red-500"
            onClick={() => alert("New Product")}
          />
        </div>
      </div>
      {/* Content */}
      <div className="p-5">
        <div className="space-y-5">
          <div className="flex bg-red-100 w-fit">
            {/* Customer General Information */}
            <div
              className={clsx(
                cardStyles.single,
                "!w-fit !h-fit !px-4 !py-4 flex !items-center !justify-center"
              )}
            >
              <Image
                alt=""
                priority
                width={300}
                height={300}
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/d3045276-ef20-446b-ad28-f2dc282ce4fd?apiKey=331e0e30f65c4a9dafd410e2c2e475a4&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/d3045276-ef20-446b-ad28-f2dc282ce4fd?apiKey=331e0e30f65c4a9dafd410e2c2e475a4&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d3045276-ef20-446b-ad28-f2dc282ce4fd?apiKey=331e0e30f65c4a9dafd410e2c2e475a4&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/d3045276-ef20-446b-ad28-f2dc282ce4fd?apiKey=331e0e30f65c4a9dafd410e2c2e475a4&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/d3045276-ef20-446b-ad28-f2dc282ce4fd?apiKey=331e0e30f65c4a9dafd410e2c2e475a4&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d3045276-ef20-446b-ad28-f2dc282ce4fd?apiKey=331e0e30f65c4a9dafd410e2c2e475a4&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/d3045276-ef20-446b-ad28-f2dc282ce4fd?apiKey=331e0e30f65c4a9dafd410e2c2e475a4&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/d3045276-ef20-446b-ad28-f2dc282ce4fd?apiKey=331e0e30f65c4a9dafd410e2c2e475a4&"
                className="object-contain object-center w-32 h-32  !1mt-2"
              />
            </div>
          </div>
          <div className="flex flex-col items-stretch w-full max-md:w-full max-md:ml-0">
            <div className="flex grow flex-col items-stretch max-md:mt-6 gap-4">
              <div className={clsx(cardStyles.list, "pt-4")}>
                <div className="px-4 justify-center text-neutral-800 text-lg font-medium leading-6">
                  Details
                </div>
                <div className="border-t mt-4">
                  <div className="flex grow basis-[0%] flex-col items-stretch p-4 border-b">
                    <div className="justify-center text-gray-500 text-xs leading-4 whitespace-nowrap">
                      Name
                    </div>
                    <div className="justify-center font-medium text-sm leading-5 whitespace-nowrap mt-1.5">
                      Enfusion X
                    </div>
                  </div>
                  <div className="flex grow basis-[0%] flex-col items-stretch p-4 border-b">
                    <div className="justify-center text-gray-500 text-xs leading-4 whitespace-nowrap">
                      Email
                    </div>
                    <div className="justify-center font-medium text-sm leading-5 whitespace-nowrap mt-1.5">
                      team.enfusionx@gmail.com
                    </div>
                  </div>
                  <div className="flex grow basis-[0%] flex-col items-stretch p-4 border-b">
                    <div className="justify-center text-gray-500 text-xs leading-4 whitespace-nowrap">
                      Role Assigned by Admin
                    </div>
                    <div className="justify-center text-sm leading-5 mt-1.5">
                      Tag: <Status status={"customer-service"} />
                      <p className="mt-4 text-xs leading-relaxed lg:max-w-[70%]">
                        This role exists to provide dedicated support to
                        customers. Responsibilities include; <br />
                        - Addressing customer inquiriesin <br />
                        - Resolving customer related issues <br />
                        - Ensuring customer satisfaction <br />
                        all via sending and or replying to emails.
                      </p>
                    </div>
                  </div>
                  <div className="flex grow basis-[0%] flex-col items-stretch p-4 border-b">
                    <div className="justify-center text-gray-500 text-xs">
                      Date Joined
                    </div>
                    <div className="justify-center font-medium text-sm mt-1.5">
                      11th December, 2023
                    </div>
                    <div className="mt-4 justify-center text-gray-500 text-xs">
                      Last Login
                    </div>
                    <div className="justify-center font-medium text-sm mt-1.5">
                      13th December, 2023 @ 3:45 PM
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

export default Profile;
