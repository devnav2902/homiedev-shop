import { ProductProps } from "components/Product/Product.component";
import { ToastContext } from "components/Toast/ToastProvider.component";
import AddedToCart from "components/Toast/AddedToCart.component";
import { useContext, useEffect, useState } from "react";

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

type StateElement = "mounted" | "unmounted" | "unmounting";

export const useDelayedUnmouting = (timeDelay = 2000) => {
  const [state, setState] = useState<StateElement>();

  useEffect(() => {
    if (!state) setState("mounted");

    let timeId: number;

    if (state === "mounted") {
      setTimeout(() => {
        setState("unmounting");
      }, timeDelay);
    } else if (state === "unmounting") {
      setTimeout(() => {
        setState("unmounted");
      }, timeDelay);
    }

    return () => clearTimeout(timeId);
  }, [timeDelay, state]);

  return state;
};

export interface ILoadingState {
  loadingState: {
    isLoading: boolean;
    error?: string | object | null;
  };
  handleSetLoadingState: ({
    error,
    isLoading,
  }: ILoadingState["loadingState"]) => void;
}

export const useLoadingState = () => {
  const [loadingState, setLoadingState] = useState<
    ILoadingState["loadingState"]
  >({
    isLoading: false,
    error: null,
  });

  function handleSetLoadingState({
    isLoading,
    error = null,
  }: ILoadingState["loadingState"]) {
    setLoadingState((state) => ({ ...state, isLoading, error }));
  }

  return {
    loadingState,
    handleSetLoadingState,
  } as ILoadingState;
};

export const useSaveForLater = (saved = false) => {
  const { loadingState, handleSetLoadingState } = useLoadingState();
  const [stateButton, setStateButton] = useState(saved);

  function handleSaveForLater() {
    if (!loadingState.isLoading) {
      handleSetLoadingState({ isLoading: true });

      new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve("");
        }, 3000);
      }).then(() => {
        setStateButton(!stateButton);
        handleSetLoadingState({ isLoading: false });
      });
    }
  }

  return {
    handleSaveForLater,
    setStateButton,
    loadingState,
    stateButton,
  };
};

export const useAddToCart = (existInCart = false) => {
  const { loadingState, handleSetLoadingState } = useLoadingState();
  const [stateAddToCartButton, setStateAddToCartButton] = useState(existInCart);
  const [requestSent, setRequestSent] = useState(false);
  const toast = useContext(ToastContext);

  function handleAddToCart(product: ProductProps, qty = 1) {
    if (!loadingState.isLoading) {
      handleSetLoadingState({ isLoading: true });

      new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve("");
        }, 3000);
      })
        .then(() => {
          setStateAddToCartButton(!stateAddToCartButton);
          handleSetLoadingState({ isLoading: false });
        })
        .then(() => {
          const element = <AddedToCart {...product} qty={qty} />;
          toast.addToast(element);
        });
    }
  }

  return {
    handleAddToCart,
    setStateAddToCartButton,
    loadingState,
    stateAddToCartButton,
  };
};
