import Image from "next/image";
import React from "react";

const ChangePasswordPage = () => {
  return (
    <div className="justify-center items-stretch shadow bg-white flex flex-col rounded-md">
      <div className="flex w-full flex-col items-stretch mt-9 px-8 max-md:max-w-full max-md:px-5">
        <div className="justify-center text-gray-800 text-xl font-bold leading-[140%] max-md:max-w-full">
          Change Password
        </div>
        <div className="justify-center text-gray-500 text-sm font-bold leading-[143%] max-md:max-w-full">
          Old Password
        </div>
        <div className="border border-gray-300 bg-white flex flex-col mt-3.5 px-5 py-3 rounded-md border-solid max-md:max-w-full">
          <Image
            alt=""
            width={100}
            height={100}
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/cd9dbf52-2a11-44ee-bea5-36efb6e94435?apiKey=331e0e30f65c4a9dafd410e2c2e475a4&"
            className="aspect-square object-contain object-center w-6 justify-center items-center overflow-hidden max-w-full max-md:-mr-1"
          />
        </div>
        <div className="justify-center text-gray-500 text-sm font-bold leading-[143%] max-md:max-w-full">
          New Password
        </div>
        <div className="border border-gray-300 bg-white flex flex-col mt-3.5 px-5 py-3 rounded-md border-solid max-md:max-w-full">
          <Image
            alt=""
            width={100}
            height={100}
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/87066a46-d11d-4b6f-8a1f-d4347f676de4?apiKey=331e0e30f65c4a9dafd410e2c2e475a4&"
            className="aspect-square object-contain object-center w-6 justify-center items-center overflow-hidden max-w-full max-md:-mr-1"
          />
        </div>
        <div className="justify-center text-gray-500 text-sm font-bold leading-[143%] max-md:max-w-full">
          Confirm Password
        </div>
        <div className="border border-gray-300 bg-white flex flex-col mt-3.5 px-5 py-3 rounded-md border-solid max-md:max-w-full">
          <Image
            alt=""
            width={100}
            height={100}
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/b240db5b-9f83-4dee-a511-660968ae76d9?apiKey=331e0e30f65c4a9dafd410e2c2e475a4&"
            className="aspect-square object-contain object-center w-6 justify-center items-center overflow-hidden max-w-full max-md:-mr-1"
          />
        </div>
      </div>
      <div className="justify-center text-white text-center text-base font-bold leading-[100%] items-stretch bg-teal-600 w-[95px] max-w-full mr-8 mt-5 mb-8 px-5 py-5 rounded-md self-end max-md:mr-2.5 max-md:px-px">
        Submit
      </div>
    </div>
  );
};

export default ChangePasswordPage;
