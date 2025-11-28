import { setOutput, setFailed } from '@actions/core'
import { getAffectedProjects } from './getAffectedProjects'
import { getBumpMessage } from './getBumpMessage'

jest.mock('@actions/core', () => ({
  setOutput: jest.fn(),
  setFailed: jest.fn(),
}))

jest.mock('./getAffectedProjects', () => ({
  getAffectedProjects: jest.fn(),
}))

jest.mock('./getBumpMessage', () => ({
  getBumpMessage: jest.fn(),
}))

const mockGetAffectedProjects = getAffectedProjects as jest.MockedFunction<
  typeof getAffectedProjects
>
const mockGetBumpMessage = getBumpMessage as jest.MockedFunction<
  typeof getBumpMessage
>
const mockSetOutput = setOutput as jest.MockedFunction<typeof setOutput>
const mockSetFailed = setFailed as jest.MockedFunction<typeof setFailed>

describe('index', () => {
  beforeEach(() => {
    jest.clearAllMocks()
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

    jest.isolateModules(() => {
      require('./index')
    })

    // Wait for async operation
    await new Promise((resolve) => setTimeout(resolve, 10))

    expect(mockGetAffectedProjects).toHaveBeenCalledTimes(1)
    expect(mockGetBumpMessage).toHaveBeenCalledWith(mockProjects)
    expect(mockSetOutput).toHaveBeenCalledWith('message', mockMessage)
    expect(mockSetFailed).not.toHaveBeenCalled()
  })

  it('should call setFailed with error message when getAffectedProjects throws', async () => {
    const error = new Error('Failed to get projects')
    mockGetAffectedProjects.mockRejectedValue(error)

    jest.isolateModules(() => {
      require('./index')
    })

    // Wait for async operation
    await new Promise((resolve) => setTimeout(resolve, 10))

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

    jest.isolateModules(() => {
      require('./index')
    })

    // Wait for async operation
    await new Promise((resolve) => setTimeout(resolve, 10))

    expect(mockSetFailed).toHaveBeenCalledWith('Failed to format message')
    expect(mockSetOutput).not.toHaveBeenCalled()
  })

  it('should handle empty projects list', async () => {
    const mockProjects: any[] = []
    const mockMessage = '## NX release report\nNo version bumps :disappointed:'

    mockGetAffectedProjects.mockResolvedValue(mockProjects)
    mockGetBumpMessage.mockReturnValue(mockMessage)

    jest.isolateModules(() => {
      require('./index')
    })

    // Wait for async operation
    await new Promise((resolve) => setTimeout(resolve, 10))

    expect(mockGetBumpMessage).toHaveBeenCalledWith([])
    expect(mockSetOutput).toHaveBeenCalledWith('message', mockMessage)
    expect(mockSetFailed).not.toHaveBeenCalled()
  })

  it('should handle non-Error objects properly', async () => {
    const errorString = 'Connection timeout'
    mockGetAffectedProjects.mockRejectedValue(errorString)

    jest.isolateModules(() => {
      require('./index')
    })

    await new Promise((resolve) => setTimeout(resolve, 10))

    expect(mockSetFailed).toHaveBeenCalledWith('Connection timeout')
    expect(mockSetOutput).not.toHaveBeenCalled()
  })

  it('should handle plain object errors properly', async () => {
    const errorObj = { code: 'ECONNREFUSED', syscall: 'connect' }
    mockGetAffectedProjects.mockRejectedValue(errorObj)

    jest.isolateModules(() => {
      require('./index')
    })

    await new Promise((resolve) => setTimeout(resolve, 10))

    expect(mockSetFailed).toHaveBeenCalledWith('[object Object]')
    expect(mockSetOutput).not.toHaveBeenCalled()
  })

  it('should handle null errors properly', async () => {
    mockGetAffectedProjects.mockRejectedValue(null)

    jest.isolateModules(() => {
      require('./index')
    })

    await new Promise((resolve) => setTimeout(resolve, 10))

    expect(mockSetFailed).toHaveBeenCalledWith('null')
    expect(mockSetOutput).not.toHaveBeenCalled()
  })
})
