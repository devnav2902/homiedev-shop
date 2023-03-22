import { classNames } from "./functions";

export const inputClasses = classNames(
  "border block w-full border-neutral-200",
  "focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 focus:outline-none",
  "bg-white disabled:bg-neutral-200 rounded-2xl text-sm font-normal h-11 px-4 py-3"
);

export const buttonClasses = classNames(
  "relative h-auto text-slate-50 shadow-xl",
  "inline-flex items-center justify-center",
  "rounded-full transition-colors text-sm font-medium py-3 px-4 disabled:bg-opacity-90 bg-slate-900",
  "hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-offset-2",
  "sm:text-base sm:py-3.5 sm:px-6"
);
