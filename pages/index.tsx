/* eslint-disable @next/next/no-img-element */
import { Button } from "@/components/elements";
import { Footer, Navbar, ServiceCard } from "@/components/pages/landing";
import { Inter } from "next/font/google";
import Image from "next/image";
import { useRouter } from "next/router";
import TickMarkSVG from "../public/svgs/tick-mark.svg";

const inter = Inter({ subsets: ["latin"] });

const DATA = [
  {
    name: "Effortlessly Create Strategies",
    image: "/svgs/SimulatedEnv.svg",
    description: `Design investment strategies effortlessly using our intuitive drag-and-drop 
    interface. Combine traditional financial data with a variety of alternative sources`,
  },
  {
    name: "Confidently Test and Refine",
    image: "/svgs/Testing.svg",
    description: `Leverage historical data and advanced AI algorithms to test and refine your 
    strategies. Gain valuable insights and enhance your decision-making process.`,
  },
  {
    name: "Execute Strategies Seamlessly",
    image: "/svgs/Schedules.svg",
    description: `Execute your investment strategies with a single click, capitalizing on 
    real-time opportunities. Stay ahead of the market and maximize your potential returns.`,
  },
  {
    name: "Our Vibrant Community",
    image: "/svgs/SimulatedEnv.svg",
    description: `Join our vibrant community of investors to share your strategies or learn 
    from others. Collaborate, exchange ideas, and accelerate your growth in a supportive environment.`,
  },
];

export default function Home() {
  const router = useRouter();
  return (
    <div className="bg-gray-900 text-white">
      <div className="w-full bg-center bg-landingBanner bg-no-repeat bg-cover">
        <Navbar />
        <div className="max-w-[1440px] m-auto flex flex-col md:flex-row items-center justify-between gap-8 py-16">
          <div className="md:max-w-[50%] flex flex-col items-center md:items-start gap-8 px-4 md:px-8">
            <p className="text-[25px] md:text-[35px] lg:md:text-[48px] font-[600] leading-[40px] md:leading-[50px] xl:leading-[60px] text-center md:text-left">
              Unlock the Potential of Alternative Data for Investment Strategies
            </p>
            <p className="text-sm md:text-base leading-6 md:leading-8 text-center md:text-left">
              Welcome to i-sight, the platform that brings your investment
              strategies to life through alternative data. Our cutting-edge
              platform empowers you to effortlessly create, test, and execute
              strategies by seamlessly integrating a wide range of alternative
              data sources. Join us today to revolutionize your investment
              approach.{" "}
            </p>
            <Button
              text="Join Now"
              className="w-[200px]"
              onClick={() => router.push("/signup")}
            />
          </div>
          <img
            src="/img/BannerSideImg.png"
            alt="bg"
            className="w-full h-auto max-w-[450px] max-h-[460px] p-2 md:p-8"
          />
        </div>
      </div>

      <div className="w-full bg-landing bg-center bg-no-repeat bg-cover flex flex-col gap-16 md:gap-24 pt-16 md:pt-24">
        <div className="w-full max-w-[1440px] mx-auto flex flex-col md:flex-row items-center justify-between gap-8 px-4 md:px-8">
          <p className="text-center md:text-left text-[25px] md:text-[40px] leading-[40px] md:leading-[50px] capitalize">
            What you get from us
          </p>
          <p className="text-left text-xl md:text-2xl opacity-70">
            Create | Test | Execute | Share
          </p>
        </div>
        <div className="w-full max-w-[1280px] mx-auto flex flex-wrap items-center justify-center gap-14 px-4 md:px-8">
          {DATA.map((item, i) => (
            <ServiceCard
              name={item.name}
              image={item.image}
              description={item.description}
              key={i}
            />
          ))}
        </div>
        <div className="w-full max-w-[1440px] mx-auto flex flex-col md:flex-row items-center justify-between gap-8 pt-16">
          <div className="md:max-w-[47%] flex flex-col items-center md:items-start gap-8 px-4 md:px-8">
            <p className="text-[25px] md:text-[35px] lg:md:text-[48px] font-[600] leading-[40px] md:leading-[50px] xl:leading-[60px] text-center md:text-left">
              Experience the Future of Investment Strategies with i-sight{" "}
            </p>
            <p className="text-sm md:text-base leading-6 md:leading-8 text-center md:text-left">
              Sign up today to get Early access to our platform.{" "}
            </p>
            <Button
              text="Join Now"
              className="w-[200px]"
              onClick={() => router.push("/signup")}
            />
          </div>
          <Image
            src="/svgs/landing.svg"
            alt="bg"
            height={100}
            width={100}
            className="w-full h-auto md:max-w-[40%]"
          />
        </div>

        <div className="w-full max-w-[1440px] mx-auto flex flex-col md:flex-row items-center justify-between gap-8 py-16">
          <div className="w-full flex flex-col items-center md:items-start gap-8 px-4 md:px-8">
            <div className="w-full flex flex-row flex-wrap gap-8 justify-center items-center">
              <div className="h-auto max-w-lg px-12 py-8 flex flex-col gap-4 border border-gray rounded-[16px]">
                <div className="flex flex-row w-full justify-between items-center text-2xl font-semibold mb-4">
                  <span className="text-blue-500">Basic Tier:</span>
                  <span>
                    <span className="text-[#CF7BF4]">£9.99</span> per month
                  </span>
                </div>

                <div className="flex flex-row gap-4 items-center">
                  <Image
                    src="/svgs/TickMark.svg"
                    alt="icon"
                    height={28}
                    width={28}
                  />
                  <span>
                    Access to intuitive darg-and-drop interface for strategy
                    creation
                  </span>
                </div>

                <div className="flex flex-row gap-4 items-center">
                  <Image
                    src="/svgs/TickMark.svg"
                    alt="icon"
                    height={28}
                    width={28}
                  />
                  <span>Limited data sources for market analysis</span>
                </div>

                <div className="flex flex-row gap-4 items-center">
                  <Image
                    src="/svgs/TickMark.svg"
                    alt="icon"
                    height={28}
                    width={28}
                  />
                  <span>Basic pre-built components for strategy building</span>
                </div>

                <div className="flex flex-row gap-4 items-center">
                  <Image
                    src="/svgs/TickMark.svg"
                    alt="icon"
                    height={28}
                    width={28}
                  />
                  <span>Basic backtesting capabilities</span>
                </div>

                <div className="flex flex-row gap-4 items-center">
                  <Image
                    src="/svgs/TickMark.svg"
                    alt="icon"
                    height={28}
                    width={28}
                  />
                  <span>Standard customer support</span>
                </div>

                <div className="flex flex-row gap-4 items-center">
                  <Image
                    src="/svgs/TickMarkGray.svg"
                    alt="icon"
                    height={28}
                    width={28}
                  />
                  <span>
                    Exclusive access to educational materials and webinars
                  </span>
                </div>

                <div className="flex flex-row gap-4 items-center">
                  <Image
                    src="/svgs/TickMarkGray.svg"
                    alt="icon"
                    height={28}
                    width={28}
                  />
                  <span>
                    Advanced AI driven analysis and recommendation features
                  </span>
                </div>
              </div>

              <div className="h-auto max-w-xl px-12 py-8 flex flex-col gap-4 border border-gray rounded-[16px] shadow-blue-500 shadow-lg">
                <div className="flex flex-row w-full justify-between items-center text-2xl font-semibold mb-4">
                  <span className="text-blue-500">Premium Tier:</span>
                  <span>
                    <span className="text-[#CF7BF4]">£24.99</span> per month
                  </span>
                </div>

                <div className="flex flex-row gap-4 items-center">
                  <Image
                    src="/svgs/TickMark.svg"
                    alt="icon"
                    height={28}
                    width={28}
                  />
                  <span>
                    Access to intuitive darg-and-drop interface for strategy
                    creation
                  </span>
                </div>

                <div className="flex flex-row gap-4 items-center">
                  <Image
                    src="/svgs/TickMark.svg"
                    alt="icon"
                    height={28}
                    width={28}
                  />
                  <span>
                    Expanded data sources, including social networks and
                    economic data
                  </span>
                </div>

                <div className="flex flex-row gap-4 items-center">
                  <Image
                    src="/svgs/TickMark.svg"
                    alt="icon"
                    height={28}
                    width={28}
                  />
                  <span>
                    Enhanced pre-built components for advanced strategy building
                  </span>
                </div>

                <div className="flex flex-row gap-4 items-center">
                  <Image
                    src="/svgs/TickMark.svg"
                    alt="icon"
                    height={28}
                    width={28}
                  />
                  <span>Advanced backtesting and simulation capabilities</span>
                </div>

                <div className="flex flex-row gap-4 items-center">
                  <Image
                    src="/svgs/TickMark.svg"
                    alt="icon"
                    height={28}
                    width={28}
                  />
                  <span>Priority customer support</span>
                </div>

                <div className="flex flex-row gap-4 items-center">
                  <Image
                    src="/svgs/TickMark.svg"
                    alt="icon"
                    height={28}
                    width={28}
                  />
                  <span>
                    Exclusive access to educational materials and webinars
                  </span>
                </div>

                <div className="flex flex-row gap-4 items-center">
                  <Image
                    src="/svgs/TickMark.svg"
                    alt="icon"
                    height={28}
                    width={28}
                  />
                  <span>
                    Advanced AI driven analysis and recommendation features
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
      <div className="bg-cardBg flex items-center justify-center px-2 py-4">
        <p className="text-sm md:text-base text-center">All Rights Reserved</p>
      </div>
    </div>
  );
}
