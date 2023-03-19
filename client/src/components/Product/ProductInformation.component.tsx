import { HiStar, HiOutlineHeart, HiShoppingBag } from "react-icons/hi";
import React, { FC } from "react";
import { ProductProps } from "./Product.component";

interface Props extends ProductProps {}

const ProductInformation: FC<Props> = ({
  categories,
  colors,
  img,
  link,
  price,
  title,
}) => {
  return (
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
      <div className="flex items-center mb-2">
        <div className="flex items-center mr-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <HiStar key={i} fontSize={14} />
          ))}
        </div>
        <span className="text-sm text-[#707070]">(412 Reviews)</span>
      </div>
      <div className="flex items-center mb-3">
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
          <HiShoppingBag fontSize={20} />
          &nbsp;Add to cart
        </button>
        <button className="h-full p-2.5 flex justify-center items-center bg-[#ebedf1]">
          <HiOutlineHeart fontSize={20} />
          &nbsp;Wishlist
        </button>
      </div>
    </div>
  );
};

export default ProductInformation;
