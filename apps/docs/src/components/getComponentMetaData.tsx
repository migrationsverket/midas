import { Flex, FlexItem, LinkButton } from '@midas-ds/components'
import { BookMarked, BookText } from 'lucide-react'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'

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

  const storybookLink =
    process.env.NODE_ENV === 'development'
      ? `http://localhost:4400/?path=/docs/components-${name.toLowerCase()}--docs`
      : `https://${customFields?.currentBranch}--6810d578d5507438df0f0d22.chromatic.com/?path=/docs/components-${name.toLowerCase()}--docs`

  return (
    <section style={{ marginBottom: 32, marginTop: -20 }}>
      <Flex fluid={true}>
        <FlexItem className='friendlyName'>
          <b>{friendlyName}</b>
        </FlexItem>
        <FlexItem col='auto'>
          <LinkButton
            href={storybookLink}
            variant='tertiary'
            icon={BookMarked}
            iconPlacement='left'
          >
            Storybook
          </LinkButton>
        </FlexItem>
        <FlexItem col='auto'>
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
