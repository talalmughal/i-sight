import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";
interface Props {
  activeTab?: string;
}

const Header = ({ activeTab }: Props) => {
  const router = useRouter();
  const [active, setActive] = useState(
    activeTab && activeTab !== "" ? activeTab : "Home"
  );

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 w-full">
      <div className="flex gap-8">
        <Image
          src="/svgs/Logo.svg"
          alt="logo"
          height={55}
          width={130}
          onClick={() => router.push("/")}
          className="cursor-pointer mr-4"
        />

        <button
          onClick={() => {
            setActive("Home");
            router.push("/dashboard");
          }}
        >
          <span
            className={`text-xl lg:text-3xl font-bold ${
              active === "Home"
                ? "text-white"
                : "text-[#94a3b8] hover:text-[#e2e8f0]"
            }`}
          >
            Home
          </span>
        </button>

        <button
          onClick={() => {
            setActive("Courses");
            router.push("/courses");
          }}
        >
          <span
            className={`text-xl lg:text-3xl font-bold ${
              active === "Courses"
                ? "text-white"
                : "text-[#94a3b8] hover:text-[#e2e8f0]"
            }`}
          >
            Courses
          </span>
        </button>

        <button
          onClick={() => {
            setActive("News");
            router.push("/news");
          }}
        >
          <span
            className={`text-xl lg:text-3xl font-bold ${
              active === "News"
                ? "text-white"
                : "text-[#94a3b8] hover:text-[#e2e8f0]"
            }`}
          >
            News
          </span>
        </button>

        <button
          onClick={() => {
            setActive("Wishlist");
            router.push("/wishlist");
          }}
        >
          <span
            className={`text-xl lg:text-3xl font-bold ${
              active === "Wishlist"
                ? "text-white"
                : "text-[#94a3b8] hover:text-[#e2e8f0]"
            }`}
          >
            Wishlist
          </span>
        </button>
      </div>
      <div className="flex flex-row items-center gap-2 md:gap-4">
        <div className="flex flex-row items-center px-3 h-10 md:h-12 rounded-full bg-[#262932] -mr-5 md:-mr-7">
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
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute -top-4 -right-12 md:-top-4 md:-right-16 inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
          <span className="relative -top-4 -right-12 md:-top-4 md:-right-16 inline-flex rounded-full h-3 w-3 bg-red-500"></span>
        </span>
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
