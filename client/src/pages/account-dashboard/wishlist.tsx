import AccountDashboardLayout from "components/AccountDashboardLayout/AccountDashboardLayout";
import Product from "components/Product/Product.component";
import { products } from "utils/data";

const Wishlist = () => {
  return (
    <AccountDashboardLayout>
      <div className="overflow-hidden">
        <div className="space-y-10 sm:space-y-12">
          <h2 className="text-2xl sm:text-3xl font-semibold">
            List of saved products
          </h2>

          <div className="grid grid-cols-1 gap-6 md:gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {products.slice(0, 5).map((product, i) => {
              return <Product key={i} {...product} />;
            })}
          </div>
        </div>
      </div>
    </AccountDashboardLayout>
  );
};

export default Wishlist;
