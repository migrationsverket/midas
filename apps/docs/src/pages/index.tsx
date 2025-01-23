import React from 'react'
import Layout from '@theme/Layout'
import { LinkButton } from '@midas-ds/link-button'
import { ButtonGroup } from '@midas-ds/button'
import styles from './index.module.css'
import Link from '@docusaurus/Link'
import useBaseUrl from '@docusaurus/useBaseUrl'

export default function Hello() {
  const imgSrc = useBaseUrl('/img/HeroImage.png')

  return (
    <Layout
      title='Migrationsverkets designsystem'
      description='Hello React Page'
    >
      <div className='container container--fullscreen'>
        <div className='row row--no-gutters'>
          <div className='col col--6 textColumn'>
            <div className={styles.text}>
              <h1 className={styles.display1}>Midas</h1>
              <p>
                Midas är Migrationsverkets designsystem för att skapa
                användarvänliga, tillgängliga och enhetliga e-tjänster och
                interna produkter. Det innehåller designkomponenter, kod och
                riktlinjer som underlättar utveckling och design.
              </p>
              <ButtonGroup aria-label='Länkar'>
                <LinkButton
                  as={Link}
                  to='/get-started'
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
            </div>
          </div>
          <div className='col col--6'>
            <img
              className={styles.image}
              src={imgSrc}
              alt=''
            />
          </div>
        </div>
      </div>
    </Layout>
  )
}
