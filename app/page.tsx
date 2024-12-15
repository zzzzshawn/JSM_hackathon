import fetchUser from "@/actions/fetchUser";
import Profile from "@/components/Profile";

export default async function Home() {
  const username = 'zzzzshawn';

  const userStats = await fetchUser(username)
  console.log(userStats)

  return (
    <div className="z-[99999]  max-w-3xl mx-auto flex items-start justify-start py-20 px-16 h-screen font-modernreg">
     <Profile />
    </div>
  );
}
