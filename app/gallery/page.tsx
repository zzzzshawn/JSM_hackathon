"use client";

import { images } from "@/constants";
import Image from "next/image";

export default function ParallaxScrollDemo() {
  return (
    <div className="min-h-screen grid md:grid-cols-3 grid-cols-2 gap-2 p-10">
      {images.map((image, index) => (
        <div key={index} className="relative h-full overflow-hidden rounded-3xl">
          <Image src={image} alt="parallax image" width={600} height={600} className="h-full w-full" />
        </div>
      ))}
    </div>
  );
}


