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
          icon={<House />}
          isActive
        >
          Hem
        </NavigationLink>
        <NavigationSubMenu>
          <NavigationLink
            href='/ansokningar'
            icon={<FileText />}
          >
            Ansökningar
          </NavigationLink>
          <NavigationSubMenu>
            <NavigationLink
              href='/ansokningar/ny-ansokning'
              icon={<Plus />}
            >
              Skapa ny ansökning
            </NavigationLink>
            <NavigationLink
              href='/ansokningar/utkast'
              icon={<Save />}
            >
              Sparade utkast
            </NavigationLink>
            <NavigationLink
              href='/ansokningar/skickade'
              icon={<Send />}
            >
              Skickade ansökningar
            </NavigationLink>
          </NavigationSubMenu>
        </NavigationSubMenu>

        <NavigationSubMenu>
          <NavigationLink
            href='/dokument/id-handling'
            icon={<IdCard />}
          >
            ID-handlingar
          </NavigationLink>
          <NavigationSubMenu>
            <NavigationLink
              href='/dokument/uppehallstillstand/arbetstillstand'
              icon={<Briefcase />}
            >
              Arbetstillstånd
            </NavigationLink>
            <NavigationLink
              href='/dokument/uppehallstillstand/studiestillstand'
              icon={<BookOpen />}
            >
              Studiestillstånd
            </NavigationLink>
          </NavigationSubMenu>
        </NavigationSubMenu>

        <NavigationSubMenu>
          <NavigationLink
            href='/konto/profil'
            icon={<User />}
          >
            Min profil
          </NavigationLink>
          <NavigationLink
            href='/konto/kontaktuppgifter'
            icon={<Phone />}
          >
            Kontaktuppgifter
          </NavigationLink>
          <NavigationLink
            href='/konto/meddelanden'
            icon={
              <BadgeContainer>
                <Bell />
                <Badge>3</Badge>
              </BadgeContainer>
            }
            aria-label='3 olästa meddelanden'
          >
            Meddelanden
          </NavigationLink>
        </NavigationSubMenu>
        <NavigationLink
          href='/hjalp'
          icon={<HelpCircle />}
        >
          Hjälp och support
        </NavigationLink>
        <NavigationLink
          href='/kontakt'
          icon={<Mail />}
        >
          Kontakta oss
        </NavigationLink>
      </>
    ),
  },
}
