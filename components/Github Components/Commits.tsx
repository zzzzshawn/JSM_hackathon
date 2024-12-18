import { Command } from "lucide-react";
import Image from "next/image";
import React from "react";

const Commit = ({
  commits,
  classname,
}: {
  commits: number;
  classname: string;
}) => {
  return (
    <div
      className={`${classname} flex items-center justify-center flex-col gap-3 relative rounded-2xl overflow-hidden -z-10 bg-black/90`}
    >
      {/* <HalfCircleGradient  /> */}
      <Image
        src={`/assets/grad2.svg`}
        alt=""
        width={1024}
        height={1024}
        className="size-full object-cover absolute inset-0 -z-10 rounded-2xl opacity-80"
      />
      <div className="absolute top-5 left-5 max-sm:left-1">
        <Command className="size-10" />
        <p className="font-modernbold lg:text-xl pt-1">Total <br/> Commits</p>
      </div>
      <p className="font-modernbold absolute bottom-5 right-5 text-7xl max-sm:-right-4 max-sm:text-6xl max-sm:bottom-10  max-sm:rotate-90">
        {commits}
      </p>
    </div>
  );
};

export default Commit;
