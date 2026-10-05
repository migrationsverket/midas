import type { VisualReport } from '@midas-ds/visual-report'

const image = (src: string) => ({ src, width: 100, height: 50 })

export const reportFixture: VisualReport = {
  version: 1,
  runUrl: 'https://github.com/migrationsverket/midas/actions/runs/1',
  summary: { projects: 2, total: 40, changed: 2, new: 1 },
  projects: [
    {
      project: 'components',
      total: 30,
      failures: [
        {
          id: '1',
          file: 'src/visual.spec.tsx',
          name: './button/Button.stories.tsx > Primary',
          suite: './button/Button.stories.tsx',
          test: 'Primary',
          message: 'Screenshot does not match the stored reference.',
          isNew: false,
          images: {
            reference: image('components/1/reference.png'),
            actual: image('components/1/actual.png'),
            diff: image('components/1/diff.png'),
          },
        },
        {
          id: '2',
          file: 'src/visual.spec.tsx',
          name: './button/Button.stories.tsx > Secondary',
          suite: './button/Button.stories.tsx',
          test: 'Secondary',
          message: 'Screenshot does not match the stored reference.',
          isNew: false,
          images: {
            reference: image('components/2/reference.png'),
            actual: image('components/2/actual.png'),
            diff: image('components/2/diff.png'),
          },
        },
      ],
    },
    {
      project: 'datepicker-styles',
      total: 10,
      failures: [
        {
          id: '1',
          file: 'src/visual.spec.tsx',
          name: 'Datepicker > Month select',
          suite: 'Datepicker',
          test: 'Month select',
          message: 'No existing reference screenshot found.',
          isNew: true,
          images: { actual: image('datepicker-styles/1/actual.png') },
        },
      ],
    },
  ],
}
