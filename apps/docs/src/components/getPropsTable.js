import * as util from 'util';

const docgen = require('react-docgen-typescript');

// played with different options, keeping this file with info for now TODO: remove later
const options = {
  shouldExtractLiteralValuesFromEnum: false,
  savePropValueAsString: true,
  shouldExtractValuesFromUnion: true,
  skipPropsWithoutDoc: true,
  propFilter: (prop, component) => {
    if (prop.declarations !== undefined && prop.declarations.length > 0) {
      const hasPropAdditionalDescription = prop.declarations.find(
        (declaration) => {
          return (
            !declaration.fileName.includes('@types/react') &&
            !['as', 'css'].some((name) => prop.name.includes(name))
          );
        }
      );
      return Boolean(hasPropAdditionalDescription);
    }
    return true;
  },
};

// Just console output for running docgen in terminal
const getData = (componentName) =>
  docgen.parse(`../../../../packages/${componentName}/src/index.ts`, options);
const testData = getData('button');
console.log(util.inspect(testData, { depth: null, colors: true }));
