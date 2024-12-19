import Image from "next/image";
import React from "react";

const ContributedTo = ({
  contros,
  classname,
}: {
  contros: number;
  classname: string;
}) => {
  return (
    <div
      className={`${classname} flex items-center justify-center flex-col gap-3 relative rounded-3xl overflow-hidden bg-black/90  z-[90]  group cursor-pointer`}
    >
      {/* <HalfCircleGradient  /> */}
      <Image
        src={`/assets/grad11.svg`}
        alt=""
        width={500}
        height={500}
        className="size-full object-cover absolute inset-0 -z-10 rounded-xl opacity-70 group-hover:opacity-100 object-left-bottom"
      />
      <div className="absolute top-3 left-3 max-lg:flex max-md:block gap-2" >
        <Image
          src={`/icons/pr.svg`}
          alt=""
          width={100}
          height={100}
          className="size-10"
        />
        <p className="font-modernbold lg:text-xl pt-2">Contrib<span className="sm:hidden">-</span> uted <br/> To:</p>
      </div>
      <p className="font-modernbold absolute bottom-5 right-3 text-7xl max-lg:text-5xl">{contros}</p>
    </div>
  );
};

export default ContributedTo;
