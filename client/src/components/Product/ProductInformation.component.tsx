import AccordionPanels from "components/AccordionPanels/AccordionPanels.component";
import HorizontalLine from "components/HorizontalLine/HorizontalLine.component";
import Link from "next/link";
import { FC } from "react";
import { useNumberInput } from "utils/customHooks";
import { accordionPanels } from "utils/data";
import { classNames } from "utils/functions";
import { ProductProps } from "./Product.component";
import ProductSummary from "./ProductSummary.component";

interface Props extends ProductProps {}

const ProductInformation: FC<Props> = ({ ...product }) => {
  const numberInput = useNumberInput();

  return (
    <div>
      <h2
        className={classNames(
          "mb-1 font-semibold text-3xl leading-9 hover:text-blue-600 transition-colors",
          "hidden lg:block"
        )}
      >
        <Link href={"/product-detail/hihi"}>{product.title}</Link>
      </h2>
      <div className="space-y-6">
        <ProductSummary
          dataInput={numberInput}
          product={product}
          wrapClassName="space-y-5"
          showPriceSummary={false}
        />
        <HorizontalLine className="w-full" />
        <AccordionPanels
          wrapClassname=""
          accordionPanels={accordionPanels.slice(0, 2)}
        />
      </div>
    </div>
  );
};

export default ProductInformation;
