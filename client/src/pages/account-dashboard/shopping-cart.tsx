import AccountDashboardLayout from "components/AccountDashboardLayout/AccountDashboardLayout";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { products } from "utils/data";
import { BiColorFill } from "react-icons/bi";
import { IoResize } from "react-icons/io5";
import { HiCheck } from "react-icons/hi";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { classNames } from "utils/functions";

const ShoppingCart = () => {
  return (
    <AccountDashboardLayout>
      <div className="space-y-10 sm:space-y-12">
        <h2 className="text-2xl sm:text-3xl font-semibold">SHOPPING CART</h2>

        <div className="flex">
          <div
            className={classNames(
              "w-full lg:w-[60%] xl:w-[55%]",
              "divide-y divide-[border-color]"
            )}
          >
            {products.slice(0, 5).map((product) => {
              return (
                <div className="grid grid-cols-[auto_1fr] py-12 last:pb-0">
                  <div className="mr-6 aspect-[11/12] relative w-[128px]">
                    <Image
                      className="rounded-xl"
                      src={product.img}
                      fill
                      alt=""
                    />
                  </div>
                  <div className="flex flex-col">
                    <div className="flex justify-between mb-2 flex-col lg:flex-row">
                      <div className="mr-2 mb-2 flex-[1.5]">
                        <h3 className="text-base font-semibold">
                          <Link href={product.link}>{product.title}</Link>
                        </h3>

                        <div className="flex items-center mt-1.5 text-slate-600">
                          <div className="flex items-center">
                            <BiColorFill fontSize={20} className="mr-2" />
                            <span>Black</span>
                          </div>
                          <span className="mx-4 border-l border-slate-200 h-[20px]" />
                          <div className="flex items-center">
                            <IoResize fontSize={20} className="mr-2" />
                            <span>2XL</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex justify-between flex-grow">
                        <div className="mr-2 flex-shrink-0">
                          <select className="min-w-[70px] text-sm rounded-md py-1 border border-slate-200 relative z-10">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                          </select>
                        </div>

                        <span className="self-start flex-shrink-0 rounded-lg border-2 border-green-500 text-green-500 font-medium py-1 px-5 text-sm">
                          $74.00
                        </span>
                      </div>
                    </div>

                    <div className="flex justify-between mt-auto">
                      <div className="self-start flex items-center mt-auto border-slate-200 rounded-full text-xs px-2.5 py-1.5 border text-slate-700">
                        <HiCheck className="mr-1" />
                        <span>In stock</span>
                      </div>
                      <button className="text-blue-500 font-medium">
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div
            className={classNames(
              "border-t lg:border-t-0 lg:border-l border-[border-color]",
              "my-10 lg:my-0 lg:mx-10 xl:mx-16 2xl:mx-20"
            )}
          ></div>

          <div className="flex-1">
            <h3 className="text-lg font-semibold ">Order Summary</h3>
            <div className="mt-7 text-sm text-slate-500 divide-y divide-slate-200/70">
              <div className="flex justify-between pb-4">
                <span>Subtotal</span>
                <span className="font-semibold text-slate-900">$249.00</span>
              </div>
              <div className="flex justify-between py-4">
                <span>Shpping estimate</span>
                <span className="font-semibold text-slate-900">$5.00</span>
              </div>
              <div className="flex justify-between py-4">
                <span>Tax estimate</span>
                <span className="font-semibold text-slate-900">$24.90</span>
              </div>
              <div className="flex justify-between font-semibold text-slate-900 text-base pt-4">
                <span>Order total</span>
                <span>$276.00</span>
              </div>
            </div>
            <Link
              className="relative h-auto inline-flex items-center justify-center rounded-full transition-colors text-sm sm:text-base font-medium py-3 px-4 sm:py-3.5 sm:px-6 disabled:bg-opacity-90 bg-slate-900 hover:bg-slate-800 text-slate-50 shadow-xl mt-8 w-full focus:outline-none focus:ring-2 focus:ring-offset-2"
              rel="noopener noreferrer"
              href="/checkout"
            >
              Checkout
            </Link>
            <div className="mt-5 text-sm text-slate-500 dark:text-slate-400 justify-center flex">
              <p className="relative pl-5 flex items-center">
                <AiOutlineInfoCircle
                  fontSize={16}
                  className="inline-block mr-1"
                />
                Learn more&nbsp;
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="##"
                  className="text-slate-900 dark:text-slate-200 underline font-medium"
                >
                  Taxes
                </a>
                &nbsp;<span> and </span>&nbsp;
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="##"
                  className="text-slate-900 dark:text-slate-200 underline font-medium"
                >
                  Shipping
                </a>
                &nbsp;infomation
              </p>
            </div>
          </div>
        </div>
      </div>
    </AccountDashboardLayout>
  );
};

export default ShoppingCart;
