const StyleDictionary = require('style-dictionary');

StyleDictionary.registerTransform({
  name: 'attribute/light-dark',
  type: 'attribute',
  matcher: function(prop) {
    return prop.value.includes('light-dark');
  },
  transformer: function(prop) {
    const lightValue = prop.value.match(/light-dark\(([^,]+),\s*([^)]+)\)/)[1].trim();
    const darkValue = prop.value.match(/light-dark\(([^,]+),\s*([^)]+)\)/)[2].trim();
    return `light-dark(${lightValue}, ${darkValue})`;
  }
});

StyleDictionary.registerTransform({
  name: 'value/breakpoint',
  type: 'value',
  matcher: function(prop) {
    return prop.path.includes('breakpoints');
  },
  transformer: function(prop) {
    // Replace {windowSizes.sm} with var(--midas-window-sizes-sm)
    let value = prop.value.replace(/\{windowSizes\.(\w+)\}/g, 'var(--midas-window-sizes-$1)');
    return value;
  }
});
