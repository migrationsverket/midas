import type { Meta, StoryObj } from '@storybook/react-vite'
import { CheckCircle, EllipsisVertical, Pen, X } from 'lucide-react'
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardImage,
  CardLink,
  CardTitle,
} from './Card'
import { Text } from '../text'
import { Button } from '../button'
import { Label } from '../label'
import { AnchorHTMLAttributes, DetailedHTMLProps } from 'react'
import { Menu, MenuItem, MenuPopover, MenuTrigger } from '../menu'
import { CardHeader } from './card-header'
import { CardBody } from './card-body'

const meta: Meta<typeof Card> = {
  component: Card,
  subcomponents: {
    CardHeader,
    CardBody,
    CardActions,
    CardImage,
    CardLink,
    CardContent,
    CardTitle,
    CardActionArea,
  },
  title: 'Components/Card',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
}

export default meta
type Story = StoryObj<typeof Card>

// ─── New API (CardHeader + CardBody) ─────────────────────────────────────────

export const Example: Story = {
  render: args => (
    <Card {...args}>
      <CardHeader
        heading='Sven Svensson'
        subHeading='Designer på Migrationsverket'
      />
      <CardBody>
        <Text>Prata med Sven om du har frågor om design tokens.</Text>
      </CardBody>
      <CardActions>
        <Button variant='secondary'>Boka möte</Button>
      </CardActions>
    </Card>
  ),
}

export const WithHeaderAndBody: Story = {
  render: args => (
    <Card {...args}>
      <CardHeader
        heading='En rubrik'
        subHeading='En underrubrik'
      />
      <CardBody>
        <Text>Kortets innehåll. Det kan vara text, grafik, ikoner mm.</Text>
      </CardBody>
      <CardActions>
        <Button variant='secondary'>Knapp</Button>
      </CardActions>
    </Card>
  ),
}

export const WithHeaderImageAndBody: Story = {
  tags: ['!snapshot'],
  render: args => (
    <Card {...args}>
      <CardHeader
        heading='En rubrik'
        subHeading='En underrubrik'
      >
        <MenuTrigger>
          <Button
            aria-label='Meny'
            variant='icon'
          >
            <EllipsisVertical size={20} />
          </Button>
          <MenuPopover>
            <Menu>
              <MenuItem id='si'>Gör si</MenuItem>
              <MenuItem id='så'>Gör så</MenuItem>
            </Menu>
          </MenuPopover>
        </MenuTrigger>
      </CardHeader>
      <CardImage src='https://www.migrationsverket.se/images/18.2cd2e409193b84c506a2f3bd/1738673319397/Handlaggare_pa_Migrationsverket_gar_igenom_ansokan_man.png' />
      <CardBody>
        <Text>Kortets innehåll. Det kan vara text, grafik, ikoner mm.</Text>
      </CardBody>
      <CardActions>
        <Button variant='secondary'>Knapp</Button>
      </CardActions>
    </Card>
  ),
}

export const WithImageHeaderAndBody: Story = {
  tags: ['!snapshot'],
  render: args => (
    <Card {...args}>
      <CardImage src='https://www.migrationsverket.se/images/18.2cd2e409193b84c506a2f3bd/1738673319397/Handlaggare_pa_Migrationsverket_gar_igenom_ansokan_man.png' />
      <CardHeader
        heading='En rubrik'
        subHeading='En underrubrik'
      />
      <CardBody>
        <Text>Kortets innehåll. Det kan vara text, grafik, ikoner mm.</Text>
      </CardBody>
      <CardActions>
        <Button variant='secondary'>Knapp</Button>
      </CardActions>
    </Card>
  ),
}

const LabelValuePair = ({ label, value }: Record<string, string>) => (
  <div style={{ display: 'flex', flexDirection: 'column' }}>
    <Label>{label}</Label>
    <Text>{value}</Text>
  </div>
)

export const WithCustomBody: Story = {
  render: args => (
    <Card {...args}>
      <CardHeader
        heading='Sällskaps och anknytningsutredning'
        subHeading='En utredning att göra'
      />
      <CardBody
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <LabelValuePair
          label='Datum'
          value='20260102'
        />
        <LabelValuePair
          label='Handläggare'
          value='AscDec'
        />
        <Button variant='icon'>
          <CheckCircle />
        </Button>
      </CardBody>
    </Card>
  ),
}

export const CardWithImageAndAction: Story = {
  tags: ['!snapshot'],
  render: args => (
    <Card {...args}>
      <CardHeader
        heading='Nils i Bagarmossen'
        subHeading='Säljare'
      />
      <CardImage src='https://www.migrationsverket.se/images/18.2cd2e409193b84c506a2f3bd/1738673319397/Handlaggare_pa_Migrationsverket_gar_igenom_ansokan_man.png' />
      <CardActions>
        <Button variant='secondary'>Boka möte med Nils</Button>
      </CardActions>
    </Card>
  ),
}

export const CardLinkWithMenuTrigger: Story = {
  tags: ['!snapshot'],
  render: args => (
    <Card
      {...args}
      style={{ maxWidth: 360 }}
    >
      <CardHeader
        heading='Ansökan 2024-001'
        subHeading='Status: Under handläggning'
      >
        <MenuTrigger>
          <Button
            aria-label='Fler alternativ'
            variant='icon'
          >
            <EllipsisVertical size={20} />
          </Button>
          <MenuPopover>
            <Menu>
              <MenuItem id='edit'>Redigera</MenuItem>
              <MenuItem id='delete'>Ta bort</MenuItem>
            </Menu>
          </MenuPopover>
        </MenuTrigger>
      </CardHeader>
      <CardBody>
        <Text>Kortets innehåll.</Text>
      </CardBody>
      <CardLink href='#'>Visa detaljer</CardLink>
    </Card>
  ),
}

// ─── Legacy API (CardContent) — kept for backward compat ─────────────────────

export const LegacyExample: Story = {
  tags: ['!autodocs', '!dev'],
  args: {
    children: (
      <CardContent>
        <CardTitle>Dina uppgifter</CardTitle>
        <Text>Namn: Namn Namnsson</Text>
        <CardActions>
          <Button
            variant='icon'
            icon={Pen}
          >
            Redigera
          </Button>
        </CardActions>
      </CardContent>
    ),
  },
}

export const LegacyWithActions: Story = {
  tags: ['!autodocs', '!dev'],
  args: {
    children: (
      <CardContent>
        <CardTitle>Dina uppgifter</CardTitle>
        <Text>Namn: Namn Namnsson</Text>
        <CardActions>
          <Button
            variant='icon'
            icon={Pen}
          >
            Ändra
          </Button>
          <Button
            variant='icon'
            icon={X}
          >
            Avbryt
          </Button>
        </CardActions>
      </CardContent>
    ),
  },
}

export const LegacyWithPrimaryAction: Story = {
  tags: ['!autodocs', '!dev'],
  args: {
    children: (
      <>
        <CardActionArea
          onPress={() => {
            return
          }}
        >
          <CardContent>
            <CardTitle>Dina uppgifter</CardTitle>
            <Text>Namn: Namn Namnsson</Text>
          </CardContent>
        </CardActionArea>
        <CardContent>
          <CardActions>
            <Button
              variant='icon'
              icon={Pen}
            >
              Ändra
            </Button>
            <Button
              variant='icon'
              icon={X}
            >
              Avbryt
            </Button>
          </CardActions>
        </CardContent>
      </>
    ),
  },
}

export const LegacyWithLink: Story = {
  tags: ['!autodocs', '!dev'],
  args: {
    children: (
      <CardContent>
        <CardLink href='#'>
          <CardTitle>Dina uppgifter</CardTitle>
        </CardLink>
        <Text>Namn: Namn Namnsson</Text>
      </CardContent>
    ),
  },
}

const CustomLink = (
  props: DetailedHTMLProps<
    AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  >,
) => <a {...props}>{props.children}</a>

export const LegacyWithCustomLink: Story = {
  tags: ['!autodocs', '!dev'],
  args: {
    children: (
      <CardContent>
        <CardLink
          as={CustomLink}
          href='#'
        >
          <CardTitle>Dina uppgifter</CardTitle>
        </CardLink>
        <Text>Namn: Namn Namnsson</Text>
      </CardContent>
    ),
  },
}

export const LegacyWithImage: Story = {
  tags: ['!autodocs', '!dev'],
  args: {
    style: { maxWidth: 300 },
    children: (
      <>
        <CardImage
          src='https://www.migrationsverket.se/images/18.2cd2e409193b84c506a2f3bd/1738673319397/Handlaggare_pa_Migrationsverket_gar_igenom_ansokan_man.png'
          alt='Ananas'
        />
        <CardContent>
          <CardLink href='#'>
            <CardTitle>Dina uppgifter</CardTitle>
          </CardLink>
          <Text>Namn: Namn Namnsson</Text>
        </CardContent>
      </>
    ),
  },
}

export const LegacyWithContainedImage: Story = {
  tags: ['!autodocs', '!dev'],
  args: {
    style: { maxWidth: 300 },
    children: (
      <CardContent>
        <CardLink href='#'>
          <CardTitle>Dina uppgifter</CardTitle>
        </CardLink>{' '}
        <CardImage
          src='https://www.migrationsverket.se/images/18.2cd2e409193b84c506a2f3bd/1738673319397/Handlaggare_pa_Migrationsverket_gar_igenom_ansokan_man.png'
          alt='Ananas'
        />
        <Text>Namn: Namn Namnsson</Text>
      </CardContent>
    ),
  },
}
