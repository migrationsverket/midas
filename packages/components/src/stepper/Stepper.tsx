'use client'

import {
  createContext,
  useContext,
  type ForwardedRef,
  type HTMLAttributes,
  type ReactNode,
} from 'react'
import {
  Collection,
  CollectionBuilder,
  CollectionRendererContext,
  createLeafComponent,
  type CollectionProps,
} from 'react-aria-components'
import { VisuallyHidden } from 'react-aria'
import { Check } from 'lucide-react'
import type { Key } from '../aria'
import { Link } from '../link'
import clsx from '../utils/clsx'
import { useLocalizedStringFormatter } from '../utils/intl'
import messages from './intl/translations.json'
import styles from './Stepper.module.css'

export type StepStatus = 'completed' | 'current' | 'upcoming'

export interface StepperProps<T>
  extends CollectionProps<T>, Omit<HTMLAttributes<HTMLElement>, 'children'> {
  /** The id of the step the user is on */
  currentStep: Key
}

export interface StepProps {
  /** Identifies the step, so the current step stays put when steps are added or removed */
  id: Key
  /** The step's label */
  children: ReactNode
  /** Where the step lives. Only completed steps become links, so pass it on every step */
  href?: string
  /** Text for screen readers when the label is not plain text */
  textValue?: string
}

const StepperContext = createContext<{ currentIndex: number } | null>(null)

/** Shows where the user is in a process of several steps. It only shows the steps: the app decides which steps apply, which one is current and how to move between them. */
export const Stepper = <T extends object>({
  currentStep,
  items,
  children,
  dependencies,
  className,
  ...rest
}: StepperProps<T>) => {
  const strings = useLocalizedStringFormatter(messages)
  const { CollectionRoot } = useContext(CollectionRendererContext)

  return (
    <CollectionBuilder
      content={
        <Collection
          items={items}
          dependencies={dependencies}
        >
          {children}
        </Collection>
      }
    >
      {collection => {
        const current = collection.getItem(currentStep)
        const currentIndex = current?.index ?? -1

        return (
          <nav
            aria-label={strings.format('steps')}
            className={clsx(styles.stepper, className)}
            {...rest}
          >
            {current && (
              <p
                aria-hidden='true'
                className={styles.summary}
              >
                <span>
                  {strings
                    .format('stepOf')
                    .replace('{current}', String(currentIndex + 1))
                    .replace('{total}', String(collection.size))}
                </span>
                <span className={styles.summaryLabel}>{current.rendered}</span>
              </p>
            )}
            <ol className={styles.list}>
              <StepperContext.Provider value={{ currentIndex }}>
                <CollectionRoot collection={collection} />
              </StepperContext.Provider>
            </ol>
          </nav>
        )
      }}
    </CollectionBuilder>
  )
}

/** One step in a Stepper */
type StepNode = { index: number; rendered: ReactNode }

export const Step = createLeafComponent(
  'item',
  function Step(
    { href }: StepProps,
    ref: ForwardedRef<HTMLLIElement>,
    node: StepNode,
  ) {
    const strings = useLocalizedStringFormatter(messages)
    const { currentIndex } = useContext(StepperContext) ?? { currentIndex: -1 }
    const status: StepStatus =
      node.index < currentIndex
        ? 'completed'
        : node.index === currentIndex
          ? 'current'
          : 'upcoming'

    return (
      <li
        ref={ref}
        className={styles.step}
        data-status={status}
        aria-current={status === 'current' ? 'step' : undefined}
      >
        <span
          aria-hidden='true'
          className={styles.marker}
        >
          {status === 'completed' ? <Check size={16} /> : node.index + 1}
        </span>
        <span className={styles.label}>
          {status === 'completed' && href ? (
            <Link href={href}>{node.rendered}</Link>
          ) : (
            node.rendered
          )}
          {status === 'completed' && (
            <VisuallyHidden>, {strings.format('completed')}</VisuallyHidden>
          )}
        </span>
      </li>
    )
  },
)
