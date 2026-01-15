import { afterEach, describe, expect, it, vi } from 'vitest'
import { getAffectedProjects } from './getAffectedProjects'

const mockReleaseVersion = vi.hoisted(() => vi.fn())

vi.mock('nx/release', () => ({
  releaseVersion: mockReleaseVersion,
}))

describe('getAffectedProjects', () => {
  afterEach(() => {
    vi.clearAllMocks()
  })

  it('should call nx releaseVersion with dryRun: true', async () => {
    mockReleaseVersion.mockResolvedValue({
      projectsVersionData: {},
      workspaceVersion: null,
    })

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
    })

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
    })

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
    })

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
    })

    const result = await getAffectedProjects()

    expect(result).toEqual([])
  })

  it('should return empty array when projectsVersionData is empty', async () => {
    mockReleaseVersion.mockResolvedValue({
      projectsVersionData: {},
      workspaceVersion: null,
    })

    const result = await getAffectedProjects()

    expect(result).toEqual([])
  })

  it('should handle errors from nx releaseVersion', async () => {
    const error = new Error('Failed to run nx release')
    mockReleaseVersion.mockRejectedValue(error)

    await expect(getAffectedProjects()).rejects.toThrow(
      'Failed to run nx release',
    )
  })
})
