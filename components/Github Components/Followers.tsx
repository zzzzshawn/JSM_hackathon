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
      className={`${classname} flex items-center justify-center flex-col gap-3 relative rounded-2xl overflow-hidden -z-10 bg-black/90`}
    >
      {/* <HalfCircleGradient  /> */}
      <Image
        src={`/assets/frame2.png`}
        alt=""
        width={1024}
        height={1024}
        className="size-full object-cover absolute inset-0 -z-10 rounded-2xl opacity-80"
      />
      <div className="absolute top-3 left-3">
        <UserRoundCheck className="size-9" />
        <p className="font-modernbold">Followers</p>
      </div>
      <p className="font-modernbold absolute bottom-3 right-3 text-5xl">{followers}</p>
    </div>
  );
};

export default Followers;
