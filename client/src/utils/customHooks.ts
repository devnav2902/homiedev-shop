import { useState } from "react";

export const useDialog = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  function toggleDialog() {
    setIsOpen(!isOpen);
  }

  return [isOpen, toggleDialog] as [boolean, () => void];
};

export interface NumberInputState {
  currentNumber: number;
  isDisabledPlusBtn: boolean;
  isDisabledMinusBtn: boolean;
}

export type NumberInputHook = [
  stateNumberInput: NumberInputState,
  handleNumberInput: (button: "plus" | "minus") => void
];

export const useNumberInput = (max = 5) => {
  const [stateNumberInput, setStateNumberInput] = useState<NumberInputState>({
    currentNumber: 1,
    isDisabledPlusBtn: false,
    isDisabledMinusBtn: true,
  });

  const handleCurrentNumber: NumberInputHook["1"] = (button) => {
    if (button === "plus") {
      const number = stateNumberInput.currentNumber + 1;

      setStateNumberInput((state) => ({
        currentNumber: number,
        isDisabledPlusBtn: number >= max ? true : false,
        isDisabledMinusBtn: false,
      }));
    } else if (button === "minus") {
      const number = stateNumberInput.currentNumber - 1;

      setStateNumberInput((state) => ({
        currentNumber: number,
        isDisabledMinusBtn: number <= 1 ? true : false,
        isDisabledPlusBtn: false,
      }));
    }
  };

  return [stateNumberInput, handleCurrentNumber] as NumberInputHook;
};
