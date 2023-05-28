import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { Button } from "../elements";
import { useWindowDimesions } from "@/hooks";

const SIDEBAR_DATA = [
  {
    name: "Dashboard",
    icon: "/svgs/sidebar/Home.svg",
    iconActive: "/svgs/sidebar/HomeActive.svg",
  },
  {
    name: "Analytics",
    icon: "/svgs/sidebar/Chart.svg",
    iconActive: "/svgs/sidebar/ChartActive.svg",
  },
  {
    name: "My Portfolio",
    icon: "/svgs/sidebar/Document.svg",
    iconActive: "/svgs/sidebar/DocumentActive.svg",
  },
  {
    name: "My Wallet",
    icon: "/svgs/sidebar/Wallet.svg",
    iconActive: "/svgs/sidebar/WalletActive.svg",
  },
  {
    name: "Strategies",
    icon: "/svgs/sidebar/Vector.svg",
    iconActive: "/svgs/sidebar/VectorActive.svg",
  },
  {
    name: "Settings",
    icon: "/svgs/sidebar/Setting.svg",
    iconActive: "/svgs/sidebar/SettingActive.svg",
  },
  {
    name: "Logout",
    icon: "/svgs/sidebar/Logout.svg",
    iconActive: "/svgs/sidebar/LogoutActive.svg",
  },
];

function SideBar() {
  const [activeRoute, setActiveRoute] = useState("Dashboard");
  const { width } = useWindowDimesions();
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    if (width < 1024) {
      setCollapsed(true);
    } else {
      setCollapsed(false);
    }
  }, [width]);
  return (
    <div
      className={`h-[100vh] sticky top-0  flex min-h-screen ${
        collapsed ? "w-[100px] p-1 gap-4" : "w-[250px] p-4 gap-6"
      }  flex-col items-center bg-sidebarBg`}
    >
      {collapsed ? (
        <Image src="/svgs/LogoSmall.svg" alt="logo" height={40} width={40} />
      ) : (
        <Image src="/svgs/Logo.svg" alt="logo" height={55} width={130} />
      )}

      <div
        className={`flex flex-col ${
          collapsed ? "justify-center items-center" : ""
        }  gap-4 w-full`}
      >
        {SIDEBAR_DATA.map((item, i) => (
          <div
            className="flex flex-row items-center gap-4 p-2  cursor-pointer"
            key={i}
            onClick={() => setActiveRoute(item.name)}
          >
            <Image
              src={activeRoute === item.name ? item.iconActive : item.icon}
              alt="icon"
              height={20}
              width={20}
            />
            <p
              className={`${collapsed ? "hidden" : ""} ${
                activeRoute === item.name
                  ? "font-[700] text-primary    "
                  : "font-[500] text-gray"
              } text-base `}
            >
              {item.name}
            </p>
          </div>
        ))}
      </div>
      <div
        className={`${
          collapsed ? "hidden" : ""
        } bg-helpCenter bg-cover bg-no-repeat flex flex-col items-center justify-start gap-4 rounded-[8px] p-4`}
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
