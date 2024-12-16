import React from "react";
import fetchUser from "@/actions/fetchUser";
import fetchGraph from "@/actions/fetchGraph";
import Followers from "./Github Components/Followers";
import LongestStreak from "./Github Components/LongestStreak";
import Stars from "./Github Components/Stars";
import CurrentStreak from "./Github Components/CurrentStreak";
import Repos from "./Github Components/Repos";
import TotoalContributions from "./Github Components/TtalContro";
import Commit from "./Github Components/Commits";

const Github = async () => {
  const username = "zzzzshawn";
  const { userStats } = await fetchUser(username);
  console.log(userStats);
  const graph = await fetchGraph(username);

  return (
    <div className="text-white w-full">
      <h1 className="font-modernbold text-5xl max-w-3xl py-5 px-40">Github.</h1>
      <div className="grid grid-cols-8 grid-rows-4 gap-2 w-full h-[500px]  ">
        <LongestStreak
          streak={userStats["Longest Streak"]}
          start={userStats["Longest Streak Start"]}
          end={userStats["Longest Streak End"]}
          classname="col-start-1 col-end-3 row-start-1 row-end-3"
        />
        <CurrentStreak
          streak={userStats["Current Streak"]}
          start={userStats["Current Streak Start"]}
          end={userStats["Current Streak End"]}
          classname="col-start-3 col-end-5 row-start-1 row-end-4"
        />
        <Followers
          followers={userStats.Followers}
          classname="col-start-3 col-end-5 row-start-4 row-end-5"
        />
        <Repos repos={userStats.Repositories} classname="col-start-5 col-end-9 row-start-1 row-end-2" />
        <Commit commits={userStats["Total Contibutions"]} classname="col-start-5 col-end-7 row-start-2 row-end-5" />
        <TotoalContributions total={userStats["Total Contibutions"]} classname="col-start-7 col-end-8 row-start-2 row-end-4" />
        {/* <Followers followers={userStats.Followers} classname="col-start-7 col-end-9 row-start-4 row-end-5" /> */}
        {/* <Followers followers={userStats.Followers}  classname="col-start-8 col-end-9 row-start-2 row-end-4" /> */}
        <Stars
          stars={userStats["Star Earned"]}
          classname="col-start-1 col-end-3 row-start-3 row-end-5"
        />
      </div>
    </div>
  );
};

export default Github;
