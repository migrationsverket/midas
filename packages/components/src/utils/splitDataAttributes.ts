/**
 * Splits `data-*` attributes (e.g. `data-testid`) off a component's props.
 *
 * For components that render a field wrapper around the element the user
 * interacts with, like Radio and Checkbox: the data attributes belong on the
 * interactive element, so tests that click by test id hit the label rather
 * than the wrapper.
 */
export function splitDataAttributes<T extends object>(props: T) {
  const dataAttributes: Record<`data-${string}`, unknown> = {}
  const rest: Record<string, unknown> = {}
  for (const [key, value] of Object.entries(props)) {
    if (key.startsWith('data-')) {
      dataAttributes[key as `data-${string}`] = value
    } else {
      rest[key] = value
    }
  }
  return [dataAttributes, rest as T] as const
}
