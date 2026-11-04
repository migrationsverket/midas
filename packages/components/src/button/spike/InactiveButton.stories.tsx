import type { Meta, StoryObj } from '@storybook/react-vite'
import { Dialog, DialogTrigger } from 'react-aria-components'
import { Button } from '../Button'
import { Popover } from '../../popover'
import { Text } from '../../text'
import { Tooltip, TooltipTrigger } from '../../tooltip'
import { InactiveButton } from './InactiveButton'

const reason = 'Fyll i alla obligatoriska fält innan du skickar ansökan.'

const meta: Meta<typeof InactiveButton> = {
  component: InactiveButton,
  title: 'Spikes/Inactive button',
  // Spike only, no visual baselines
  tags: ['autodocs', '!snapshot'],
  args: {
    children: 'Skicka ansökan',
    isInactive: true,
    variant: 'primary',
  },
  argTypes: {
    onPress: { action: 'onPress' },
  },
  decorators: [
    // Room for the tooltip and popover
    Story => (
      <div
        style={{
          padding: '6rem 2rem',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Story />
      </div>
    ),
  ],
  parameters: {
    docs: {
      description: {
        component: `
**Spike** exploring an *inactive* button, inspired by Primer's inactive button. It looks exactly like a disabled button, but uses \`aria-disabled="true"\` instead of the native \`disabled\` attribute and blocks the action in JavaScript.

### Why not plain \`disabled\`?

A natively disabled button is removed from the tab order and fires no pointer events. Keyboard users can't reach it, a tooltip can't be attached to it, and nobody gets told *why* it's unavailable. With \`aria-disabled\` the button stays focusable and is still announced as disabled ("dimmed" in VoiceOver, "unavailable" in NVDA/JAWS), so a reason can be attached.

### What all three stories share

- Same visual look as a disabled button, in every variant, light and dark mode
- Stays in the tab order and shows the focus ring
- \`onPress\`/\`onClick\` never run, and the button is forced to \`type="button"\` so it can't submit a form
- Forced colors (Windows High Contrast) needs explicit \`GrayText\`, since only native \`:disabled\` gets it automatically

### Comparison

| | Baseline: native \`disabled\` | 1. Cursor | 2. Popover on click | 3. Tooltip on hover |
|---|---|---|---|---|
| **Mouse** | Not-allowed cursor, no reason | Not-allowed cursor, no reason | Reason on click | Reason on hover |
| **Touch (phone/tablet)** | Nothing happens | Nothing happens | Reason on tap | Nothing happens, tooltips don't open on touch |
| **Keyboard** | Can't be reached | Reachable, Enter/Space do nothing | Reason on Enter/Space, focus moves into the popover | Reason on focus |
| **Screen reader, desktop** | Announced as disabled in browse mode, skipped with Tab | "Dimmed/unavailable", no reason | "Dimmed, collapsed, button", reason after pressing | Reason read as description when focused with Tab, not in browse mode |
| **Screen reader, mobile (VoiceOver iOS, TalkBack)** | Announced as disabled | Announced as disabled, no reason | Announced as disabled, reason on double tap | Announced as disabled, no reason (swiping isn't keyboard focus) |
| **Voice control (Voice Control, Dragon)** | "Click Skicka ansökan" fails silently | Fails silently | Reason shown | Usually nothing, hover isn't triggered |
| **Zoom / magnifier** | No reason | No reason | Reason next to the button | Reason next to the button, may hide on mouse move |
| **Forced colors** | Automatic | Needs \`GrayText\` (done) | Same as 1 | Same as 1 |

None of these has been verified with real assistive tech yet; the table is based on how the browser and react-aria behave.
`,
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof InactiveButton>

/**
 * For comparison: the current `isDisabled` button. It can't be focused or
 * clicked, and can't explain itself.
 */
export const BaselineNativeDisabled: Story = {
  render: ({ isInactive, ...args }) => (
    <Button
      {...args}
      isDisabled={isInactive}
    />
  ),
}

/**
 * **1. Not-allowed cursor on mouse over.** Looks disabled, stays focusable,
 * and does nothing when pressed. Nothing explains why.
 *
 * **Pros**
 * - Smallest change, closest to how disabled buttons already behave
 * - Keyboard and screen reader users can now find the button and hear that it
 *   is disabled, instead of it silently missing from the tab order
 * - No extra UI to design, translate or maintain
 *
 * **Cons**
 * - Only mouse users get the cursor hint, and it still doesn't say why
 * - Touch, keyboard, screen reader and voice control users get no feedback at
 *   all when pressing it, which can feel broken
 * - An extra tab stop that leads nowhere
 * - The reason has to live somewhere else on the page, e.g. as helper text
 */
export const CursorNotAllowed: Story = {}

/**
 * **2. Popover with a message on click.** Pressing the button in any way
 * (mouse, tap, Enter/Space, voice control) opens a popover explaining why.
 *
 * **Pros**
 * - The only variant that works the same for every input: mouse, touch,
 *   keyboard, screen readers and voice control
 * - Feedback comes exactly when the user tries to act, which is when they need
 *   it
 * - Room for longer text, or even a link to the field to fix
 *
 * **Cons**
 * - The reason is hidden until the user presses, so they find out late
 * - Mixed signals: the not-allowed cursor says "can't click", but clicking does
 *   something
 * - Screen readers announce it as "dimmed, collapsed, button", i.e. disabled
 *   *and* something that opens, which is contradictory
 * - Focus moves into the popover, and the user has to close it (Esc or click
 *   outside) to continue
 * - One more click for everyone
 */
export const PopoverOnClick: Story = {
  render: args => (
    <DialogTrigger>
      <InactiveButton {...args} />
      <Popover placement='top'>
        <Dialog style={{ outline: 'none' }}>
          <Text>{reason}</Text>
        </Dialog>
      </Popover>
    </DialogTrigger>
  ),
}

/**
 * **3. Tooltip with the message on hover.** The reason shows on mouse hover
 * and on keyboard focus, and is linked to the button with
 * `aria-describedby` while visible.
 *
 * **Pros**
 * - The reason is shown before the user even tries, with no extra click
 * - Familiar pattern for explaining disabled buttons on desktop
 * - Works for mouse and keyboard users, and for desktop screen readers when
 *   tabbing to the button
 *
 * **Cons**
 * - Touch users get nothing, react-aria tooltips don't open on touch
 * - Mobile screen readers and voice control usually don't trigger it either
 * - `aria-describedby` is only set while the tooltip is open, so screen readers
 *   in browse mode miss the reason
 * - Tooltips are meant for short supplementary text, not essential information
 *   ([WCAG 1.4.13](https://www.w3.org/WAI/WCAG22/Understanding/content-on-hover-or-focus.html)
 *   applies)
 */
export const TooltipOnHover: Story = {
  render: args => (
    <TooltipTrigger shouldCloseOnPress={false}>
      {/* Stays open when clicked, which is when the user wonders why */}
      <InactiveButton {...args} />
      <Tooltip>{reason}</Tooltip>
    </TooltipTrigger>
  ),
}
