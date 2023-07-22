import { useOnClickOutside } from "@/hooks";
import React, { useRef } from "react";

const Modal = ({
  open,
  handleClose,
  children,
  title,
  className,
  style,
  childrenClass,
}: any) => {
  const ref: any = useRef();
  useOnClickOutside(ref, () => handleClose());
  return (
    <>
      {open && (
        <div
          className="w-screen h-screen z-50 right-0 top-0 fixed shadow bg-background flex justify-center items-center m-0"
          style={{
            backgroundColor: "rgba(0,0,0,0.8)",
            margin: "0px",
          }}
        >
          <div
            className={`relative bg-background text-white rounded-[0.5rem] p-4 xl:px-6 2xl:px-12 border-[1px] border-white ${className}`}
            ref={ref}
            style={style}
          >
            <p className="text-lg xl:text-2xl font-bold w-full py-2">{title}</p>
            <div
              className={`flex flex-col items-center justify-center w-full h-full gap-4  ${childrenClass}`}
            >
              {children}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export { Modal };
