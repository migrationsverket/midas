import { Flex, FlexItem, LinkButton } from '@midas-ds/components'
import useBaseUrl from '@docusaurus/useBaseUrl'
import { BookMarked, BookText } from 'lucide-react'

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
  const baseUrl = useBaseUrl
  const storybookLink =
    process.env.NODE_ENV === 'development'
      ? `http://localhost:4400/?path=/docs/components-${name.toLowerCase()}--docs`
      : baseUrl(`/storybook/?path=/docs/components-${name.toLowerCase()}--docs`)

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
