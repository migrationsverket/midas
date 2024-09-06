import * as util from 'util'
import docgen from 'react-docgen-typescript'

const options = {
  shouldExtractLiteralValuesFromEnum: false,
  savePropValueAsString: true,
  shouldExtractValuesFromUnion: true,
  skipPropsWithoutDoc: true,
  propFilter: (prop) => {
    if (prop.declarations !== undefined && prop.declarations.length > 0) {
      const hasPropAdditionalDescription = prop.declarations.some(
        (declaration) =>
          !declaration.fileName.includes('@types/react') &&
          !['as', 'css'].includes(prop.name)
      )
      return Boolean(hasPropAdditionalDescription)
    }
    return true
  },
}

const getData = (componentName) =>
  docgen.parse(`../../../../packages/${componentName}/src/index.ts`, options)

const testData = getData('button')

console.log(util.inspect(testData, { depth: null, colors: true }))
