import React from 'react'
import Layout from '@theme/Layout'
import {
  LinkButton,
  ButtonGroup,
  GlobalToastRegion,
  toastQueue,
} from '@midas-ds/components'
import styles from '../css/index.module.css'
import Link from '@docusaurus/Link'
import useBaseUrl from '@docusaurus/useBaseUrl'
import CodeBlock from '@theme/CodeBlock'
import BrowserOnly from '@docusaurus/BrowserOnly'
import { useColorMode } from '@docusaurus/theme-common'

export default function Startpage() {
  return (
    <Layout
      title='Migrationsverkets designsystem'
      description='Midas är Migrationsverkets designsystem för att skapa
                användarvänliga, tillgängliga och enhetliga tjänster och
                produkter. Det innehåller designkomponenter, kod och riktlinjer
                som underlättar utveckling och design.'
    >
      <div className='container container--fullscreen'>
        <div className='row row--no-gutters'>
          <div className='col col--6 textColumn'>
            <div className={styles.text}>
              <h1 className={styles.display1}>Midas</h1>
              <p>
                Midas är Migrationsverkets designsystem för att skapa
                användarvänliga, tillgängliga och enhetliga tjänster och
                produkter. Det innehåller designkomponenter, kod och riktlinjer
                som underlättar utveckling och design.
              </p>
              <ButtonGroup aria-label='Länkar'>
                <LinkButton
                  as={Link}
                  to='/get-started/use'
                >
                  Kom igång
                </LinkButton>
                <LinkButton
                  variant='secondary'
                  as={Link}
                  to='/components/accordion'
                >
                  Komponenter
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
          <AprilFools />
        </div>
      </div>
    </Layout>
  )
}

function HeaderImage() {
  const imgSrc = useBaseUrl('/img/HeroImage.png')
  const imgSrcDark = useBaseUrl('/img/HeroImageDark.png')
  const { colorMode } = useColorMode()

  return (
    <BrowserOnly>
      {() => (
        <img
          className={styles.image}
          src={colorMode === 'light' ? imgSrc : imgSrcDark}
          alt=''
        />
      )}
    </BrowserOnly>
  )
}

function AprilFools() {
  React.useEffect(() => {
    document.body.style.transform = 'rotateY(180deg)'

    const timer = setTimeout(() => {
      document.body.style.transition = 'transform 0.3s'
      document.body.style.transform = ''
    }, 3000)

    const toastTimer = setTimeout(() => {
      toastQueue.add(
        { message: 'April, april!', type: 'success' },
        { timeout: 10000 },
      )
    }, 3500)

    return () => {
      document.body.style.transform = ''
      clearTimeout(timer)
      clearTimeout(toastTimer)
    }
  }, [])

  return <BrowserOnly>{() => <GlobalToastRegion />}</BrowserOnly>
}
