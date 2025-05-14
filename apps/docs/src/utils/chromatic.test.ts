import { getBranchUrl } from './chromatic'

test('getBranchUrl', () => {
  const testCases = [
    ['feature/fix-bug', 'feature-fix-bug'],
    ['feature----fix-bug', 'feature-fix-bug'],
    ['feature/DS-1234_component-x-y-z', 'feature-ds-1234-component-x-y-z'],
    ['feature---dashboard/fix-bug', 'feature-dashboard-fix-bug'],
    [
      'thisisareallysuperduperextralongbranchname',
      'thisisareallysuperduperextralongbranc',
    ],
  ]

  testCases.forEach(([input, expected]) => {
    expect(getBranchUrl(input)).toBe(expected)
  })
})
