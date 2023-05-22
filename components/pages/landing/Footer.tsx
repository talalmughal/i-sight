import Image from "next/image";
import React from "react";

const PLATFORMS = [
  "Crypto",
  "Our Article",
  "News Update",
  "Our Blogging",
  "News Letter",
];
const ABOUT_US = [
  "Our Story",
  "New Technologies",
  "Our Goal",
  "Expert Support",
];
const SUPPORT = ["About Us", "FAQ", "Privacy Policy", "Help"];
const ADDRESS = [
  "Cryptodummy@email.com",
  "4517 Manchester, Denmark Poland",
  "345-987-5443",
];

const Footer = () => {
  return (
    <div className="w-full max-w-[1440px] m-auto flex flex-wrap items-start justify-between gap-8 md:gap-4 bg-transparent px-4 md:px-8 py-8">
      <div className="flex flex-col gap-4 max-w-[200px]">
        <Image
          src="/svgs/Logo.svg"
          alt="logo"
          height={44}
          width={112}
          className="-ml-2"
        />
        <p className="text-sm md:text-base opacity-70">
          Lorem Ipsum has been the industrys standard{" "}
        </p>
        <div className="flex flex-row items-center gap-2">
          {["insta", "fb", "twitter"].map((item) => (
            <Image
              src={`/svgs/${item}.svg`}
              alt="icon"
              height={20}
              width={20}
              key={item}
              className="cursor-pointer"
            />
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <p className="text-sm md:text-base font-[600]">Platform</p>
        <div className="flex flex-col gap-2">
          {PLATFORMS.map((p) => (
            <p
              className="text-sm md:text-base font-[400] cursor-pointer"
              key={p}
            >
              {p}
            </p>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <p className="text-sm md:text-base font-[600]">About Us</p>
        <div className="flex flex-col gap-2">
          {ABOUT_US.map((p) => (
            <p
              className="text-sm md:text-base font-[400] cursor-pointer"
              key={p}
            >
              {p}
            </p>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <p className="text-sm md:text-base font-[600]">Support</p>
        <div className="flex flex-col gap-2">
          {SUPPORT.map((p) => (
            <p
              className="text-sm md:text-base font-[400] cursor-pointer"
              key={p}
            >
              {p}
            </p>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <p className="text-sm md:text-base font-[600]">Address</p>
        <div className="flex flex-col gap-2">
          {ADDRESS.map((p) => (
            <p
              className="text-sm md:text-base font-[400] cursor-pointer"
              key={p}
            >
              {p}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export { Footer };
