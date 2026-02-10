import { releaseVersion } from 'nx/release/index.js'

export const getAffectedProjects = async () => {
  const { projectsVersionData } = await releaseVersion({ dryRun: true })

  return Object.entries(projectsVersionData)
    .map(([name, versionData]) => ({
      name,
      versionData,
    }))
    .filter(({ versionData }) => Boolean(versionData.newVersion))
}
