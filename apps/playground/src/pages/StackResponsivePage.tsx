import { Heading, Stack, Text, type StackProps } from '@midas-ds/components'
import * as React from 'react'
import styles from './StackResponsivePage.module.css'

// Playground: can consumers make Stack responsive with their own media
// queries? Each example shows the consumer CSS, renders a real Stack and checks
// the computed style against what the consumer wanted at the current width.
// Resize the window across 768px to see both sides.

const DESKTOP_QUERY = '(width >= 768px)'

const useIsDesktop = () => {
  const [isDesktop, setIsDesktop] = React.useState(
    () => window.matchMedia(DESKTOP_QUERY).matches,
  )
  React.useEffect(() => {
    const media = window.matchMedia(DESKTOP_QUERY)
    const onChange = () => setIsDesktop(media.matches)
    media.addEventListener('change', onChange)
    return () => media.removeEventListener('change', onChange)
  }, [])
  return isDesktop
}

const useViewportWidth = () => {
  const [width, setWidth] = React.useState(() => window.innerWidth)
  React.useEffect(() => {
    const onResize = () => setWidth(window.innerWidth)
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])
  return width
}

const Boxes = () =>
  ['Första', 'Andra', 'Tredje'].map(label => (
    <div
      key={label}
      className={styles.box}
    >
      {label}
    </div>
  ))

interface Check {
  property: 'flex-direction' | 'row-gap'
  mobile: string
  desktop: string
}

interface ExampleProps {
  number: number
  title: string
  goal: string
  code: string
  why: string
  check: Check
  stackProps: Omit<StackProps, 'children'>
}

const Example = ({
  number,
  title,
  goal,
  code,
  why,
  check,
  stackProps,
}: ExampleProps) => {
  const ref = React.useRef<HTMLElement>(null)
  const isDesktop = useIsDesktop()
  const width = useViewportWidth()
  const [actual, setActual] = React.useState('')

  // Re-read after every render and resize, so the result follows the window
  React.useLayoutEffect(() => {
    if (ref.current) {
      setActual(getComputedStyle(ref.current).getPropertyValue(check.property))
    }
  }, [width, isDesktop, check.property])

  const expected = isDesktop ? check.desktop : check.mobile
  const works = actual === expected

  return (
    <section
      className={styles.card}
      data-testid={`example-${number}`}
      data-works={works}
    >
      <Stack spacing='small'>
        <Heading level={3}>
          {number}. {title}
        </Heading>
        <Text>
          <strong>Goal:</strong> {goal}
        </Text>
        <pre className={styles.code}>{code}</pre>
        <Stack
          ref={ref}
          {...stackProps}
        >
          <Boxes />
        </Stack>
        <Text>
          {works ? '✅ Works' : '❌ Does not work'} at this width. Wanted{' '}
          <code>
            {check.property}: {expected}
          </code>
          , got{' '}
          <code>
            {check.property}: {actual}
          </code>
          .
        </Text>
        <Text>
          <strong>Why:</strong> {why}
        </Text>
      </Stack>
    </section>
  )
}

const JsExample = () => {
  const isDesktop = useIsDesktop()
  return (
    <Example
      number={6}
      title='Switch the prop in JavaScript'
      goal='Column on mobile, row from 768px, without any CSS.'
      code={`const isDesktop = useMediaQuery('(width >= 768px)')

<Stack direction={isDesktop ? 'row' : 'column'}>`}
      why='Always works, since the Stack just gets a different prop. The cost is JavaScript for layout: it needs a media query hook, re-renders on resize, and with SSR the server has to guess, so the layout can jump on load.'
      check={{ property: 'flex-direction', mobile: 'column', desktop: 'row' }}
      stackProps={{ direction: isDesktop ? 'row' : 'column' }}
    />
  )
}

export const StackResponsivePage = () => {
  const width = useViewportWidth()
  const isDesktop = useIsDesktop()

  return (
    <div className={styles.scroller}>
      <main className={styles.page}>
        <Stack spacing='large'>
          <Stack spacing='small'>
            <Heading level={1}>Stack and media queries</Heading>
            <Text>
              Can a consumer make a Stack responsive with their own CSS? Every
              example passes a class from the app&apos;s CSS module to Stack and
              checks the computed style. Resize the window across 768px.
            </Text>
            <Text>
              Viewport: <strong>{width}px</strong> (
              {isDesktop ? 'desktop, ≥ 768px' : 'mobile, < 768px'})
            </Text>
            <Text>
              The Stack&apos;s CSS is wrapped in <code>@layer midas</code>. CSS
              outside a layer, like the app&apos;s own CSS module, always wins
              over CSS in a layer, whatever the specificity or load order. The
              spacing is a <code>data-spacing</code> attribute instead of an
              inline style, so it can be overridden too. Before the layer, #2
              and #5 failed, and #1 and #4 only worked because of load order.
            </Text>
          </Stack>

          <Example
            number={1}
            title='Default direction, row on desktop'
            goal='Column on mobile, row from 768px.'
            code={`.rowOnDesktop {
  @media (width >= 768px) {
    flex-direction: row;
  }
}

<Stack className={styles.rowOnDesktop}>`}
            why="The Stack's default is in the layer and the app's class isn't, so the class wins. Before the layer this was a specificity tie decided by load order."
            check={{
              property: 'flex-direction',
              mobile: 'column',
              desktop: 'row',
            }}
            stackProps={{ className: styles.rowOnDesktop }}
          />

          <Example
            number={2}
            title="direction='row', column on mobile"
            goal='Row from 768px, column on mobile.'
            code={`.columnOnMobile {
  @media (width < 768px) {
    flex-direction: column;
  }
}

<Stack direction='row' className={styles.columnOnMobile}>`}
            why="The Stack's .stack[data-direction='row'] is (0,2,0) and the class is (0,1,0), but specificity only counts within the same layer, and unlayered CSS wins. Before the layer this failed."
            check={{
              property: 'flex-direction',
              mobile: 'column',
              desktop: 'row',
            }}
            stackProps={{
              direction: 'row',
              className: styles.columnOnMobile,
            }}
          />

          <Example
            number={3}
            title='Same as 2, with bumped specificity'
            goal='Row from 768px, column on mobile.'
            code={`.columnOnMobileBumped.columnOnMobileBumped {
  @media (width < 768px) {
    flex-direction: column;
  }
}

<Stack direction='row' className={styles.columnOnMobileBumped}>`}
            why='Still works, but no longer needed: with the layer, the plain class from #2 is enough.'
            check={{
              property: 'flex-direction',
              mobile: 'column',
              desktop: 'row',
            }}
            stackProps={{
              direction: 'row',
              className: styles.columnOnMobileBumped,
            }}
          />

          <Example
            number={4}
            title='Bigger gap on desktop'
            goal="spacing='small' (8px) on mobile, xlarge (32px) from 768px."
            code={`.gapOnDesktop {
  @media (width >= 768px) {
    gap: var(--midas-space-xlarge);
  }
}

<Stack spacing='small' className={styles.gapOnDesktop}>`}
            why="Same as 1: the Stack's gap rule is in the layer, so the class wins."
            check={{ property: 'row-gap', mobile: '8px', desktop: '32px' }}
            stackProps={{ spacing: 'small', className: styles.gapOnDesktop }}
          />

          <Example
            number={5}
            title='Bigger gap through --midas-stack-spacing'
            goal="spacing='small' (8px) on mobile, xlarge (32px) from 768px."
            code={`.spacingVarOnDesktop {
  @media (width >= 768px) {
    --midas-stack-spacing: var(--midas-space-xlarge);
  }
}

<Stack spacing='small' className={styles.spacingVarOnDesktop}>`}
            why="The spacing is now set by data-spacing rules inside the layer instead of inline, so the app's class can set the variable. Before, an inline style held it and this failed."
            check={{ property: 'row-gap', mobile: '8px', desktop: '32px' }}
            stackProps={{
              spacing: 'small',
              className: styles.spacingVarOnDesktop,
            }}
          />

          <JsExample />

          <Example
            number={7}
            title="Inline style (derp's suggestion), column on mobile"
            goal='Row from 768px, column on mobile.'
            code={`// Stack would render style={{ flexDirection: direction }}
.inlineColumnOnMobile.inlineColumnOnMobile {
  @media (width < 768px) {
    flex-direction: column;
  }
}

<Stack style={{ flexDirection: 'row' }} className={styles.inlineColumnOnMobile}>`}
            why='Simulated by passing the inline style ourselves. An inline style beats every stylesheet, layers included, so the layer cannot help here.'
            check={{
              property: 'flex-direction',
              mobile: 'column',
              desktop: 'row',
            }}
            stackProps={{
              style: { flexDirection: 'row' },
              className: styles.inlineColumnOnMobile,
            }}
          />

          <Example
            number={8}
            title='Inline style with !important'
            goal='Row from 768px, column on mobile.'
            code={`.inlineColumnOnMobileImportant {
  @media (width < 768px) {
    flex-direction: column !important;
  }
}

<Stack style={{ flexDirection: 'row' }} className={styles.inlineColumnOnMobileImportant}>`}
            why='!important is the only way past an inline style from a stylesheet.'
            check={{
              property: 'flex-direction',
              mobile: 'column',
              desktop: 'row',
            }}
            stackProps={{
              style: { flexDirection: 'row' },
              className: styles.inlineColumnOnMobileImportant,
            }}
          />
        </Stack>
      </main>
    </div>
  )
}
