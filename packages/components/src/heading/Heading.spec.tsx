import { describe, expect, it } from 'vitest'
import { composeStories } from '@storybook/react-vite'
import * as stories from './Heading.stories'
import { render } from 'vitest-browser-react'

const {
  Heading1,
  Heading2,
  Heading3,
  ExpressiveHeading4,
  ExpressiveHeading5,
  ChangeSemanticElement,
} = composeStories(stories)

describe('given a Heading1', async () => {
  it('should match styles', async () => {
    const { getByRole } = await render(<Heading1 />)
    await expect.element(getByRole('heading', { level: 1 })).toHaveStyle({
      fontSize: '26px',
      lineHeight: '32px',
      fontWeight: '400',
      marginTop: '0',
      marginBottom: '0',
    })
  })
  describe('with isExpressive set to true', async () => {
    it('should match styles', async () => {
      const { getByRole } = await render(<Heading1 isExpressive />)
      await expect.element(getByRole('heading', { level: 1 })).toHaveStyle({
        fontSize: '36px',
        lineHeight: '48px',
        fontWeight: '400',
        marginTop: '0',
        marginBottom: '0',
      })
    })
  })
})
describe('given a Heading2', async () => {
  it('should match styles', async () => {
    const { getByRole } = await render(<Heading2 />)
    await expect.element(getByRole('heading', { level: 2 })).toHaveStyle({
      fontSize: '20px',
      lineHeight: '28px',
      fontWeight: '400',
      marginTop: '0',
      marginBottom: '0',
    })
  })
  describe('with isExpressive set to true', async () => {
    it('should match styles', async () => {
      const { getByRole } = await render(<Heading2 isExpressive />)
      await expect.element(getByRole('heading', { level: 2 })).toHaveStyle({
        fontSize: '26px',
        lineHeight: '34px',
        fontWeight: '500',
        marginTop: '0',
        marginBottom: '0',
      })
    })
  })
})
describe('given a Heading3', async () => {
  it('should match styles', async () => {
    const { getByRole } = await render(<Heading3 />)
    await expect.element(getByRole('heading', { level: 3 })).toHaveStyle({
      fontSize: '16px',
      lineHeight: '24px',
      fontWeight: '600',
      marginTop: '0',
      marginBottom: '0',
    })
  })
  describe('with isExpressive set to true', async () => {
    it('should match styles', async () => {
      const { getByRole } = await render(<Heading3 isExpressive />)
      await expect.element(getByRole('heading', { level: 3 })).toHaveStyle({
        fontSize: '20px',
        lineHeight: '28px',
        fontWeight: '600',
        marginTop: '0',
        marginBottom: '0',
      })
    })
  })
})
describe('given an ExpressiveHeading4', async () => {
  it('should match styles', async () => {
    const { getByRole } = await render(<ExpressiveHeading4 />)
    await expect.element(getByRole('heading', { level: 4 })).toHaveStyle({
      fontSize: '18px',
      lineHeight: '26px',
      fontWeight: '600',
      marginTop: '0',
      marginBottom: '0',
    })
  })
})
describe('given an ExpressiveHeading5', async () => {
  it('should match styles', async () => {
    const { getByRole } = await render(<ExpressiveHeading5 />)
    await expect.element(getByRole('heading', { level: 5 })).toHaveStyle({
      fontSize: '16px',
      lineHeight: '24px',
      fontWeight: '600',
      marginTop: '0',
      marginBottom: '0',
    })
  })
})
describe('given a Heading with a changed semantic element', async () => {
  it('should match styles', async () => {
    const { getByRole } = await render(<ChangeSemanticElement />)
    await expect.element(getByRole('heading', { level: 1 })).toHaveStyle({
      fontSize: '16px',
      lineHeight: '24px',
      fontWeight: '600',
    })
  })
})
