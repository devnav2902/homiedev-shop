import { EyeIcon, StarIcon } from "@heroicons/react/20/solid";
import {
  HeartIcon,
  ShoppingBagIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";
import WrapperDialog from "components/Dialog/Dialog.component";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { useDialog } from "utils/customHooks";

export interface ProductProps {
  link: string;
  img: string;
  title: string;
  colors: string[];
  categories: string[];
  price: (string | number)[];
}

const Product: FC<ProductProps> = ({
  link,
  img,
  title,
  colors,
  categories,
  price,
}) => {
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
          <div>
            <div>
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
            </div>
            <h2 className="mb-1 font-semibold text-3xl leading-9">{title}</h2>
            <div className="flex items-center mb-1">
              <div className="flex items-center mr-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <StarIcon key={i} width={14} />
                ))}
              </div>
              <span className="text-sm text-[#707070]">(412 Reviews)</span>
            </div>
            <div className="flex items-center mb-2">
              <span className="block mr-2 line-through font-medium">$199</span>
              <span className="block mr-2 text-xl">$110</span>
              <span className="block bg-[#f9e7eb] text-sm py-1 px-2">
                Out of stock
              </span>
            </div>
            <div className="mb-3">
              <p>
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti quos
                dolores.
              </p>
            </div>
            <div className="mb-2">
              <p className="block font-semibold mb-1.5">Colors:</p>
              {colors.map((color, index) => (
                <span
                  key={index}
                  style={{ backgroundColor: color }}
                  className="mr-4 relative inline-block rounded-full w-5 h-5 cursor-pointer before:border before:border-[#e3e9ef] before:w-[26px] before:h-[26px] before:block before:rounded-full before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:absolute"
                />
              ))}
            </div>
            <div className="mb-6">
              <p className="block font-semibold mb-1.5">Size:</p>
              <div className="flex items-center">
                {["S", "M", "L", "XL"].map((size) => (
                  <div
                    key={size}
                    className="border border-[#ddd] w-12 h-12 rounded-lg mr-2 flex items-center justify-center"
                  >
                    {size}
                  </div>
                ))}
              </div>
            </div>
            <div className="mb-4 sm:grid-cols-[1fr_2fr_1fr] grid gap-2.5 h-12">
              <select
                defaultValue="US"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm block w-full p-2.5 h-full"
              >
                <option value="US">1</option>
                <option value="CA">2</option>
                <option value="FR">3</option>
                <option value="DE">4</option>
                <option value="DE">5</option>
              </select>
              <button className="text-white flex items-center justify-center h-full bg-[#151515] p-2.5">
                <ShoppingBagIcon width={20} />
                &nbsp;Add to cart
              </button>
              <button className="h-full p-2.5 flex justify-center items-center bg-[#ebedf1]">
                <HeartIcon width={20} />
                &nbsp;Wishlist
              </button>
            </div>
          </div>
        </div>
      </WrapperDialog>

      <div className="group">
        <div className="relative">
          <Link href={link}>
            <div className="pb-[120%]">
              <Image
                src={img}
                alt={title}
                fill
                className="object-cover rounded-t-[4px]"
              />
            </div>
          </Link>
          <div
            onClick={toggleDialog}
            className="product-hover cursor-pointer transition-all duration-300 group-hover:translate-y-0 group-hover:visible group-hover:opacity-100 translate-y-12 absolute w-full bottom-0 left-0 px-4 py-3 bg-[#151515] flex items-center justify-center opacity-0 invisible"
          >
            <button className="text-sm font-medium text-white inline-flex items-center">
              <EyeIcon className="mr-1" width={20} />
              &nbsp;Quick View
            </button>
          </div>
        </div>
        <div className="pt-2 pb-1">
          <div className="flex justify-between">
            <div>
              {colors.map((color, index) => (
                <span
                  key={index}
                  style={{ backgroundColor: color }}
                  className="mr-4 relative inline-block rounded-full w-3 h-3 cursor-pointer before:border before:border-[#e3e9ef] before:w-[20px] before:h-[20px] before:block before:rounded-full before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:absolute"
                />
              ))}
            </div>
            <div>
              <HeartIcon width={20} />
            </div>
          </div>
        </div>
        <div>
          <h5 className="mb-1">
            <Link href={link} className="text-[#111111] truncate block">
              {title}
            </Link>
          </h5>
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
