import Link from "next/link";
import React from "react";
import routes from "utils/routes";

const Header = () => {
  return (
    <div className="py-5">
      <div>
        <Link href={routes.home}></Link>
      </div>
    </div>
  );
};

export default Header;
