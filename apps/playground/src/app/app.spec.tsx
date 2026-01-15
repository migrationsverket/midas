import { describe, expect, it } from 'vitest'
import { render } from 'vitest-browser-react'
import App from './app'

describe('App', () => {
  it('should render successfully', async () => {
    const { container } = await render(<App />)
    expect(container).toBeTruthy()
  })
})
