# Formulär

import { TextField } from '@midas-ds/components'
import { Flex, FlexItem } from '@midas-ds/components'
import LiveCodeBlock from '@site/src/components/CodeBlock/CodeBlock'

## Obligatorisk vs valfri

Huvudregeln är att bara fråga användaren om uppgifter som är nödvändiga för att ta ett beslut eller liknande.
Följer vi den regeln faller det sig naturligt att de flesta fält i ett formulär är obligatoriska. Det ger oss grundregeln: Vi markerar endast eventuella valfria fält med texten `”(valfritt)”`.

<LiveCodeBlock hideCode scope={{ Flex, FlexItem, TextField }}>
  {`<Flex>
  <FlexItem col="fluid">
  <TextField
    label="Skriv ditt fullständiga namn"
    description="Både för och efternamn"
    isRequired
    errorMessage="Detta är ett obligatoriskt fält"
/>
  </FlexItem>
  <FlexItem col="fluid">
  <TextField
    label="Skriv dina favoritfrukter (Valfritt)"
    description="Du kan lämna fältet tomt om du inte har någon favoritfrukt"
/>
 </FlexItem>
</Flex>`}
</LiveCodeBlock>




### Undantag 1: Valfria fält är fler än de obligatoriska
Markera obligatoriska fält med svart asterisk och informera över formuläret att obligatoriska fält markeras med en asterisk.

### Undantag 2: Valfria fält och obligatoriska fält är (ungefär) lika många
Markera valfria fält med ”(valfritt)” och obligatoriska fält med svart asterisk och informera över formuläret att obligatoriska fält
markeras med en asterisk.

