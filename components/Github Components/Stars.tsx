import { StarsIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

const Stars = ({ classname, stars }: { classname: string; stars: number }) => {
  return (
    <div
      className={`${classname} flex items-start flex-col gap-3 relative rounded-2xl overflow-hidden p-5 -z-10 bg-black/90`}
    >
      {/* <HalfCircleGradient  /> */}
      <Image
        src={`/assets/grain.svg`}
        alt=""
        width={1024}
        height={1024}
        className="size-full object-cover absolute inset-0 -z-10 rounded-2xl opacity-70"
      />
      <div className="absolute top-5 left-5">
        <StarsIcon className="size-14  " />
        <p className=" font-modernbold text-lg ">Stars Earned</p>
      </div>
      <p className="font-modernbold text-7xl absolute bottom-5 right-5">
        {stars}
      </p>
    </div>
  );
};

export default Stars;
