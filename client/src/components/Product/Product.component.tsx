import WrapperDialog from "components/Dialog/Dialog.component";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { HiEye, HiShoppingBag } from "react-icons/hi";
import { HiOutlineHeart } from "react-icons/hi2";
import { useDialog } from "utils/customHooks";
import { classNames } from "utils/functions";
import ProductInformation from "./ProductInformation.component";

export interface ProductProps {
  link: string;
  img: string;
  title: string;
  colors: string[];
  categories: string[];
  price: (string | number)[];
  preview?: string[];
}

const Product: FC<ProductProps> = (productDetails) => {
  const { link, img, title, colors, categories, price } = productDetails;

  const [isOpen, toggleDialog] = useDialog();

  return (
    <>
      <WrapperDialog isOpen={isOpen} toggleDialog={toggleDialog}>
        <div className="grid md:grid-cols-[2fr_3fr] gap-5">
          <div>
            <div className="relative pb-[120%]">
              <Image src={img} fill alt="" />
            </div>
          </div>
          <ProductInformation {...productDetails} />
        </div>
      </WrapperDialog>

      <div className="">
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
          <button className="w-9 h-9 rounded-full flex items-center justify-center absolute top-3 right-3 z-10 bg-white">
            <HiOutlineHeart
              className="fill-red-500 stroke-red-500"
              fontSize={20}
            />
          </button>
          <div
            onClick={toggleDialog}
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
              className={classNames(
                "inline-flex items-center rounded-full py-2 px-4",
                "bg-slate-900",
                "transition-colors",
                "shadow-lg",
                "hover:bg-slate-800"
              )}
            >
              <HiShoppingBag className="mr-1" fontSize={16} />
              &nbsp;Add to bag
            </button>
            <button
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
        <div className="pt-2 pb-1">
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
        <div>
          <h2 className="mb-1 text-base font-semibold">
            <Link href={link} className="text-[#111111] truncate block">
              {title}
            </Link>
          </h2>
          {categories.length > 0 && (
            <div className="">
              {categories.map((category) => (
                <div
                  key={category}
                  className="mr-1 text-white rounded-md uppercase py-1 px-2 inline-block text-sm bg-[#1ac790]"
                >
                  {category}
                </div>
              ))}
            </div>
          )}
          <span className="font-semibold text-sm ">
            {(
              price.reduce(
                (result, value) => (result += `$${value} - `),
                ""
              ) as string
            ).slice(0, -3)}
          </span>
        </div>
      </div>
    </>
  );
};

export default Product;
