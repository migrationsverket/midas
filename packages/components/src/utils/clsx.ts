import { type ClassValue, clsx as defaultClsx } from 'clsx'

type RenderProps<T> = T & {
  defaultClassName: string | undefined
}

type ClassNameOrFunction<T> = string | ((values: RenderProps<T>) => string)

export default <T>(...classNames: (ClassNameOrFunction<T> | ClassValue)[]) =>
  (renderProps: RenderProps<T>) =>
    defaultClsx(
      classNames.map(className =>
        typeof className === 'function' ? className(renderProps) : className,
      ),
    )
