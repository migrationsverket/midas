import Heading from '@theme/Heading'
import Layout from '@theme/Layout'
import { LinkButton, ButtonGroup } from '@midas-ds/components'
import styles from '../css/index.module.css'
import Link from '@docusaurus/Link'
import useBaseUrl from '@docusaurus/useBaseUrl'
import CodeBlock from '@theme/CodeBlock'
/* eslint-disable @nx/enforce-module-boundaries */
import { StorybookIcon, EmptyIcon } from '@site/src/components/icons'

export default function Startpage() {
  const baseUrl = useBaseUrl
  const storybookUrl =
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:4400'
      : baseUrl('/storybook')

  return (
    <Layout
      title='Migrationsverkets designsystem'
      description='Midas är Migrationsverkets designsystem för att skapa
                användarvänliga, tillgängliga och enhetliga tjänster och
                produkter. Det innehåller designkomponenter, kod och riktlinjer
                som underlättar utveckling och design.'
    >
      <main className='container container--fullscreen'>
        <div className='row row--no-gutters'>
          <div className='col col--6 textColumn'>
            <div className={styles.text}>
              <Heading
                as='h1'
                className={styles.display1}
              >
                Midas
              </Heading>
              <p>
                Midas är Migrationsverkets designsystem för att skapa
                användarvänliga, tillgängliga och enhetliga tjänster och
                produkter. Det innehåller designkomponenter, kod och riktlinjer
                som underlättar utveckling och design.
              </p>
              <ButtonGroup aria-label='Länkar'>
                <LinkButton
                  as={Link}
                  to='/get-started/install'
                >
                  Kom igång
                </LinkButton>
                <LinkButton
                  variant='secondary'
                  as={Link}
                  to='/components/container/accordion'
                >
                  Komponenter
                </LinkButton>
                <LinkButton
                  variant='tertiary'
                  href={storybookUrl}
                  icon={EmptyIcon as any}
                >
                  <StorybookIcon
                    size={24}
                    color='#FF4785'
                  />
                  Storybook
                </LinkButton>
              </ButtonGroup>
              <CodeBlock className={styles.code}>
                npm install @midas-ds/components
              </CodeBlock>
            </div>
          </div>
          <div className='col col--6'>
            <HeaderImage />
          </div>
        </div>
      </main>
    </Layout>
  )
}

function HeaderImage() {
  const imgSrc = useBaseUrl('/img/HeroImage.png')
  const imgSrcDark = useBaseUrl('/img/HeroImageDark.png')

  return (
    <>
      <img
        className={`${styles.image} ${styles.lightImage}`}
        src={imgSrc}
        alt=''
      />
      <img
        className={`${styles.image} ${styles.darkImage}`}
        src={imgSrcDark}
        alt=''
      />
    </>
  )
}
