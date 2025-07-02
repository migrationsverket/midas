import Heading from '@theme/Heading'
import Layout from '@theme/Layout'
import { LinkButton, ButtonGroup } from '@midas-ds/components'
import styles from '../css/index.module.css'
import Link from '@docusaurus/Link'
import useBaseUrl from '@docusaurus/useBaseUrl'
import CodeBlock from '@theme/CodeBlock'

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
        </div>
      </div>
    </Layout>
  )
}

function HeaderImage() {
  const imgSrc = useBaseUrl('/img/HeroImage.png')
  const imgSrcDark = useBaseUrl('/img/HeroImageDark.png')

  return (
    <>
      <img className={`${styles.image} ${styles.lightImage}`} src={imgSrc} alt="" />
      <img className={`${styles.image} ${styles.darkImage}`} src={imgSrcDark} alt="" />
    </>
  )
}