import AccountDashboardLayout from "components/AccountDashboardLayout/AccountDashboardLayout";
import React from "react";
import { classNames } from "utils/functions";
import { BsEnvelope, BsCalendarWeek, BsPhone } from "react-icons/bs";
import { inputClasses } from "utils/classNames";
import { RiImageAddLine } from "react-icons/ri";
import Image from "next/image";

const AccountInformation = () => {
  const labelClasses = "text-base font-medium text-neutral-900 mb-1.5 block";

  const IconClasses =
    "inline-flex items-center px-2.5 rounded-l-2xl border border-r-0 border-neutral-200 bg-neutral-50 text-neutral-500 text-sm";

  return (
    <AccountDashboardLayout>
      <div className="space-y-10 sm:space-y-12">
        <h2 className="text-2xl sm:text-3xl font-semibold">
          Account infomation
        </h2>

        <div className="flex gap-10 flex-col sm:gap-20 sm:flex-row">
          <div className="flex-shrink-0 self-center sm:self-start">
            <div className="relative w-32 h-32 rounded-full overflow-hidden">
              <Image src="/images/team-1.jpg" alt="" fill />
              <div className="absolute flex flex-col items-center justify-center inset-0 bg-slate-900/50">
                <RiImageAddLine className="mb-2 text-white" fontSize={26} />
                <span className="text-white text-sm">Change Image</span>
              </div>
              <input
                type="file"
                name=""
                id=""
                className="absolute inset-0 opacity-0 cursor-pointer"
              />
            </div>
          </div>
          <div className="space-y-6 flex-grow">
            <div>
              <label htmlFor="" className={labelClasses}>
                Full name
              </label>
              <input type="text" className={inputClasses} />
            </div>
            <div>
              <label htmlFor="" className={labelClasses}>
                Email
              </label>
              <div className="flex">
                <span className={IconClasses}>
                  <BsEnvelope fontSize={16} />
                </span>
                <input
                  type="text"
                  className={inputClasses + " !rounded-l-none"}
                />
              </div>
            </div>

            <div>
              <label htmlFor="" className={labelClasses}>
                Date of birth
              </label>
              <div className="flex">
                <span className={IconClasses}>
                  <BsCalendarWeek fontSize={16} />
                </span>
                <input
                  type="date"
                  className={inputClasses + " !rounded-l-none"}
                />
              </div>
            </div>

            <div>
              <label htmlFor="" className={labelClasses}>
                Gender
              </label>
              <div className="flex">
                <select name="" id="" className={inputClasses}>
                  <option value="female">Female</option>
                  <option value="male">Male</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="" className={labelClasses}>
                Phone number
              </label>
              <div className="flex">
                <span className={IconClasses}>
                  <BsPhone fontSize={16} />
                </span>
                <input
                  type="text"
                  className={inputClasses + " !rounded-l-none"}
                />
              </div>
            </div>

            <button
              className={classNames(
                "inline-flex items-center justify-center",
                "rounded-full transition-colors text-sm sm:text-base font-medium py-3 px-4 sm:py-3.5 sm:px-6 bg-slate-900 text-slate-50 shadow-xl",
                "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-6000",
                "disabled:bg-opacity-90",
                "hover:bg-slate-800"
              )}
            >
              Update account
            </button>
          </div>
        </div>
      </div>
    </AccountDashboardLayout>
  );
};

export default AccountInformation;
