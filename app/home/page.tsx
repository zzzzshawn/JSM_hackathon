
import Github from "@/components/Github";
import Profile from "@/components/Profile";
import Projects from "@/components/Projects";

export default async function Home() {
  return (
    <div className="z-[99] flex flex-col items-start justify-start py-20 min-h-screen font-modernreg max-lg:px-3 max-w-6xl w-full  max-lg:w-full mx-auto relative overflow-hidden">
     <Profile />
     <Projects />
     <Github />
    </div>
  );
}
 