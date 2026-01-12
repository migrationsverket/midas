export interface ReleaseLocalExecutorSchema {
  registry?: string;
  skipGit?: boolean;
  skipPublish?: boolean;
  runTests?: boolean;
  keepRunning?: boolean;
  skipVerdaccioStart?: boolean;
} // eslint-disable-line
