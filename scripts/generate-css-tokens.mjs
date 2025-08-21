// scripts/generate-css-tokens.mjs
import {
  baseColors,
  typography,
  spacing,
  states,
  transitions,
  windowSizes,
  breakpoints,
  semantic,
  zIndex,
  sizing,
} from '../dist/tokens/tokens.js'; // Updated import path

const toKebabCase = (name) => {
  return name.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2').toLowerCase();
};

const resolveTokenReference = (ref, allTokens) => {
  if (ref.startsWith('#') || ref.endsWith('rem') || ref.endsWith('px') || ref.endsWith('ms') || ref.startsWith('rgba(')) {
    return ref;
  }

  if (ref.startsWith('--')) {
    const kebabName = ref.substring(2);
    for (const key in allTokens.baseColors) {
      if (toKebabCase(key) === kebabName) {
        return allTokens.baseColors[key];
      }
    }
    for (const key in allTokens.semantic) {
      if (toKebabCase(key) === kebabName) {
        const semanticValue = allTokens.semantic[key];
        if (typeof semanticValue === 'string' && semanticValue.includes('light-dark')) {
            const lightDarkRegex = /light-dark\(([^,]+),\s*([^)]+)\)/;
            const match = semanticValue.match(lightDarkRegex);
            if (match) {
                const lightVal = resolveTokenReference(match[1].trim(), allTokens);
                const darkVal = resolveTokenReference(match[2].trim(), allTokens);
                return `light-dark(${lightVal}, ${darkVal})`;
            }
        }
        return semanticValue;
      }
    }
    return ref;
  }

  for (const groupName in allTokens) {
    const group = allTokens[groupName];
    if (group && group[ref]) {
      return group[ref];
    }
  }

  return ref;
};

const resolveValue = (value, allTokens) => {
  if (typeof value !== 'string') {
    return value;
  }

  const lightDarkRegex = /light-dark\(([^,]+),\s*([^)]+)\)/g;
  let resolved = value.replace(lightDarkRegex, (match, lightVal, darkVal) => {
    const resolvedLight = resolveTokenReference(lightVal.trim(), allTokens);
    const resolvedDark = resolveTokenReference(darkVal.trim(), allTokens);
    return `light-dark(${resolvedLight}, ${resolvedDark})`;
  });

  const tokenRefRegex = /\$\{(\w+)\.(\w+)\}/g;
  resolved = resolved.replace(tokenRefRegex, (match, groupName, tokenName) => {
    const group = allTokens[groupName];
    if (group && group[tokenName]) {
      return group[tokenName];
    }
    return match;
  });

  return resolved;
};


let cssOutput = `/* Generated from tokens.ts - Do not edit directly */\n\n`;

const allTokens = {
  baseColors,
  typography,
  spacing,
  states,
  transitions,
  windowSizes,
  breakpoints,
  semantic,
  zIndex,
  sizing,
};

const processTokenGroup = (group, prefix = '') => {
  for (const key in group) {
    const value = group[key];
    const cssVarName = `--${prefix}${toKebabCase(key)}`;

    if (typeof value === 'object' && value !== null) {
      processTokenGroup(value, `${prefix}${toKebabCase(key)}-`);
    } else {
      const resolved = resolveValue(value, allTokens);
      cssOutput += `@value ${cssVarName}: ${resolved};\n`;
    }
  }
};

processTokenGroup(baseColors);
processTokenGroup(typography);
processTokenGroup(spacing);
processTokenGroup(states);
processTokenGroup(transitions);
// processTokenGroup(windowSizes); // Removed this line
processTokenGroup(breakpoints);
processTokenGroup(semantic);
processTokenGroup(zIndex);
processTokenGroup(sizing);


import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const cssOutputPath = path.resolve(__dirname, '../packages/components/src/theme/tokens.css');

fs.writeFileSync(cssOutputPath, cssOutput);

console.log(`Generated CSS tokens to ${cssOutputPath}`);
