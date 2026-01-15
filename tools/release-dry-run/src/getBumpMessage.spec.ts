import { describe, expect, it } from 'vitest'
import { getBumpMessage } from './getBumpMessage'
import { Project } from './types'

describe('getBumpMessage', () => {
  describe('when there are affected projects', () => {
    it('should format a single patch bump', () => {
      const projects: Project[] = [
        {
          name: '@midas-ds/button',
          versionData: {
            currentVersion: '1.0.0',
            newVersion: '1.0.1',
            dependentProjects: [],
          },
        },
      ]

      const result = getBumpMessage(projects)

      expect(result).toBe(
        '## NX release report\n:bug: **@midas-ds/button** was `1.0.0` and will be updated to `1.0.1`.',
      )
    })

    it('should format a single minor bump', () => {
      const projects: Project[] = [
        {
          name: '@midas-ds/input',
          versionData: {
            currentVersion: '2.3.0',
            newVersion: '2.4.0',
            dependentProjects: [],
          },
        },
      ]

      const result = getBumpMessage(projects)

      expect(result).toBe(
        '## NX release report\n:sparkles: **@midas-ds/input** was `2.3.0` and will be updated to `2.4.0`.',
      )
    })

    it('should format a single major bump', () => {
      const projects: Project[] = [
        {
          name: '@midas-ds/theme',
          versionData: {
            currentVersion: '1.5.2',
            newVersion: '2.0.0',
            dependentProjects: [],
          },
        },
      ]

      const result = getBumpMessage(projects)

      expect(result).toBe(
        '## NX release report\n:boom: **@midas-ds/theme** was `1.5.2` and will be updated to `2.0.0`.',
      )
    })

    it('should format multiple projects with different bump types', () => {
      const projects: Project[] = [
        {
          name: '@midas-ds/button',
          versionData: {
            currentVersion: '1.0.0',
            newVersion: '1.0.1',
            dependentProjects: [],
          },
        },
        {
          name: '@midas-ds/input',
          versionData: {
            currentVersion: '2.3.0',
            newVersion: '2.4.0',
            dependentProjects: [],
          },
        },
        {
          name: '@midas-ds/theme',
          versionData: {
            currentVersion: '1.5.2',
            newVersion: '2.0.0',
            dependentProjects: [],
          },
        },
      ]

      const result = getBumpMessage(projects)

      expect(result).toContain('## NX release report')
      expect(result).toContain(
        ':bug: **@midas-ds/button** was `1.0.0` and will be updated to `1.0.1`.',
      )
      expect(result).toContain(
        ':sparkles: **@midas-ds/input** was `2.3.0` and will be updated to `2.4.0`.',
      )
      expect(result).toContain(
        ':boom: **@midas-ds/theme** was `1.5.2` and will be updated to `2.0.0`.',
      )
    })

    it('should handle prerelease versions', () => {
      const projects: Project[] = [
        {
          name: '@midas-ds/calendar',
          versionData: {
            currentVersion: '1.0.0',
            newVersion: '1.0.1-beta.0',
            dependentProjects: [],
          },
        },
      ]

      const result = getBumpMessage(projects)

      expect(result).toContain('**@midas-ds/calendar**')
      expect(result).toContain('`1.0.0`')
      expect(result).toContain('`1.0.1-beta.0`')
    })

    it('should handle versions without standard semver diff (no icon)', () => {
      const projects: Project[] = [
        {
          name: '@midas-ds/custom',
          versionData: {
            currentVersion: '1.0.0-alpha.1',
            newVersion: '1.0.0-beta.1',
            dependentProjects: [],
          },
        },
      ]

      const result = getBumpMessage(projects)

      expect(result).toContain('**@midas-ds/custom**')
      expect(result).not.toContain(':bug:')
      expect(result).not.toContain(':sparkles:')
      expect(result).not.toContain(':boom:')
    })
  })

  describe('when there are no affected projects', () => {
    it('should return a message indicating no version bumps', () => {
      const projects: Project[] = []

      const result = getBumpMessage(projects)

      expect(result).toBe(
        '## NX release report\nNo version bumps :disappointed:',
      )
    })
  })

  describe('message format', () => {
    it('should always start with heading', () => {
      const result = getBumpMessage([])

      expect(result).toMatch(/^## NX release report\n/)
    })

    it('should separate projects with newlines', () => {
      const projects: Project[] = [
        {
          name: '@midas-ds/button',
          versionData: {
            currentVersion: '1.0.0',
            newVersion: '1.0.1',
            dependentProjects: [],
          },
        },
        {
          name: '@midas-ds/input',
          versionData: {
            currentVersion: '2.0.0',
            newVersion: '2.1.0',
            dependentProjects: [],
          },
        },
      ]

      const result = getBumpMessage(projects)
      const lines = result.split('\n')

      expect(lines).toHaveLength(3)
      expect(lines[0]).toBe('## NX release report')
      expect(lines[1]).toContain('@midas-ds/button')
      expect(lines[2]).toContain('@midas-ds/input')
    })
  })
})
