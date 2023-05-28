import { Button } from "@/components/elements";
import { Footer, Navbar, ServiceCard } from "@/components/pages/landing";
import { Inter } from "next/font/google";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

const DATA = [
  {
    name: "Simulated Environment",
    image: "/svgs/SimulatedEnv.svg",
  },
  {
    name: "Testing Strategies",
    image: "/svgs/Testing.svg",
  },
  {
    name: "Scheduled Decisions",
    image: "/svgs/Schedules.svg",
  },
];

export default function Home() {
  return (
    <div className="bg-gray-900 text-white">
      <div className="w-full bg-center bg-landingBanner bg-no-repeat bg-cover">
        <Navbar />
        <div className="max-w-[1440px] m-auto flex flex-col md:flex-row items-center justify-between gap-8 py-16">
          <div className="md:max-w-[50%] flex flex-col items-center md:items-start gap-8 px-4 md:px-8">
            <p className="text-[25px] md:text-[35px] lg:md:text-[48px] font-[600] leading-[40px] md:leading-[50px] xl:leading-[60px] text-center md:text-left">
              Effortlessly conduct trading on a fresh methodology
            </p>
            <p className="text-sm md:text-base leading-6 md:leading-8 text-center md:text-left">
              Lorem Ipsum has been the industrys standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived{" "}
            </p>
            <Button text="Join Now" className="w-[200px]" />
          </div>
          <img
            src="/img/BannerSideImg.png"
            alt="bg"
            className="w-full h-auto max-w-[450px] max-h-[460px] p-2 md:p-8"
          />
        </div>
      </div>
      <div className="w-full bg-coins">
        <div className="w-full max-w-[1440px] mx-auto flex flex-wrap items-center justify-between py-2 md:py-8 px-4 md:px-8">
          {[1, 2, 3, 4].map((item) => (
            <p key={item} className="text-[30px] lg:text-[40px]">
              Coin Icon
            </p>
          ))}
        </div>
      </div>
      <div className="w-full bg-landing bg-center bg-no-repeat bg-cover flex flex-col gap-16 md:gap-24 pt-16 md:pt-24">
        <div className="w-full max-w-[1440px] mx-auto flex flex-col md:flex-row items-center justify-between gap-8 px-4 md:px-8">
          <p className="text-center md:text-left text-[25px] md:text-[40px] leading-[40px] md:leading-[50px] capitalize">
            Best quality we provide With the Best services
          </p>
          <p className="text-center text-sm md:text-base opacity-70">
            Lorem Ipsum has been the industrys standard dummy text ever since
            the 1500s
          </p>
        </div>
        <div className="w-full max-w-[1440px] mx-auto flex flex-wrap items-center justify-center gap-8 px-4 md:px-8">
          {DATA.map((item, i) => (
            <ServiceCard name={item.name} image={item.image} key={i} />
          ))}
        </div>
        <div className="w-full max-w-[1440px] mx-auto flex flex-col md:flex-row items-center justify-between gap-8 py-16">
          <div className="md:max-w-[50%] flex flex-col items-center md:items-start gap-8 px-4 md:px-8">
            <p className="text-[25px] md:text-[35px] lg:md:text-[48px] font-[600] leading-[40px] md:leading-[50px] xl:leading-[60px] text-center md:text-left">
              Newly Introduced crypto exchange
            </p>
            <p className="text-sm md:text-base leading-6 md:leading-8 text-center md:text-left">
              Lorem Ipsum has been the industrys standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived{" "}
            </p>
            <Button text="Join Now" className="w-[200px]" />
          </div>
          <Image
            src="/svgs/landing.svg"
            alt="bg"
            height={100}
            width={100}
            className="w-full h-auto md:max-w-[40%]"
          />
        </div>
        <Footer />
      </div>
      <div className="bg-cardBg flex items-center justify-center px-2 py-4">
        <p className="text-sm md:text-base text-center">All Rights Reserved</p>
      </div>
    </div>
  );
}
