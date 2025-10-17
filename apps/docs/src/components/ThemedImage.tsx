import useBaseUrl from '@docusaurus/useBaseUrl'
/* eslint-disable @nx/enforce-module-boundaries */
import styles from '@site/src/css/index.module.css'

export function ThemedImage({imageSrc, imageSrcDark}) {
  const imgSrc = useBaseUrl(imageSrc)
  const imgSrcDark = useBaseUrl(imageSrcDark)

  return (
    <>
      <img className={`${styles.lightImage}`} src={imgSrc} alt="" />
      <img className={`${styles.darkImage}`} src={imgSrcDark} alt="" />
    </>
  )
}
