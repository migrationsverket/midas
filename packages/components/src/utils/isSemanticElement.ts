/**
 * A utility function for typography components:
 * ```
 * <Heading>
 * ```
 * and
 *
 * ```
 * <Text>
 * ```
 * @param element
 * The element variant to test against
 */
export const isSemanticElement = <T>({
  component,
  element,
  variant,
}: {
  component?: T
  element: T
  variant?: T
}) => component === element || (!component && variant === element)
