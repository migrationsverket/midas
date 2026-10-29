import { describe, expect, it } from 'vitest'
import { formatFileSize, isFileAccepted, isSameFile } from './utils'

const file = (name: string, type = '', lastModified = 0) =>
  new File(['🍎'], name, { type, lastModified })

describe('isFileAccepted', () => {
  it('should accept every file without acceptedFileTypes', () => {
    expect(isFileAccepted(file('a.gif'))).toBe(true)
    expect(isFileAccepted(file('a.gif'), [])).toBe(true)
  })

  it('should match extensions regardless of case', () => {
    expect(isFileAccepted(file('a.PDF'), ['.pdf'])).toBe(true)
    expect(isFileAccepted(file('a.pdf.exe'), ['.pdf'])).toBe(false)
  })

  it('should match exact MIME types and groups', () => {
    expect(isFileAccepted(file('a', 'image/png'), ['image/png'])).toBe(true)
    expect(isFileAccepted(file('a', 'image/gif'), ['image/png'])).toBe(false)
    expect(isFileAccepted(file('a', 'image/gif'), ['image/*'])).toBe(true)
    expect(isFileAccepted(file('a', 'video/mp4'), ['image/*'])).toBe(false)
  })
})

describe('isSameFile', () => {
  it('should treat a file selected twice as the same file', () => {
    expect(isSameFile(file('a.png', '', 1), file('a.png', '', 1))).toBe(true)
  })

  it('should tell apart files with the same name', () => {
    expect(isSameFile(file('a.png', '', 1), file('a.png', '', 2))).toBe(false)
  })
})

describe('formatFileSize', () => {
  it('should pick a unit and format it for the locale', () => {
    expect(formatFileSize(512, 'en-US')).toBe('512 byte')
    expect(formatFileSize(1_500, 'en-US')).toBe('1.5 kB')
    expect(formatFileSize(2_340_000, 'sv-SE')).toBe('2,3 MB')
  })
})
