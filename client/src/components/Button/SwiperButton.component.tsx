import { HiArrowLeft, HiArrowRight } from "react-icons/hi";
import React, { FC } from "react";
import { useSwiper } from "swiper/react";

interface Props {
  button: "left" | "right";
  defaultClassName: string;
  className?: string;
  size?: number;
}

const SwiperButton: FC<Props> = ({
  defaultClassName,
  className,
  button,
  size = 28,
}) => {
  const swiper = useSwiper();

  return (
    <button
      className={defaultClassName + " " + className}
      onClick={() =>
        button === "left" ? swiper.slidePrev() : swiper.slideNext()
      }
    >
      {button === "left" ? (
        <HiArrowLeft fontSize={size} />
      ) : (
        <HiArrowRight fontSize={size} />
      )}
    </button>
  );
};

export default SwiperButton;
