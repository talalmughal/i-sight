import React from "react";
import { Loader } from "./Loader";
import Image from "next/image";

const PRIMARY = "bg-blue-500 text-white hover:bg-white hover:text-blue-500";

const Button = ({
  text,
  variant,
  leftIcon,
  rightIcon,
  loading,
  className,
  ...rest
}: any) => {
  return (
    <button
      disabled={loading}
      className={`w-full sm:w-auto min-w-[123px] px-4 rounded-[8px] h-[52px] xl:h-[52px] capitalize flex flex-row items-center justify-center gap-2 text-sm md:text-base font-medium ${PRIMARY} ${
        loading ? "!opacity-60 cursor-not-allowed" : ""
      } ${className}`}
      {...rest}
    >
      {loading ? <Loader /> : null}
      {leftIcon && !loading ? (
        <Image
          src={leftIcon}
          height={25}
          width={25}
          className="h-5 w-5"
          alt="icon"
        />
      ) : null}
      <span>{text}</span>
      {rightIcon && !loading ? (
        <Image
          src={rightIcon}
          height={25}
          width={25}
          className="h-5 w-5"
          alt="icon"
        />
      ) : null}
    </button>
  );
};

export { Button };
