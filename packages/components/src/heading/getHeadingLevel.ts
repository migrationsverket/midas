import { Variant, HeadingProps } from './Heading'

/**
 * Get the heading level for a heading variant
 */
export const getHeadingLevel = ({
  component,
  variant = 'h3',
}: Pick<HeadingProps, 'component' | 'variant'>): number => {
  const variants: Record<Variant, number> = {
    h1: 1,
    h2: 2,
    h3: 3,
    h4: 4,
    h5: 5,
  }

  if (component) return variants[component]
  return variants[variant]
}
