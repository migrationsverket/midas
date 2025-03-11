import { Variant, HeadingProps } from './Heading'

/**
 * A utility function for typography component:
 * ```
 * <Heading>
 * ```
 * @param element
 * The element variant to test against
 */
export const isSemanticElement = ({
  component,
  element,
  variant,
}: Pick<HeadingProps, 'component' | 'variant'> & { element: Variant }) =>
  component === element || (!component && variant === element)
