import { createElement, type FC } from 'react'
import { describe, expect, it } from 'vitest'
import type { ApiProp } from '@midas-ds/docgen'
import {
  codeExpression,
  elementToCode,
  getControl,
  importsToCode,
} from './playgroundUtils'

const prop = (type: ApiProp['type'], rest: Partial<ApiProp> = {}): ApiProp => ({
  name: 'prop',
  required: false,
  description: '',
  defaultValue: null,
  type,
  ...rest,
})

const booleanType = {
  name: 'enum',
  raw: 'boolean',
  value: [{ value: 'false' }, { value: 'true' }],
}

const sizeType = {
  name: 'enum',
  raw: 'Size',
  value: [{ value: '"large"' }, { value: '"medium"' }],
}

describe('getControl', () => {
  it('should map docgen booleans, which arrive as enums, to a boolean control', () => {
    expect(getControl('isDisabled', prop(booleanType))).toMatchObject({
      kind: 'boolean',
      defaultValue: false,
    })
  })

  it('should read a boolean default', () => {
    expect(
      getControl(
        'isOpen',
        prop(booleanType, { defaultValue: { value: 'true' } }),
      ),
    ).toMatchObject({ kind: 'boolean', defaultValue: true })
  })

  it('should unquote enum options and differently quoted defaults', () => {
    expect(
      getControl(
        'size',
        prop(sizeType, { defaultValue: { value: "'large'" } }),
      ),
    ).toMatchObject({
      kind: 'enum',
      options: ['large', 'medium'],
      defaultValue: 'large',
    })
    expect(
      getControl('size', prop(sizeType, { defaultValue: { value: 'large' } })),
    ).toMatchObject({ defaultValue: 'large' })
  })

  it('should limit enum options when told to', () => {
    expect(getControl('size', prop(sizeType), ['medium'])).toMatchObject({
      options: ['medium'],
    })
  })

  it('should make a control from given options for a type it cannot read', () => {
    expect(
      getControl('icon', prop({ name: 'LucideIcon' }), ['Ingen', 'Plus']),
    ).toMatchObject({ kind: 'enum', options: ['Ingen', 'Plus'] })
  })

  it('should map strings to a text control', () => {
    expect(
      getControl('label', prop({ name: 'string', raw: 'string' })),
    ).toMatchObject({ kind: 'text' })
  })

  it('should treat children as text, whatever its type is', () => {
    expect(
      getControl(
        'children',
        prop({ name: 'enum', raw: 'ReactNode', value: [{ value: 'bigint' }] }),
      ),
    ).toMatchObject({ kind: 'text' })
  })

  it('should not make controls for functions', () => {
    expect(
      getControl(
        'onChange',
        prop({
          name: 'enum',
          raw: '((value: Key | null) => void)',
          value: [{ value: '(value: Key | null) => void' }],
        }),
      ),
    ).toBeNull()
  })
})

describe('elementToCode', () => {
  const Item: FC<{ id: string; children: string }> = () => null
  Item.displayName = 'Item'

  it('should render a component without props', () => {
    expect(elementToCode('Button', {}, 'Spara')).toBe('<Button>Spara</Button>')
  })

  it('should self-close without children', () => {
    expect(elementToCode('ComboBox', {})).toBe('<ComboBox />')
  })

  it('should keep one prop on the same line as the tag', () => {
    expect(elementToCode('Button', { variant: 'secondary' }, 'Spara')).toBe(
      "<Button variant='secondary'>Spara</Button>",
    )
  })

  it('should put several props on a line each', () => {
    expect(
      elementToCode(
        'Button',
        { variant: 'secondary', isDisabled: true },
        'Spara',
      ),
    ).toBe(
      [
        '<Button',
        "  variant='secondary'",
        '  isDisabled',
        '>',
        '  Spara',
        '</Button>',
      ].join('\n'),
    )
  })

  it('should leave out empty values and values equal to the default', () => {
    expect(
      elementToCode(
        'Button',
        { variant: 'primary', isDisabled: false, label: '' },
        'Spara',
        { variant: 'primary', isDisabled: false },
      ),
    ).toBe('<Button>Spara</Button>')
  })

  it('should print a false that differs from the default', () => {
    expect(
      elementToCode('Tabs', { isOpen: false }, undefined, { isOpen: true }),
    ).toBe('<Tabs isOpen={false} />')
  })

  it('should print numbers in braces and quote strings holding an apostrophe', () => {
    expect(elementToCode('Button', { iconSize: 24 })).toBe(
      '<Button iconSize={24} />',
    )
    expect(elementToCode('Button', { label: "Ann's" })).toBe(
      '<Button label={"Ann\'s"} />',
    )
  })

  it('should print code expressions unquoted', () => {
    expect(elementToCode('Button', { icon: codeExpression('Plus') })).toBe(
      '<Button icon={Plus} />',
    )
  })

  it('should render child elements by displayName and drop whitespace', () => {
    expect(
      elementToCode('ComboBox', { label: 'Frukt' }, [
        '\n',
        createElement(Item, { id: 'lime', key: 'a' }, 'Lime'),
      ]),
    ).toBe(
      [
        "<ComboBox label='Frukt'>",
        "  <Item id='lime'>Lime</Item>",
        '</ComboBox>',
      ].join('\n'),
    )
  })
})

describe('importsToCode', () => {
  it('should print nothing without imports', () => {
    expect(importsToCode({})).toBe('')
  })

  it('should print one line per module', () => {
    expect(
      importsToCode({
        'lucide-react': ['Plus'],
        '@midas-ds/components': ['Text'],
      }),
    ).toBe(
      [
        "import { Text } from '@midas-ds/components'",
        "import { Plus } from 'lucide-react'",
      ].join('\n'),
    )
  })

  it('should sort and dedupe the names', () => {
    expect(
      importsToCode({ 'lucide-react': ['Upload', 'Plus', 'Upload'] }),
    ).toBe("import { Plus, Upload } from 'lucide-react'")
  })

  it('should skip modules without names', () => {
    expect(importsToCode({ 'lucide-react': [] })).toBe('')
  })
})
