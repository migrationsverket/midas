import { render } from 'vitest-browser-react'

// TODO: rendering the TextField component throws an error
describe('given a basic div', () => {
  it('should render successfully', async () => {
    const view = render(<div>derp</div>)
    await expect.element(view.getByText('derp')).toBeVisible()
  });
});
