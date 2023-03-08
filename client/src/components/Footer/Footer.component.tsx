import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "@public/images/logo.png";

const Footer = () => {
  const h4Style = "mb-3 text-sm font-medium leading-[26px]";

  return (
    <footer className="bg-[#f4f5f7] text-[##565656] py-16">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-5">
          <div>
            <Image src={Logo} alt="logo" width={150} />
            <div className="mt-4">
              3298 Grant Street Longview, TX United Kingdom 75601
            </div>
            <div className="mt-4">
              1-202-555-0106
              <br />
              help@shopper.com
            </div>
            <div className="mt-4">
              <ul className="grid grid-cols-7 gap-2">
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
                    />
                  </svg>
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
                    />
                  </svg>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <h4 className={h4Style}>SUPPORTS</h4>
            <ul className="">
              {[
                "Contact Us",
                "About Page",
                "Size Guide",
                "Shipping & Returns",
                "FAQ's Page",
                "Privacy",
              ].map((item) => (
                <li key={item} className="mt-2 text-sm">
                  <Link href="c" className="text-[#565656]">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className={h4Style}>SHOP</h4>
            <ul className="">
              {[
                "Men's Shopping",
                "Women's Shopping",
                "Kids's Shopping",
                "Furniture",
                "Discounts",
              ].map((item) => (
                <li key={item} className="mt-2 text-sm">
                  <Link href="c" className="text-[#565656]">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className={h4Style}>SUBSCRIBE</h4>
            <p className="mb-3 text-[#565656]">
              Receive updates, hot deals, discounts sent straignt in your inbox
              daily
            </p>
            <div className="h-14 flex items-center">
              <input
                type="text"
                placeholder="Email Address"
                className="h-full py-3 px-4 bg-[#ffffff] text-[#495057] outline-none w-full sm:w-auto md:w-full"
              />
              <button className="h-full w-14 bg-[#151515] text-white flex-shrink-0">
                &#8594;
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
