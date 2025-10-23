import { describe, expect, it, beforeEach } from 'vitest'
import { composeStories } from '@storybook/react-vite'
import { page } from '@vitest/browser/context'
import * as stories from './Heading.stories'

const {
  Heading1,
  Heading2,
  Heading3,
  ExpressiveHeading4,
  ExpressiveHeading5,
  ChangeSemanticElement,
} = composeStories(stories)

describe('given a Heading1', async () => {
  beforeEach(async () => {
    await Heading1.run()
  })

  it('should match styles', async () => {
    expect(page.getByRole('heading', { level: 1 })).toHaveStyle({
      fontSize: '26px',
      lineHeight: '32px',
      fontWeight: '400',
      marginTop: '0',
      marginBottom: '0',
    })
  })

  describe('with isExpressive set to true', async () => {
    beforeEach(async () => {
      await Heading1.run({
        args: {
          ...Heading1.args,
          isExpressive: true,
        },
      })
    })
    it('should match styles', async () => {
      expect(page.getByRole('heading', { level: 1 })).toHaveStyle({
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
  beforeEach(async () => {
    await Heading2.run()
  })

  it('should match styles', async () => {
    expect(page.getByRole('heading', { level: 2 })).toHaveStyle({
      fontSize: '20px',
      lineHeight: '28px',
      fontWeight: '400',
      marginTop: '0',
      marginBottom: '0',
    })
  })

  describe('with isExpressive set to true', async () => {
    beforeEach(async () => {
      await Heading2.run({
        args: {
          ...Heading2.args,
          isExpressive: true,
        },
      })
    })
    it('should match styles', async () => {
      expect(page.getByRole('heading', { level: 2 })).toHaveStyle({
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
  beforeEach(async () => {
    await Heading3.run()
  })

  it('should match styles', async () => {
    expect(page.getByRole('heading', { level: 3 })).toHaveStyle({
      fontSize: '16px',
      lineHeight: '24px',
      fontWeight: '600',
      marginTop: '0',
      marginBottom: '0',
    })
  })

  describe('with isExpressive set to true', async () => {
    beforeEach(async () => {
      await Heading3.run({
        args: {
          ...Heading3.args,
          isExpressive: true,
        },
      })
    })
    it('should match styles', async () => {
      expect(page.getByRole('heading', { level: 3 })).toHaveStyle({
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
  beforeEach(async () => {
    await ExpressiveHeading4.run()
  })

  it('should match styles', async () => {
    expect(page.getByRole('heading', { level: 4 })).toHaveStyle({
      fontSize: '18px',
      lineHeight: '26px',
      fontWeight: '600',
      marginTop: '0',
      marginBottom: '0',
    })
  })
})

describe('given an ExpressiveHeading5', async () => {
  beforeEach(async () => {
    await ExpressiveHeading5.run()
  })

  it('should match styles', async () => {
    expect(page.getByRole('heading', { level: 5 })).toHaveStyle({
      fontSize: '16px',
      lineHeight: '24px',
      fontWeight: '600',
      marginTop: '0',
      marginBottom: '0',
    })
  })
})

describe('given a Heading with a changed semantic element', async () => {
  beforeEach(async () => {
    await ChangeSemanticElement.run()
  })

  it('should match styles', async () => {
    expect(page.getByRole('heading', { level: 1 })).toHaveStyle({
      fontSize: '16px',
      lineHeight: '24px',
      fontWeight: '600',
    })
  })
})
