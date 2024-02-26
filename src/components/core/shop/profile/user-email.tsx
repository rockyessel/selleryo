"use client";

import { SyntheticEvent, useState } from "react";

const UserEmail = () => {
  const [email, setEmail] = useState("");

  const handleSubmission = async (event: SyntheticEvent) => {
    event.preventDefault();
  };
  return (
    <form
      onSubmit={handleSubmission}
      className="shadow bg-white flex flex-col mt-8 p-8 rounded-md"
    >
      <fieldset className="flex flex-col">
        <label className="text-gray-600 text-sm font-bold">Email</label>
        <input
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          type="text"
          defaultValue="customer@demo.com"
          placeholder="examples@company.domain"
          className="text-gray-800 text-sm outline-none border-gray-300 focus:border-teal-600 bg-white mt-3 px-4 py-4 rounded-md border"
        />
      </fieldset>
      <button
        type="submit"
        className="text-white text-center font-bold w-fit inline-flex self-end bg-teal-600 mt-6 px-5 py-2.5 rounded-md"
      >
        Update
      </button>
    </form>
  );
};

export default UserEmail;
