export type MatchT = {
  isExact: boolean;
  path: string;
  url: string;
  params: { [key: string]: string };
};
