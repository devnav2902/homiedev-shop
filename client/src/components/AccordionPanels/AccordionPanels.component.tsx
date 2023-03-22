import { Disclosure } from "@headlessui/react";
import React, { FC } from "react";
import { classNames } from "utils/functions";
import { MinusIcon, PlusIcon } from "utils/icons";

interface Props {
  accordionPanels: { label: string; content: string }[];
  buttonClassName?: string;
  wrapClassname?: string;
}

const AccordionPanels: FC<Props> = ({
  accordionPanels,
  buttonClassName = "",
  wrapClassname = "",
}) => {
  return (
    <div className={wrapClassname}>
      {accordionPanels.map((panel, key) => (
        <Disclosure key={key} defaultOpen={key === 0}>
          {({ open }) => (
            <>
              <Disclosure.Button
                className={classNames(
                  "flex items-center justify-between",
                  "w-full rounded-lg bg-slate-100 px-4 py-2 text-left text-base font-medium text-slate-800",
                  "hover:bg-slate-200/75 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75",
                  buttonClassName
                )}
              >
                <span>{panel.label}</span>
                {open ? <MinusIcon /> : <PlusIcon />}
              </Disclosure.Button>
              <Disclosure.Panel
                className="px-4 p-2 text-base text-gray-700"
                dangerouslySetInnerHTML={{ __html: panel.content }}
              />
            </>
          )}
        </Disclosure>
      ))}
    </div>
  );
};

export default AccordionPanels;
