import { BookMarked } from "lucide-react";
import Image from "next/image";
import React from "react";

const Repos = ({ repos, classname }: { repos: number; classname: string }) => {
  return (
    <div
      className={`${classname} flex items-center justify-center flex-col gap-3 relative rounded-2xl overflow-hidden -z-10 bg-black/90`}
    >
      {/* <HalfCircleGradient  /> */}
      <Image
        src={`/assets/grad1.svg`}
        alt=""
        width={500}
        height={500}
        className="size-full object-cover absolute inset-0 -z-10 rounded-2xl opacity-90"
      />
      <div className="absolute top-5 left-5">
        <BookMarked className="size-10" />
        <p className="font-modernbold lg:text-xl pt-1">Repositories</p>
      </div>
      <p className="font-modernbold absolute bottom-5 right-5 text-7xl">
        {repos}
      </p>
    </div>
  );
};

export default Repos;
