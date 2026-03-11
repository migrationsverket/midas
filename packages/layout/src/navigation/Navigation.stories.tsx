import type { Meta, StoryObj } from '@storybook/react-vite'
import { Navigation, NavigationLink, NavigationSubMenu } from '.'
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
        <NavigationLink
          href='/'
          title='Hem'
          isActive
        >
          <House />
        </NavigationLink>
        <NavigationSubMenu>
          <NavigationLink
            href='/ansokningar'
            title='Ansökningar'
          >
            <FileText />
          </NavigationLink>
          <NavigationSubMenu>
            <NavigationLink
              href='/ansokningar/ny-ansokning'
              title='Skapa ny ansökning'
            >
              <Plus />
            </NavigationLink>
            <NavigationLink
              href='/ansokningar/utkast'
              title='Sparade utkast'
            >
              <Save />
            </NavigationLink>
            <NavigationLink
              href='/ansokningar/skickade'
              title='Skickade ansökningar'
            >
              <Send />
            </NavigationLink>
          </NavigationSubMenu>
        </NavigationSubMenu>

        <NavigationSubMenu>
          <NavigationLink
            href='/dokument/id-handling'
            title='ID-handlingar'
          >
            <IdCard />
          </NavigationLink>
          <NavigationSubMenu>
            <NavigationLink
              href='/dokument/uppehallstillstand/arbetstillstand'
              title='Arbetstillstånd'
            >
              <Briefcase />
            </NavigationLink>
            <NavigationLink
              href='/dokument/uppehallstillstand/studiestillstand'
              title='Studiestillstånd'
            >
              <BookOpen />
            </NavigationLink>
          </NavigationSubMenu>
        </NavigationSubMenu>

        <NavigationSubMenu>
          <NavigationLink
            href='/konto/profil'
            title='Min profil'
          >
            <User />
          </NavigationLink>
          <NavigationLink
            href='/konto/kontaktuppgifter'
            title='Kontaktuppgifter'
          >
            <Phone />
          </NavigationLink>
          <NavigationLink
            href='/konto/meddelanden'
            title='Meddelanden'
            aria-label='3 olästa meddelanden'
          >
            <BadgeContainer>
              <Bell />
              <Badge>3</Badge>
            </BadgeContainer>
          </NavigationLink>
        </NavigationSubMenu>
        <NavigationLink
          href='/hjalp'
          title='Hjälp och support'
        >
          <HelpCircle />
        </NavigationLink>
        <NavigationLink
          href='/kontakt'
          title='Kontakta oss'
        >
          <Mail />
        </NavigationLink>
      </>
    ),
  },
}
