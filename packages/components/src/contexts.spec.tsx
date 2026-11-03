import { describe, expect, it, vi } from 'vitest'
import { page, userEvent } from 'vitest/browser'
import type { ReactNode } from 'react'
import { parseDate, parseTime } from '@internationalized/date'
import {
  DialogTrigger,
  Provider,
  TextFieldContext as AriaTextFieldContext,
} from 'react-aria-components'
import { render } from '../test-utils'
import { AccordionItem } from './accordion'
import { Button, ButtonContext } from './button'
import { Calendar } from './calendar'
import { Card, CardBody, CardHeader } from './card'
import {
  Checkbox,
  CheckboxContext,
  CheckboxGroup,
  CheckboxGroupContext,
} from './checkbox'
import { ComboBox, ComboBoxContext } from './combobox'
import { DateField, DateFieldContext } from './date-field'
import {
  DatePicker,
  DatePickerContext,
  DateRangePicker,
  DateRangePickerContext,
} from './date-picker'
import { FieldError } from './field-error'
import { FileList, FileListItem } from './file-list'
import { HeadingContext } from './heading'
import { InfoBanner } from './info-banner'
import { Link, LinkContext } from './link'
import { LinkButton, LinkButtonContext } from './link-button'
import { ListBoxItem } from './list-box'
import { Modal } from './modal'
import { Radio, RadioContext, RadioGroup, RadioGroupContext } from './radio'
import { SearchField, SearchFieldContext } from './search-field'
import { Select, SelectContext } from './select'
import { Cell, Column, Row, Table, TableBody, TableHeader } from './table'
import { Tag, TagGroup, TagList } from './tag'
import { Text, TextContext } from './text'
import { TextArea, TextField, TextFieldContext } from './textfield'
import { TimeField, TimeFieldContext } from './time-field'

const heightOf = (element: Element) => element.getBoundingClientRect().height

describe('given standard props from a context', async () => {
  // [name, context, render with optional local props, the element to check]
  const cases: [
    string,
    React.Context<unknown>,
    (props: { isDisabled?: boolean }) => ReactNode,
    () => Element,
  ][] = [
    [
      'Button',
      ButtonContext as React.Context<unknown>,
      props => <Button {...props}>Knapp</Button>,
      () => page.getByRole('button').element(),
    ],
    [
      'TextField',
      TextFieldContext as React.Context<unknown>,
      props => (
        <TextField
          label='Fält'
          {...props}
        />
      ),
      () => page.getByRole('textbox').element(),
    ],
    [
      'TextArea',
      TextFieldContext as React.Context<unknown>,
      props => (
        <TextArea
          label='Fält'
          {...props}
        />
      ),
      () => page.getByRole('textbox').element(),
    ],
    [
      'SearchField',
      SearchFieldContext as React.Context<unknown>,
      props => (
        <SearchField
          placeholder='Sök'
          showButton={false}
          {...props}
        />
      ),
      () => page.getByRole('searchbox').element(),
    ],
    [
      'Select',
      SelectContext as React.Context<unknown>,
      props => (
        <Select
          label='Välj'
          {...props}
        >
          <ListBoxItem>Ett</ListBoxItem>
        </Select>
      ),
      () => page.getByRole('button').element(),
    ],
    [
      'ComboBox',
      ComboBoxContext as React.Context<unknown>,
      props => (
        <ComboBox
          label='Välj'
          {...props}
        >
          <ListBoxItem>Ett</ListBoxItem>
        </ComboBox>
      ),
      () => page.getByRole('combobox').element(),
    ],
    [
      'Checkbox',
      CheckboxContext as React.Context<unknown>,
      props => <Checkbox {...props}>Kryssa</Checkbox>,
      () => page.getByRole('checkbox').element(),
    ],
    [
      'CheckboxGroup',
      CheckboxGroupContext as React.Context<unknown>,
      props => (
        <CheckboxGroup
          label='Grupp'
          {...props}
        >
          <Checkbox value='ett'>Ett</Checkbox>
        </CheckboxGroup>
      ),
      () => page.getByRole('checkbox').element(),
    ],
    [
      'Radio',
      RadioContext as React.Context<unknown>,
      props => (
        <RadioGroup label='Grupp'>
          <Radio
            value='ett'
            {...props}
          >
            Ett
          </Radio>
        </RadioGroup>
      ),
      () => page.getByRole('radio').element(),
    ],
    [
      'RadioGroup',
      RadioGroupContext as React.Context<unknown>,
      props => (
        <RadioGroup
          label='Grupp'
          {...props}
        >
          <Radio value='ett'>Ett</Radio>
        </RadioGroup>
      ),
      () => page.getByRole('radio').element(),
    ],
  ]

  const dateCases: [
    string,
    React.Context<unknown>,
    (props: { isDisabled?: boolean }) => ReactNode,
  ][] = [
    [
      'DateField',
      DateFieldContext as React.Context<unknown>,
      props => (
        <DateField
          label='Datum'
          {...props}
        />
      ),
    ],
    [
      'DatePicker',
      DatePickerContext as React.Context<unknown>,
      props => (
        <DatePicker
          label='Datum'
          {...props}
        />
      ),
    ],
    [
      'DateRangePicker',
      DateRangePickerContext as React.Context<unknown>,
      props => (
        <DateRangePicker
          label='Datum'
          {...props}
        />
      ),
    ],
    [
      'TimeField',
      TimeFieldContext as React.Context<unknown>,
      props => (
        <TimeField
          label='Tid'
          {...props}
        />
      ),
    ],
  ]

  it.each(cases)(
    '%s should use the props from its context',
    async (_, Context, renderComponent, element) => {
      await render(
        <Context.Provider value={{ isDisabled: true }}>
          {renderComponent({})}
        </Context.Provider>,
      )
      expect(element()).toBeDisabled()
    },
  )

  it.each(cases)(
    '%s should let its own props take precedence',
    async (_, Context, renderComponent, element) => {
      await render(
        <Context.Provider value={{ isDisabled: true }}>
          {renderComponent({ isDisabled: false })}
        </Context.Provider>,
      )
      expect(element()).toBeEnabled()
    },
  )

  it.each(dateCases)(
    '%s should use the props from its context',
    async (_, Context, renderComponent) => {
      await render(
        <Context.Provider value={{ isDisabled: true }}>
          {renderComponent({})}
        </Context.Provider>,
      )
      await expect
        .element(page.getByRole('spinbutton').first())
        .toHaveAttribute('aria-disabled', 'true')
    },
  )

  it.each(dateCases)(
    '%s should let its own props take precedence',
    async (_, Context, renderComponent) => {
      await render(
        <Context.Provider value={{ isDisabled: true }}>
          {renderComponent({ isDisabled: false })}
        </Context.Provider>,
      )
      await expect
        .element(page.getByRole('spinbutton').first())
        .not.toHaveAttribute('aria-disabled')
    },
  )

  it('should set the size of several components with one Provider', async () => {
    await render(
      <Provider
        values={[
          [TextFieldContext, { size: 'medium' }],
          [SelectContext, { size: 'medium' }],
          [ButtonContext, { size: 'medium' }],
        ]}
      >
        <TextField label='Namn' />
        <Select label='Land'>
          <ListBoxItem>Sverige</ListBoxItem>
        </Select>
        <Button>Spara</Button>
      </Provider>,
    )
    expect(heightOf(page.getByRole('textbox').element())).toBe(40)
    expect(heightOf(page.getByRole('button', { name: /Land/ }).element())).toBe(
      40,
    )
    expect(
      heightOf(page.getByRole('button', { name: 'Spara' }).element()),
    ).toBe(40)
  })

  it('should let LinkButton and Link use the props from their contexts', async () => {
    await render(
      <Provider
        values={[
          [LinkButtonContext, { size: 'medium', className: 'link-button' }],
          [LinkContext, { standalone: true }],
        ]}
      >
        <LinkButton href='#'>Knapplänk</LinkButton>
        <Link href='#'>Länk</Link>
      </Provider>,
    )
    expect(
      page.getByRole('link', { name: 'Knapplänk' }).element().classList,
    ).toContain('link-button')
    expect(
      page.getByRole('link', { name: 'Länk' }).element().querySelector('svg'),
    ).not.toBeNull()
  })
})

describe('given a TextField inside a TextFieldContext', async () => {
  it("should call onChange from React Aria's context once", async () => {
    const onChange = vi.fn()
    await render(
      <AriaTextFieldContext.Provider value={{ onChange }}>
        <TextField label='Fält' />
      </AriaTextFieldContext.Provider>,
    )
    await userEvent.type(page.getByRole('textbox'), 'a')
    expect(onChange).toHaveBeenCalledTimes(1)
  })

  it('should call onChange from the Midas context once', async () => {
    const onChange = vi.fn()
    await render(
      <TextFieldContext.Provider value={{ onChange }}>
        <TextField label='Fält' />
      </TextFieldContext.Provider>,
    )
    await userEvent.type(page.getByRole('textbox'), 'a')
    expect(onChange).toHaveBeenCalledTimes(1)
  })
})

describe('given contexts from a consumer', async () => {
  const leak = { className: 'leak' }
  const ConsumerContexts = ({ children }: { children: ReactNode }) => (
    <Provider
      values={[
        [ButtonContext, leak],
        [CheckboxContext, leak],
        [HeadingContext, leak],
        [LinkContext, leak],
        [RadioContext, leak],
        [TextContext, leak],
      ]}
    >
      {children}
    </Provider>
  )
  const leaks = () => document.querySelectorAll('.leak').length

  // [name, component, number of elements the consumer rendered themselves,
  //  open it by pressing this button first]
  const cases: [string, ReactNode, number, (string | RegExp)?][] = [
    [
      'TextField',
      <TextField
        label='Fält'
        description='Beskrivning'
        showCounter
        maxLength={10}
        type='password'
        popover={{ children: 'Info' }}
      />,
      0,
    ],
    [
      'TextArea',
      <TextArea
        label='Fält'
        description='Beskrivning'
      />,
      0,
    ],
    [
      'SearchField',
      <SearchField
        placeholder='Sök'
        label='Sök'
        description='Beskrivning'
        defaultValue='text'
      />,
      0,
    ],
    [
      'Select',
      <Select
        label='Välj'
        description='Beskrivning'
        selectionMode='multiple'
        isSelectableAll
      >
        <ListBoxItem>Ett</ListBoxItem>
      </Select>,
      0,
      /Välj/,
    ],
    [
      'ComboBox',
      <ComboBox
        label='Välj'
        description='Beskrivning'
      >
        {[]}
      </ComboBox>,
      0,
      /Show list/,
    ],
    [
      'DateField',
      <DateField
        label='Datum'
        description='Beskrivning'
        isClearable
        defaultValue={parseDate('2026-11-03')}
      />,
      0,
    ],
    [
      'TimeField',
      <TimeField
        label='Tid'
        description='Beskrivning'
        isClearable
        defaultValue={parseTime('12:00')}
      />,
      0,
    ],
    [
      'DatePicker',
      <DatePicker
        label='Datum'
        description='Beskrivning'
        isClearable
        defaultValue={parseDate('2026-11-03')}
      />,
      0,
      /Open calendar/,
    ],
    [
      'DateRangePicker',
      <DateRangePicker
        label='Datum'
        description='Beskrivning'
      />,
      0,
      /Open calendar/,
    ],
    ['Calendar', <Calendar aria-label='Kalender' />, 0],
    [
      'Checkbox',
      <Checkbox description='Beskrivning'>
        Jag godkänner <Link href='#'>villkoren</Link>
      </Checkbox>,
      1,
    ],
    [
      'CheckboxGroup',
      <CheckboxGroup
        label='Grupp'
        description='Beskrivning'
        showSelectAll
      >
        <Checkbox value='ett'>Ett</Checkbox>
        <Checkbox value='två'>Två</Checkbox>
      </CheckboxGroup>,
      2,
    ],
    [
      'RadioGroup',
      <RadioGroup
        label='Grupp'
        description='Beskrivning'
      >
        <Radio value='ett'>
          Ett, <Link href='#'>läs mer</Link>
        </Radio>
      </RadioGroup>,
      1,
    ],
    [
      'Button',
      <Button>
        <Text>Etikett</Text>
      </Button>,
      1,
    ],
    [
      'Link',
      <Link href='#'>
        <Text>Etikett</Text>
      </Link>,
      1,
    ],
    [
      'LinkButton',
      <LinkButton href='#'>
        <Text>Etikett</Text>
      </LinkButton>,
      0,
    ],
    [
      'Modal',
      <DialogTrigger>
        <Button>Öppna</Button>
        <Modal title='Rubrik'>
          <Text>Innehåll</Text>
        </Modal>
      </DialogTrigger>,
      2,
      'Öppna',
    ],
    [
      'Card',
      <Card>
        <CardHeader
          heading='Rubrik'
          subHeading='Underrubrik'
        />
        <CardBody>
          <Text>Innehåll</Text>
        </CardBody>
      </Card>,
      1,
    ],
    [
      'AccordionItem',
      <AccordionItem
        title='Rubrik'
        defaultExpanded
      >
        <Text>Innehåll</Text>
      </AccordionItem>,
      1,
    ],
    [
      'InfoBanner',
      <InfoBanner
        type='info'
        title='Rubrik'
        message='Meddelande'
        isDismissable
      />,
      0,
    ],
    [
      'Tag',
      <TagGroup aria-label='Taggar'>
        <TagList>
          <Tag isDismissable>Tagg</Tag>
        </TagList>
      </TagGroup>,
      0,
    ],
    [
      'FileListItem',
      <FileList>
        <FileListItem
          fileName='fil.pdf'
          onDelete={vi.fn()}
        />
      </FileList>,
      0,
    ],
    [
      'Table',
      <Table
        aria-label='Tabell'
        selectionMode='multiple'
      >
        <TableHeader>
          <Column isRowHeader>Namn</Column>
        </TableHeader>
        <TableBody>
          <Row>
            <Cell>Rad</Cell>
          </Row>
        </TableBody>
      </Table>,
      0,
    ],
    ['FieldError', <FieldError isInvalid>Fel</FieldError>, 0],
  ]

  it.each(cases)(
    '%s should only pass them on to what the consumer rendered',
    async (_, component, expected, open) => {
      const { getByRole } = await render(
        <ConsumerContexts>{component}</ConsumerContexts>,
      )
      if (open) {
        await userEvent.click(getByRole('button', { name: open }).first())
      }
      expect(leaks()).toBe(expected)
    },
  )
})
