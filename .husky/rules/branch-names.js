#!/usr/bin/env node

const { execSync } = require('child_process')

const allowedPrefixes = [
  'feat/',
  'fix/',
  'docs/',
  'style/',
  'refactor/',
  'test/',
  'test/',
  'chore/',
  'release/',
  'hotfix/',
  'main',
]

try {
  const branch = execSync('git rev-parse --abbrev-ref HEAD').toString().trim()

  const isPrefixValid = allowedPrefixes.some((prefix) =>
    branch.startsWith(prefix)
  )

  if (!isPrefixValid) {
    console.error(`Invalid branch name: ${branch}`)
    console.error(
      `Branch name must start with one of the following prefixes: ${allowedPrefixes.filter((prefix) => prefix !== 'main').join(', ')}`
    )
    process.exit(1)
  }
} catch (error) {
  console.error('Error checking branch name:', error)
  process.exit(1)
}
