import { fetchBlogById } from "@/actions/fetchBlog";

export default async function BlogDetails({ params }: { params: { id: string } }) {

  const blog = await fetchBlogById(Number(params.id));
  
  if (!blog) {
    return <div>Blog not found</div>;
  }

  return (
    <div className="text-white max-w-3xl min-h-screen mx-auto p-10">
      <div className="border-x border-zinc-400/20 w-full h-full flex flex-col items-start justify-start p-10 max-sm:p-5 gap-10">
      <h1 className="text-3xl font-modernbold">{blog.title}</h1>
      <p className="text-lg font-modernreg text-justify text-zinc-200/80">{blog.content}</p>
      </div>
    </div>
  );
}