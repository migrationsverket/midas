import * as React from 'react'
import { Popover } from 'react-aria-components'
import styles from './DatePicker.module.css'

interface DatePickerPopoverProps {
  children?: React.ReactNode
}

// Deliberately not wrapping `children` in RAC's <Dialog>. This used to match
// an older RAC example, but their current docs no longer wrap Calendar in a
// Dialog either. Do not re-add it: in react-aria-components@1.20.0, <Dialog>
// installs a strict TextContext ({ slots: { description: ... } }) that leaks
// into sibling FieldError/<Text slot="errorMessage"> elsewhere in DatePicker,
// crashing with `Invalid slot "errorMessage"`.
// Upstream bug: https://github.com/adobe/react-spectrum/issues/10427
// Fix merged (not yet released as of RAC 1.20.0): https://github.com/adobe/react-spectrum/pull/10430
// TODO: once react-aria-components ships a version containing #10430, re-evaluate
// whether <Dialog> is still unnecessary here (it likely still is, per RAC's own
// current docs example) — this comment can be removed at that point regardless.
export const DatePickerPopover: React.FC<DatePickerPopoverProps> = ({
  children,
}) => <Popover className={styles.popover}>{children}</Popover>
