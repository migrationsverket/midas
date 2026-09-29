import type { PropItem } from 'react-docgen-typescript'

export const SCHEMA_VERSION = 1

/** A member of a complex type, shown in the drill-down popover of a prop table */
export interface TypeMember {
  name: string
  type: string
  description: string
  required: boolean
  /** Key into `ApiDoc.types` */
  membersRef?: string
}

export interface EnumValue {
  value: string
  description?: string
  fullComment?: string
  /** Key into `ApiDoc.types` */
  membersRef?: string
}

export interface ApiPropType {
  name: string
  raw?: string
  value?: EnumValue[]
  /** Key into `ApiDoc.types` */
  membersRef?: string
}

export interface ApiProp extends Omit<PropItem, 'type'> {
  type: ApiPropType
}

/** One generated file: dist/api/<project>/<displayName>.json */
export interface ApiDoc {
  schemaVersion: typeof SCHEMA_VERSION
  /** npm package name, e.g. @midas-ds/components */
  package: string
  displayName: string
  description: string
  /** Workspace-relative path of the source file */
  sourceFile: string
  props: Record<string, ApiProp>
  /** Drill-down member tables, keyed by content hash. Self-contained per file. */
  types: Record<string, TypeMember[]>
}

/** dist/api/<project>/index.json */
export interface ApiIndexEntry {
  displayName: string
  sourceFile: string
}
