


import { Country } from "@/interface";
import UpdateNumberBtn from "../actions/update-number-btn";
import Image from "next/image";

interface Props {
  countries: Country[];
}

const UserContact = ({ countries }: Props) => {
  return (
    <div className="shadow bg-white flex flex-col mt-8 p-8 rounded-md ">
      <div className="w-full flex items-center justify-between">
        <div className="text-gray-800 text-xl">Contact Number</div>
        <UpdateNumberBtn countries={countries} />
      </div>
      <div className=" flex flex-col mt-8">
        <div className="border border-gray-300 cursor-not-allowed bg-white flex items-center gap-1 rounded-md">
          <Image
            alt=""
            width={100}
            height={100}
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/f92a20b2-c1b7-402e-b2c5-d9bb9c719c29?apiKey=331e0e30f65c4a9dafd410e2c2e475a4"
            className="w-[52px] h-[52px] items-center overflow-hidden shrink-0"
          />
          <div className="text-gray-800 text-sm">+1 (936) 514-1641</div>
        </div>
      </div>
    </div>
  );
};

export default UserContact;
