import Image from "next/image";
import React from "react";

const Issues = ({
  issues,
  classname,
}: {
  issues: number;
  classname: string;
}) => {
  return (
    <div
      className={`${classname} flex items-center justify-center flex-col gap-3 relative rounded-2xl overflow-hidden -z-10 bg-black/90`}
    >
      {/* <HalfCircleGradient  /> */}
      <Image
        src={`/assets/grad4.svg`}
        alt=""
        width={1024}
        height={1024}
        className="size-full object-cover absolute inset-0 -z-10 rounded-2xl opacity-80"
      />
      <div className="absolute top-3 left-3">
        <Image
          src={`/icons/issues.svg`}
          alt=""
          width={100}
          height={100}
          className="size-10"
        />
        <p className="font-modernbold lg:text-xl pt-1">
        Issues
        </p>
      </div>
      <p className="font-modernbold absolute bottom-5 right-3 text-7xl max-lg:text-5xl">
        {issues}
      </p>
    </div>
  );
};

export default Issues;
