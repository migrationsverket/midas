import { render } from '@testing-library/react'

import { Layout } from './Layout'

describe('Sidebar', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <Layout
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