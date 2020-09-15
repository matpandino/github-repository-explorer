export default interface Repository {
  id: string;
  name: string;
  full_name: string;
  html_url: string;
  description: string;
  stargazers_count: string;
  created_at: string;
  language: string;
  open_issues_count: string;
  forks_count: string;
  owner: {
    id: string;
    login: string;
    avatar_url: string;
  };
}
