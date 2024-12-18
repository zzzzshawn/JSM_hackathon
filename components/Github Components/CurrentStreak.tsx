import { Flame } from "lucide-react";
import Image from "next/image";
import React from "react";

const CurrentStreak = ({
  classname,
  streak,
  start,
  end,
}: {
  streak: number;
  start: string | null;
  end: string | null;
  classname?: string;
}) => {
  return (
    <div
      className={`${classname} flex items-center justify-center flex-col gap-3 relative rounded-2xl overflow-hidden p-5 max-lg:p-3 -z-10 bg-black/90`}
    >
      {/* <HalfCircleGradient  /> */}
      <Image
        src={`/assets/frame9.svg`}
        alt=""
        width={500}
        height={500}
        className="size-full object-cover absolute inset-0 top-1 -z-10 rounded-2xl"
      />
      <div className="relative items-center justify-center">
        <div className=" absolute inset-1/2 size-24 -z-10 bg-gradient-to-tr from-blue-700/90 blur-[18px] rounded-full to-blue-900/50 transform -translate-x-1/2 -translate-y-1/2"></div>
        <Flame className="size-14" />
      </div>
      <p className=" font-modernbold lg:text-xl ">Current Streak</p>
      <p className="font-modernbold text-7xl ">{streak}</p>
      <p>
        {end} - {start}
      </p>
    </div>
  );
};

export default CurrentStreak;
