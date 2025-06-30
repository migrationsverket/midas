import * as React from 'react'
import { Key, useLocale } from 'react-aria'
import { I18nProvider } from 'react-aria'
import { parseDate } from '@internationalized/date'
import {
  Table,
  TableHeader,
  TableBody,
  Row,
  Column,
  Cell,
  DateField,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
} from '@midas-ds/components'

export const LocaleExample = () => {
  const { locale, direction } = useLocale()
  return (
    <div
      lang={locale}
      dir={direction}
    >
      <Table>
        <TableHeader>
          <Column isRowHeader>Nuvarande språk</Column>
          <Column>Nuvarande textriktning</Column>
        </TableHeader>
        <TableBody>
          <Row>
            <Cell>{locale}</Cell>
            <Cell>{direction}</Cell>
          </Row>
        </TableBody>
      </Table>
    </div>
  )
}

export const I18nExample = () => {
  const [locale, setLocale] = React.useState<Set<Key>>(new Set(['fr-FR']))

  return (
    <>
      <ToggleButtonGroup
        style={{ marginBottom: '1rem' }}
        selectionMode='single'
        selectedKeys={locale}
        onSelectionChange={selectedLocale => setLocale(selectedLocale)}
      >
        <ToggleButton id='fr-FR'>Français</ToggleButton>
        <ToggleButton id='sv'>Svenska</ToggleButton>
        <ToggleButton id='en'>English</ToggleButton>
      </ToggleButtonGroup>
      <div
        lang={locale.keys().next().value?.toString()}
        dir='ltr'
      >
        <I18nProvider locale={locale.keys().next().value?.toString()}>
          <CurrentDate />
        </I18nProvider>
      </div>
    </>
  )
}

function CurrentDate() {
  return (
    <DateField
      defaultValue={parseDate('2025-02-28')}
      label='Datumväljare'
      description='Format kan styras med i18nProvider'
    />
  )
}

export const ErrorMessageExample = () => {
  return (
    <TextField
      label='Skriv e-post'
      type='email'
      description='Validering och felmeddelanden beror av inställningarna i webbläsaren'
    />
  )
}
