import { UserRoundCheck } from "lucide-react";
import Image from "next/image";
import React from "react";

const Followers = ({
  followers,
  classname,
}: {
  followers: number;
  classname?: string;
}) => {
  return (
    <div
      className={`${classname} flex items-center justify-center flex-col gap-3 relative rounded-3xl overflow-hidden bg-black/90 z-[90]  group cursor-pointer`}
    >
      {/* <HalfCircleGradient  /> */}
      <Image
        src={`/assets/frame2.png`}
        alt=""
        width={500}
        height={500}
        className="size-full object-cover absolute inset-0 -z-10 rounded-2xl opacity-70 group-hover:opacity-100"
      />
      <div className="absolute top-3 left-3">
        <UserRoundCheck className="size-9" />
        <p className="font-modernbold lg:text-xl">Followers</p>
      </div>
      <p className="font-modernbold absolute bottom-3 right-3 text-7xl max-lg:text-5xl">{followers}</p>
    </div>
  );
};

export default Followers;
