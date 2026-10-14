/**
 * Prints the `<browser>@<version>` profiles for the two latest major versions
 * of each desktop browser, as a JSON array for a GitHub Actions matrix:
 *
 *   node tools/test-browsers/src/resolve-versions.ts
 *   [{"profile":"chrome@155","slot":"Chrome latest","version":"155"}, ...]
 *
 * Edge isn't downloaded like the others, so it's only the installed version.
 */

interface Target {
  profile: string
  /** Stays the same when the version changes, e.g. for issue titles */
  slot: string
  version: string
}

const getJson = async <T>(url: string): Promise<T> => {
  const response = await fetch(url)
  if (!response.ok) throw new Error(`${url} answered ${response.status}`)
  return (await response.json()) as T
}

const major = (version: string) => Number(version.split('.')[0])

const compareVersions = (a: string, b: string) => {
  const [as, bs] = [a, b].map(version => version.split('.').map(Number))
  for (let i = 0; i < Math.max(as.length, bs.length); i++) {
    const difference = (as[i] ?? 0) - (bs[i] ?? 0)
    if (difference !== 0) return difference
  }
  return 0
}

// Chrome for Testing resolves a milestone to its latest build
const chrome = async (): Promise<Target[]> => {
  const { channels } = await getJson<{
    channels: { Stable: { version: string } }
  }>(
    'https://googlechromelabs.github.io/chrome-for-testing/last-known-good-versions.json',
  )
  const latest = major(channels.Stable.version)
  return [
    { slot: 'Chrome latest', version: `${latest}` },
    { slot: 'Chrome previous', version: `${latest - 1}` },
  ].map(target => ({ ...target, profile: `chrome@${target.version}` }))
}

// Firefox needs an exact release, so take the last one of each major
const firefox = async (): Promise<Target[]> => {
  const [{ LATEST_FIREFOX_VERSION: latest }, majors, patches] =
    await Promise.all([
      getJson<{ LATEST_FIREFOX_VERSION: string }>(
        'https://product-details.mozilla.org/1.0/firefox_versions.json',
      ),
      getJson<Record<string, string>>(
        'https://product-details.mozilla.org/1.0/firefox_history_major_releases.json',
      ),
      getJson<Record<string, string>>(
        'https://product-details.mozilla.org/1.0/firefox_history_stability_releases.json',
      ),
    ])
  const previousMajor = major(latest) - 1
  const previous = [...Object.keys(majors), ...Object.keys(patches)]
    .filter(version => major(version) === previousMajor)
    .sort(compareVersions)
    .at(-1)
  if (!previous) throw new Error(`No Firefox ${previousMajor} release found`)

  return [
    { slot: 'Firefox latest', version: latest },
    { slot: 'Firefox previous', version: previous },
  ].map(target => ({ ...target, profile: `firefox@stable_${target.version}` }))
}

const targets: Target[] = [
  ...(await chrome()),
  ...(await firefox()),
  { profile: 'edge@stable', slot: 'Edge latest', version: 'installed' },
]

console.log(JSON.stringify(targets))
