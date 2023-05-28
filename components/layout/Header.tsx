import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 w-full">
      <p className="text-lg md:text-[24px] font-[500] leading-10">
        Hi, Umar Khalid!
      </p>
      <div className="flex flex-row items-center gap-2 md:gap-4">
        <div className="flex flex-row items-center px-3 h-10 md:h-12 rounded-full bg-[#262932]">
          <Image
            src="/svgs/sidebar/Search.svg"
            alt="icon"
            height={18}
            width={18}
          />
          <input
            type="text"
            placeholder="Search"
            className="h-full outline-none bg-[#262932] rounded-full px-2"
          />
        </div>
        <div className="h-10 w-10 md:h-12 md:w-12 grid place-items-center rounded-full bg-[#262932]">
          <Image
            src="/svgs/sidebar/Notification.svg"
            alt="cion"
            height={20}
            width={17}
          />
        </div>
        <Image
          src="/img/ImgPlaceholder.png"
          alt="cion"
          height={48}
          width={48}
          className="hidden sm:block h-10 w-10 md:h-12 md:w-12 "
        />
      </div>
    </div>
  );
};

export { Header };
