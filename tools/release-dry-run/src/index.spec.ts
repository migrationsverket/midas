import { beforeEach, describe, expect, it, vi } from 'vitest'
import { index } from '.'

const mockSetOutput = vi.hoisted(() => vi.fn())
const mockSetFailed = vi.hoisted(() => vi.fn())
const mockGetAffectedProjects = vi.hoisted(() => vi.fn())
const mockGetBumpMessage = vi.hoisted(() => vi.fn())

vi.mock('@actions/core', () => ({
  setOutput: mockSetOutput,
  setFailed: mockSetFailed,
}))

vi.mock('./getAffectedProjects', () => ({
  getAffectedProjects: mockGetAffectedProjects,
}))

vi.mock('./getBumpMessage', () => ({
  getBumpMessage: mockGetBumpMessage,
}))

describe('index', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('should call getAffectedProjects and getBumpMessage, then set output', async () => {
    const mockProjects = [
      {
        name: '@midas-ds/button',
        versionData: {
          currentVersion: '1.0.0',
          newVersion: '1.0.1',
          dependentProjects: [],
        },
      },
    ]
    const mockMessage =
      '## NX release report\n:bug: **@midas-ds/button** was `1.0.0` and will be updated to `1.0.1`.'

    mockGetAffectedProjects.mockResolvedValue(mockProjects)
    mockGetBumpMessage.mockReturnValue(mockMessage)

    index()

    // Wait for async operation
    await new Promise(resolve => setTimeout(resolve, 10))

    expect(mockGetAffectedProjects).toHaveBeenCalledTimes(1)
    expect(mockGetBumpMessage).toHaveBeenCalledWith(mockProjects)
    expect(mockSetOutput).toHaveBeenCalledWith('message', mockMessage)
    expect(mockSetFailed).not.toHaveBeenCalled()
  })

  it('should call setFailed with error message when getAffectedProjects throws', async () => {
    const error = new Error('Failed to get projects')
    mockGetAffectedProjects.mockRejectedValue(error)

    index()

    // Wait for async operation
    await new Promise(resolve => setTimeout(resolve, 10))

    expect(mockSetFailed).toHaveBeenCalledWith('Failed to get projects')
    expect(mockSetOutput).not.toHaveBeenCalled()
  })

  it('should call setFailed with error message when getBumpMessage throws', async () => {
    const mockProjects = [
      {
        name: '@midas-ds/button',
        versionData: {
          currentVersion: '1.0.0',
          newVersion: '1.0.1',
          dependentProjects: [],
        },
      },
    ]
    const error = new Error('Failed to format message')

    mockGetAffectedProjects.mockResolvedValue(mockProjects)
    mockGetBumpMessage.mockImplementation(() => {
      throw error
    })

    index()

    // Wait for async operation
    await new Promise(resolve => setTimeout(resolve, 10))

    expect(mockSetFailed).toHaveBeenCalledWith('Failed to format message')
    expect(mockSetOutput).not.toHaveBeenCalled()
  })

  it('should handle empty projects list', async () => {
    const mockProjects = []
    const mockMessage = '## NX release report\nNo version bumps :disappointed:'

    mockGetAffectedProjects.mockResolvedValue(mockProjects)
    mockGetBumpMessage.mockReturnValue(mockMessage)

    index()

    // Wait for async operation
    await new Promise(resolve => setTimeout(resolve, 10))

    expect(mockGetBumpMessage).toHaveBeenCalledWith([])
    expect(mockSetOutput).toHaveBeenCalledWith('message', mockMessage)
    expect(mockSetFailed).not.toHaveBeenCalled()
  })

  it('should handle non-Error objects properly', async () => {
    const errorString = 'Connection timeout'
    mockGetAffectedProjects.mockRejectedValue(errorString)

    index()

    await new Promise(resolve => setTimeout(resolve, 10))

    expect(mockSetFailed).toHaveBeenCalledWith('Connection timeout')
    expect(mockSetOutput).not.toHaveBeenCalled()
  })

  it('should handle plain object errors properly', async () => {
    const errorObj = { code: 'ECONNREFUSED', syscall: 'connect' }
    mockGetAffectedProjects.mockRejectedValue(errorObj)

    index()

    await new Promise(resolve => setTimeout(resolve, 10))

    expect(mockSetFailed).toHaveBeenCalledWith('[object Object]')
    expect(mockSetOutput).not.toHaveBeenCalled()
  })

  it('should handle null errors properly', async () => {
    mockGetAffectedProjects.mockRejectedValue(null)

    index()

    await new Promise(resolve => setTimeout(resolve, 10))

    expect(mockSetFailed).toHaveBeenCalledWith('null')
    expect(mockSetOutput).not.toHaveBeenCalled()
  })
})
