import { Bell, HelpCircle, MoreHorizontal, Settings, User } from 'lucide-react'
import { Menu, MenuItem, MenuPopover, MenuTrigger } from '@midas-ds/components'
import { useMediaQuery } from '@react-spectrum/utils'
import {
  Header,
  HeaderAction,
  HeaderActions,
  HeaderLogo,
  HeaderTitle,
  Layout,
  LayoutContent,
  Main,
} from '@midas-ds/layout'

const collapsibleActions = [
  { id: 'profile', label: 'Min profil', icon: <User size={20} /> },
  { id: 'settings', label: 'Inställningar', icon: <Settings size={20} /> },
  { id: 'help', label: 'Hjälp', icon: <HelpCircle size={20} /> },
]

export default function HeaderOverflowExample() {
  const isNarrow = useMediaQuery('(max-width: 700px)')

  return (
    <Layout>
      <Header>
        <HeaderLogo />
        <HeaderTitle>Mitt system</HeaderTitle>
        <HeaderActions>
          <HeaderAction icon={<Bell size={20} />}>Notiser</HeaderAction>
          {isNarrow ? (
            <MenuTrigger>
              <HeaderAction aria-label='Fler alternativ' icon={<MoreHorizontal size={20} />} />
              <MenuPopover>
                <Menu>
                  {collapsibleActions.map(action => (
                    <MenuItem key={action.id} id={action.id}>
                      {action.label}
                    </MenuItem>
                  ))}
                </Menu>
              </MenuPopover>
            </MenuTrigger>
          ) : (
            collapsibleActions.map(action => (
              <HeaderAction key={action.id} icon={action.icon}>
                {action.label}
              </HeaderAction>
            ))
          )}
        </HeaderActions>
      </Header>
      <LayoutContent>
        <Main>
          <div style={{ height: '100%', border: 'dashed 2px var(--midas-border-color-subtle)', borderRadius: 4, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--midas-text-subtle)' }}>App-innehåll</div>
        </Main>
      </LayoutContent>
    </Layout>
  )
}
