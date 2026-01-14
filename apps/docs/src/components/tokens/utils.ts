import { TransformedToken } from 'style-dictionary/types'

export const getCSSVariableName = ({ path }: TransformedToken) =>
  `--midas-${path
    .map(subPath => subPath.split(/(?=[A-Z])/).join('-'))
    .join('-')
    .toLowerCase()}`
