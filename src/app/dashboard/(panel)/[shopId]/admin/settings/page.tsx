import BreadCrumbsMenu from "@/components/common/bread-crumbs";
import Button from "@/components/common/button";
import Sidebar from "@/components/sidebar";
import useGetSettings from "@/lib/hooks/useGetSettings";
import { _showLoader } from "@/redux/loading-slice";
import { addItemToCollection } from "@/services/firebase/crud";
import {
  cardStyles,
  inputStyles,
  layoutStyles,
  textStyles,
} from "@/styles/classStyles";
import clsx from "clsx";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const CrumbsData = [{ label: "Dashboard", route: "/" }, { label: "Settings" }];

const Settings = () => {
  const [formState, setFormState] = useState({
    description: "",
    main_email: "",
    support_email: "",
    phone_1: "",
    phone_2: "",
    weight: "",
    goods_weight: "",
    goods_dim_unit: "",
  });

  const { settingsData } = useGetSettings();
  const dispatch = useDispatch();

  useEffect(() => {
    setFormState((prevState) => ({ ...prevState, ...settingsData }));
  }, [settingsData]);

  function handleInputChange(e: any) {
    const { name, value } = e.target;
    setFormState((prevState: any) => ({
      ...prevState,
      [name]: value,
    }));
  }

  function handleSave() {
    addItemToCollection(
      "settings",
      { ...formState, lastEdited: new Date().getTime() },
      "Changes saved successfully!",
      null,
      null,
      (res: boolean) => {
        dispatch(_showLoader({ type: res ? "full-page-loader" : "" }));
      }
    );
  }
  return (
    <div className="h-full w-full flex flex-col space-y-4 pt-2">
      <div className={layoutStyles.screen.header}>
        <div className="space-y-1">
          <BreadCrumbsMenu routes={CrumbsData} />
          <div className="text-neutral-800 text-3xl font-medium leading-9">
            Settings
          </div>
        </div>
        <div className=" overflow-hidden flex justify-between gap-2.5 ">
          {/* <Button
            type="outline"
            label="Import"
            onClick={() => alert("Import")}
          /> */}
          <Button type="main" label="Save Changes" onClick={handleSave} />
        </div>
      </div>
      <div className="p-5">
        <div className="w-full space-y-5">
          <div className={clsx(cardStyles.single)}>
            <div className={clsx(textStyles.cardSingleTitle)}>
              Store Description
            </div>
            <textarea
              name="description"
              value={formState.description}
              onChange={handleInputChange}
              className={clsx(inputStyles.textarea)}
            />
            <div className="text-gray-500 text-xs leading-5">
              A brief description about your store, readable to users.
            </div>
          </div>
          <div className={clsx(cardStyles.single)}>
            <div className={clsx(textStyles.cardSingleTitle)}>Contacts</div>
            <div className="justify-center text-neutral-800 text-sm font-medium leading-5 whitespace-nowrap mt-4">
              Admin Email Address
            </div>
            <input
              name="main_email"
              value={formState.main_email}
              onChange={handleInputChange}
              className={clsx(inputStyles.main)}
            />
            <div className="text-gray-500 text-xs leading-5">
              The contact email address of administrator.
            </div>

            <div className="text-neutral-800 text-sm font-medium leading-5 mt-6">
              Customer Support Email Address
            </div>
            <input
              name="support_email"
              value={formState.support_email}
              onChange={handleInputChange}
              className={clsx(inputStyles.main)}
            />
            <div className="text-gray-500 text-xs leading-5">
              The contact email address of customer support.
            </div>

            <div className="text-neutral-800 text-sm font-medium leading-5 mt-6">
              Phone Number 1
            </div>
            <input
              name="phone_1"
              value={formState.phone_1}
              onChange={handleInputChange}
              className={clsx(inputStyles.main)}
            />
            <div className="text-neutral-800 text-sm font-medium leading-5 mt-6">
              Phone Number 2
            </div>
            <input
              name="phone_2"
              value={formState.phone_2}
              onChange={handleInputChange}
              className={clsx(inputStyles.main)}
            />
          </div>
          <div className={clsx(cardStyles.single)}>
            <div className="justify-center text-neutral-800 text-lg font-medium leading-6 self-stretch whitespace-nowrap">
              Measurements
            </div>
            <div className="justify-center text-gray-500 leading-6 text-xs self-stretch whitespace-nowrap mt-2.5">
              The units of measurement that will be used to determine the
              weight, height, width and length of goods.
            </div>
            <div className="flex w-full items-stretch justify-between gap-5 mt-7 self-start max-md:flex-wrap">
              <div className="flex-1">
                <div className="justify-center text-neutral-800 text-sm font-medium leading-5">
                  Weight Unit
                </div>
                <select
                  name="goods_weight"
                  value={formState.goods_weight}
                  onChange={handleInputChange}
                  className={clsx(inputStyles.main)}
                >
                  <option value="kg">Kilograms (kg)</option>
                  <option value="lb">Pounds (lb)</option>
                  {/* Add more options if needed */}
                </select>
              </div>
              <div className="flex-1">
                <div className="justify-center text-neutral-800 text-sm font-medium leading-5 whitespace-nowrap self-start">
                  Dimensions Unit
                </div>
                <select
                  value={formState.goods_dim_unit}
                  name="goods_dim_unit"
                  onChange={handleInputChange}
                  className={clsx(inputStyles.main)}
                >
                  <option value="cm">Centimeters (cm)</option>
                  <option value="in">Inches (in)</option>
                  {/* Add more options if needed */}
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
