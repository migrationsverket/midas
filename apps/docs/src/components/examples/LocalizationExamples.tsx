import * as React from 'react'
import { useLocale } from 'react-aria'
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
  Button,
  TextField,
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
  const [locale, setLocale] = React.useState<string>('fr-Fr')
  return (
    <>
      <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
        <Button
          onPress={() => setLocale('fr-Fr')}
          variant={locale === 'fr-Fr' ? 'primary' : 'secondary'}
        >
          Français
        </Button>
        <Button
          onPress={() => setLocale('sv-Sv')}
          variant={locale === 'sv-Sv' ? 'primary' : 'secondary'}
        >
          Svenska
        </Button>
        <Button
          onPress={() => setLocale('en-En')}
          variant={locale === 'en-En' ? 'primary' : 'secondary'}
        >
          English
        </Button>
      </div>
      <div lang={locale}>
        <I18nProvider locale={locale}>
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
      label={'Datumväljare'}
      description={'Format kan styras med i18nProvider'}
    ></DateField>
  )
}

export const ErrorMessageExample = () => {
  return (
    <TextField
      label={'Skriv e-post'}
      type={'email'}
      description={
        'Validering/Felmeddelanden beror av inställningarna i browser'
      }
    />
  )
}
