/**
 * Names a React Aria component that Midas re-exports as is. Its own name is
 * minified, so without one it shows up as e.g. `$4e85f108e88277b8$export$...`
 * in Storybook's code and React DevTools. Returns the same component, since
 * React Aria compares some of them by identity.
 */
export const withDisplayName = <T extends object>(
  component: T,
  displayName: string,
): T => Object.assign(component, { displayName })
