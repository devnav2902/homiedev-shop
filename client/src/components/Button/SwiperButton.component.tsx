import { FC } from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { useSwiper } from "swiper/react";

interface Props {
  button: "left" | "right";
  defaultClassName: string;
  className?: string;
  size?: number;
}

const SwiperButton: FC<Props> = ({
  defaultClassName,
  className = "",
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
        <BsArrowLeft fontSize={size} />
      ) : (
        <BsArrowRight fontSize={size} />
      )}
    </button>
  );
};

export default SwiperButton;
