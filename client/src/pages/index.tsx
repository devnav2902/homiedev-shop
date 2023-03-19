import SwiperButton from "components/Button/SwiperButton.component";
import Product from "components/Product/Product.component";
import { Inter } from "next/font/google";
import Link from "next/link";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { products } from "utils/data";

const inter = Inter({ subsets: ["latin"] });

const slideBtnClass =
  "absolute w-[50px] h-[50px] rounded-full border border-[#121212] text-[#151515] flex item-centers z-[999] bottom-[10%] right-[40px] opacity-[0.7] flex items-center justify-center";

export default function Home() {
  const slides = [
    {
      img: "/images/banner-2.png",
      text: "New Winter<br>Collections 2023",
      summary: "There's nothing like trend",
      button: "Shop Now",
      categories: ["Winter Collection", "New"],
      url: "",
    },
    {
      img: "/images/banner-3.png",
      text: "New Winter<br>Collections 2023",
      summary: "There's nothing like trend",
      button: "Shop Now",
      categories: ["Winter Collection"],
      url: "",
    },
    {
      img: "/images/banner-7.png",
      text: "New Winter<br>Collections 2023",
      summary: "There's nothing like trend",
      button: "Shop Now",
      categories: ["Winter Collection"],
      url: "",
    },
  ];

  return (
    <>
      <div className="">
        <div className="relative">
          <Swiper
            loop={true}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            slidesPerView={1}
          >
            <SwiperButton
              button="right"
              size={28}
              defaultClassName={slideBtnClass}
            />
            <SwiperButton
              button="left"
              className="!right-[100px]"
              size={28}
              defaultClassName={slideBtnClass}
            />

            {slides.map(
              ({ img, text, button, categories, summary, url }, index) => (
                <SwiperSlide key={index}>
                  <div
                    style={{ backgroundImage: `url(${img})` }}
                    className={`w-full h-screen bg-cover min-h-[520px] flex items-center bg-center`}
                  >
                    <div className="container">
                      <h5 className="text-sm text-[#ee1c47]">
                        {categories
                          .reduce((result, item) => result + item + ", ", "")
                          .slice(0, -2)}
                      </h5>
                      <h1
                        className="text-xl lg:text-[45px] xl:text-[65px] leading-[1.1] font-semibold"
                        dangerouslySetInnerHTML={{ __html: text }}
                      ></h1>
                      <span className="text-xl italic text-[#333c56] block">
                        {summary}
                      </span>
                      <Link
                        href={url}
                        className="bg-transparent border border-[#111111] text-[#111111] rounded-sm px-[25px] py-[12px] hover:bg-black hover:text-white transition-colors duration-300 ease-out inline-block mt-7"
                      >
                        {button}&nbsp; <span className="text-xl">&#8594;</span>
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
              )
            )}
          </Swiper>
        </div>
        <section className="py-12">
          <div className="container">
            <div className="text-center relative mb-7">
              <h2 className="text-[#657382] font-semibold opacity-10 italic top-0 left-1/2 -translate-x-1/2 absolute text-3xl lg:text-[55px]">
                Trendy Products
              </h2>
              <h3 className="font-semibold pt-4 text-2xl">
                Our Trending Products
              </h3>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 mb-8">
              {products.map((product, index) => {
                return <Product key={index} {...product} />;
              })}
            </div>

            <div className="text-center">
              <Link
                href="more"
                className="inline-block py-3 px-6 border border-[#111111] rounded-sm ease-out transition-all duration-300 text-[#111111] hover:bg-black hover:text-white"
              >
                Explore More&nbsp;&#8594;
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
