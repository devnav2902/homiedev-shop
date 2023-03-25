import { createContext, FC, Fragment, useState } from "react";
import Toast from "./Toast.component";

interface Props {
  children?: JSX.Element;
}

type ToastElements = JSX.Element[];

interface IToastContext {
  addToast: (toast: ToastElements[0]) => void;
  toastElements: ToastElements;
}

export const ToastContext = createContext<IToastContext>({
  addToast: () => {},
  toastElements: [],
});

const ToastProvider: FC<Props> = ({ children }) => {
  const [toastArr, setToastArr] = useState<ToastElements>([]);

  function addToast(toast: IToastContext["toastElements"][0]) {
    setToastArr((state) => {
      return [...state, toast];
    });
  }

  const value: IToastContext = { addToast, toastElements: toastArr };

  return (
    <ToastContext.Provider value={value}>
      <Toast>
        {toastArr.map((toast, i) => (
          <Fragment key={i}>{toast}</Fragment>
        ))}
      </Toast>
      {children}
    </ToastContext.Provider>
  );
};

export default ToastProvider;
