"use client";
import BreadCrumbsMenu from "@/components/common/bread-crumbs";
import Button from "@/components/common/button";
import CustomDropZone from "@/components/common/drop-zone";
import EmptyStateCard from "@/components/common/empty-state-card";
import Required from "@/components/common/required";
import useNavigation from "@/lib/hooks/useNavigation";
import { LOADER_TYPES } from "@/lib/types";
import { _clearLoader, _showLoader } from "@/redux/loading-slice";
import {
  addItemToCollection,
  deleteItemFromCollection,
  getItemsFromCollection,
  updateItem,
} from "@/services/firebase/crud";
import uploadImages from "@/services/firebase/files";
import {
  cardStyles,
  inputStyles,
  layoutStyles,
  textStyles,
} from "@/styles/classStyles";
import { CheckSquare, Square, X } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import clsx from "clsx";
import ItemLoader from "@/components/common/item-loader";
import { v4 as uuidv4 } from "uuid";

const AddImagePreview = ({
  image,
  alt,
  removeImage,
}: {
  image: any;
  alt: string;
  removeImage: any;
}) => {
  const [order, setOrder] = useState(1);
  return (
    <div className="relative overflow-hidden bg-slate-50 border border-slate-200 w-full h-44 shadow-md">
      <div className="border-0 flex items-center gap-3 flex-wrap lg:flex-nowrap">
        <Image
          alt=""
          priority
          width={500}
          height={500}
          src={typeof image === "object" ? URL.createObjectURL(image) : image}
          className="w-full h-full aspect-square object-cover object-center overflow-hidden max-md:ml-1"
        />
      </div>
      <Button
        className="absolute top-1 right-1 bg-white shadow-md px-0 rounded-full h-[35px] !min-w-[30px]"
        type="none"
        icon={<X className="w-4 h-4" />}
        onClick={removeImage}
      />
    </div>
  );
};

const ProductPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const { type: loaderType } = useSelector(
    (state: { loader: LOADER_TYPES }) => state.loader
  );
  const nav = useNavigation();
  const dispatch = useDispatch();

  const CrumbsData = [
    { label: "Dashboard", route: "/" },
    { label: "Products", route: "/products" },
    { label: id === "new" ? "New" : "Edit Product" },
  ];
  // states
  const [name, setName] = useState("");
  const [originalName, setOriginalName] = useState("");
  const [description, setDescription] = useState("");
  const [shortDescription, setShortDescription] = useState("");
  const [newPrice, setNewPrice] = useState("");
  const [oldPrice, setOldPrice] = useState("");
  const [sku, setSku] = useState("");
  const [quantity, setQuantity] = useState("");
  const [refId, setRefId] = useState("");
  const [images, setImages] = useState<any[]>([]);
  const [visibility, setVisibility] = useState("");
  const [scheduleDate, setScheduleDate] = useState("");
  const [categories, setCategories] = useState([]);
  const [mainCategories, setMainCategories] = useState<any>([]);
  const [productNotFound, setProductNotFound] = useState(false);
  const [loadingCategories, setLoadingCategories] = useState(true);

  // get categories
  useEffect(() => {
    if (!productNotFound) {
      getItemsFromCollection(
        "categories",
        null,
        (res: any[]) => {
          setMainCategories(res);
        },
        setLoadingCategories
      );
    }
  }, [productNotFound]);

  // get product by id
  useEffect(() => {
    if (id && id !== "new") {
      dispatch(_showLoader({ type: "full-page-loader" }));
      getItemsFromCollection("products", ["id", "==", id], (res: any[]) => {
        updateState(res.length > 0 ? res[0] : "");
        dispatch(_clearLoader());
        if (res.length === 0) {
          setProductNotFound(true);
        }
      });
    }
  }, [id]);

  // Function to handle image selection
  const handleImageSelection = (imagesData: any) => {
    let newImages = imagesData?.map((file: any) => {
      // Check if the file is not already present in the current state
      const isImageExists = images.some((image) => image?.file === file);

      if (!isImageExists) {
        return { file, alt: "" };
      }

      return null; // If the file already exists, skip it
    });

    // Filter out null values (files that already exist)
    newImages = newImages.filter((image: any) => image !== null);

    // Concatenate the new images with the existing ones
    let newData: any[] = [...images, ...newImages];
    setImages(newData);
  };

  // Function to handle product submission
  function submitProduct() {
    // Check if required fields are filled
    if (
      !name ||
      !description ||
      !newPrice ||
      !sku ||
      !quantity ||
      !visibility ||
      categories.length === 0 ||
      images.length === 0
    ) {
      alert("Error\nPlease fill in all required * fields.");
      return;
    }

    // Check visibility and validate scheduleDate if applicable
    if (visibility === "schedule" && !scheduleDate) {
      alert("Error\nPlease provide a schedule date.");
      return;
    }

    dispatch(_showLoader({ type: "full-page-loader" }));

    // check if product already exists
    getItemsFromCollection(
      "products",
      ["name", "==", name],
      (res: any) => {
        if (res.length > 0 && res[0].id !== id) {
          alert('Product already exists with name "' + name + '"');
          dispatch(_clearLoader());
        }
        // Call the function to submit images and get image URLs
        else
          uploadImages(images, "/images/products/", (res) => {
            // Create the product object with updated image URLs
            const product = {
              name,
              description,
              shortDescription,
              newPrice,
              oldPrice,
              sku,
              quantity,
              images: res,
              visibility,
              scheduleDate,
              categories,
              id: id !== "new" ? id : uuidv4(),
              createdAt: Date.now(),
            };
            if (id === "new") {
              // Submit the 'product' object to Firestore
              addItemToCollection(
                "products",
                product,
                "Product added successfully!",
                () => {
                  nav.push("/products");
                  resetForm();
                  dispatch(_clearLoader());
                },
                () => dispatch(_clearLoader())
              );
            }
            if (id?.length! > 10) {
              // Update the 'product' object in Firestore
              updateItem(
                "products",
                refId,
                product,
                "Product updated successfully!",
                () => {
                  nav.push("/products");
                  resetForm();
                  dispatch(_clearLoader());
                },
                () => dispatch(_clearLoader())
              );
            }
          });
      },
      null,
      true
    );
  }

  // delete product
  const deleteProduct = async () => {
    function onDone() {
      deleteItemFromCollection(
        refId,
        "products",
        () => {
          nav.push("/products");
          dispatch(_clearLoader());
        },
        "Product deleted successfully"
      );
    }

    var approve = window.confirm(
      "Are you sure you want to delete this product? \n\nThis action is permanent"
    );
    if (approve) {
      //some code
      // dispatch(_showLoader({ type: "full-page-loader" }));
      getItemsFromCollection(
        "orders",
        ["orderStatus", "!=", "Completed"],
        (res: any) => {
          let exists = res?.filter((order: any) =>
            order?.orders?.find((_order: any) => _order.id === productId)
          );
          if (exists.length > 0) {
            var answer = window.confirm(
              "Can't Delete This Product \n\nThis product cannot be deleted because it is currently ordered by a customer. \nWould you like to view this order?"
            );
            if (answer) {
              //some code
              nav.push("/orders/details/" + exists[0].orderId);
            } else {
              //some code
            }
          } else {
            onDone();
          }
        }
      );
    } else {
      //some code
    }
  };

  function removeImage(index: number) {
    let newImages = images?.filter((img, _i) => _i !== index);
    setImages(newImages);
  }

  const toggleCategory = (newCategory: any) => {
    setCategories((prev: any) => {
      // Check if the new category already exists
      const categoryExists = prev.includes(newCategory);

      if (categoryExists) {
        // If the category exists, remove it
        return prev.filter((category) => category !== newCategory);
      } else {
        // If the category doesn't exist, add it
        return [...prev, newCategory];
      }
    });
  };

  const resetForm = () => {
    setName("");
    setDescription("");
    setShortDescription("");
    setNewPrice("");
    setOldPrice("");
    setSku("");
    setQuantity("");
    setImages([]);
    setVisibility("");
    setScheduleDate("");
    setRefId("");
    setCategories([]);
  };

  const updateState = (product: any) => {
    setName(product.name || "");
    setDescription(product.description || "");
    setShortDescription(product.shortDescription || "");
    setNewPrice(product.newPrice || "");
    setOldPrice(product.oldPrice || "");
    setSku(product.sku || "");
    setQuantity(product.quantity || "");
    setImages(product.images || []);
    setVisibility(product.visibility || "");
    setScheduleDate(product.scheduleDate || "");
    setRefId(product.refId || "");
    setCategories(product.categories || []);
  };

  return (
    <div className="h-full w-full flex flex-col space-y-4 pt-2">
      {/* {console.log(visibility)} */}
      {productNotFound ? (
        <EmptyStateCard text="This product has either been moved or deleted!" />
      ) : (
        <>
          {/* Header */}
          <div className={layoutStyles.screen.header}>
            <div className="space-y-1">
              <BreadCrumbsMenu routes={CrumbsData} />
              <div className="text-neutral-800 text-3xl font-medium leading-9">
                {id === "new" ? "Add New Product" : "Product Details"}
              </div>
            </div>
            <div className=" overflow-hidden flex justify-between gap-2.5 ">
              {id !== "new" && (
                <Button type="outline" label="Delete" onClick={deleteProduct} />
              )}
              <Button type="main" label="Save" onClick={submitProduct} />
            </div>
          </div>
          {/* Content */}
          <div className="p-5">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
              <div className="flex flex-col items-stretch w-[70%] max-md:w-full max-md:ml-0">
                <div className="space-y-6 max-w-[1296px] items-stretch self-stretch flex grow flex-col max-md:max-w-full max-md:mt-6">
                  <div className={cardStyles.single}>
                    <div className={textStyles.cardSingleTitle}>
                      Basic information
                    </div>
                    <div>
                      <div className="text-neutral-800 text-sm font-medium leading-5 whitespace-nowrap mt-2 max-md:max-w-full">
                        Name <Required />
                      </div>
                      <input
                        value={name}
                        className={`${inputStyles.main} mt-2.5`}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Eg. Brandix Screwdriver SCREW150"
                      />
                    </div>
                    {/* <div>
                      <div className="text-neutral-800 text-sm font-medium leading-5 whitespace-nowrap mt-4 max-md:max-w-full">
                        Slug
                      </div>
                      <div className="mt-2.5 flex flex-wrap lg:flex-nowrap items-center">
                        <div className="h-10 bg-zinc-200 flex items-center px-3">
                          https://esiquehandycrafts.com/products/details/
                        </div>
                        <div className="h-10 min-w-80 flex items-center border px-3 whitespace-nowrap overflow-x-scroll w-full">
                          {productId}
                        </div>
                      </div>
                      <div>
                        <div className="text-gray-500 text-xs leading-5 whitespace-nowrap max-md:max-w-full">
                          Unique human-readable product identifier. No longer
                          than 255 characters.
                        </div>
                      </div>
                    </div> */}
                    <div>
                      <div className="text-neutral-800 text-sm font-medium leading-5 whitespace-nowrap mt-4 max-md:max-w-full">
                        Description <Required />
                      </div>
                      <textarea
                        value={description}
                        className={inputStyles.textarea}
                        onChange={(e) => setDescription(e.target.value)}
                      />
                    </div>
                    <div>
                      <div className="text-neutral-800 text-sm font-medium leading-5 whitespace-nowrap mt-4 max-md:max-w-full">
                        Short description <Required />{" "}
                        <span className="text-xs font-regular text-zinc-400">
                          (Limit 150 Characters)
                        </span>
                      </div>
                      <input
                        className={`${inputStyles.main}`}
                        value={shortDescription}
                        min={150}
                        onChange={(e) => setShortDescription(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className={cardStyles.single}>
                    <div className={textStyles.cardSingleTitle}>Pricing</div>
                    <div className="w-full flex items-end flex-wrap gap-4">
                      <div className="flex-1 w-full space-y-2">
                        <div className="text-neutral-800 text-sm font-medium leading-5">
                          Price <Required />
                        </div>
                        <input
                          className={inputStyles.main}
                          value={newPrice}
                          placeholder="00.00"
                          onChange={(e) => setNewPrice(e.target.value)}
                        />
                      </div>
                      <div className="flex-1 w-full space-y-2">
                        <div className="text-neutral-800 text-sm font-medium leading-5 self-stretch whitespace-nowrap">
                          Old price
                        </div>
                        <input
                          className={inputStyles.main}
                          value={oldPrice}
                          placeholder="00.00"
                          onChange={(e) => setOldPrice(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                  <div className={cardStyles.single}>
                    <div className={textStyles.cardSingleTitle}>Inventory</div>

                    <div className="text-neutral-800 text-sm font-medium leading-5 self-stretch whitespace-nowrap max-md:max-w-full">
                      SKU <Required />
                    </div>
                    <input
                      type="text"
                      className={inputStyles.main}
                      value={sku}
                      placeholder="Eg. 938JGH"
                      onChange={(e) => setSku(e.target.value)}
                    />

                    <div className="text-neutral-800 text-sm font-medium leading-5 self-stretch whitespace-nowrap mt-4 max-md:max-w-full">
                      Stock quantity <Required />
                    </div>
                    <input
                      type="text"
                      className={inputStyles.main}
                      placeholder="Eg. 20"
                      value={quantity}
                      onChange={(e) => setQuantity(e.target.value)}
                    />
                  </div>
                  <div className={cardStyles.single}>
                    <div className={textStyles.cardSingleTitle}>
                      Images <Required />
                    </div>
                    {images.length > 0 ? (
                      <>
                        <div className="gap-4 md:grid md:grid-cols-2 lg:grid-cols-3 w-full mt-0 py-3">
                          {images?.map((image, index) => {
                            return (
                              <AddImagePreview
                                key={index}
                                image={image?.file || image.url}
                                alt={image?.alt}
                                removeImage={() => removeImage(index)}
                              />
                            );
                          })}
                        </div>

                        <div className="mt-5 self-start max-md:ml-1">
                          <div className="flex items-center mt-1">
                            <label
                              htmlFor="fileInput"
                              className="text-teal-500 cursor-pointer"
                            >
                              Add image
                            </label>
                            <input
                              type="file"
                              id="fileInput"
                              accept="image/*"
                              multiple
                              className="hidden"
                              onChange={(e) =>
                                handleImageSelection([...e?.target?.files])
                              }
                            />
                          </div>
                        </div>
                      </>
                    ) : (
                      <CustomDropZone onDone={handleImageSelection} />
                    )}
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-stretch w-[30%] max-md:w-full max-md:ml-0">
                <div className="max-w-sm items-stretch self-stretch flex flex-col max-md:mt-6  space-y-6">
                  <div className={cardStyles.single}>
                    <div className={textStyles.cardSingleTitle}>
                      Visibility <Required />
                    </div>
                    <div className="flex w-full max-w-full gap-2 mt-2 self-start space-x-3">
                      <input
                        // defaultChecked={visibility === "Publish"}
                        checked={visibility === "Publish"}
                        name="visibility"
                        value="Publish"
                        type="radio"
                        onChange={(e) => setVisibility(e.target.value)}
                        className="w-4 h-4 mt-1 accent-teal-500 fill-white"
                      />
                      <div className="text-neutral-800 text-base leading-6 grow whitespace-nowrap">
                        Publish
                      </div>
                    </div>
                    <div className="flex w-full max-w-full gap-2 mt-3 self-start space-x-3">
                      <input
                        // defaultChecked={visibility === "Schedule"}
                        checked={visibility === "Schedule"}
                        name="visibility"
                        value="Schedule"
                        type="radio"
                        onChange={(e) => setVisibility(e.target.value)}
                        className="w-4 h-4 mt-1 accent-teal-500 fill-white"
                      />
                      <div className="text-neutral-800 text-base leading-6 grow whitespace-nowrap">
                        Schedule
                      </div>
                    </div>
                    <div className="flex w-full max-w-full gap-2 mt-3 self-start space-x-3">
                      <input
                        // defaultChecked={visibility === "Hide"}
                        checked={visibility === "Hide"}
                        name="visibility"
                        type="radio"
                        onChange={(e) => setVisibility(e.target.value)}
                        value="Hide"
                        className="w-4 h-4 mt-1 accent-teal-500 fill-white"
                      />
                      <div className="text-neutral-800 text-base leading-6 grow whitespace-nowrap">
                        Hide
                      </div>
                    </div>
                    {visibility === "Schedule" && (
                      <>
                        <div className="text-neutral-800 text-sm font-medium leading-5 whitespace-nowrap mt-6">
                          Publish date <Required />
                        </div>
                        <input
                          type="date"
                          className={inputStyles.main}
                          required={visibility === "Schedule"}
                          onChange={(e) => setScheduleDate(e.target.value)}
                        />
                      </>
                    )}
                  </div>
                  <div className={cardStyles.single}>
                    <div className={clsx(textStyles.cardSingleTitle, "!mb-1")}>
                      Categories <Required />
                    </div>
                    {/* <div className="max-h-16 bg-white flex w-full flex-wrap p-1.5">
                        {categories?.map((cat, index) => {
                          return (
                            <Chip
                              key={index}
                              text={cat}
                              remove={() => removeCategory(cat)}
                            />
                          );
                        })}
                      </div> */}
                    <div className="max-h-52 overflow-y-auto">
                      {loadingCategories ? (
                        <ItemLoader />
                      ) : (
                        mainCategories?.map((cat: any, i: number) => (
                          <div
                            className="group cursor-pointer flex flex-row items-center h-10 pr-3 text-xs hover:bg-slate-100"
                            key={i}
                          >
                            <div
                              className="h-full w-10 flex items-center justify-center cursor-pointer group-hover:bg-slate-100"
                              onClick={(e) => {
                                toggleCategory(cat.name);
                              }}
                            >
                              {categories.includes(cat?.name) ? (
                                <CheckSquare className="w-4 h-4 text-white rounded-sm bg-teal-500" />
                              ) : (
                                <Square className="w-4 h-4" />
                              )}
                            </div>
                            <div
                              className="h-full flex-1 flex flex-row items-center"
                              onClick={() => toggleCategory(cat.name)}
                            >
                              {cat?.name}
                            </div>
                          </div>
                        ))
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ProductPage;
