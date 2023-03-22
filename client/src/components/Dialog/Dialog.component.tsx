import { Dialog, Transition } from "@headlessui/react";
import { FC, Fragment, ReactElement } from "react";
import { classNames } from "utils/functions";

interface Props {
  children: ReactElement | ReactElement[];
  dialogTitle?: string;
  isOpen: boolean;
  toggleDialog: () => void;
}

const WrapperDialog: FC<Props> = ({
  dialogTitle,
  children,
  isOpen,
  toggleDialog,
}) => {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-[999]" onClose={toggleDialog}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0">
          <div className="flex items-center justify-center p-4 text-center h-full">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full h-full max-w-5xl transform rounded-2xl bg-white p-7 text-left align-middle shadow-xl transition-all">
                {dialogTitle && (
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900 mb-2"
                  >
                    {dialogTitle}
                  </Dialog.Title>
                )}
                <div
                  className={classNames(
                    "hiddenScrollbar overflow-y-auto h-full"
                  )}
                >
                  {children}
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default WrapperDialog;
