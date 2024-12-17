import React from "react";
import Image from "next/image";
import { Trophy } from "lucide-react";

const LongestStreak = ({
  streak,
  start,
  end,
  classname,
}: {
  streak: number;
  start: string | null;
  end: string | null;
  classname?: string;
}) => {
  return (
    <div className={`${classname} flex items-center justify-center flex-col gap-3 relative rounded-2xl overflow-hidden p-3 -z-10 bg-black/90`}>
        {/* <HalfCircleGradient  /> */}
        <Image
            src={`/assets/frame7.svg`}
            alt=""
            width={1024}
            height={1024}
            className="size-full object-cover absolute inset-0 -z-10 rounded-2xl opacity-95"
        />
        <p className="font-modernbold lg:text-xl">Longest Streak</p>
        <Trophy className="size-10"/>
        <p className="font-modernbold text-7xl">{streak}</p>
        <p>{start} - {end}</p>
    </div>
  );
};

export default LongestStreak;
