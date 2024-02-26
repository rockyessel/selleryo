"use client";

import Image from "next/image";
import { useState } from "react";
import { Country } from "@/interface";

interface Props {
  countries: Country[];
}

const CountryCodeInput = ({ countries }: Props) => {
  const [phoneNum, setPhoneNum] = useState("");
  const [code, setCode] = useState<string>("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);

  const setCountryCode = (country: Country) => {
    setShowDropdown(false);
    setSelectedCountry(country);
  };

  const handleCountrySelect = (country: Country) => {
    setCountryCode(country);
    setCode(`+(${country.callingCodes[0]}) `);
  };

  return (
    <form className="relative flex items-center">
      <fieldset className="relative flex items-center justify-center w-full h-auto">
        {selectedCountry && (
          <Image
            width={50}
            height={50}
            src={selectedCountry?.flags.png}
            alt={`${selectedCountry?.name} flag`}
            priority
            className="absolute inset-0 mt-2.5 rounded-md w-10 h-6 ml-2 inline-flex items-center self-center"
          />
        )}
        <input
          type="text"
          placeholder="Select Country Code"
          value={code}
          onChange={(event) => setCode(event.target.value)}
          onFocus={() => setShowDropdown(true)}
          // onBlur={() => setShowDropdown(false)}
          className="w-full h-full justify-center text-gray-500 text-xs items-center bg-white py-3 outline-none rounded-md rounded-r-none focus:border-teal-600 border-[1px] pl-12"
        />
        <button
          type="submit"
          className="text-white text-center flex-shrink-0 text-sm font-semibold self-center bg-teal-700 flex max-w-full gap-3 pl-8 pr-8 py-3 rounded-l-none rounded-md"
        >
          Update Contact
        </button>
      </fieldset>
      {showDropdown && (
        <ul className="absolute mt-1 w-48 h-48 overflow-y-auto top-16  bg-white border rounded shadow-md">
          {countries.map((country) => (
            <li
              key={country.name}
              onClick={() => handleCountrySelect(country)}
              className="w-full flex items-center gap-1 font-bold text-sm cursor-pointer p-2 hover:bg-gray-200"
            >
              <Image
                width={50}
                height={50}
                src={country.flags.png}
                alt={`${country.name} flag`}
                className="w-4 h-4 mr-2"
                priority
              />
              (+{country.callingCodes[0]})
            </li>
          ))}
        </ul>
      )}
    </form>
  );
};

export default CountryCodeInput;
