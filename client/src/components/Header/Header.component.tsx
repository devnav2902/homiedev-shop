import Link from "next/link";
import React from "react";
import routes from "utils/routes";
import Image from "next/image";
import Logo from "@public/images/logo.png";
import { HiMenu } from "react-icons/hi";
import { AiOutlineUser } from "react-icons/ai";
import { CgShoppingBag } from "react-icons/cg";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { useEffect } from "react";
import { useState } from "react";
import { classNames } from "utils/functions";

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
    { className: "", icon: HiMagnifyingGlass },
    { className: "", icon: AiOutlineUser },
    { className: "", icon: CgShoppingBag, count: 0 },
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
              <button
                className={classNames(
                  "text-slate-700 rounded-full w-12 h-12 flex justify-center items-center relative",
                  "hover:bg-slate-100"
                )}
              >
                <Icon fontSize={22} />
                {typeof count === "number" && (
                  <span className="w-3.5 h-3.5 text-[10px] rounded-full bg-blue-500 text-white flex items-center justify-center absolute right-1.5 top-1.5">
                    {count}
                  </span>
                )}
              </button>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <div
      className={`z-[999] w-full top-0 left-0${
        isScrollValueMoreThanTargetValue
          ? " fixed bg-white shadow-[0_5px_30px_rgba(0,22,84,10%)] transition duration-200 ease-in animate-[slideDown_0.5s]"
          : ""
      }`}
    >
      <nav className="flex items-center h-[60px] lg:h-auto container">
        <HiMenu fontSize={20} className="mr-3 lg:hidden" />
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
