/**
 * Matches a file against `acceptedFileTypes` the way the native `accept`
 * attribute does: `.pdf` by extension, `image/*` by MIME type group and
 * `image/png` by exact MIME type.
 */
export const isFileAccepted = (file: File, acceptedFileTypes?: string[]) => {
  if (!acceptedFileTypes?.length) return true

  const name = file.name.toLowerCase()
  const type = file.type.toLowerCase()

  return acceptedFileTypes.some(accepted => {
    const pattern = accepted.trim().toLowerCase()
    if (pattern.startsWith('.')) return name.endsWith(pattern)
    if (pattern.endsWith('/*')) return type.startsWith(pattern.slice(0, -1))
    return type === pattern
  })
}

/** Two selections of the same file on disk count as one */
export const isSameFile = (a: File, b: File) =>
  a.name === b.name && a.size === b.size && a.lastModified === b.lastModified

const UNITS = ['byte', 'kilobyte', 'megabyte', 'gigabyte'] as const

export const formatFileSize = (bytes: number, locale: string) => {
  let size = bytes
  let unit = 0
  while (size >= 1000 && unit < UNITS.length - 1) {
    size /= 1000
    unit++
  }

  return new Intl.NumberFormat(locale, {
    style: 'unit',
    unit: UNITS[unit],
    unitDisplay: 'short',
    maximumFractionDigits: unit === 0 ? 0 : 1,
  }).format(size)
}
