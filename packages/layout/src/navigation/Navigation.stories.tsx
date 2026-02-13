import type { Meta, StoryObj } from '@storybook/react-vite'
import { Navigation } from '.'
import {
  Bell,
  BookOpen,
  Briefcase,
  FileText,
  HelpCircle,
  House,
  IdCard,
  Mail,
  Phone,
  Plus,
  Save,
  Send,
  User,
} from 'lucide-react'
import { Badge, BadgeContainer } from '@midas-ds/components'

type Story = StoryObj<typeof Navigation>

export default {
  component: Navigation,
  title: 'Components/Layout/Navigation',
  tags: ['autodocs'],
} satisfies Meta<typeof Navigation>

export const Primary: Story = {
  args: {
    children: (
      <>
        <Navigation.Link
          href='/'
          title='Hem'
          isActive
        >
          <House />
        </Navigation.Link>
        <Navigation.SubMenu>
          <Navigation.Link
            href='/ansokningar'
            title='Ansökningar'
          >
            <FileText />
          </Navigation.Link>
          <Navigation.SubMenu>
            <Navigation.Link
              href='/ansokningar/ny-ansokning'
              title='Skapa ny ansökning'
            >
              <Plus />
            </Navigation.Link>
            <Navigation.Link
              href='/ansokningar/utkast'
              title='Sparade utkast'
            >
              <Save />
            </Navigation.Link>
            <Navigation.Link
              href='/ansokningar/skickade'
              title='Skickade ansökningar'
            >
              <Send />
            </Navigation.Link>
          </Navigation.SubMenu>
        </Navigation.SubMenu>

        <Navigation.SubMenu title='Dokument och ID'>
          <Navigation.Link
            href='/dokument/id-handling'
            title='ID-handlingar'
          >
            <IdCard />
          </Navigation.Link>
          <Navigation.SubMenu>
            <Navigation.Link
              href='/dokument/uppehallstillstand/arbetstillstand'
              title='Arbetstillstånd'
            >
              <Briefcase />
            </Navigation.Link>
            <Navigation.Link
              href='/dokument/uppehallstillstand/studiestillstand'
              title='Studiestillstånd'
            >
              <BookOpen />
            </Navigation.Link>
          </Navigation.SubMenu>
        </Navigation.SubMenu>

        <Navigation.SubMenu title='Konto och inställningar'>
          <Navigation.Link
            href='/konto/profil'
            title='Min profil'
          >
            <User />
          </Navigation.Link>
          <Navigation.Link
            href='/konto/kontaktuppgifter'
            title='Kontaktuppgifter'
          >
            <Phone />
          </Navigation.Link>
          <Navigation.Link
            href='/konto/meddelanden'
            title='Meddelanden'
            aria-label='3 olästa meddelanden'
          >
            <BadgeContainer>
              <Bell />
              <Badge>3</Badge>
            </BadgeContainer>
          </Navigation.Link>
        </Navigation.SubMenu>
        <Navigation.Link
          href='/hjalp'
          title='Hjälp och support'
        >
          <HelpCircle />
        </Navigation.Link>
        <Navigation.Link
          href='/kontakt'
          title='Kontakta oss'
        >
          <Mail />
        </Navigation.Link>
      </>
    ),
  },
}
