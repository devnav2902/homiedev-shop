import { Dialog, Transition } from "@headlessui/react";
import AccordionPanels from "components/AccordionPanels/AccordionPanels.component";
import SwiperButton from "components/Button/SwiperButton.component";
import HorizontalLine from "components/HorizontalLine/HorizontalLine.component";
import { ProductProps } from "components/Product/Product.component";
import ProductSummary from "components/Product/ProductSummary.component";
import Image from "next/image";
import { FC, Fragment, useEffect, useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { BiShare } from "react-icons/bi";
import { MdOutlinePhotoLibrary } from "react-icons/md";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { useDialog, useNumberInput, useSaveForLater } from "utils/customHooks";
import { accordionPanels } from "utils/data";
import { classNames } from "utils/functions";
import { CloseIcon, HeartIcon, StarIcon } from "utils/icons";

interface GalleryState {
  photos: string[];
  currentPhoto: number;
  setCurrentPhoto: (number: number) => void;
}

const Gallery: FC<{
  isOpen: boolean;
  toggleDialog: () => void;
  gallery: GalleryState;
}> = ({ isOpen, toggleDialog, gallery }) => {
  const slideBtnClass =
    "w-8 h-8 sm:w-10 sm:h-10 border-slate-600 rounded-full flex items-center justify-center border-2 text-slate-500 focus:outline-none text-slate-400";

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-[9999]" onClose={() => {}}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-slate-800" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <button
            onClick={toggleDialog}
            className={classNames(
              "w-[50px] h-[50px] rounded-full",
              "flex justify-center items-center",
              "hover:bg-slate-700",
              "absolute right-4 top-4 text-slate-100 focus:outline-non z-50"
            )}
          >
            <CloseIcon fontSize={20} />
          </button>
          <div className="flex min-h-full h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md h-full transform rounded-2xl text-neutral-200 p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title as="div" className="leading-6 text-center">
                  <span className="text-xl font-semibold">
                    {gallery.currentPhoto}
                  </span>
                  &nbsp;/&nbsp;<span>{gallery.photos.length}</span>
                </Dialog.Title>
                <div className="py-4 h-full">
                  <Swiper
                    initialSlide={gallery.currentPhoto - 1}
                    pagination={{
                      clickable: true,
                    }}
                    navigation={true}
                    className="mySwiper h-full !flex flex-col xl:block"
                    wrapperClass="items-center min-h-0"
                    onSlideChange={(swiper) => {
                      gallery.setCurrentPhoto(swiper.activeIndex + 1);
                    }}
                  >
                    <div className="xl:fixed z-20 xl:-inset-x-20 max-w-6xl my-2 mx-auto top-full xl:top-1/2 transform xl:-translate-y-1/2 flex xl:justify-between text-slate-100">
                      <SwiperButton
                        button="left"
                        size={20}
                        defaultClassName={slideBtnClass + " mr-1.5 xl:mr-0"}
                      />
                      <SwiperButton
                        button="right"
                        size={20}
                        defaultClassName={slideBtnClass}
                      />
                    </div>

                    {gallery.photos.map((_, i) => (
                      <SwiperSlide
                        key={i}
                        className="!flex justify-center items-center"
                      >
                        <img
                          src={`/images/detail${i + 1}.webp`}
                          loading="lazy"
                          className="rounded-2xl max-w-full max-h-full inline-block"
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

const ProductDetail = () => {
  // const router = useRouter();

  // console.log(router.query.slug);
  const dataInput = useNumberInput();
  const { loadingState, handleSaveForLater, stateButton } = useSaveForLater();

  const [isOpen, toggleDialog] = useDialog();
  const [gallery, setGallery] = useState<Omit<GalleryState, "setCurrentPhoto">>(
    {
      photos: [],
      currentPhoto: 0,
    }
  );
  const [product, setProduct] = useState<{
    loaded: boolean;
    data: ProductProps | null;
  }>({ loaded: false, data: null });

  const reviews = {
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
  };

  function setCurrentPhoto(number: number) {
    setGallery((state) => ({ ...state, currentPhoto: number }));
  }

  useEffect(() => {
    const img = "/images/product_1.png";

    const productImg = Array.from({ length: 4 }).map(
      (_, i) => `/images/detail${i + 1}.webp`
    );

    const data: ProductProps = {
      img,
      title: "Half Running Set",
      price: 129,
      categories: ["SALE", "NEW"],
      colors: ["#379788", "#d1dceb", "#e36947", "#f4e6a2"],
      link: "1",
      preview: productImg,
    };

    setProduct({
      data,
      loaded: true,
    });
    setGallery({ photos: productImg, currentPhoto: 1 });
  }, []);

  if (!product.loaded) return "loading...";
  if (!product.data) return "error!";

  return (
    <>
      <Gallery
        isOpen={isOpen}
        toggleDialog={toggleDialog}
        gallery={{ setCurrentPhoto, ...gallery }}
      />

      <div className="bg-white py-12">
        <div className="container">
          <div className="relative mb-9 sm:mb-11">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 lg:gap-6">
              {gallery.photos.slice(0, 4).map((photo, key) => {
                const last2Items = !(key === 0 || key === 1);

                return (
                  <div
                    key={key}
                    className={classNames(
                      key === 0
                        ? "col-span-2 md:col-span-1"
                        : key === 1
                        ? "col-span-1"
                        : "",
                      !last2Items ? "row-span-2" : "",
                      "cursor-pointer overflow-hidden rounded-sm sm:rounded-xl relative"
                    )}
                    onClick={() => {
                      setCurrentPhoto(key + 1);
                      toggleDialog();
                    }}
                  >
                    <div
                      className={classNames(
                        last2Items
                          ? "aspect-[6/5] lg:aspect-[6/4]"
                          : "aspect-[3/4]",
                        "relative w-full h-full"
                      )}
                    >
                      <Image src={photo} fill alt="" className="object-cover" />
                    </div>
                    <div className="absolute inset-0 hover:opacity-40 opacity-0 bg-opacity-20 bg-neutral-900 transition-opacity"></div>
                  </div>
                );
              })}
            </div>

            <div
              className={classNames(
                "absolute z-10 hidden",
                "md:flex md:items-center md:justify-center",
                "left-3 bottom-3 py-2 px-4 rounded-xl bg-white text-slate-500 cursor-pointer",
                "hover:bg-slate-300"
              )}
              onClick={toggleDialog}
            >
              <MdOutlinePhotoLibrary />
              <span className="ml-2 text-sm text-neutral-800 font-medium">
                Show all photos
              </span>
            </div>
          </div>

          <div className="grid lg:grid-cols-[2fr_minmax(400px,1fr)] gap-12">
            <div className="space-y-6 row-[2/span_1] lg:row-auto">
              <h2 className="font-semibold text-2xl md:text-3xl mb-5">
                {product.data.title}
              </h2>

              <div className="flex font-semibold text-slate-900 flex-col sm:flex-row sm:items-center gap-5">
                <div className="flex items-center">
                  <span className="flex items-center">
                    <AiFillStar fontSize={20} />
                    &nbsp;4.9
                  </span>
                  <span className="px-1 inline-block">&#183;</span>
                  <a href="#reviews" className="underline">
                    142 reviews
                  </a>
                  <span className="px-1 inline-block">&#183;</span>
                  <span>New in</span>
                </div>

                <div className="sm:ml-auto flex items-center space-x-3">
                  <button className="flex items-center hover:bg-slate-100 rounded-md py-1 px-2">
                    <BiShare fontSize={20} />
                    &nbsp;Share
                  </button>
                  <button
                    onClick={handleSaveForLater}
                    className="flex items-center hover:bg-slate-100 rounded-md py-1 px-2 justify-center"
                  >
                    {loadingState.isLoading ? (
                      <span className="animate-spin w-4 h-4 border-2 border-slate-200 border-b-blue-500 rounded-full" />
                    ) : (
                      <HeartIcon
                        fontSize={20}
                        className={
                          stateButton ? "fill-red-500 stroke-red-500" : ""
                        }
                      />
                    )}
                    &nbsp;Save
                  </button>
                </div>
              </div>

              <HorizontalLine className="w-12" />

              <AccordionPanels
                wrapClassname="mx-auto w-full rounded-2xl bg-white space-y-4"
                accordionPanels={accordionPanels}
              />

              <HorizontalLine className="w-full !mt-12" />

              <div className="!mt-12">
                <h2 className="text-2xl font-semibold leading-none mb-8">
                  Product details
                </h2>

                <div className="content prose sm:max-w-4xl">
                  <p>
                    The patented eighteen-inch hardwood Arrowhead deck ---
                    finely mortised in, makes this the strongest and most rigid
                    canoe ever built. You cannot buy a canoe that will afford
                    greater satisfaction.
                  </p>
                  <p>
                    The St. Louis Meramec Canoe Company was founded by Alfred
                    Wickett in 1922. Wickett had previously worked for the Old
                    Town Canoe Co from 1900 to 1914. Manufacturing of the
                    classic wooden canoes in Valley Park, Missouri ceased in
                    1978.
                  </p>
                  <ul>
                    <li>Regular fit, mid-weight t-shirt</li>
                    <li>Natural color, 100% premium combed organic cotton</li>
                    <li>
                      Quality cotton grown without the use of herbicides or
                      pesticides - GOTS certified
                    </li>
                    <li>Soft touch water based printed in the USA</li>
                  </ul>
                </div>
              </div>
            </div>

            <ProductSummary
              product={product.data}
              dataInput={dataInput}
              showPriceSummary
              wrapClassName={classNames(
                "lg:sticky lg:top-28 lg:shadow-lg rounded-2xl",
                "ring-black ring-opacity-10 ring-1",
                "lg:p-7 p-5",
                "space-y-5",
                "self-start row-span-1"
              )}
            />
          </div>

          <div id="reviews" className="pt-12 pb-24 space-y-10 sm:space-y-14">
            <HorizontalLine className="w-full" />
            <h2 className="text-2xl font-semibold flex items-center">
              <StarIcon />
              <span className="ml-1.5">
                4,87&nbsp;&#183;&nbsp;142&nbsp;Reviews
              </span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-16">
              {reviews.content.reviews.map((review) => (
                <div>
                  <div className="flex">
                    <img
                      src={review.img}
                      width={40}
                      height={40}
                      className="rounded-full self-start pt-1"
                      alt=""
                    />

                    <div className="ml-3 flex items-center flex-grow">
                      <div className="mr-1">
                        <span className="font-semibold text-slate-800 mb-0.5 block">
                          {review.username}
                        </span>
                        <time className="text-slate-400">{review.date}</time>
                      </div>
                      <div className="flex items-center ml-auto text-yellow-400 self-start pt-1">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <StarIcon key={i} />
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="prose mt-4">{review.content}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
