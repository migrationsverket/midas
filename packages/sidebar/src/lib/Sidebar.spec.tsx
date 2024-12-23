import { render } from '@testing-library/react'

import { Sidebar } from './sidebar'

describe('Sidebar', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <Sidebar
        items={[]}
        title={''}
        children={undefined}
        user={{ name: '', title: '' }}
      />
    )
    expect(baseElement).toBeTruthy()
  })
})
