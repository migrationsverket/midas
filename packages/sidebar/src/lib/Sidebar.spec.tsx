import { render } from '@testing-library/react'

import { Sidebar } from './sidebar'

describe('Sidebar', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <Sidebar
        items={[]}
        title={''}
        children={undefined}
        headerChildren={undefined}
        user={{ name: '', title: '' }}
        app={{
          name: '',
          shortName: '',
          color: undefined
        }}
      />
    )
    expect(baseElement).toBeTruthy()
  })
})
