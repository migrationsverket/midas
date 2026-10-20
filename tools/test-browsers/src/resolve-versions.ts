/**
 * Prints the `<browser>@<version>` profiles for the two latest major versions
 * of each desktop browser, as a JSON array for a GitHub Actions matrix:
 *
 *   node tools/test-browsers/src/resolve-versions.ts
 *   [{"profile":"chrome@155","slot":"Chrome latest","version":"155"}, ...]
 *
 * WebdriverIO only downloads the driver for Edge, so Edge targets also have
 * the `.deb` to install first.
 */

interface Target {
  profile: string
  /** Stays the same when the version changes, e.g. for issue titles */
  slot: string
  version: string
  /** A package to install before running, for Edge */
  deb?: string
  /** Run one test file at a time, see `pr-checks.yml` */
  serial?: boolean
}

const getResponse = async (url: string) => {
  const response = await fetch(url)
  if (!response.ok) throw new Error(`${url} answered ${response.status}`)
  return response
}

const getJson = async <T>(url: string): Promise<T> =>
  (await (await getResponse(url)).json()) as T

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
  ].map(target => ({
    ...target,
    profile: `firefox@stable_${target.version}`,
    serial: true,
  }))
}

// Microsoft's apt repository keeps the older builds, take the last one of
// each of the two latest majors
const edgeRepository = 'https://packages.microsoft.com/repos/edge'

const edge = async (): Promise<Target[]> => {
  const index = await (
    await getResponse(
      `${edgeRepository}/dists/stable/main/binary-amd64/Packages`,
    )
  ).text()
  const builds = index
    .split('\n\n')
    .map(entry => ({
      name: entry.match(/^Package: (.+)$/m)?.[1],
      version: entry.match(/^Version: (.+)-\d+$/m)?.[1],
      filename: entry.match(/^Filename: (.+)$/m)?.[1],
    }))
    .filter(
      (build): build is { name: string; version: string; filename: string } =>
        build.name === 'microsoft-edge-stable' &&
        build.version !== undefined &&
        build.filename !== undefined,
    )
    .sort((a, b) => compareVersions(a.version, b.version))

  const latest = builds.at(-1)
  const previous = builds.findLast(
    build => latest && major(build.version) === major(latest.version) - 1,
  )
  if (!latest || !previous) throw new Error('No Edge builds found')

  return [
    { slot: 'Edge latest', build: latest },
    { slot: 'Edge previous', build: previous },
  ].map(({ slot, build }) => ({
    slot,
    version: build.version,
    profile: `edge@${build.version}`,
    deb: `${edgeRepository}/${build.filename}`,
  }))
}

const targets: Target[] = [
  ...(await chrome()),
  ...(await firefox()),
  ...(await edge()),
]

console.log(JSON.stringify(targets))
