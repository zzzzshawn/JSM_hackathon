export interface UserStats {
    Followers: number;
    Repositories: number;
    'Pull Requests': number;
    Issues: number;
    Commits: number;
    'Contributed To': number;
    'Star Earned': number;
  }

  export interface UserData {
    user: {
      followers: { totalCount: number };
      repositoriesWithStargazerCount: {
        totalCount: number;
        nodes: { stargazerCount: number }[];
      };
      pullRequests: { totalCount: number };
      issues: { totalCount: number };
      contributionsCollection: { totalCommitContributions: number };
      repositoriesContributedTo: { totalCount: number };
    };
  }
  
  