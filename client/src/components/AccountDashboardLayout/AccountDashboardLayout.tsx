import Link from "next/link";
import { useRouter } from "next/router";
import { FC } from "react";
import { classNames } from "utils/functions";

interface Props {
  children: JSX.Element;
}

const AccountDashboardLayout: FC<Props> = ({ children }) => {
  const route = useRouter();

  const routes = [
    { url: "/account-dashboard/account-info", title: "Account info" },
    { url: "/account-dashboard/wishlist", title: "Save lists" },
    { url: "/account-dashboard/my-order", title: "My order" },
    {
      url: "/account-dashboard/change-password",
      title: "Change password",
    },
  ];

  return (
    <div className="py-12">
      <div className="container">
        <h2 className="text-3xl xl:text-4xl font-semibold">Account</h2>
        <span className="block mt-4 mb-10 text-neutral-500 text-base sm:text-lg">
          <span className="text-slate-900 font-semibold">Enrico Cole,</span>
          ciseco@gmail.com · Los Angeles, CA
        </span>
        <div className="flex space-x-8 md:space-x-14 border-t border-b border-[border-color] overflow-x-auto hiddenScrollbar">
          {routes.map((item, key) => (
            <Link
              key={key}
              className={classNames(
                "block py-5 md:py-8 border-transparent text-sm text-slate-500 border-b-2 flex-shrink-0",
                "hover:text-slate-800",
                route.pathname === item.url
                  ? "!border-blue-500 font-semibold text-slate-900"
                  : ""
              )}
              href={item.url}
            >
              {item.title}
            </Link>
          ))}
        </div>
        <div className="pt-14 pb-24">{children}</div>
      </div>
    </div>
  );
};

export default AccountDashboardLayout;
