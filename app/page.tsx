import Profile from "@/components/Profile";
import Projects from "@/components/Projects";

export default async function Home() {
  return (
    <div className="z-[99999]  max-w-6xl mx-auto flex flex-col items-start justify-start py-20 px-16 min-h-screen font-modernreg">
     <Profile />
     <Projects />
    </div>
  );
}
