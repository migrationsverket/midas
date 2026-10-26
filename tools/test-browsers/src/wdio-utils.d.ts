// @wdio/utils points the types of `./node` at its `src`, which isn't published
declare module '@wdio/utils/node' {
  type Capabilities = { browserName: string; browserVersion?: string }[]
  export const setupBrowser: (
    options: object,
    capabilities: Capabilities,
  ) => Promise<unknown>
  export const setupDriver: (
    options: object,
    capabilities: Capabilities,
  ) => Promise<unknown>
}
