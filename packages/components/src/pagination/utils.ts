/**
 * Get the current page of an index, given a page size
 */
export const findPage = (index: number, pageSize: number) =>
  index >= pageSize ? Math.floor(index / pageSize) : 0
