import { Tab } from "@headlessui/react";
import SwiperButton from "components/Button/SwiperButton.component";
import { ProductProps } from "components/Product/Product.component";
import ProductInformation from "components/Product/ProductInformation.component";
import Image from "next/image";
import { Fragment, useEffect, useState } from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { classNames } from "utils/functions";

type TabContent = [
  { title: "Description"; content: string },
  { title: "Additional Information"; content: object },
  { title: "Reviews"; content: object }
];

const slideBtnClass =
  "absolute w-[30px] h-[30px] rounded-full text-[#151515] flex item-centers z-[99] top-[50%] -translate-y-1/2 flex items-center justify-center bg-white opacity-70 hover:opacity-100";

const ProductDetail = () => {
  // const router = useRouter();

  // console.log(router.query.slug);

  const [product, setProduct] = useState<{
    loaded: boolean;
    data: ProductProps | null;
  }>({ loaded: false, data: null });

  const [currentImg, setCurrentImg] = useState({
    url: "",
    backgroundPosition: "0% 0%",
  });

  const [tabContent, setTabContent] = useState<TabContent>([
    {
      title: "Description",
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.<br>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.`,
    },
    {
      title: "Additional Information",
      content: {},
    },
    {
      title: "Reviews",
      content: {
        currentPage: 1,
        reviews: [
          {
            username: "Daniel Rajdesh",
            img: "https://themezhub.net/kumo-demo-2/kumo/assets/img/team-1.jpg",
            date: "9/3/2023",
            content:
              "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum",
          },
          {
            username: "Seema Gupta",
            img: "https://themezhub.net/kumo-demo-2/kumo/assets/img/team-2.jpg",
            date: "1/3/2023",
            content: "At vero eos et",
          },
          {
            username: "Mark Jugermi",
            img: "https://themezhub.net/kumo-demo-2/kumo/assets/img/team-3.jpg",
            date: "1/3/2023",
            content: "At vero eos et",
          },
          {
            username: "Meena Rajpoot",
            img: "https://themezhub.net/kumo-demo-2/kumo/assets/img/team-4.jpg",
            date: "1/3/2023",
            content: "At vero eos et",
          },
        ],
      },
    },
  ]);

  useEffect(() => {
    const img = "/images/product_1.png";

    const productImg = Array.from({ length: 8 }).map(
      (_, index) => `/images/product_${index + 1}.png`
    );

    const data: ProductProps = {
      img,
      title: "Half Running Set",
      price: [99, 129],
      categories: ["SALE", "NEW"],
      colors: ["#379788", "#d1dceb", "#e36947", "#f4e6a2"],
      link: "1",
      preview: productImg,
    };

    setProduct({
      data,
      loaded: true,
    });

    setCurrentImg((state) => ({
      ...state,
      url: data.preview?.length ? data.preview[0] : data.img,
    }));
  }, []);

  console.log(currentImg);

  function handleMouseMove(e: any) {
    const { left, top, width, height } = e.target.getBoundingClientRect();

    const x = ((e.pageX - left) / width) * 100;
    const y = ((e.pageY - top) / height) * 100;

    setCurrentImg((state) => ({ ...state, backgroundPosition: `${x}% ${y}%` }));
  }

  if (!product.loaded) return "loading...";
  if (!product.data) return "error!";

  return (
    <div className="bg-white py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          <div>
            <div className="mb-3 relative">
              {currentImg.url && (
                <div className="overflow-hidden hidden sm:block">
                  <figure
                    className="group cursor-zoom-in transition-transform duration-200 hover:scale-125"
                    onMouseMove={handleMouseMove}
                    style={{
                      backgroundPosition: currentImg.backgroundPosition,
                      backgroundImage: `url(${currentImg.url})`,
                    }}
                  >
                    <img
                      src={currentImg.url}
                      className="group-hover:invisible"
                    />
                  </figure>
                </div>
              )}
            </div>

            <div className="relative">
              <Swiper
                slidesPerView={1}
                spaceBetween={5}
                className="!static"
                breakpoints={{
                  // when window width is >= 640px
                  640: {
                    slidesPerView: 5,
                  },
                }}
              >
                <SwiperButton
                  button="right"
                  size={26}
                  defaultClassName={slideBtnClass}
                  className="right-0 translate-x-1/2"
                />
                <SwiperButton
                  button="left"
                  size={26}
                  defaultClassName={slideBtnClass}
                  className="left-0 -translate-x-1/2"
                />

                {product.data.preview?.map((url, index) => (
                  <SwiperSlide key={index}>
                    <div
                      onClick={() =>
                        setCurrentImg((state) => ({ ...state, url }))
                      }
                      className={
                        "relative pb-[120%] cursor-pointer sm:opacity-30 hover:opacity-100 transition-all duration-200" +
                        (currentImg.url === url ? " !opacity-100" : "")
                      }
                    >
                      <Image src={url} alt="" className="object-cover" fill />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
          <ProductInformation {...product.data} />
        </div>
        {/* tabs */}
        <div className="py-16">
          <Tab.Group>
            <Tab.List className="rounded-xl p-1 flex justify-center">
              {tabContent.map((tab) => (
                <Tab
                  key={tab.title}
                  className={({ selected }) =>
                    classNames(
                      "text-sm font-medium text-[#111111]",
                      "py-2.5 px-3 opacity-60 focus:outline-none",
                      selected ? "text-black !opacity-100 shadow-sm" : ""
                    )
                  }
                >
                  {tab.title}
                </Tab>
              ))}
            </Tab.List>
            <Tab.Panels className="mt-2">
              {tabContent.map((tab, idx) => (
                <Tab.Panel
                  key={idx}
                  className={classNames(
                    "rounded-xl bg-white p-3",
                    "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
                  )}
                >
                  <div className="text-sm text-[#707070]">
                    {tab.title === "Description" ? (
                      <div dangerouslySetInnerHTML={{ __html: tab.content }} />
                    ) : tab.title === "Additional Information" ? (
                      <div>
                        <table className="w-full text-left">
                          <tbody>
                            <tr>
                              {[
                                { title: "ID", data: "#1234568" },
                                { title: "SKU", data: "KUM125896" },
                                { title: "Color", data: "Sky Blue" },
                                { title: "Size", data: "Xl, 42" },
                                { title: "Weight", data: "450 Gr" },
                              ].map((item) => (
                                <Fragment key={item.title}>
                                  <th className="py-3 px-4 border-t border-[#eaeff5]">
                                    {item.title}
                                  </th>
                                </Fragment>
                              ))}
                            </tr>
                            {Array.from({ length: 5 }).map((_, i) => {
                              return (
                                <tr>
                                  {[
                                    { title: "ID", data: "#1234568" },
                                    { title: "SKU", data: "KUM125896" },
                                    { title: "Color", data: "Sky Blue" },
                                    { title: "Size", data: "Xl, 42" },
                                    { title: "Weight", data: "450 Gr" },
                                  ].map((item) => (
                                    <td key={item.title}>{item.data}</td>
                                  ))}
                                </tr>
                              );
                            })}
                          </tbody>
                        </table>
                      </div>
                    ) : (
                      <div>
                        {tab.content?.reviews?.map((item: any) => {
                          return (
                            <div className="grid grid-cols-[auto_3fr_1fr] gap-3 py-4 border-b border-[#eef2f5]">
                              <div>
                                <img
                                  src={item.img}
                                  alt=""
                                  className="rounded-full"
                                  width={90}
                                />
                              </div>
                              <div>
                                <h5 className="font-medium text-black">
                                  {item.username}
                                </h5>
                                <span className="block pb-1">{item.date}</span>
                                <p>{item.content}</p>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                </Tab.Panel>
              ))}
            </Tab.Panels>
          </Tab.Group>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
