/**
 * Shared dummy data for the tree selection spikes: public Migrationsverket
 * case types grouped as verksamhetsområde → ärendeområde → ärendetyp. Only
 * generic category names from the public website, nothing internal.
 */

export interface CaseTypeNode {
  id: string
  name: string
  isDisabled?: boolean
  children?: CaseTypeNode[]
}

export interface Leaf {
  id: string
  name: string
  /** The ancestors' names, e.g. 'Tillstånd / Arbete' */
  path: string
  isDisabled?: boolean
}

export const caseTypes: CaseTypeNode[] = [
  {
    id: 'tillstand',
    name: 'Tillstånd',
    children: [
      {
        id: 'arbete',
        name: 'Arbete',
        children: [
          { id: 'arbetstillstand', name: 'Arbetstillstånd' },
          {
            id: 'forlangning-arbetstillstand',
            name: 'Förlängning av arbetstillstånd',
          },
          { id: 'eu-blakort', name: 'EU-blåkort' },
          { id: 'sasongsarbete', name: 'Säsongsarbete' },
          { id: 'forskare', name: 'Forskare' },
          { id: 'egen-naringsverksamhet', name: 'Egen näringsverksamhet' },
          { id: 'au-pair', name: 'Au pair' },
        ],
      },
      {
        id: 'studier',
        name: 'Studier',
        children: [
          { id: 'hogskolestudier', name: 'Studier på högskola' },
          { id: 'doktorandstudier', name: 'Doktorandstudier' },
          { id: 'forlangning-studier', name: 'Förlängning för studier' },
          {
            id: 'arbetssokande-efter-studier',
            name: 'Söka arbete efter studier',
          },
          {
            id: 'utbytesstudier-gymnasium',
            name: 'Utbytesstudier på gymnasiet',
            isDisabled: true,
          },
        ],
      },
      {
        id: 'familj',
        name: 'Familj',
        children: [
          { id: 'make-maka-sambo', name: 'Make, maka eller sambo' },
          { id: 'barn', name: 'Barn' },
          { id: 'foralder', name: 'Förälder till barn i Sverige' },
          { id: 'ovrig-anknytning', name: 'Övriga familjemedlemmar' },
        ],
      },
      {
        id: 'eu-medborgare',
        name: 'EU-medborgare',
        children: [
          { id: 'uppehallsratt', name: 'Uppehållsrätt' },
          {
            id: 'uppehallskort',
            name: 'Uppehållskort för familjemedlem',
          },
          {
            id: 'permanent-uppehallsratt',
            name: 'Permanent uppehållsrätt',
          },
        ],
      },
      {
        id: 'besok',
        name: 'Besök',
        children: [
          { id: 'visum', name: 'Visum' },
          { id: 'forlangning-visum', name: 'Förlängning av visum' },
          {
            id: 'besoksuppehallstillstand',
            name: 'Besöksuppehållstillstånd',
          },
        ],
      },
    ],
  },
  {
    id: 'skydd',
    name: 'Skydd',
    children: [
      {
        id: 'asyl',
        name: 'Asyl',
        children: [
          { id: 'asylansokan', name: 'Asylansökan' },
          {
            id: 'forlangning-skyddsstatus',
            name: 'Förlängning av skyddsstatus',
          },
          { id: 'verkstallighetshinder', name: 'Verkställighetshinder' },
          {
            id: 'aterkallelse',
            name: 'Återkallelse av uppehållstillstånd',
            isDisabled: true,
          },
        ],
      },
      {
        id: 'tillfalligt-skydd',
        name: 'Tillfälligt skydd',
        children: [
          { id: 'massflyktsdirektivet', name: 'Massflyktsdirektivet' },
          {
            id: 'forlangning-tillfalligt-skydd',
            name: 'Förlängning av tillfälligt skydd',
          },
        ],
      },
      {
        id: 'vidarebosattning',
        name: 'Vidarebosättning',
        children: [{ id: 'kvotflyktingar', name: 'Kvotflyktingar' }],
      },
    ],
  },
  {
    id: 'medborgarskap',
    name: 'Medborgarskap',
    children: [
      {
        id: 'medborgarskap-ansokan',
        name: 'Ansökan',
        children: [
          { id: 'medborgarskap-vuxen', name: 'Medborgarskap för vuxna' },
          { id: 'medborgarskap-barn', name: 'Medborgarskap för barn' },
        ],
      },
      {
        id: 'medborgarskap-anmalan',
        name: 'Anmälan',
        children: [
          { id: 'anmalan-barn-unga', name: 'Anmälan för barn och unga' },
          {
            id: 'anmalan-nordiska',
            name: 'Anmälan för nordiska medborgare',
          },
        ],
      },
      {
        id: 'medborgarskap-ovrigt',
        name: 'Övrigt',
        children: [
          {
            id: 'befrielse',
            name: 'Befrielse från medborgarskap',
          },
          { id: 'medborgarskapsbevis', name: 'Bevis om medborgarskap' },
        ],
      },
    ],
  },
]

/** The middle level as sections (ärendeområde → ärendetyp), for the 2-level case */
export const caseTypeSections: CaseTypeNode[] = caseTypes.flatMap(
  area => area.children ?? [],
)

/** Every leaf with its ancestors' names as a path, for flat search */
export const flattenLeaves = (
  nodes: CaseTypeNode[] = caseTypes,
  ancestors: string[] = [],
): Leaf[] =>
  nodes.flatMap(node =>
    node.children
      ? flattenLeaves(node.children, [...ancestors, node.name])
      : [
          {
            id: node.id,
            name: node.name,
            path: ancestors.join(' / '),
            isDisabled: node.isDisabled,
          },
        ],
  )

export const leaves = flattenLeaves()
