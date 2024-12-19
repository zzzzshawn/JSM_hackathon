import { fetchBlog } from "@/actions/fetchBlog";
import Link from "next/link";
import React from "react";

const Blog = async() => {

  const blogs = await fetchBlog()

  return (
    <div className="z-[99] flex flex-col items-center justify-start py-20 min-h-screen font-modernreg max-lg:px-3 max-w-3xl w-full  max-lg:w-full mx-auto relative overflow-hidden text-white gap-3">
     <h1 className="w-full text-center text-5xl font-modernbold my-10">Blog.</h1>
     {blogs?.map(b => (
      <Link href={`/blog/${b.id}`} key={b.id} className="border max-w-2xl w-[40rem] max-sm:w-[22rem] rounded-2xl bg-zinc-800/20 border-zinc-400/20 backdrop-blur-xl backdrop-saturate-200 p-5 flex flex-col items-start justify-start hover:shadow-white/40 shadow-2xl hover:border-white/30">
        <h1 className="font-modernbold text-lg">{b.title}</h1>
        <p className="text-zinc-400/70 text-xs" >{new Date(b.createdAt).toLocaleDateString()}</p>
        <p className="text-zinc-400 mt-2">{b.description}</p>
      </Link>
     ))}
    </div>
  );
};

export default Blog;
