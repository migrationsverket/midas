// https://www.chromatic.com/docs/permalinks/#branches-that-contain-special-characters-or-are-too-long
export const getBranchUrl = (branchName?: string) =>
  branchName
    ?.replace(/-{2,}/g, '-')
    .replace(/[/_]/g, '-')
    .slice(0, 37)
    .toLocaleLowerCase()
