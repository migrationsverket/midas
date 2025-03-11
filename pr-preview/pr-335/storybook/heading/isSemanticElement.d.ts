import { Variant, HeadingProps } from './Heading';
/**
 * A utility function for typography component:
 * ```
 * <Heading>
 * ```
 * @param element
 * The element variant to test against
 */
export declare const isSemanticElement: ({ component, element, variant, }: Pick<HeadingProps, "component" | "variant"> & {
    element: Variant;
}) => boolean;
