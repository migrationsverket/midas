import { Project } from './types'
import { diff } from 'semver'

const getDiffIcon = ({
  versionData: { currentVersion, newVersion },
}: Project) => {
  switch (diff(currentVersion, newVersion)) {
    case 'patch':
      return ':bug:'
    case 'minor':
      return ':sparkles:'
    case 'major':
      return ':boom:'
    default:
      // Prerelease versions (prepatch, preminor, premajor, prerelease) and null get no icon
      return ''
  }
}

const formatAffectedProject = (project: Project) => {
  const icon = getDiffIcon(project)

  const {
    name,
    versionData: { currentVersion, newVersion },
  } = project

  return `${icon} **${name}** was \`${currentVersion}\` and will be updated to \`${newVersion}\`.`
}

export const getBumpMessage = (projects: Project[]) => {
  const heading = '## NX release report'

  const body = projects.length
    ? projects.map(formatAffectedProject).join('\n')
    : 'No version bumps :disappointed:'

  return [heading, body].join('\n')
}
