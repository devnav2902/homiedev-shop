import HorizontalLine from "components/HorizontalLine/HorizontalLine.component";
import { ProductProps } from "components/Product/Product.component";
import Image from "next/image";
import { FC } from "react";
import { useDelayedUnmouting } from "utils/customHooks";
import { classNames } from "utils/functions";

interface Props extends ProductProps {
  qty: number;
}

const AddedToCart: FC<Props> = ({ qty, img, title, price }) => {
  const timeDelay = 2400;
  const state = useDelayedUnmouting(timeDelay);

  // console.log(state);

  return state === "unmounted" ? null : (
    <div
      className={classNames(
        "shadow-lg ring-1 ring-black/5 pointer-events-auto",
        "rounded-2xl bg-white p-5 space-y-4 max-w-md w-full",
        `transform transition-all duration-[${timeDelay}ms] translate-y-20`,
        state === "mounted"
          ? "!translate-y-0"
          : state === "unmounting"
          ? "opacity-0 !translate-y-0 absolute pointer-events-none"
          : ""
      )}
    >
      <p className="text-slate-800 font-semibold text-lg">Added to cart!</p>
      <HorizontalLine className="w-full" />
      <div className="flex">
        <div className="flex-shrink-0 w-20 aspect-[11/12] relative">
          <Image src={img} alt="" fill className="rounded-2xl object-cover" />
        </div>
        <div className="ml-4 flex-1 flex flex-col">
          <div className="flex justify-between">
            <div>
              <h3 className="font-semibold line-clamp-1">{title}</h3>
              <p className="mt-1 text-sm text-slate-500">
                <span>Black</span>&nbsp;&#183;&nbsp;XL
              </p>
            </div>

            <div>
              <span className="border-2 text-sm border-green-500 px-2 py-1 rounded-xl text-green-500">
                ${price}
              </span>
            </div>
          </div>

          <div className="flex flex-1 items-end justify-between text-sm">
            <span className="text-slate-500">Qty {qty}</span>
            <button className="focus:outline-none text-blue-500 font-medium cursor-pointer">
              View cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddedToCart;
