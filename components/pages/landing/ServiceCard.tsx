import Image from "next/image";
import React from "react";

const ServiceCard = ({ image, name, description }: any) => {
  return (
    <div className="flex flex-col items-center justify-center p-8 gap-4 rounded-[16px] w-full max-w-[400px] bg-[rgba(28,28,28,0.3)] border-[1px] border-[rgba(255,255,255,0.5)] backdrop-blur-[22px]">
      <Image src={image} alt="icon" height={80} width={80} />
      <p className="text-center text-xl md:text-[24px]">{name}</p>
      <p className="text-center text-sm md:text-base opacity-70">
        {description}
      </p>
    </div>
  );
};

export { ServiceCard };
