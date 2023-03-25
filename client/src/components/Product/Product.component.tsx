import WrapperDialog from "components/Dialog/Dialog.component";
import AddedToCart from "components/Toast/AddedToCart.component";
import { ToastContext } from "components/Toast/ToastProvider.component";
import Image from "next/image";
import Link from "next/link";
import { FC, useContext } from "react";
import { HiEye, HiShoppingBag } from "react-icons/hi";
import { HiOutlineHeart } from "react-icons/hi2";
import { useAddToCart, useDialog, useSaveForLater } from "utils/customHooks";
import { classNames } from "utils/functions";
import { CloseIcon, StarIcon } from "utils/icons";
import ProductInformation from "./ProductInformation.component";

export interface ProductProps {
  link: string;
  img: string;
  title: string;
  colors: string[];
  categories: string[];
  price: string | number;
  preview?: string[];
}

const Product: FC<ProductProps> = (productDetails) => {
  const { link, img, title, colors, categories, price } = productDetails;

  const toast = useContext(ToastContext);
  const [isOpen, toggleDialog] = useDialog();
  const { handleSaveForLater, loadingState, stateButton } =
    useSaveForLater(false);
  const {
    handleAddToCart,
    loadingState: addToCartState,
    stateAddToCartButton,
  } = useAddToCart(false);

  console.log(loadingState);

  return (
    <>
      <WrapperDialog isOpen={isOpen} toggleDialog={toggleDialog}>
        <button
          onClick={toggleDialog}
          className="absolute top-2.5 right-2.5 w-7 h-7 flex items-center justify-center rounded-full hover:bg-slate-100 text-slate-700 focus:outline-none"
        >
          <CloseIcon fontSize={20} />
        </button>
        <div className="grid md:grid-cols-[1fr_1fr] gap-7">
          <div>
            <div className="relative aspect-[11/12]">
              <Image
                src={img}
                fill
                alt=""
                className="object-cover rounded-2xl"
              />
            </div>
          </div>
          <ProductInformation {...productDetails} />
        </div>
      </WrapperDialog>

      <div className="space-y-4">
        <div className="relative group">
          <Link href={link}>
            <div className="relative aspect-[11/12]">
              <Image
                src={img}
                alt={title}
                fill
                className="object-cover rounded-3xl"
              />
            </div>
          </Link>
          <button
            onClick={loadingState.isLoading ? undefined : handleSaveForLater}
            className="w-9 h-9 rounded-full flex items-center justify-center absolute top-3 right-3 z-10 bg-white"
          >
            {loadingState.isLoading ? (
              <span className="animate-spin w-5 h-5 border-2 border-b-2 border-slate-200 border-b-blue-500 rounded-full" />
            ) : (
              <HiOutlineHeart
                className={stateButton ? "fill-red-500 stroke-red-500" : ""}
                fontSize={20}
              />
            )}
          </button>
          <div
            className={classNames(
              "absolute inset-x-1 opacity-0 invisible",
              "transition-all",
              "bottom-0",
              "flex items-center justify-center",
              "text-xs",
              "text-white",
              "font-medium",
              "group-hover:bottom-4 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0"
            )}
          >
            <button
              onClick={() => {
                handleAddToCart(productDetails);
              }}
              className={classNames(
                "inline-flex items-center rounded-full py-2 px-4",
                "bg-slate-900",
                "transition-colors",
                "shadow-lg",
                "hover:bg-slate-800"
              )}
            >
              {addToCartState.isLoading ? (
                <span className="animate-spin w-4 h-4 border-2 border-slate-200 border-b-blue-500 rounded-full mr-1" />
              ) : (
                <HiShoppingBag className="mr-1" fontSize={16} />
              )}
              &nbsp;Add to bag
            </button>
            <button
              onClick={toggleDialog}
              className={classNames(
                "transition-colors",
                "ml-1.5 inline-flex items-center rounded-full py-2 px-4 bg-white text-slate-700",
                "hover:bg-gray-100 hover:text-slate-900",
                "shadow-lg"
              )}
            >
              <HiEye className="mr-1" fontSize={16} />
              &nbsp;Quick View
            </button>
          </div>
        </div>
        <div className="space-y-3 px-2 pb-2.5">
          <div className="">
            <div>
              {colors.map((color, index) => (
                <span
                  key={index}
                  style={{ backgroundColor: color }}
                  className="mr-4 relative inline-block rounded-full w-[18px] h-[18px] cursor-pointer before:border before:border-[#e3e9ef] before:w-[24px] before:h-[24px] before:block before:rounded-full before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:absolute"
                />
              ))}
            </div>
          </div>

          <h2 className="text-base font-semibold">
            <Link href={link} className="text-[#111111] truncate block">
              {title}
            </Link>
          </h2>

          <div className="flex items-center justify-between">
            <span
              className={classNames(
                "font-semibold inline-block border-2 px-2 py-1 border-green-500 rounded-lg",
                "text-green-500 text-sm"
              )}
            >
              ${price}
            </span>

            <div className="flex items-center">
              <StarIcon className="fill-yellow-500" />
              &nbsp;
              <span className="text-slate-500 text-sm">
                4.5&nbsp;(86 reviews)
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
