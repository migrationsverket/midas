import React from 'react'
import { Flex, FlexItem } from '@midas-ds/flex'
import useBaseUrl from '@docusaurus/useBaseUrl'
import { kebabCase } from 'lodash'
import { LinkButton } from '@midas-ds/link-button'
import { BookMarked, BookText, FileCode } from 'lucide-react'

export const ComponentHeader = ({
  name,
  friendlyName,
  overrideHeadlessLink,
  overrideHeadlessLinkTitle
}: {
  name: string
  friendlyName: string
  overrideHeadlessLink?: string
  overrideHeadlessLinkTitle?: string
}) => {
  const storybookLink =
    process.env.NODE_ENV === 'development'
      ? `http://localhost:4400/?path=/docs/components-${name.toLowerCase()}--docs`
      : useBaseUrl(
          `/storybook/?path=/docs/components-${name.toLowerCase()}--docs`
        )

  return (
    <section style={{ marginBottom: 32, marginTop: -20 }}>
      <Flex fluid={true}>
        <FlexItem className='friendlyName'>
          <b>{friendlyName}</b>
        </FlexItem>
        <FlexItem col='auto'>
          <LinkButton
            href={`https://github.com/migrationsverket/midas/tree/main/packages/${kebabCase(name)}/CHANGELOG.md`}
            target='_blank'
            variant='tertiary'
            icon={FileCode}
            iconPlacement='left'
          >
            Versionslogg
          </LinkButton>
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
