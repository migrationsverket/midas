import { Grid, GridItem, LinkButton } from '@midas-ds/components'
import { BookText } from 'lucide-react'
import { StorybookIcon, EmptyIcon } from '@site/src/components/icons'
import useBaseUrl from '@docusaurus/useBaseUrl'

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
  const componentPath = `?path=/docs/components-${name.toLowerCase()}--docs`
  const storybookHost =
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:4400'
      : baseUrl('/storybook')
  const storybookLink = `${storybookHost}/${componentPath}`

  return (
    <section className='component-header'>
      <Grid>
        <GridItem
          size='auto'
          className='friendlyName'
        >
          <b>{friendlyName}</b>
        </GridItem>
        <GridItem
          size='auto'
          className='headerLink'
        >
          <LinkButton
            href={storybookLink}
            variant='tertiary'
            icon={EmptyIcon as any}
          >
            <StorybookIcon
              size={24}
              color={'#FF4785'}
            />
            Storybook
          </LinkButton>
        </GridItem>
        <GridItem
          size='auto'
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
        </GridItem>
      </Grid>
    </section>
  )
}
