import { render } from '@testing-library/react'

import { Layout } from './'

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
          color: undefined,
        }}
        variant='internal'
      />,
    )
    expect(baseElement).toBeTruthy()
  })
})
