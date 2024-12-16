import Image from "next/image";
import React from "react";
import Links from "./Links";

const Profile = () => {
  return (
    <div className="p-5 max-w-2xl mx-auto  w-full">
      <div className="flex gap-3  p-2 group cursor-pointer">
        <Image
          src={`/assets/pfp.png`}
          alt="profile"
          width={1024}
          height={1024}
          className="size-20 rounded-full shadow-xl group-hover:shadow-cyan-200/80 transition-all"
        />
        <div className="">
          <p className="font-bold text-5xl font-modernbold text-white">Shawn.</p>
          <p className="font-modernmono text-lg text-dark-1">
            @zzzzshawn
          </p>
        </div>
      </div>
        <p className="text-lg lg:text-xl text-dark-2 mt-5 w-[95%] mx-auto">Sharing my journey of building impactful products, refining my craft as a developer, and navigating the ever-evolving tech industry</p>

        <div className="mt-10">
            <Links/>
        </div>
    </div>
  );
};

export default Profile;
