import { Dialog, Transition } from "@headlessui/react";
import { FC, Fragment, ReactElement } from "react";

interface Props {
  children: ReactElement;
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

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-screen items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-[950px] transform overflow-y-auto rounded-md bg-white p-4 text-left align-middle shadow-xl transition-all">
                {dialogTitle && (
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    {dialogTitle}
                  </Dialog.Title>
                )}
                <div className={dialogTitle && "mt-2"}>{children}</div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default WrapperDialog;
