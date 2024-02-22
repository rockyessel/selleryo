"use client";
import BreadCrumbsMenu from "@/components/common/bread-crumbs";
import Button from "@/components/common/button";
import EmptyStateCard from "@/components/common/empty-state-card";
import useNavigation from "@/lib/hooks/useNavigation";
import useCustomRouter from "@/lib/hooks/useRouter";
import { _clearLoader, _showLoader } from "@/redux/loading-slice";
import {
  addItemToCollection,
  deleteItemFromCollection,
  getItemsFromCollection,
  updateItem,
} from "@/services/firebase/crud";
import {
  cardStyles,
  inputStyles,
  layoutStyles,
  textStyles,
} from "@/styles/classStyles";
import clsx from "clsx";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
const Coupon = () => {
  const dispatch = useDispatch();
  const nav = useNavigation();
  const { query } = useCustomRouter();

  const CrumbsData = [
    { label: "Dashboard", route: "/" },
    { label: "Coupons", route: "/coupons" },
    { label: query.id === "create" ? "Create" : query.id },
  ];

  const [formState, setFormState] = useState({
    code: "",
    type: "percent",
    discount: "",
    limit: "",
    status: "enabled",
    startDate: `${new Date()}`,
    endDate: "",
  });

  useEffect(() => {
    if (query.id && query.id !== "create") {
      dispatch(_showLoader({ type: "full-page-loader" }));
      getItemsFromCollection(
        "coupons",
        ["id", "==", query.id],
        (res: any[]) => {
          if (res.length > 0) {
            setFormState({ ...res[0] });
          }
          dispatch(_clearLoader());
        }
      );
    }
  }, [query.id]);

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: name === "code" ? value?.toString().toUpperCase() : value,
    }));
  };

  const handleSubmit = async () => {
    const { code, limit, type, discount, endDate } = formState;

    // Check if required fields are filled
    if (!code || !limit || !endDate) {
      alert("Please fill in these fields; Code, Usage limit, and End Date.");
      return;
    }

    // Check if required fields are filled
    if (type !== "free-shipping" && !discount) {
      alert("Please fill in these fields; Discount.");
      return;
    }

    if (query.id && query.id !== "create") {
      dispatch(_showLoader({ type: "full-page-loader" }));
      updateItem(
        "coupons",
        code,
        formState,
        "Coupon updated successfully!",
        () => {
          nav.push("/coupons");
          dispatch(_clearLoader());
        },
        () => dispatch(_clearLoader())
      );
    } else {
      // Check if coupon code already exists
      getItemsFromCollection("coupons", ["id", "==", code], (_res: any[]) => {
        if (_res.length > 0)
          alert("Coupon code already exists. Choose a different code.");
        // Submit to Firestore
        else
          try {
            dispatch(_showLoader({ type: "full-page-loader" }));
            addItemToCollection(
              "coupons",
              {
                id: code,
                ...formState,
                discount:
                  formState?.discount
                    ?.replaceAll("%", "")
                    ?.replaceAll("$", "") || "",
              },
              `Coupon "${code}" added successfully!`,
              () => {
                nav.push("/coupons");
                dispatch(_clearLoader());
              },
              () => dispatch(_clearLoader())
            );
          } catch (error: any) {
            alert("Error submitting coupon\n" + error);
          }
      });
    }
  };

  function onCouponNotInUse() {
    dispatch(_showLoader({ type: "full-page-loader" }));
    deleteItemFromCollection(
      formState.code,
      "coupons",
      () => {
        nav.push("/coupons");
        dispatch(_clearLoader());
      },
      "Coupon Deleted successfully"
    );
  }

  function handleDelete() {
    if (!formState.code) {
      return alert("Please fill in these fileds; Code");
    }

    getItemsFromCollection(
      "orders",
      ["coupon", "==", formState.code],
      (res: any) => {
        if (res.length > 0) {
          let inUse = res?.find(
            (order: any) => order.orderStatus !== "completed"
          );

          if (inUse) {
            alert(
              `Sorry! You cannot delete this coupon because it is in use by an order that is not yet completed.${
                formState.status === "enabled"
                  ? " You can disable it for now!"
                  : ""
              }
              `
            );
          } else {
            onCouponNotInUse();
          }
        } else {
          onCouponNotInUse();
        }
      }
    );
  }

  return (
    <div className="h-full w-full flex flex-col space-y-4 pt-2">
      {/* Header */}
      <div className={layoutStyles.screen.header}>
        <div className="space-y-1">
          <BreadCrumbsMenu routes={CrumbsData} />
          <div className="text-neutral-800 text-3xl font-medium leading-9">
            {query.id === "create" ? "Create Coupon" : "Edit Coupon"}
          </div>
        </div>
        <div className=" overflow-hidden flex justify-between gap-2.5 ">
          {query.id && query.id !== "create"
            ? !formState.code
              ? null
              : formState.status === "disabled" && (
                  <Button
                    type="outline"
                    label="Delete"
                    onClick={handleDelete}
                  />
                )
            : null}

          {query.id && query.id !== "create" && !formState.code ? null : (
            <Button type="main" label="Save" onClick={handleSubmit} />
          )}
        </div>
      </div>
      {/* Content */}
      <div className="p-5">
        {query.id && query.id !== "create" && !formState.code ? (
          <EmptyStateCard
            text={`Sorry, coupon with code "${query.id}" was not found`}
          />
        ) : (
          <div className="gap-5 flex">
            <div className={clsx(cardStyles.single, "!w-[60%] gap-6")}>
              <div className={clsx(textStyles.cardSingleTitle, "mt-0 mb-0")}>
                Basic information
              </div>
              <div>
                <div className=" text-neutral-800 text-sm font-medium leading-5 self-stretch">
                  Code
                </div>
                <input
                  onChange={handleChange}
                  name="code"
                  disabled={query.id === "create" ? false : true}
                  value={formState.code}
                  placeholder="QWERTY12"
                  className={inputStyles.main}
                />
              </div>
              <div className="">
                <div className=" text-neutral-800 text-sm font-medium leading-5 self-stretch ">
                  Type
                </div>
                <div className="flex w-full gap-4 self-start mt-2">
                  <input
                    name="type"
                    type="radio"
                    checked={formState.type === "percent"}
                    value={"percent"}
                    onChange={handleChange}
                  />
                  <div className=" text-neutral-800 text-sm leading-6 grow self-start">
                    Percentage
                  </div>
                </div>
                <div className="flex w-full gap-4 self-start">
                  <input
                    name="type"
                    type="radio"
                    checked={formState.type === "fixed-amount"}
                    value="fixed-amount"
                    onChange={handleChange}
                  />
                  <div className=" text-neutral-800 text-sm leading-6 grow self-start">
                    Fixed amount
                  </div>
                </div>
                <div className="flex w-full max-w-full gap-4 self-start">
                  <input
                    name="type"
                    type="radio"
                    checked={formState.type === "free-shipping"}
                    value="free-shipping"
                    onChange={handleChange}
                  />
                  <div className=" text-neutral-800 text-sm leading-6 grow">
                    Free shipping
                  </div>
                </div>
              </div>
              {formState.type !== "free-shipping" ? (
                <div>
                  <div className=" text-neutral-800 text-sm font-medium leading-5 self-stretch ">
                    Discount value
                  </div>

                  <input
                    placeholder={
                      formState.type === "percent" ? "10%" : "$10.00"
                    }
                    onChange={handleChange}
                    value={formState.discount}
                    name="discount"
                    className={inputStyles.main}
                  />
                </div>
              ) : null}
              <div>
                <div className=" text-neutral-800 text-sm font-medium leading-5 self-stretch">
                  Usage limit
                </div>
                <input
                  placeholder="100"
                  name="limit"
                  onChange={handleChange}
                  value={formState.limit}
                  className={inputStyles.main}
                />
              </div>

              {/* <div className="flex items-center w-full gap-2 self-start">
              <input
                type="checkbox"
                className="w-5 h-5 accent-teal-500 fill-white"
              />
              <div className=" text-neutral-800 text-sm leading-6 grow">
                Only for registered customers
              </div>
            </div> */}
            </div>

            {/* Sidebar */}
            <div className="flex flex-col !w-[30%] gap-4">
              {/* Status */}
              <div className={clsx(cardStyles.single, "space-y-1")}>
                <div className=" text-neutral-800 text-lg font-medium leading-6">
                  Status
                </div>
                <div className="flex w-full max-w-full gap-2">
                  <input
                    name="status"
                    type="radio"
                    checked={formState.status === "enabled"}
                    value="enabled"
                    onChange={handleChange}
                  />
                  <div className=" text-neutral-800 text-base leading-6 grow self-start">
                    Enabled
                  </div>
                </div>
                <div className="flex w-full max-w-full gap-2">
                  <input
                    name="status"
                    type="radio"
                    checked={formState.status === "disabled"}
                    value="disabled"
                    onChange={handleChange}
                  />
                  <div className=" text-neutral-800 text-base leading-6 grow self-start">
                    Disabled
                  </div>
                </div>
              </div>

              {/* Schedule */}
              <div className={cardStyles.single}>
                <div className=" text-neutral-800 text-lg font-medium leading-6">
                  Schedule
                </div>
                <div className=" text-gray-500 text-sm leading-6">
                  Use these settings to set the coupon expiration
                </div>
                <div className="space-y-2">
                  <div className="text-neutral-800 text-sm font-medium leading-5">
                    Start date
                  </div>
                  <input
                    type="datetime-local"
                    name="startDate"
                    value={formState.startDate}
                    onChange={handleChange}
                    className={inputStyles.main}
                  />
                </div>
                <div className="space-y-2">
                  <div className=" text-neutral-800 text-sm font-medium leading-5">
                    End date
                  </div>
                  <input
                    type="datetime-local"
                    name="endDate"
                    value={formState.endDate}
                    onChange={handleChange}
                    className={inputStyles.main}
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Coupon;
