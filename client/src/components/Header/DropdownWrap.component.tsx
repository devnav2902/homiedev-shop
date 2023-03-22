import { Menu, Transition } from "@headlessui/react";
import React, { FC, Fragment } from "react";
import { classNames } from "utils/functions";

interface Props {
  children: JSX.Element;
  icon: JSX.Element;
  menuItemsClassName?: string;
}

const DropdownWrap: FC<Props> = ({ children, icon, menuItemsClassName }) => {
  return (
    <Menu as={Fragment}>
      <Menu.Button as="div">{icon}</Menu.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items
          className={classNames(
            "absolute z-10 w-screen max-w-[260px] opacity-100 translate-y-0",
            "px-4 mt-3.5 top-[80%] -right-10",
            "sm:right-0 sm:px-0",
            menuItemsClassName as string
          )}
        >
          <div className="overflow-hidden rounded-3xl shadow-lg ring-1 ring-black ring-opacity-5">
            {children}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default DropdownWrap;
