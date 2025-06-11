/**
 * src: https://github.com/radix-ui/primitives/blob/main/packages/react/accordion/src/Accordion.test.tsx
 */

import * as React from 'react'
import { axe } from 'jest-axe'
import { render, RenderResult, screen } from '@testing-library/react'
import { Accordion, AccordionItem } from './'

const ITEMS = ['One', 'Two', 'Three']
const testID = 'Accordion'
const testClass = 'test'

describe('given a single Accordion', () => {
  describe('with default orientation=vertical', () => {
    beforeEach(() => {
      render(
        <AccordionTest
          variant='uncontained'
          data-testid={testID}
          className={testClass}
        />,
      )
    })

    it('should have no accessibility violations in default state', async () => {
      expect(await axe(screen.getByTestId(testID))).toHaveNoViolations()
    })

    it('should preserve its classNames when being passed new ones', async () => {
      expect(screen.getByTestId(testID)).toHaveClass('root', testClass)
    })

    // describe('when navigating by keyboard', () => {
    //   beforeEach(() => {
    //     const trigger = rendered.getByText('Trigger One')
    //     trigger.focus()
    //   })

    //   describe('on `ArrowDown`', () => {
    //     it('should move focus to the next trigger', () => {
    //       fireEvent.keyDown(document.activeElement!, { key: 'ArrowDown' })
    //       expect(rendered.getByText('Trigger Two')).toHaveFocus()
    //     })

    //     it('should move focus to the first item if at the end', () => {
    //       const trigger = rendered.getByText('Trigger Three')
    //       trigger.focus()
    //       fireEvent.keyDown(document.activeElement!, { key: 'ArrowDown' })
    //       expect(rendered.getByText('Trigger One')).toHaveFocus()
    //     })
    //   })

    //   describe('on `ArrowUp`', () => {
    //     it('should move focus to the previous trigger', () => {
    //       const trigger = rendered.getByText('Trigger Three')
    //       trigger.focus()
    //       fireEvent.keyDown(document.activeElement!, { key: 'ArrowUp' })
    //       expect(rendered.getByText('Trigger Two')).toHaveFocus()
    //     })

    //     it('should move focus to the last item if at the beginning', () => {
    //       const trigger = rendered.getByText('Trigger One')
    //       trigger.focus()
    //       fireEvent.keyDown(document.activeElement!, { key: 'ArrowUp' })
    //       expect(rendered.getByText('Trigger Three')).toHaveFocus()
    //     })
    //   })

    //   describe('on `Home`', () => {
    //     it('should move focus to the first trigger', () => {
    //       fireEvent.keyDown(document.activeElement!, { key: 'Home' })
    //       expect(rendered.getByText('Trigger One')).toHaveFocus()
    //     })
    //   })

    //   describe('on `End`', () => {
    //     it('should move focus to the last trigger', () => {
    //       fireEvent.keyDown(document.activeElement!, { key: 'End' })
    //       expect(rendered.getByText('Trigger Three')).toHaveFocus()
    //     })
    //   })
    // })

    // describe('when clicking a trigger', () => {
    //   let trigger: HTMLElement
    //   let contentOne: HTMLElement | null

    //   beforeEach(() => {
    //     trigger = rendered.getByText('Trigger One')
    //     fireEvent.click(trigger)
    //     contentOne = rendered.getByText('Content One')
    //   })

    //   it('should show the content', () => {
    //     expect(contentOne).toBeVisible()
    //   })

    //   it('should have no accessibility violations', async () => {
    //     expect(await axe(rendered.container)).toHaveNoViolations()
    //   })

    //   it('should call onValueChange', () => {
    //     expect(handleValueChange).toHaveBeenCalledWith('One')
    //   })

    //   describe('then clicking the trigger again', () => {
    //     beforeEach(() => {
    //       fireEvent.click(trigger)
    //     })

    //     it('should not close the content', () => {
    //       expect(contentOne).toBeVisible()
    //     })

    //     it('should not call onValueChange', () => {
    //       expect(handleValueChange).toHaveBeenCalledTimes(1)
    //     })
    //   })

    //   describe('then clicking another trigger', () => {
    //     beforeEach(() => {
    //       const trigger = rendered.getByText('Trigger Two')
    //       fireEvent.click(trigger)
    //     })

    //     it('should show the new content', () => {
    //       const contentTwo = rendered.getByText('Content Two')
    //       expect(contentTwo).toBeVisible()
    //     })

    //     it('should call onValueChange', () => {
    //       expect(handleValueChange).toHaveBeenCalledWith('Two')
    //     })

    //     it('should hide the previous content', () => {
    //       expect(contentOne).not.toBeVisible()
    //     })
    //   })
    // })
  })
})

describe('given a multiple Accordion', () => {
  let rendered: RenderResult

  beforeEach(() => {
    rendered = render(<AccordionTest variant='uncontained' />)
  })

  it('should have no accessibility violations in default state', async () => {
    expect(await axe(rendered.container)).toHaveNoViolations()
  })

  // describe('when navigating by keyboard', () => {
  //   beforeEach(() => {
  //     rendered.getByText('Trigger One').focus()
  //   })

  //   describe('on `ArrowDown`', () => {
  //     it('should move focus to the next trigger', () => {
  //       fireEvent.keyDown(document.activeElement!, { key: 'ArrowDown' })
  //       expect(rendered.getByText('Trigger Two')).toHaveFocus()
  //     })
  //   })

  //   describe('on `ArrowUp`', () => {
  //     it('should move focus to the previous trigger', () => {
  //       fireEvent.keyDown(document.activeElement!, { key: 'ArrowUp' })
  //       expect(rendered.getByText('Trigger Three')).toHaveFocus()
  //     })
  //   })

  //   describe('on `Home`', () => {
  //     it('should move focus to the first trigger', () => {
  //       fireEvent.keyDown(document.activeElement!, { key: 'Home' })
  //       expect(rendered.getByText('Trigger One')).toHaveFocus()
  //     })
  //   })

  //   describe('on `End`', () => {
  //     it('should move focus to the last trigger', () => {
  //       fireEvent.keyDown(document.activeElement!, { key: 'End' })
  //       expect(rendered.getByText('Trigger Three')).toHaveFocus()
  //     })
  //   })
  // })

  // describe('when clicking a trigger', () => {
  //   let trigger: HTMLElement
  //   let contentOne: HTMLElement | null

  //   beforeEach(() => {
  //     trigger = rendered.getByText('Trigger One')
  //     fireEvent.click(trigger)
  //     contentOne = rendered.getByText('Content One')
  //   })

  //   it('should show the content', () => {
  //     expect(contentOne).toBeVisible()
  //   })

  //   it('should have no accessibility violations', async () => {
  //     expect(await axe(rendered.container)).toHaveNoViolations()
  //   })

  //   it('should call onValueChange', () => {
  //     expect(handleValueChange).toHaveBeenCalledWith(['One'])
  //   })

  //   describe('then clicking the trigger again', () => {
  //     beforeEach(() => {
  //       fireEvent.click(trigger)
  //     })

  //     it('should hide the content', () => {
  //       expect(contentOne).not.toBeVisible()
  //     })

  //     it('should call onValueChange', () => {
  //       expect(handleValueChange).toHaveBeenCalledWith([])
  //     })
  //   })

  //   describe('then clicking another trigger', () => {
  //     beforeEach(() => {
  //       const trigger = rendered.getByText('Trigger Two')
  //       fireEvent.click(trigger)
  //     })

  //     it('should show the new content', () => {
  //       const contentTwo = rendered.getByText('Content Two')
  //       expect(contentTwo).toBeVisible()
  //     })

  //     it('should call onValueChange', () => {
  //       expect(handleValueChange).toHaveBeenCalledWith(['One', 'Two'])
  //     })

  //     it('should not hide the previous content', () => {
  //       expect(contentOne).toBeVisible()
  //     })
  //   })
  // })
})

const AccordionTest = (props: React.ComponentProps<typeof Accordion>) => (
  <Accordion {...props}>
    {ITEMS.map(item => (
      <AccordionItem
        key={item}
        title={'En öppningsbar panel ' + item.toLocaleLowerCase()}
      >
        Innehåll i öppningsbarpanel {item}
      </AccordionItem>
    ))}
  </Accordion>
)
