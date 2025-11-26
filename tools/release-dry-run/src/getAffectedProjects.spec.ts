import { getAffectedProjects } from './getAffectedProjects'
import { releaseVersion } from 'nx/release'

jest.mock('nx/release', () => ({
  releaseVersion: jest.fn(),
}))

const mockReleaseVersion = releaseVersion as jest.MockedFunction<
  typeof releaseVersion
>

describe('getAffectedProjects', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('should call nx releaseVersion with dryRun: true', async () => {
    mockReleaseVersion.mockResolvedValue({
      projectsVersionData: {},
      workspaceVersion: null,
    } as any)

    await getAffectedProjects()

    expect(mockReleaseVersion).toHaveBeenCalledWith({ dryRun: true })
    expect(mockReleaseVersion).toHaveBeenCalledTimes(1)
  })

  it('should return projects with new versions', async () => {
    mockReleaseVersion.mockResolvedValue({
      projectsVersionData: {
        '@midas-ds/button': {
          currentVersion: '1.0.0',
          newVersion: '1.0.1',
        },
        '@midas-ds/input': {
          currentVersion: '2.3.0',
          newVersion: '2.4.0',
        },
      },
      workspaceVersion: null,
    } as any)

    const result = await getAffectedProjects()

    expect(result).toEqual([
      {
        name: '@midas-ds/button',
        versionData: {
          currentVersion: '1.0.0',
          newVersion: '1.0.1',
        },
      },
      {
        name: '@midas-ds/input',
        versionData: {
          currentVersion: '2.3.0',
          newVersion: '2.4.0',
        },
      },
    ])
  })

  it('should filter out projects without new versions', async () => {
    mockReleaseVersion.mockResolvedValue({
      projectsVersionData: {
        '@midas-ds/button': {
          currentVersion: '1.0.0',
          newVersion: '1.0.1',
        },
        '@midas-ds/unchanged': {
          currentVersion: '2.0.0',
          newVersion: null,
        },
      },
      workspaceVersion: null,
    } as any)

    const result = await getAffectedProjects()

    expect(result).toEqual([
      {
        name: '@midas-ds/button',
        versionData: {
          currentVersion: '1.0.0',
          newVersion: '1.0.1',
        },
      },
    ])
  })

  it('should filter out projects with undefined new versions', async () => {
    mockReleaseVersion.mockResolvedValue({
      projectsVersionData: {
        '@midas-ds/button': {
          currentVersion: '1.0.0',
          newVersion: '1.0.1',
        },
        '@midas-ds/unchanged': {
          currentVersion: '2.0.0',
          newVersion: undefined,
        },
      },
      workspaceVersion: null,
    } as any)

    const result = await getAffectedProjects()

    expect(result).toEqual([
      {
        name: '@midas-ds/button',
        versionData: {
          currentVersion: '1.0.0',
          newVersion: '1.0.1',
        },
      },
    ])
  })

  it('should return empty array when no projects have new versions', async () => {
    mockReleaseVersion.mockResolvedValue({
      projectsVersionData: {
        '@midas-ds/unchanged-1': {
          currentVersion: '1.0.0',
          newVersion: null,
        },
        '@midas-ds/unchanged-2': {
          currentVersion: '2.0.0',
          newVersion: undefined,
        },
      },
      workspaceVersion: null,
    } as any)

    const result = await getAffectedProjects()

    expect(result).toEqual([])
  })

  it('should return empty array when projectsVersionData is empty', async () => {
    mockReleaseVersion.mockResolvedValue({
      projectsVersionData: {},
      workspaceVersion: null,
    } as any)

    const result = await getAffectedProjects()

    expect(result).toEqual([])
  })

  it('should handle errors from nx releaseVersion', async () => {
    const error = new Error('Failed to run nx release')
    mockReleaseVersion.mockRejectedValue(error)

    await expect(getAffectedProjects()).rejects.toThrow(
      'Failed to run nx release'
    )
  })
})
