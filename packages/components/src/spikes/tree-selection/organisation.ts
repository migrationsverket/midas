import type { CaseTypeNode } from './data'

/**
 * A larger dummy organisation: 15 regioner, each with 10 to 15 enheter, each
 * with 8 to 10 avdelningar (about 1,700 in total). Generated with a fixed
 * seed so it's the same on every load. The avdelning names repeat under every
 * enhet, like in a real organisation, so a search for one name gives many hits
 * that only the path tells apart.
 */

// mulberry32: a tiny seeded PRNG, so the data never changes between runs
const createRandom = (seed: number) => () => {
  seed |= 0
  seed = (seed + 0x6d2b79f5) | 0
  let t = Math.imul(seed ^ (seed >>> 15), 1 | seed)
  t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
  return ((t ^ (t >>> 14)) >>> 0) / 4294967296
}

const random = createRandom(1337)
const between = (min: number, max: number) =>
  min + Math.floor(random() * (max - min + 1))

const regions: { name: string; cities: string[] }[] = [
  { name: 'Norrbotten', cities: ['Luleå', 'Kiruna', 'Boden', 'Piteå'] },
  { name: 'Västerbotten', cities: ['Umeå', 'Skellefteå', 'Lycksele'] },
  { name: 'Jämtland', cities: ['Östersund', 'Åre', 'Strömsund'] },
  {
    name: 'Västernorrland',
    cities: ['Sundsvall', 'Härnösand', 'Örnsköldsvik'],
  },
  { name: 'Gävleborg', cities: ['Gävle', 'Hudiksvall', 'Sandviken'] },
  { name: 'Dalarna', cities: ['Falun', 'Borlänge', 'Mora'] },
  { name: 'Uppsala', cities: ['Uppsala', 'Enköping', 'Tierp'] },
  { name: 'Stockholm', cities: ['Stockholm', 'Solna', 'Södertälje', 'Kista'] },
  { name: 'Västmanland', cities: ['Västerås', 'Köping', 'Sala'] },
  { name: 'Örebro', cities: ['Örebro', 'Karlskoga', 'Lindesberg'] },
  { name: 'Östergötland', cities: ['Linköping', 'Norrköping', 'Motala'] },
  { name: 'Jönköping', cities: ['Jönköping', 'Värnamo', 'Nässjö'] },
  { name: 'Kalmar', cities: ['Kalmar', 'Västervik', 'Oskarshamn'] },
  { name: 'Västra Götaland', cities: ['Göteborg', 'Borås', 'Trollhättan'] },
  { name: 'Skåne', cities: ['Malmö', 'Helsingborg', 'Lund', 'Kristianstad'] },
]

const unitTypes = [
  'Mottagningsenhet',
  'Prövningsenhet',
  'Asylprövningsenhet',
  'Tillståndsenhet',
  'Arbetstillståndsenhet',
  'Familjeenhet',
  'Studieenhet',
  'Medborgarskapsenhet',
  'Förvarsenhet',
  'Återvändandeenhet',
  'Serviceenhet',
  'Utredningsenhet',
  'Dokumentationsenhet',
  'Ekonomienhet',
  'Kvalitetsenhet',
]

const departments = [
  'Handläggning',
  'Beslut',
  'Registrering',
  'Juridik',
  'Intervju',
  'Kvalitet',
  'Administration',
  'Uppföljning',
  'Ankomst',
  'Arkiv',
]

const slug = (value: string) =>
  value
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')

export const organisation: CaseTypeNode[] = regions.map(region => {
  const regionId = `region-${slug(region.name)}`
  const unitCount = between(10, 15)

  return {
    id: regionId,
    name: `Region ${region.name}`,
    children: Array.from({ length: unitCount }, (_, unitIndex) => {
      const city = region.cities[unitIndex % region.cities.length]
      const type = unitTypes[unitIndex % unitTypes.length]
      const unitId = `${regionId}-${unitIndex + 1}`
      const departmentCount = between(8, 10)

      return {
        id: unitId,
        name: `${type} ${city}`,
        children: departments
          .slice(0, departmentCount)
          .map((department, departmentIndex) => ({
            id: `${unitId}-${departmentIndex + 1}`,
            name: department,
            // A few closed avdelningar, to exercise the disabled rule
            isDisabled: random() < 0.02,
          })),
      }
    }),
  }
})
