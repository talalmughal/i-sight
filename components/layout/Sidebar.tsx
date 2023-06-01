import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { Button } from "../elements";
import { useWindowDimesions } from "@/hooks";
import { useRouter } from "next/router";
import Link from "next/link";

const SIDEBAR_DATA = [
  {
    name: "dashboard",
    icon: "/svgs/sidebar/Home.svg",
    iconActive: "/svgs/sidebar/HomeActive.svg",
  },
  {
    name: "analytics",
    icon: "/svgs/sidebar/Chart.svg",
    iconActive: "/svgs/sidebar/ChartActive.svg",
  },
  {
    name: "my portfolio",
    icon: "/svgs/sidebar/Document.svg",
    iconActive: "/svgs/sidebar/DocumentActive.svg",
  },
  {
    name: "my wallet",
    icon: "/svgs/sidebar/Wallet.svg",
    iconActive: "/svgs/sidebar/WalletActive.svg",
  },
  {
    name: "strategies",
    icon: "/svgs/sidebar/Vector.svg",
    iconActive: "/svgs/sidebar/VectorActive.svg",
  },
  {
    name: "settings",
    icon: "/svgs/sidebar/Setting.svg",
    iconActive: "/svgs/sidebar/SettingActive.svg",
  },
  {
    name: "logout",
    icon: "/svgs/sidebar/Logout.svg",
    iconActive: "/svgs/sidebar/LogoutActive.svg",
  },
];

function SideBar() {
  const router = useRouter();
  const [activeRoute, setActiveRoute] = useState("Dashboard");
  const { width } = useWindowDimesions();
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    if (width && width < 1024) {
      setCollapsed(true);
    } else {
      setCollapsed(false);
    }
  }, [width]);
  return (
    <div
      className={`h-[100vh] sticky top-0  flex min-h-screen ${
        collapsed ? "w-[100px] p-1 gap-8" : "w-[250px] gap-8 xxxl:gap-16"
      }  flex-col items-center bg-sidebarBg`}
    >
      {collapsed ? (
        <Image
          src="/svgs/LogoSmall.svg"
          alt="logo"
          height={40}
          width={40}
          onClick={() => router.push("/")}
          className="cursor-pointer"
        />
      ) : (
        <Image
          src="/svgs/Logo.svg"
          alt="logo"
          height={55}
          width={130}
          onClick={() => router.push("/")}
          className="cursor-pointer"
        />
      )}

      <div
        className={`flex flex-col ${
          collapsed ? "justify-center items-center" : "pl-10"
        } gap-6 xxxl:gap-10 w-full`}
      >
        {SIDEBAR_DATA.map((item, i) => (
          <Link
            key={i}
            href={item.name === "strategies" ? "/strategies" : "/dashboard"}
            className={`relative py-2 ${collapsed ? "px-2" : "px-8 pl-4"}`}
          >
            <div className="flex flex-row items-center gap-4 p- cursor-pointer">
              <Image
                src={
                  router.asPath.includes(item.name)
                    ? item.iconActive
                    : item.icon
                }
                alt="icon"
                height={20}
                width={20}
              />
              <p
                className={`${collapsed ? "hidden" : ""} ${
                  router.asPath.includes(item.name)
                    ? "font-[700] text-primary    "
                    : "font-[500] text-gray"
                } text-base capitalize`}
              >
                {item.name}
              </p>
              {router.asPath.includes(item.name) && !collapsed ? (
                <Image
                  src="/svgs/dashboard/MenuActive.svg"
                  alt=""
                  height={45}
                  width={8}
                  className="absolute right-0"
                />
              ) : null}
            </div>
          </Link>
        ))}
      </div>
      <div
        className={`hidden xl:flex bg-helpCenter bg-cover bg-no-repeat flex-col items-center justify-start gap-4 rounded-[8px] p-4 mx-4`}
      >
        <Image
          src="/svgs/sidebar/Question.svg"
          alt="icon"
          height={48}
          width={48}
        />
        <p className="text-white font-[600] text-base">Help Center</p>
        <p className="text-white text-xs text-center font-[400] leading-4">
          Having Trouble in Learning. Please contact us for more questions.
        </p>
        <Button text="Go To Help Center" />
      </div>
    </div>
  );
}

export { SideBar };
