import { Heading, Text } from '@midas-ds/components'

const meta = {
  title: 'Examples/Typography',
  tags: ['autodocs'],
}

export default meta

export const Example = {
  render: () => (
    <>
      <Heading
        enableMargins
        level={1}
      >
        Om Migrationsverket
      </Heading>
      <Text elementType='p'>
        Migrationsverket ansvarar för att pröva ansökningar från personer som
        vill bosätta sig i Sverige, komma på besök, söka skydd eller bli svenska
        medborgare. Vi är en stor myndighet med medarbetare över hela landet.
      </Text>
      <Heading
        enableMargins
        level={2}
      >
        Det här gör Migrationsverket
      </Heading>
      <Text elementType='p'>
        I Migrationsverkets uppdrag ingår, utöver att pröva ansökningar för
        personer som söker sig till Sverige, bland annat att erbjuda boende till
        asylsökande, att betala ut statlig ersättning till kommuner och regioner
        och att säkerställa ett effektivt mottagande och återvändande. Vi ska
        bidra till en långsiktigt hållbar migration till Sverige och till ett
        konkurrenskraftigt Sverige.
      </Text>
      <Text elementType='p'>
        Regering och riksdag är våra uppdragsgivare och vår verksamhet regleras
        genom lagar och förordningar och ett regleringsbrev som vi får från
        regeringen varje år.
      </Text>
      <Heading
        enableMargins
        level={3}
      >
        Huvudsakliga områden
      </Heading>
      <Text>Arbeta</Text>
    </>
  ),
}
