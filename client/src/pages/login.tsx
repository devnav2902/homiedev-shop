import Link from "next/link";
import React from "react";
import { AiFillFacebook } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { buttonClasses, inputClasses } from "utils/classNames";
import { classNames } from "utils/functions";

const Login = () => {
  const buttons = [
    {
      icon: AiFillFacebook,
      function: function () {},
      label: "Continue with Facebook",
    },
    {
      icon: FcGoogle,
      function: function () {},
      label: "Continue with Google",
    },
  ];

  return (
    <div className="pt-12 pb-32">
      <div className="container">
        <h2
          className={classNames(
            "my-20 text-center text-neutral-900",
            "text-3xl md:text-5xl",
            "font-semibold"
          )}
        >
          Login
        </h2>
        <div className="space-y-6 max-w-md mx-auto">
          <div className="grid gap-3">
            {buttons.map((btn) => (
              <button
                className={classNames(
                  "rounded-lg px-4 py-3",
                  "transform transition-transform",
                  "hover:-translate-y-1",
                  "flex items-center",
                  "bg-blue-50"
                )}
              >
                {<btn.icon fontSize={18} />}{" "}
                <span className="flex-grow text-center block text-neutral-700 font-medium">
                  {btn.label}
                </span>
              </button>
            ))}
          </div>

          <div className="relative text-center">
            <span className="bg-white px-4 font-medium">OR</span>
            <div className="-z-10 absolute left-0 top-1/2 -translate-y-1/2 w-full border-b border-[border-color]" />
          </div>

          <form className="grid grid-cols-1 gap-6">
            <div>
              <label htmlFor="email" className="text-neutral-800 block mb-1">
                Email address
              </label>
              <input
                type="email"
                name=""
                id=""
                className={inputClasses}
                placeholder="homiedevshop@example.com"
              />
            </div>
            <div>
              <div className="mb-1 flex justify-between">
                <label htmlFor="password" className="text-neutral-800">
                  Password
                </label>
                <button type="button" className="text-green-600 text-sm">
                  Forgot password?
                </button>
              </div>
              <input
                type="password"
                name=""
                id="password"
                className={inputClasses}
              />
            </div>

            <button className={buttonClasses}>Continue</button>
          </form>

          <div className="text-center">
            New user?{" "}
            <Link className="text-green-600" href="/signup">
              Create an account
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
