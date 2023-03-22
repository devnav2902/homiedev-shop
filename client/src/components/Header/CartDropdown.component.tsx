import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";
import { products } from "utils/data";
import routes from "utils/routes";
import DropdownWrap from "./DropdownWrap.component";

interface Props {
  children: JSX.Element;
}

const CartDropdown: FC<Props> = ({ children: icon }) => {
  return (
    <DropdownWrap
      icon={icon}
      menuItemsClassName="w-screen max-w-xs sm:max-w-md z-[999]"
    >
      <div className="relative bg-white text-left">
        <div className="p-5 max-h-[60vh] overflow-y-auto hiddenScrollbar">
          <h3 className="text-xl font-semibold">Shopping cart</h3>
          <div className="divide-y divide-[border-color]">
            {products.slice(0, 6).map((product, key) => (
              <div className="flex py-5 last:pb-0" key={key}>
                <div className="w-20 relative aspect-[11/12] flex-shrink-0 overflow-hidden rounded-xl bg-slate-100">
                  <Image
                    src={product.img}
                    alt={product.title}
                    fill
                    className="object-cover"
                  />

                  <Link className="absolute inset-0" href="/product-detail" />
                </div>
                <div className="ml-4 flex flex-1 flex-col">
                  <div>
                    <div className="flex justify-between ">
                      <div>
                        <h3 className="text-base font-medium ">
                          <Link href="/product-detail">{product.title}</Link>
                        </h3>
                        <p className="mt-1 text-sm text-slate-500">
                          <span>Natural</span>
                          <span className="mx-2 border-l border-slate-200 h-4"></span>
                          <span>XL</span>
                        </p>
                      </div>
                      <div className="mt-0.5">
                        <div className="flex items-center border-2 border-green-500 rounded-lg py-1 px-2 md:py-1.5 md:px-2.5 text-sm font-medium">
                          <span className="text-green-500 !leading-none">
                            $74.00
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-1 items-end justify-between text-sm">
                    <p className="text-gray-500 dark:text-slate-400">Qty 1</p>
                    <div className="flex">
                      <button
                        type="button"
                        className="font-medium text-primary-6000"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-neutral-50 p-5">
          <p className="flex justify-between font-semibold text-slate-900 dark:text-slate-100">
            <span>
              <span>Subtotal</span>
              <span className="block text-sm text-slate-500 dark:text-slate-400 font-normal">
                Shipping and taxes calculated at checkout.
              </span>
            </span>
            <span className="">$299.00</span>
          </p>

          <div className="flex space-x-2 mt-5">
            <Link
              className="relative h-auto inline-flex items-center justify-center rounded-full transition-colors text-sm sm:text-base font-medium py-3 px-4 sm:py-3.5 sm:px-6 bg-white text-slate-700 hover:bg-gray-100 flex-1 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-6000"
              href={routes.cart}
            >
              View cart
            </Link>
            <Link
              className="relative h-auto inline-flex items-center justify-center rounded-full transition-colors text-sm sm:text-base font-medium py-3 px-4 sm:py-3.5 sm:px-6 disabled:bg-opacity-90 bg-slate-900 dark:bg-slate-100 hover:bg-slate-800 text-slate-50 shadow-xl flex-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-6000 dark:focus:ring-offset-0 "
              href="/checkout"
            >
              Check out
            </Link>
          </div>
        </div>
      </div>
    </DropdownWrap>
  );
};

export default CartDropdown;
