// Quick test script to debug the transformer
const fs = require('fs');
const path = require('path');

const rawJson = JSON.parse(
  fs.readFileSync(
    '/home/jakob/code/midas/apps/docs/.docusaurus/typedoc-api/typedoc-raw.json',
    'utf8'
  )
);

console.log('Project name:', rawJson.name);
console.log('Number of children:', rawJson.children?.length);

if (rawJson.children) {
  console.log('\nFirst 10 children:');
  for (let i = 0; i < Math.min(10, rawJson.children.length); i++) {
    const child = rawJson.children[i];
    console.log(`  ${i}. ${child.name} (kind: ${child.kind})`);

    if (child.children) {
      console.log(`     Has ${child.children.length} children:`);
      for (let j = 0; j < Math.min(5, child.children.length); j++) {
        const grandchild = child.children[j];
        console.log(`       - ${grandchild.name} (kind: ${grandchild.kind})`);
      }
    }
  }
}
