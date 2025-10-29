/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { themes, type PrismTheme } from 'prism-react-renderer'

const baseTheme = themes.github

export default {
  ...baseTheme,
  styles: [
    ...baseTheme.styles,
    {
      types: ['title'],
      style: {
        color: '#0550AE',
        fontWeight: 'bold',
      },
    },
    {
      types: ['parameter'],
      style: {
        color: '#953800',
      },
    },
    {
      types: [
        'boolean',
        'rule',
        'color',
        'number',
        'constant',
        'property',
        'regex',
      ],
      style: {
        color: '#005CC5',
      },
    },
    {
      types: ['atrule', 'tag'],
      style: {
        color: '#165F27',
      },
    },
    {
      types: ['script'],
      style: {
        color: '#24292E',
      },
    },
    {
      types: ['operator', 'unit', 'rule'],
      style: {
        color: '#CD3B49',
      },
    },
    {
      types: ['font-matter', 'string', 'attr-value'],
      style: {
        color: '#C6105F',
      },
    },
    {
      types: ['class-name'],
      style: {
        color: '#116329',
      },
    },
    {
      types: ['attr-name'],
      style: {
        color: '#0550AE',
      },
    },
    {
      types: ['keyword'],
      style: {
        color: '#CF222E',
      },
    },
    {
      types: ['function'],
      style: {
        color: '#804ce1',
      },
    },
    {
      types: ['selector'],
      style: {
        color: '#6F42C1',
      },
    },
    {
      types: ['variable'],
      style: {
        color: '#9B3F00',
      },
    },
    {
      types: ['comment'],
      style: {
        color: '#6B6B6B',
      },
    },
  ],
} satisfies PrismTheme
