import { Flex, FlexItem, LinkButton } from '@midas-ds/components'
import { BookMarked, BookText } from 'lucide-react'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
const CHROMATIC_APP_ID = '6810d578d5507438df0f0d22' // move

export const ComponentHeader = ({
  name,
  friendlyName,
  overrideHeadlessLink,
  overrideHeadlessLinkTitle,
}: {
  name: string
  friendlyName: string
  overrideHeadlessLink?: string
  overrideHeadlessLinkTitle?: string
}) => {
  const {
    siteConfig: { customFields },
  } = useDocusaurusContext()

  const componentPath = `?path=/docs/components-${name.toLowerCase()}--docs`
  const storybookHost =
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:4400'
      : customFields?.currentChromaticBranchUrl
        ? `https://${customFields?.currentChromaticBranchUrl}--${CHROMATIC_APP_ID}.chromatic.com`
        : `https://main--${CHROMATIC_APP_ID}.chromatic.com`

  const storybookLink = `${storybookHost}/${componentPath}`

  return (
    <section className='component-header'>
      <Flex fluid={true}>
        <FlexItem
          col='auto'
          className='friendlyName'
        >
          <b>{friendlyName}</b>
        </FlexItem>
        <FlexItem
          col='auto'
          className='headerLink'
        >
          <LinkButton
            href={storybookLink}
            variant='tertiary'
            icon={BookMarked}
            iconPlacement='left'
          >
            Storybook
          </LinkButton>
        </FlexItem>
        <FlexItem
          col='auto'
          className='headerLink'
        >
          {overrideHeadlessLink !== '' && (
            <LinkButton
              href={
                overrideHeadlessLink
                  ? overrideHeadlessLink
                  : `https://react-spectrum.adobe.com/react-aria/${name}.html`
              }
              target='_blank'
              variant='tertiary'
              icon={BookText}
              iconPlacement='left'
            >
              {overrideHeadlessLinkTitle
                ? overrideHeadlessLinkTitle
                : 'React Aria'}
            </LinkButton>
          )}
        </FlexItem>
      </Flex>
    </section>
  )
}
