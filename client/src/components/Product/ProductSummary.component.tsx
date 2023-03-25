import NumberInput from "components/NumberInput/NumberInput.component";
import React, { FC } from "react";
import { buttonClasses } from "utils/classNames";
import { NumberInputHook } from "utils/customHooks";
import { products } from "utils/data";
import { classNames } from "utils/functions";
import { ShoppingBagIcon, StarIcon } from "utils/icons";
import { ProductProps } from "./Product.component";

interface Props {
  product: ProductProps;
  dataInput: NumberInputHook;
  showPriceSummary?: boolean;
  wrapClassName: string;
}

const ProductSummary: FC<Props> = ({
  product,
  dataInput,
  wrapClassName,
  showPriceSummary = true,
}) => {
  return (
    <div className={classNames(wrapClassName)}>
      <h2 className="lg:hidden font-semibold text-2xl md:text-3xl mb-5">
        {product.title}
      </h2>

      <div className="flex items-center justify-between">
        <div className="text-2xl font-semibold">$108.00</div>
        <div className="flex items-center font-semibold">
          <span className="flex items-center">
            <StarIcon fontSize={20} className="fill-yellow-400" />
            &nbsp;4.9
          </span>
          <span className="px-1 inline-block">&#183;</span>
          <a href="#reviews" className="underline">
            142 reviews
          </a>
        </div>
      </div>

      <div>
        <div className="font-medium mb-2">
          Color:&nbsp;
          <span className="font-semibold">Black</span>
        </div>
        <div className="space-x-3">
          {products[0].colors.map((color, index) => (
            <span
              key={index}
              style={{ backgroundColor: color }}
              className={classNames(
                "relative inline-block rounded-full w-5 h-5 cursor-pointer",
                "before:border before:border-[#e3e9ef]",
                "before:w-[26px] before:h-[26px] before:block before:rounded-full",
                "before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:absolute"
              )}
            />
          ))}
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between font-medium">
          <div className="mb-2">
            Size:&nbsp;
            <span className="font-semibold">XS</span>
          </div>

          <button className="text-blue-500">See sizing chart</button>
        </div>

        <div className="grid grid-cols-5 sm:grid-cols-6 gap-2">
          {["XS", "S", "M", "L", "XL", "2XL", "3XL"].map((size, i) => (
            <span
              key={i}
              className={classNames(
                "inline-flex items-center justify-center",
                "border border-[border-color] rounded-2xl",
                "font-semibold text-sm sm:text-base h-10 sm:h-11 text-black uppercase",
                i === 0 ? "!text-white bg-blue-500" : "",
                i === 5 || i === 6 ? "opacity-30" : ""
              )}
            >
              {size}
            </span>
          ))}
        </div>
      </div>

      <div className="flex justify-between items-center">
        <NumberInput dataInput={dataInput} />
        <button className={classNames(buttonClasses, "space-x-2")}>
          <ShoppingBagIcon />
          <span>Add to cart</span>
        </button>
      </div>

      {showPriceSummary && (
        <div className={classNames("sm:flex flex-col space-y-4")}>
          <div className="space-y-2.5">
            <div className="flex justify-between text-slate-600">
              <span className="flex">
                <span>$108.00 </span>
                <span className="mx-2">x</span>
                <span>{dataInput[0].currentNumber} </span>
              </span>
              <span>${(108.0 * dataInput[0].currentNumber).toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-slate-600">
              <span>Tax estimate</span>
              <span>$0</span>
            </div>
          </div>
          <div className="border-b border-slate-200"></div>
          <div className="flex justify-between font-semibold">
            <span>Total</span>
            <span>${(108.0 * dataInput[0].currentNumber).toFixed(2)}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductSummary;
