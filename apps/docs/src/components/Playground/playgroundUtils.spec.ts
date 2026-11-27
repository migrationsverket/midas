import { createElement, type FC, type ReactNode } from 'react'
import { describe, expect, it } from 'vitest'
import { MoreVertical } from 'lucide-react'
import type { ApiDoc, ApiProp } from '@midas-ds/docgen'
import {
  childToCode,
  CodeScope,
  CodeSlot,
  codeExpression,
  elementToCode,
  getControl,
  getControls,
  getPlaygroundProps,
  importsToCode,
  registerModule,
  type Control,
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
    expect(
      getControl('size', prop(sizeType), { options: ['medium'] }),
    ).toMatchObject({ options: ['medium'] })
  })

  it('should prefer configured options to a text field', () => {
    expect(
      getControl(
        'width',
        prop({ name: 'enum', raw: 'Width', value: [{ value: 'string' }] }),
        { options: ['100px', '50%'] },
      ),
    ).toMatchObject({ kind: 'enum', options: ['100px', '50%'] })
  })

  it('should mark a required enum', () => {
    expect(
      getControl('type', prop(sizeType, { required: true })),
    ).toMatchObject({ kind: 'enum', required: true })
  })

  it('should make a select from several named options', () => {
    const Plus = () => null
    const Upload = () => null
    expect(
      getControl('icon', prop({ name: 'LucideIcon' }), {
        options: { Ingen: undefined, Plus, Upload },
      }),
    ).toMatchObject({
      kind: 'enum',
      options: ['Ingen', 'Plus', 'Upload'],
      named: { Ingen: undefined, Plus, Upload },
    })
  })

  it('should make a checkbox from a single named option', () => {
    const Plus = () => null
    expect(
      getControl('icon', prop({ name: 'LucideIcon' }), {
        options: { Plus },
      }),
    ).toMatchObject({ kind: 'toggle', option: 'Plus', named: { Plus } })
  })

  it('should keep the import and showWhen of the config', () => {
    expect(
      getControl('iconPlacement', prop(sizeType), {
        import: 'lucide-react',
        showWhen: 'icon',
      }),
    ).toMatchObject({ import: 'lucide-react', showWhen: 'icon' })
  })

  it('should map strings to a text control', () => {
    expect(
      getControl('label', prop({ name: 'string', raw: 'string' })),
    ).toMatchObject({ kind: 'text' })
  })

  it('should map ReactNode and unions with string to a text control', () => {
    expect(
      getControl(
        'message',
        prop({ name: 'enum', raw: 'ReactNode', value: [] }),
      ),
    ).toMatchObject({ kind: 'text' })
    expect(
      getControl(
        'errorMessage',
        prop({
          name: 'enum',
          raw: '((validation: ValidationResult) => string) | string',
          value: [
            { value: '(validation: ValidationResult) => string' },
            { value: 'string' },
          ],
        }),
      ),
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

describe('getPlaygroundProps', () => {
  const Plus = () => null
  const icon: Control = {
    name: 'icon',
    kind: 'toggle',
    option: 'Plus',
    named: { Plus },
    import: 'lucide-react',
  }
  const iconPlacement: Control = {
    name: 'iconPlacement',
    kind: 'enum',
    options: ['left', 'right'],
    showWhen: 'icon',
  }
  const controls = [icon, iconPlacement]

  it('should resolve named options to their values and print them by name', () => {
    const result = getPlaygroundProps(controls, {
      icon: 'Plus',
      iconPlacement: 'right',
    })

    expect(result.props).toEqual({ icon: Plus, iconPlacement: 'right' })
    expect(result.codeProps.icon).toEqual(codeExpression('Plus'))
    expect(result.imports).toEqual({ 'lucide-react': ['Plus'] })
  })

  it('should leave out an unset option, its import and the props that depend on it', () => {
    const result = getPlaygroundProps(controls, {
      icon: undefined,
      iconPlacement: 'right',
    })

    expect(result.props).toEqual({ icon: undefined })
    expect(result.imports).toEqual({})
    expect(result.disabledControls).toEqual(['iconPlacement'])
  })

  it('should leave out a prop whose showWhen prop is false, and disable its control', () => {
    const isInvalid: Control = {
      name: 'isInvalid',
      kind: 'boolean',
      defaultValue: false,
    }
    const errorMessage: Control = {
      name: 'errorMessage',
      kind: 'text',
      showWhen: 'isInvalid',
    }
    const values = { isInvalid: false, errorMessage: 'Fyll i fältet' }
    const result = getPlaygroundProps([isInvalid, errorMessage], values)

    expect(result.props).toEqual({ isInvalid: false })
    expect(result.disabledControls).toEqual(['errorMessage'])
  })

  it('should enable a control only for the given values of another prop', () => {
    const status: Control = {
      name: 'status',
      kind: 'enum',
      options: ['idle', 'error'],
    }
    const errorMessage: Control = {
      name: 'errorMessage',
      kind: 'text',
      showWhen: { status: ['error'] },
    }
    const values = { status: 'idle', errorMessage: 'Fel' }

    expect(getPlaygroundProps([status, errorMessage], values)).toMatchObject({
      props: { status: 'idle' },
      disabledControls: ['errorMessage'],
    })
    expect(
      getPlaygroundProps([status, errorMessage], {
        ...values,
        status: 'error',
      }),
    ).toMatchObject({
      props: { status: 'error', errorMessage: 'Fel' },
      disabledControls: [],
    })
  })

  it('should pass on props without a control, but not children', () => {
    const result = getPlaygroundProps([], { label: 'Frukt', children: 'x' })

    expect(result.props).toEqual({ label: 'Frukt' })
    expect(result.codeProps).toEqual({ label: 'Frukt' })
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

  it('should print a handler as an empty function', () => {
    expect(elementToCode('FileListItem', { onDelete: () => 'deleted' })).toBe(
      '<FileListItem onDelete={() => {}} />',
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

describe('childToCode', () => {
  const Trigger: FC<{ children: ReactNode }> = () => null
  Trigger.displayName = 'Trigger'

  it('should print a wrapper with the code of the slot indented in place', () => {
    const slotCode = [
      '<Tooltip',
      "  placement='top'",
      '>',
      '  Spara',
      '</Tooltip>',
    ].join('\n')
    expect(
      childToCode(
        createElement(
          Trigger,
          null,
          createElement('button', { key: 'a' }, 'Spara'),
          createElement(CodeSlot, { key: 'b', code: slotCode }),
        ),
      ),
    ).toBe(
      [
        '<Trigger>',
        '  <button>Spara</button>',
        '  <Tooltip',
        "    placement='top'",
        '  >',
        '    Spara',
        '  </Tooltip>',
        '</Trigger>',
      ].join('\n'),
    )
  })
})

describe('CodeScope', () => {
  const Button: FC<{ variant?: string; children?: ReactNode }> = () => null
  // A minified name, like in a production build
  const t: FC<{ children?: ReactNode }> = () => null
  registerModule('@midas-ds/components', { Button, MenuTrigger: t, useX: t })

  it('should name midas components by their export and lucide icons by their name, and import them', () => {
    const scope = new CodeScope()

    expect(
      childToCode(
        createElement(
          t,
          null,
          createElement(
            Button,
            { variant: 'icon' },
            createElement(MoreVertical),
          ),
        ),
        '',
        scope,
      ),
    ).toBe(
      [
        '<MenuTrigger>',
        "  <Button variant='icon'>",
        '    <EllipsisVertical />',
        '  </Button>',
        '</MenuTrigger>',
      ].join('\n'),
    )
    expect(scope.imports).toEqual({
      '@midas-ds/components': ['MenuTrigger', 'Button'],
      'lucide-react': ['EllipsisVertical'],
    })
  })

  it('should name other components from the config', () => {
    const Form: FC = () => null
    const scope = new CodeScope({ 'react-aria-components': { Form } })

    expect(childToCode(createElement(Form), '', scope)).toBe('<Form />')
    expect(scope.imports).toEqual({ 'react-aria-components': ['Form'] })
  })

  it('should throw for a component it cannot name', () => {
    const Form: FC = () => null
    expect(() => childToCode(createElement(Form), '', new CodeScope())).toThrow(
      "Playground: Form isn't from @midas-ds/components or lucide-react, add it to imports",
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

describe('getControls', () => {
  const api = {
    displayName: 'Button',
    props: { variant: prop(sizeType), isDisabled: prop(booleanType) },
  } as unknown as ApiDoc

  it('should build the controls in the order they are configured', () => {
    expect(
      getControls(api, { isDisabled: {}, variant: {} }).map(c => c.name),
    ).toEqual(['isDisabled', 'variant'])
  })

  it('should allow children even when the API docs leave it out', () => {
    expect(getControls(api, { children: {} })).toMatchObject([
      { name: 'children', kind: 'text' },
    ])
  })

  it('should throw for a control that is not a prop, so a typo fails the docs build', () => {
    expect(() => getControls(api, { varaint: {} })).toThrow(
      'Playground: Button has no prop "varaint"',
    )
  })

  it('should throw for a prop that cannot be a control', () => {
    const withHandler = {
      displayName: 'Button',
      props: {
        onPress: prop({ name: 'enum', raw: '(() => void)', value: [] }),
      },
    } as unknown as ApiDoc
    expect(() => getControls(withHandler, { onPress: {} })).toThrow(
      `Playground: Button's prop "onPress" can't be a control`,
    )
  })

  it('should throw for an aria prop as a control, since the API docs leave them out', () => {
    expect(() => getControls(api, { 'aria-labl': {} })).toThrow(
      'Playground: Button has no prop "aria-labl"',
    )
  })

  it('should allow aria props in the initial props', () => {
    expect(() => getControls(api, {}, { 'aria-label': 'Spara' })).not.toThrow()
  })

  it('should allow only link props in the initial props of a component with as', () => {
    const link = {
      displayName: 'Link',
      props: { as: prop({ name: 'ElementType' }) },
    } as unknown as ApiDoc
    expect(() => getControls(link, {}, { href: '#' })).not.toThrow()
    expect(() => getControls(link, {}, { standlone: true })).toThrow(
      'Playground: Link has no prop "standlone"',
    )
  })

  it('should throw for a showWhen value that is not a prop', () => {
    expect(() =>
      getControls(api, { variant: { showWhen: { staus: 'error' } } }),
    ).toThrow('Playground: Button has no prop "staus"')
  })

  it('should throw for a showWhen that is not a prop', () => {
    expect(() => getControls(api, { variant: { showWhen: 'icon' } })).toThrow(
      'Playground: Button has no prop "icon"',
    )
  })

  it('should allow aria props, which the API docs leave out', () => {
    expect(() =>
      getControls(api, {}, { 'aria-label': 'Kalender' }),
    ).not.toThrow()
  })

  it('should allow any initial prop on a component that renders another with `as`', () => {
    const linkApi = {
      displayName: 'Link',
      props: { as: prop({ name: 'C' }), standalone: prop(booleanType) },
    } as unknown as ApiDoc

    expect(() => getControls(linkApi, {}, { href: '#' })).not.toThrow()
    expect(() => getControls(linkApi, { href: {} })).toThrow(
      'Playground: Link has no prop "href"',
    )
  })

  it('should throw for initial props that are not props', () => {
    expect(() => getControls(api, {}, { lable: 'Spara' })).toThrow(
      'Playground: Button has no prop "lable"',
    )
  })
})
