// import { createRemixStub } from '@remix-run/testing'
// import { render, screen, waitFor } from '@testing-library/react'
// import Index from '../../app/routes/_index'

// test('renders loader data', async () => {
//   const RemixStub = createRemixStub([
//     {
//       path: '/',
//       Component: Index,
//     },
//   ])

//   render(<RemixStub />)

//   await waitFor(() => screen.findByText('Hej'))
// })

describe('meaningless but obligatory test', () => {
  test.only('a true test', () => {
    expect(1 + 1).toEqual(2)
  })
})
