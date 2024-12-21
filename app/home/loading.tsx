import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const Loading = () => {
  return (
    <>
      <div className="text-white py-[6.25rem] px-5 max-w-2xl mx-auto w-full">
        <div className="flex gap-3  p-2">
          <Skeleton className="size-20  bg-zinc-800" />
          <div className="flex flex-col gap-1">
            <Skeleton className="w-[10rem] h-[3rem] " />
            <Skeleton className="w-[7rem] h-[1rem] mx-2 " />
          </div>
        </div>
        <Skeleton className="w-[95%] h-[2rem] mx-auto mt-5 " />
        <div className="mt-10">
          <div className="w-full max-w-3xl  max-sm:mx-0 max-sm:gap-2 mx-auto flex gap-5 justify-center flex-wrap items-center">
            {[1, 2, 3, 4, 5].map((itm) => (
              <div className="flex items-center gap-1.5" key={itm}>
                <Skeleton className="size-8" />
                <Skeleton className="w-[4rem] h-[1rem]" />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className=" max-w-5xl mx-auto flex items-start justify-start flex-col w-full gap-2">
        <Skeleton className="mt-5 mx-10 w-[14rem] h-[3rem]" />
        <div className="h-[550px] max-md:h-[480px] max-sm:h-[330px] flex flex-col gap-2  w-full mx-auto">
          <div className="flex w-[95%] gap-2 mx-auto h-full">
            <Skeleton className="w-[80%] max-h-[420px] max-md:max-h-[350px] max-sm:max-h-[230px] rounded-3xl" />
            <Skeleton className="w-[15%] max-h-[420px] max-md:max-h-[350px] max-sm:max-h-[230px] rounded-3xl" />
            <Skeleton className="w-[15%] max-h-[420px] max-md:max-h-[350px] max-sm:max-h-[230px] rounded-3xl" />
          </div>
          <div className="h-1/5 flex justify-between w-[80%] mx-auto">
            <Skeleton className="mx-10 w-[14rem] h-[3rem]" />
            <Skeleton className="mx-10 w-[14rem] h-[3rem]" />
          </div>
        </div>
      </div>
      <div className="max-w-5xl mx-auto flex items-start justify-start flex-col w-full gap-2">
        <Skeleton className="mt-5 mx-10 w-[14rem] h-[3rem]" />
        <Skeleton className="h-[30rem] mb-[10rem] w-[90%] rounded-3xl mx-auto" />
      </div>
    </>
  );
};

export default Loading;
