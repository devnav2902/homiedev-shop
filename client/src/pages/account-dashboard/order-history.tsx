import AccountDashboardLayout from "components/AccountDashboardLayout/AccountDashboardLayout";
import Image from "next/image";
import React, { useState } from "react";

const OrderHistory = () => {
  const [orderHistory, setOrderHistory] = useState({
    loaded: true,
    data: [
      {
        id: "WU3746HGG12",
        date: "Aug 8, 2023",
        status: "Delivered",
        products: [
          {
            title: "Women Striped Shirt Dress",
            color: "Black",
            size: "XL",
            Qty: 1,
            price: "33.00",
            img: "/images/product_1.png",
          },
          {
            title: "Boys Solid Sweatshirt",
            color: "Black",
            size: "XL",
            Qty: 1,
            price: "33.00",
            img: "/images/product_5.png",
          },
        ],
      },
      {
        id: "WU3746HGG11",
        date: "Jul 2, 2021",
        status: "Delivered",
        products: [
          {
            title: "Printed Straight Kurta",
            color: "Black",
            size: "XL",
            Qty: 1,
            price: "45.00",
            img: "/images/product_2.png",
          },
          {
            title: "Boys Solid Sweatshirt",
            color: "Black",
            size: "XL",
            Qty: 1,
            price: "33.00",
            img: "/images/product_3.png",
          },
          {
            title: "Women Striped Shirt Dress",
            color: "Black",
            size: "XL",
            Qty: 1,
            price: "33.00",
            img: "/images/product_8.png",
          },
        ],
      },
    ],
  });

  return (
    <AccountDashboardLayout>
      <div className="space-y-10 sm:space-y-12">
        <h2 className="text-2xl sm:text-3xl font-semibold">Order History</h2>

        <div className="space-y-9">
          {orderHistory.data.map((item) => {
            return (
              <div
                key={item.id}
                className="border border-border-color rounded-xl"
              >
                <div className="space-y-4 border-b border-border-color p-5 lg:p-7">
                  <p className="font-semibold text-lg">#{item.id}</p>
                  <p>
                    <time className="text-slate-500">{item.date}</time>
                    &nbsp;&#183;&nbsp;
                    <span className="text-blue-400">{item.status}</span>
                  </p>
                </div>
                <div className="p-5 lg:p-7 divide-y divide-y-border-color">
                  {item.products.map((product, key) => (
                    <div
                      key={key}
                      className="flex py-4 sm:py-7 first:pt-0 last:pb-0"
                    >
                      <div className="aspect-[11/12] relative w-20 md:w-28 flex-shrink-0">
                        <Image
                          src={product.img}
                          alt=""
                          fill
                          className="rounded-xl object-cover"
                        />
                      </div>
                      <div className="ml-4 flex flex-col flex-1">
                        <div className="flex justify-between">
                          <div>
                            <h3 className="line-clamp-1 text-base font-medium">
                              {product.title}
                            </h3>
                            <p className="mt-1 text-sm text-slate-500">
                              {product.color} | {product.size}
                            </p>
                          </div>
                          <div>
                            <span className="text-sm font-semibold ml-2 inline-block border-2 border-green-500 rounded-xl text-green-500 py-1 px-2">
                              ${product.price}
                            </span>
                          </div>
                        </div>
                        <div className="flex flex-1 justify-between text-sm items-end">
                          <div>
                            <p className="text-slate-500">Qty {product.Qty}</p>
                          </div>
                          <div>
                            <button className="focus:outline-none text-blue-500 font-medium">
                              Leave review
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </AccountDashboardLayout>
  );
};

export default OrderHistory;
