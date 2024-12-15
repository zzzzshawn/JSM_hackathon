import { UserData, UserStats } from "@/types";
import { graphQL } from "./graphql";

const userStatsQuery = `
  followers {
    totalCount
  }
  contributionsCollection {
    totalCommitContributions
  }
  repositoriesContributedTo(
    first: 1
    contributionTypes: [COMMIT, ISSUE, PULL_REQUEST, REPOSITORY]
  ) {
    totalCount
  }
  pullRequests(first: 1) {
    totalCount
  }
  issues(first: 1) {
    totalCount
  }
  createdAt
  updatedAt
  repositoriesWithStargazerCount: repositories(
    first: 100
    privacy: PUBLIC
    ownerAffiliations: OWNER
    orderBy: {field: STARGAZERS, direction: DESC}
  ) {
    totalCount
    nodes {
      stargazerCount
    }
  }
`;

const fetchUser = async (
  username: string
): Promise<{ userStats: UserStats }> => {
  const query = `
        query ($username: String!){
            user (login: $username) {
                ${userStatsQuery}
            }
        }
    `;

  const response = await graphQL({ query, variables: { username: username } });

  const data: UserData = response;

  const userStats: UserStats = {
    Followers: data.user.followers.totalCount,
    Repositories: data.user.repositoriesWithStargazerCount.totalCount,
    "Pull Requests": data.user.pullRequests.totalCount,
    Issues: data.user.issues.totalCount,
    Commits: data.user.contributionsCollection.totalCommitContributions,
    "Contributed To": data.user.repositoriesContributedTo.totalCount,
    "Star Earned": 0,
  };

  userStats['Star Earned'] = data.user.repositoriesWithStargazerCount.nodes.reduce(
    (acc, repo) => acc + repo.stargazerCount,
    0
  );
  
  return {
    userStats
  };
};


export default fetchUser;
