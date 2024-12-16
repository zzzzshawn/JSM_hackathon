"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function Carousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const items = [
    { id: 3, content: "/assets/ms.png", color: "bg-zinc-700/40", title: "Millennial Studio", desc: "A landing page for a local clothing store"  },
    { id: 2, content: "/assets/socialz.png", color: "bg-zinc-700/40", title: "Socialzz", desc: "A photo sharing social media platform" },
    { id: 1, content: "/assets/rotos.png", color: "bg-zinc-700/40", title: "Rotos", desc: "Questionnaire platform" },
  ];

  return (
    <div className="flex space-x-2 w-full relative h-[600px]">
      {items.map((item, index) => (
        <div
          key={item.id}
          className={`h-full transition-all duration-300 ease-in-out flex flex-col gap-5 items-center justify-center  text-white  cursor-pointer ${
            index === activeIndex
              ? "w-[80%] max-h-[420px]"
              : index === 0 && activeIndex !== 0
              ? "w-[15%] max-h-[420px]"
              : "w-[15%] max-h-[420px]"
          } group`}
        >
          <div
            className={cn(
              " size-full backdrop-blur-xl border-zinc-500/20 backdrop-saturate-200 border-2 rounded-lg relative group-hover:border-purple-400/30 shadow-2xl group-hover:shadow-purple-300/40",
              item.color
            )}
            onClick={() => setActiveIndex(index)}
            role="button"
            aria-pressed={index === activeIndex}
            tabIndex={0}
          >
            <Image
              src={item.content}
              alt=""
              width={2024}
              height={2024}
              className={`absolute inset-0 h-[96%] w-[98%]  rounded-lg opacity-90 m-auto object-cover ${
                index === activeIndex
                  ? "rounded-lg"
                  : index === 0 && activeIndex !== 0
                  ? "blur-sm"
                  : "blur-sm"
              }`}
            />
          </div>
          <div className={`absolute bottom-12 left-0 px-16 h-32 max-h-32  ${
              index === activeIndex
                ? "opacity-100"
                : index === 0 && activeIndex !== 0
                ? "opacity-0"
                : "opacity-0"
            } flex gap-10 w-full items-start justify-between`}
          >
            <div className="font-modernbold text-5xl text-nowrap ">
            {item.title}
            </div>
            <div className="text-wrap max-w-[60%] font-modernreg text-xl text-right pt-5 h-full overflow-hidden">{item.desc}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
