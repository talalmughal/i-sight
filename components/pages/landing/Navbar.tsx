import { Button } from "@/components/elements";
import { useOnClickOutside } from "@/hooks";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useRef, useState } from "react";

const MENU_ITEMS = ["About Us", "What We Do", "Our Best Practices"];

const Navbar = () => {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  const menuRef = useRef<any>();
  useOnClickOutside(menuRef, () => setMenuOpen(false));

  return (
    <div className="max-w-[1440px] m-auto relative flex flex-row items-center justify-between py-2 md:py-4 px-4 md:px-8">
      <Image
        src="/svgs/Logo.svg"
        alt="logo"
        height={44}
        width={112}
        onClick={() => router.push("/")}
        className="cursor-pointer"
      />
      <div className="hidden md:flex flex-row items-center gap-4 md:gap-8">
        {MENU_ITEMS.map((item) => (
          <p
            key={item}
            className="text-sm md:text-base text-white opacity-70 cursor-pointer hover:opacity-100"
          >
            {" "}
            {item}
          </p>
        ))}
      </div>
      <Button
        text="Sign In"
        className="hidden md:block"
        onClick={() => router.push("/login")}
      />
      <div className="relative md:hidden" ref={menuRef}>
        <Image
          src="/svgs/Menu.svg"
          alt="menu"
          height={25}
          width={25}
          onClick={() => setMenuOpen(!menuOpen)}
          className=""
        />
        {menuOpen && (
          <div className="absolute right-6 top-7 bg-black flex flex-col items-center gap-6 px-2 py-4 rounded-md border border-gray">
            {MENU_ITEMS.map((item) => (
              <p
                key={item}
                className="text-sm md:text-base text-white opacity-70 cursor-pointer hover:opacity-100"
              >
                {item}
              </p>
            ))}
            <Button text="Sign In" />
          </div>
        )}
      </div>
    </div>
  );
};

export { Navbar };
