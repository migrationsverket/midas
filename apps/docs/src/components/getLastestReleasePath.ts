import fs from 'fs'

export function getLatestReleasePath(folderPath: string): string {
  const files = fs.readdirSync(folderPath)
  const releaseFiles = files.filter(
    file => file.startsWith('release') && file.endsWith('.mdx')
  )

  if (releaseFiles.length === 0) {
    throw new Error('No release files found in the specified folder.')
  }

  const releaseNumbers = releaseFiles.map(file =>
    parseInt(file.replace('release', '').replace('.mdx', ''), 10)
  )

  const latestReleaseNumber = Math.max(...releaseNumbers)

  const latestReleaseFile = `/blog/release-${latestReleaseNumber}`

  return latestReleaseFile
}
