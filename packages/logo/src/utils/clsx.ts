import { type ClassValue, clsx as cx } from 'clsx'

type RenderProps<T> = T & {
  defaultClassName: string | undefined
}

type ClassNameOrFunction<T> = string | ((values: RenderProps<T>) => string)

export function clsx(...classNames: ClassValue[]): string

export function clsx<T>(
  ...classNames: (ClassNameOrFunction<T> | ClassValue)[]
): (renderProps: RenderProps<T>) => string

/**
 * A wrapper around `clsx` for working with the `ClassNameOrFunction` type used by RAC
 */
export function clsx<T>(
  ...classNames: (ClassNameOrFunction<T> | ClassValue)[]
): string | ((renderProps: RenderProps<T>) => string) {
  if (classNames.some(className => typeof className === 'function')) {
    return (renderProps: RenderProps<T>) =>
      cx(
        classNames.map(className =>
          typeof className === 'function' ? className(renderProps) : className,
        ),
      )
  }
  return cx(classNames)
}

export default clsx
