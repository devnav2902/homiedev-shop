import { Menu, Transition } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import { FC, Fragment } from "react";
import { CiLogout, CiViewList } from "react-icons/ci";
import { HiOutlineUser } from "react-icons/hi";
import { HiOutlineHeart } from "react-icons/hi2";
import { IconType } from "react-icons/lib";
import { classNames } from "utils/functions";
import DropdownWrap from "./DropdownWrap.component";

interface MenuDropdownProps {
  children: JSX.Element;
}

interface MenuItemProps {
  href: string;
  className: string;
  icon: IconType;
  label: string;
}

const MenuItem: FC<MenuItemProps> = ({
  href,
  className,
  icon: Icon,
  label,
}) => {
  return (
    <Menu.Item>
      <Link href={href} className={className}>
        <div className="flex-shrink-0 text-neutral-500">
          <Icon fontSize={24} />
        </div>
        <p className="ml-4 text-sm font-medium">{label}</p>
      </Link>
    </Menu.Item>
  );
};

const MenuDropdown: FC<MenuDropdownProps> = ({ children: icon }) => {
  const links = [
    {
      label: "My account",
      icon: HiOutlineUser,
      href: "/account-dashboard/account-info",
    },
    {
      label: "My order",
      icon: CiViewList,
      href: "/account-dashboard/my-order",
    },
    {
      label: "Wishlist",
      icon: HiOutlineHeart,
      href: "/account-dashboard/wishlist",
    },
  ];

  const styleLink = classNames(
    "flex items-center",
    "p-2 -m-3 transition duration-150 ease-in-out rounded-lg hover:bg-neutral-100",
    "focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
  );

  return (
    <DropdownWrap icon={icon}>
      <div className="relative grid grid-cols-1 gap-6 bg-white py-7 px-6">
        <div className="flex items-center space-x-3 !cursor-default">
          <div
            className={classNames(
              "relative",
              "inline-flex items-center justify-center flex-shrink-0",
              "text-neutral-100 uppercase font-semibold shadow-inner rounded-full w-12 h-12 ring-1 ring-white"
            )}
          >
            <Image
              className="inset-0 object-cover rounded-full"
              src="/images/team-1.jpg"
              fill
              alt="John Doe"
            />
            <span className="">J</span>
          </div>
          <div className="flex-grow text-left !cursor-text">
            <h4 className="font-semibold">Eden Smith</h4>
            <p className="text-xs mt-0.5">Los Angeles, CA</p>
          </div>
        </div>

        <span className="block border-b border-[border-color]" />

        {links.map((item) => (
          <MenuItem className={styleLink} {...item} key={item.href} />
        ))}

        <span className="block border-b border-[border-color]" />

        <MenuItem
          className={styleLink}
          href="/logout"
          icon={CiLogout}
          label="Log out"
        />
      </div>
    </DropdownWrap>
  );
};

export default MenuDropdown;
