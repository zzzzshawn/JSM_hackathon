import React from "react";
import fetchUser from "@/actions/fetchUser";
import fetchGraph from "@/actions/fetchGraph";
import Followers from "./Github Components/Followers";
import LongestStreak from "./Github Components/LongestStreak";
import Stars from "./Github Components/Stars";
import CurrentStreak from "./Github Components/CurrentStreak";
import Repos from "./Github Components/Repos";
import Commit from "./Github Components/Commits";
import PRs from "./Github Components/PRs";
import Issues from "./Github Components/Issues";
import ContributedTo from "./Github Components/ContributedTo";

const Github = async () => {
  const username = "zzzzshawn";
  const { userStats } = await fetchUser(username);
  console.log(userStats);
  const graph = await fetchGraph(username);

  return (
    <div className="text-white w-full lg:w-[90%] mx-auto flex items-start justify-start flex-col p-3">
      <h1 className="font-modernbold text-5xl max-w-2xl py-5 px-7">Github.</h1>
      <div className="grid grid-cols-4 grid-rows-4   md:grid-cols-8 md:grid-rows-4 gap-2 w-full md:h-[500px]  max-sm:min-h-[100vh]   ">
        <LongestStreak
          streak={userStats["Longest Streak"]}
          start={userStats["Longest Streak Start"]}
          end={userStats["Longest Streak End"]}
          classname="md:col-start-1 md:col-end-3 md:row-start-1 md:row-end-3 col-start-3 col-end-5"
        />
        <CurrentStreak
          streak={userStats["Current Streak"]}
          start={userStats["Current Streak Start"]}
          end={userStats["Current Streak End"]}
          classname="md:col-start-3 md:col-end-5 md:row-start-1 md:row-end-4 col-start-2 col-end-5"
        />
        <Followers
          followers={userStats.Followers}
          classname="md:col-start-3 md:col-end-5 md:row-start-4 md:row-end-5"
        />
        <Repos
          repos={userStats.Repositories}
          classname="md:col-start-5 md:col-end-9 md:row-start-1 md:row-end-2 col-start-1 col-end-4 row-start-3 "
        />
        <Commit
          commits={userStats["Total Contibutions"]}
          classname="md:col-start-5 md:col-end-7 md:row-start-2 md:row-end-5 col-start-4 col-end-5 row-start-3 row-end-5"
        />
        <PRs
          pr={userStats["Pull Requests"]}
          classname="md:col-start-7 md:col-end-8 md:row-start-2 md:row-end-4 col-start-1 col-end-2 row-start-2"
        />
        <ContributedTo
          contros={userStats["Contributed To"]}
          classname="md:col-start-7 md:col-end-9 md:row-start-4 md:row-end-5 row-start-4 row-end-4 col-start-2 col-end-3"
        />
        <Issues
          issues={userStats.Issues}
          classname="md:col-start-8 md:col-end-9 md:row-start-2 md:row-end-4 col-start-1 row-start-4"
        />
        <Stars
          stars={userStats["Star Earned"]}
          classname="md:md:col-start-1 md:col-end-3 md:row-start-3 md:row-end-5 col-start-1 col-end-3 row-start-1"
        />
      </div>
      <div className="max-sm:px-5 mt-2  w-[40rem] mx-auto">
        <h1 className="max-w-2xl mx-auto font-modernbold text-2xl mb-2">
          Contribution Graph:
        </h1>
      </div>
      <div className=" px-5 rounded-2xl w-full mx-auto flex flex-col relative overflow-auto">
        <div className="relative max-w-2xl mx-auto">
          <div
            className=" bg-zinc-800/20 backdrop-blur-2xl border border-zinc-200/10 backdrop-saturate-200 p-3 rounded-2xl mx-auto overflow-auto max-w-2xl"
            dangerouslySetInnerHTML={{
              __html: graph.graph,
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Github;
