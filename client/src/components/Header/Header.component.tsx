import Link from "next/link";
import React from "react";
import routes from "utils/routes";
import Image from "next/image";
import Logo from "@public/images/logo.png";

const Header = () => {
  return (
    <div className="py-5">
      <div>
        <Link href={routes.home}>
          <Image src={Logo} alt="logo" width={120} />
        </Link>
      </div>
    </div>
  );
};

export default Header;
