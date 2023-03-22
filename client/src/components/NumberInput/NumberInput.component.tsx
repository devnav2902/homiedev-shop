import { FC } from "react";
import { NumberInputHook } from "utils/customHooks";
import { classNames } from "utils/functions";
import { MinusIcon, PlusIcon } from "utils/icons";

interface Props {
  wrapClassName?: string;
  containerClassName?: string;
  btnClassName?: string;
  dataInput: NumberInputHook;
}

const NumberInput: FC<Props> = ({
  wrapClassName = "",
  containerClassName = "",
  btnClassName = "",
  dataInput,
}) => {
  const [numberInput, handleNumberInput] = dataInput;

  const styleBtn = classNames(
    "justify-center items-center inline-flex",
    "rounded-full w-8 h-8 border border-neutral-400 bg-white",
    "disabled:cursor-default disabled:opacity-50",
    "cursor-pointer",
    btnClassName
  );

  return (
    <div
      className={classNames(
        "px-2 py-3 bg-slate-100 rounded-full",
        "sm:p-3.5",
        wrapClassName
      )}
    >
      <div
        className={classNames(
          "inline-flex items-center justify-between",
          "w-[104px] sm:w-28",
          containerClassName
        )}
      >
        <button
          onClick={() => handleNumberInput("minus")}
          className={classNames(styleBtn)}
          disabled={numberInput.isDisabledMinusBtn}
        >
          <MinusIcon />
        </button>
        <span className="select-none block flex-1 text-center">
          {numberInput.currentNumber}
        </span>
        <button
          onClick={() => handleNumberInput("plus")}
          className={classNames(styleBtn)}
          disabled={numberInput.isDisabledPlusBtn}
        >
          <PlusIcon />
        </button>
      </div>
    </div>
  );
};

export default NumberInput;
