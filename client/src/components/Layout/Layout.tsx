import Footer from "components/Footer/Footer.component";
import Header from "components/Header/Header.component";
import { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Layout: FC<Props> = ({ children }) => {
  return (
    <div className="">
      <Header />
      <main className="min-h-[120vh]">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
