import{n as e}from"./rolldown-runtime-BCiCTKAo.js";import{t}from"./react-BlIEEezU.js";import{a as n,n as r,t as i}from"./Dialog-Yejkd6m0.js";import{n as a,r as o,t as s}from"./Tooltip-CHACi2rj.js";import{n as c}from"./iframe-CFpfx51y.js";import{n as l,t as u}from"./clsx-Cb5F7C4j.js";import{n as d,t as f}from"./Button-DQhHbfgr.js";import{n as p,t as m}from"./Popover-D9J7XZWr.js";import{n as h,t as g}from"./Text-BrdQAZ7c.js";var _,v;function y(){return(y=e((()=>{_=`_inactive_1mzi8_6`,v={inactive:_}})))()}var b,x,S;function C(){return(C=e((()=>{b=t(),l(),d(),y(),x=c(),S=(0,b.forwardRef)(({isInactive:e=!1,className:t,variant:n=`primary`,...r},i)=>e?(0,x.jsx)(f,{...r,"aria-disabled":!0,className:u(v.inactive,t),"data-variant":n,ref:i,variant:n,onClick:void 0,onPress:void 0,onPressEnd:void 0,onPressStart:void 0,onPressUp:void 0,type:`button`}):(0,x.jsx)(f,{className:t,ref:i,variant:n,...r})),S.displayName=`InactiveButton`,S.__docgenInfo={description:``,methods:[],displayName:`InactiveButton`,props:{variant:{required:!1,tsType:{name:`union`,raw:`'primary' | 'secondary' | 'tertiary' | 'danger' | 'icon'`,elements:[{name:`literal`,value:`'primary'`},{name:`literal`,value:`'secondary'`},{name:`literal`,value:`'tertiary'`},{name:`literal`,value:`'danger'`},{name:`literal`,value:`'icon'`}]},description:`Primary button is used as a positive action in a flow. Always use one primary button and never a seconday button on it's own. When using just an icon you must pass an aria-label

@default 'primary'`,defaultValue:{value:`'primary'`,computed:!1}},fullwidth:{required:!1,tsType:{name:`boolean`},description:`Adds width: 100%; for the button to span entire width of parent

@default false`},size:{required:!1,tsType:{name:`union`,raw:`'large' | 'medium'`,elements:[{name:`literal`,value:`'large'`},{name:`literal`,value:`'medium'`}]},description:`Component size (large: height 48px, medium: height 40px)
 @default 'large'`},icon:{required:!1,tsType:{name:`LucideIcon`},description:`Add an icon from lucide-react

@see {@link https://lucide.dev/icons/|Lucide}`},iconSize:{required:!1,tsType:{name:`number`},description:`Adjust icon size
 @default 20`},iconPlacement:{required:!1,tsType:{name:`union`,raw:`'left' | 'right'`,elements:[{name:`literal`,value:`'left'`},{name:`literal`,value:`'right'`}]},description:`Display the icon on the left or right side of the button text`},isInactive:{required:!1,tsType:{name:`boolean`},description:`Looks and announces as disabled, but stays focusable and swallows the action

@default false`,defaultValue:{value:`false`,computed:!1}}},composes:[`AriaButtonProps`]}})))()}var w,T,E,D,O,k,A,j;function M(){return(M=e((()=>{n(),d(),p(),h(),o(),C(),w=c(),T=`Fyll i alla obligatoriska fält innan du skickar ansökan.`,E={component:S,title:`Spikes/Inactive button`,tags:[`autodocs`,`!snapshot`],args:{children:`Skicka ansökan`,isInactive:!0,variant:`primary`},argTypes:{onPress:{action:`onPress`}},decorators:[e=>(0,w.jsx)(`div`,{style:{padding:`6rem 2rem`,display:`flex`,justifyContent:`center`},children:(0,w.jsx)(e,{})})],parameters:{docs:{description:{component:`
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
`}}}},D={render:({isInactive:e,...t})=>(0,w.jsx)(f,{...t,isDisabled:e})},O={},k={render:e=>(0,w.jsxs)(i,{children:[(0,w.jsx)(S,{...e}),(0,w.jsx)(m,{placement:`top`,children:(0,w.jsx)(r,{style:{outline:`none`},children:(0,w.jsx)(g,{children:T})})})]})},A={render:e=>(0,w.jsxs)(a,{shouldCloseOnPress:!1,children:[(0,w.jsx)(S,{...e}),(0,w.jsx)(s,{children:T})]})},j=[`BaselineNativeDisabled`,`CursorNotAllowed`,`PopoverOnClick`,`TooltipOnHover`],D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: ({
    isInactive,
    ...args
  }) => <Button {...args} isDisabled={isInactive} />
}`,...D.parameters?.docs?.source},description:{story:"For comparison: the current `isDisabled` button. It can't be focused or\nclicked, and can't explain itself.",...D.parameters?.docs?.description}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{}`,...O.parameters?.docs?.source},description:{story:`**1. Not-allowed cursor on mouse over.** Looks disabled, stays focusable,
and does nothing when pressed. Nothing explains why.

**Pros**
- Smallest change, closest to how disabled buttons already behave
- Keyboard and screen reader users can now find the button and hear that it
  is disabled, instead of it silently missing from the tab order
- No extra UI to design, translate or maintain

**Cons**
- Only mouse users get the cursor hint, and it still doesn't say why
- Touch, keyboard, screen reader and voice control users get no feedback at
  all when pressing it, which can feel broken
- An extra tab stop that leads nowhere
- The reason has to live somewhere else on the page, e.g. as helper text`,...O.parameters?.docs?.description}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: args => <DialogTrigger>
      <InactiveButton {...args} />
      <Popover placement='top'>
        <Dialog style={{
        outline: 'none'
      }}>
          <Text>{reason}</Text>
        </Dialog>
      </Popover>
    </DialogTrigger>
}`,...k.parameters?.docs?.source},description:{story:`**2. Popover with a message on click.** Pressing the button in any way
(mouse, tap, Enter/Space, voice control) opens a popover explaining why.

**Pros**
- The only variant that works the same for every input: mouse, touch,
  keyboard, screen readers and voice control
- Feedback comes exactly when the user tries to act, which is when they need
  it
- Room for longer text, or even a link to the field to fix

**Cons**
- The reason is hidden until the user presses, so they find out late
- Mixed signals: the not-allowed cursor says "can't click", but clicking does
  something
- Screen readers announce it as "dimmed, collapsed, button", i.e. disabled
  *and* something that opens, which is contradictory
- Focus moves into the popover, and the user has to close it (Esc or click
  outside) to continue
- One more click for everyone`,...k.parameters?.docs?.description}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: args => <TooltipTrigger shouldCloseOnPress={false}>
      {/* Stays open when clicked, which is when the user wonders why */}
      <InactiveButton {...args} />
      <Tooltip>{reason}</Tooltip>
    </TooltipTrigger>
}`,...A.parameters?.docs?.source},description:{story:`**3. Tooltip with the message on hover.** The reason shows on mouse hover
and on keyboard focus, and is linked to the button with
\`aria-describedby\` while visible.

**Pros**
- The reason is shown before the user even tries, with no extra click
- Familiar pattern for explaining disabled buttons on desktop
- Works for mouse and keyboard users, and for desktop screen readers when
  tabbing to the button

**Cons**
- Touch users get nothing, react-aria tooltips don't open on touch
- Mobile screen readers and voice control usually don't trigger it either
- \`aria-describedby\` is only set while the tooltip is open, so screen readers
  in browse mode miss the reason
- Tooltips are meant for short supplementary text, not essential information
  ([WCAG 1.4.13](https://www.w3.org/WAI/WCAG22/Understanding/content-on-hover-or-focus.html)
  applies)`,...A.parameters?.docs?.description}}}})))()}M();export{D as BaselineNativeDisabled,O as CursorNotAllowed,k as PopoverOnClick,A as TooltipOnHover,j as __namedExportsOrder,E as default};