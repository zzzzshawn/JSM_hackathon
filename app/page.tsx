import Profile from "@/components/Profile";

export default async function Home() {
  return (
    <div className="z-[99999]  max-w-3xl mx-auto flex flex-col items-start justify-start py-20 px-16 h-screen font-modernreg">
     <Profile />
    </div>
  );
}
