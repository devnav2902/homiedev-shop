import Link from "next/link";
import React from "react";
import routes from "utils/routes";
import Image from "next/image";
import Logo from "@public/images/logo.png";
import { Bars3Icon } from "@heroicons/react/20/solid";
import {
  UserIcon,
  HeartIcon,
  ShoppingBagIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import { useEffect } from "react";
import { useState } from "react";

const Header = () => {
  const [
    isScrollValueMoreThanTargetValue,
    setIsScrollValueMoreThanTargetValue,
  ] = useState(false);

  useEffect(() => {
    // tracking scroll

    const handleAddClass = () => {
      if (window.scrollY >= 60) setIsScrollValueMoreThanTargetValue(true);
      else setIsScrollValueMoreThanTargetValue(false);
    };

    handleAddClass();
    window.addEventListener("scroll", handleAddClass);

    return () => {
      window.removeEventListener("scroll", handleAddClass);
    };
  }, []);

  const mobileNav = [
    { className: "", icon: MagnifyingGlassIcon },
    { className: "", icon: UserIcon },
    { className: "", icon: HeartIcon, count: 4 },
    { className: "", icon: ShoppingBagIcon, count: 0 },
  ];

  const Menu = (
    <div className="ml-4 hidden lg:block">
      <ul className="text-[#404656] flex">
        {[
          { title: "Home", url: "1" },
          { title: "Shop", url: "2" },
          { title: "Product", url: "3" },
          { title: "Pages", url: "4" },
          { title: "Docs", url: "5" },
        ].map(({ title, url }) => (
          <li key={url}>
            <Link href={url} className="px-[18px] py-[22px] inline-block">
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );

  const MobileNav = (
    <div className="ml-auto">
      <ul className="flex items-center">
        {mobileNav.map(({ icon: Icon, count }, index) => (
          <li key={index} className="first:pl-0 pl-3 leading-none">
            <span className="relative inline-block font-semibold cursor-pointer">
              <Icon width={20} />
              {typeof count === "number" && (
                <span className="min-h-[17px] min-w-[17px] text-[10px] rounded-full bg-[#2c2c2c] text-white flex items-center justify-center absolute -right-2 -top-2">
                  {count}
                </span>
              )}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <div
      className={`fixed z-[999] w-full top-0 left-0${
        isScrollValueMoreThanTargetValue
          ? "  bg-white shadow-[0_5px_30px_rgba(0,22,84,10%)] transition duration-200 ease-in animate-[slideDown_0.5s]"
          : ""
      }`}
    >
      <nav className="flex items-center h-[60px] lg:h-auto container">
        <Bars3Icon width={30} className="mr-3 lg:hidden" />
        <Link href={routes.home}>
          <Image src={Logo} alt="logo" width={120} />
        </Link>
        {Menu}
        {MobileNav}
      </nav>
    </div>
  );
};

export default Header;
