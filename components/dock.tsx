"use client";
import React from "react";
import { ExpandableTabs } from "./ui/expandable-tabs";
import { Book, GalleryHorizontal, Home } from "lucide-react";

const Dock = () => {
  const tabs = [
    { title: "Home", icon: Home , href: "/home"},
    { title: "Blog", icon: Book, href: "/blog" },
    { type: "separator" },
    { title: "Gallery", icon: GalleryHorizontal, href: "/gallery" },
  ];

  return (
    <div className="flex flex-col gap-4 fixed bottom-9 z-[99999] w-full">
      <ExpandableTabs className="mx-auto" tabs={tabs} />
    </div>
  );
};

export default Dock;
