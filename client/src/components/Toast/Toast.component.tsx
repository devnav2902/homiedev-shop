import { FC } from "react";
import { classNames } from "utils/functions";

interface Props {
  children: JSX.Element | JSX.Element[];
  timeDelay?: number;
  position?:
    | "center"
    | "bottom-right"
    | "bottom-left"
    | "top-right"
    | "top-left"
    | "top-center"
    | "bottom-center";
}

const Toast: FC<Props> = ({ children, position = "top-right" }) => {
  return (
    <div className="fixed z-[99999] inset-4" style={{ pointerEvents: "none" }}>
      <div
        className={classNames(
          "absolute flex items-end flex-col gap-4",
          "inset-0"
        )}
      >
        {children}
      </div>
    </div>
  );
};

export default Toast;
