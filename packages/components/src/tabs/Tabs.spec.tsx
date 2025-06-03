import { render } from '@testing-library/react'

import { Tabs, TabsProps } from './Tabs'
import { Button } from '../button'

describe('Tabs', () => {
  it('should render successfully', () => {
    const args = {
      defaultSelectedKey: 'Viktigt att veta',
      label: 'Följ processen',
      tabs: ['Processen', 'Viktigt att veta', 'Ansök'],
    } satisfies Partial<TabsProps>
    const { baseElement } = render(
      <Tabs
        defaultSelectedKey={args.defaultSelectedKey}
        label={args.label}
        tabs={args.tabs}
      >
        <div>
          Processen går till såhär Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Asperiores expedita, excepturi, hic modi tenetur
          maxime dicta omnis aliquam quas doloremque cumque repellendus iure.
          Eveniet reprehenderit sapiente quidem culpa nam? Vel?
        </div>
        <div>
          Det är viktigt att veta att Lorem, ipsum dolor sit amet consectetur
          adipisicing elit. Ipsum veritatis quisquam amet, rem aperiam error
          nostrum earum consequuntur quidem fugit. Blanditiis odit corrupti
          consequatur nam culpa nesciunt cupiditate autem suscipit.
        </div>
        <div>
          Ansök här: <Button>Ansök</Button>
        </div>
      </Tabs>,
    )
    expect(baseElement).toBeTruthy()
  })
})
