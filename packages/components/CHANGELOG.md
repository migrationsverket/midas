# 8.0.0

### 🚀 Features

- **spinner:** change prop `dark` to `isOnColor` ([#443](https://github.com/migrationsverket/midas/pull/443))
- ✨ add errorPosition to form fields ([#416](https://github.com/migrationsverket/midas/pull/416))
- **layout:** new navbar component and external variant of layout ([ad54f5955](https://github.com/migrationsverket/midas/commit/ad54f5955))
- ✨💄 add semantic z-index tokens ([#401](https://github.com/migrationsverket/midas/pull/401))

### 🩹 Fixes

- **calendar:** add high contrast styling for selected date ([a5af1cafe](https://github.com/migrationsverket/midas/commit/a5af1cafe))
- **calendar:** sync calendars ([3e7b4fb06](https://github.com/migrationsverket/midas/commit/3e7b4fb06))
- **calendar:** add border for high contrast mode ([7ed989df8](https://github.com/migrationsverket/midas/commit/7ed989df8))
- **radio:** add support for horizontal orientation ([e5c9ad3eb](https://github.com/migrationsverket/midas/commit/e5c9ad3eb))
- **link:** remove active styling in disabled state ([71c1e1400](https://github.com/migrationsverket/midas/commit/71c1e1400))
- **heading:** set correct styles for heading and affected components ([#394](https://github.com/migrationsverket/midas/pull/394))
- **accordion:** fix responsive content hiding when changing screen size ([#446](https://github.com/migrationsverket/midas/pull/446))
- **button:** add cursor styling for disabled state ([1ab3f6c55](https://github.com/migrationsverket/midas/commit/1ab3f6c55))
- **date-picker:** add missing disabled styles ([492a1b789](https://github.com/migrationsverket/midas/commit/492a1b789))
- **combobox:** fix background color to input ([6ec2c1d3e](https://github.com/migrationsverket/midas/commit/6ec2c1d3e))
- **theme:** replace invalid text and border colors in dark mode ([a6259f46c](https://github.com/migrationsverket/midas/commit/a6259f46c))

### Documentation Changes

- **calendar:** update docs ([#469](https://github.com/migrationsverket/midas/pull/469))
- **link-button:** remove live-code from docs ([#451](https://github.com/migrationsverket/midas/pull/451))
- **heading:** expose ElementType ([79b85f4e4](https://github.com/migrationsverket/midas/commit/79b85f4e4))
- **tabs:** remove generic in prop interface ([d8bcf2b92](https://github.com/migrationsverket/midas/commit/d8bcf2b92))
- **tabs:** remove live code and update documentation ([c4b2c2e47](https://github.com/migrationsverket/midas/commit/c4b2c2e47))
- **tooltip:** update tooltip documentation 🔧 ([#439](https://github.com/migrationsverket/midas/pull/439))
- **label:** remove live code and update documentation ([1803a3ee1](https://github.com/migrationsverket/midas/commit/1803a3ee1))
- **table:** add prop comment ([6089593a4](https://github.com/migrationsverket/midas/commit/6089593a4))
- new page explaining tokens and use of color + removed and updated tokens ([c970f0eb5](https://github.com/migrationsverket/midas/commit/c970f0eb5))
- **text:** remove union type for documentation visibility ([675b94795](https://github.com/migrationsverket/midas/commit/675b94795))
- define error types at component level ([14dc2b8da](https://github.com/migrationsverket/midas/commit/14dc2b8da))
- update link docs with new code and examples ([a25a2def3](https://github.com/migrationsverket/midas/commit/a25a2def3))
- use markdown links ([f1fb5714b](https://github.com/migrationsverket/midas/commit/f1fb5714b))

## 7.1.0

### 🚀 Features

- ✨💄 add semantic z-index tokens ([#401](https://github.com/migrationsverket/midas/pull/401))

### 🩹 Fixes

- **date-picker:** add missing disabled styles ([10b394897](https://github.com/migrationsverket/midas/commit/10b394897))
- **combobox:** fix background color to input ([997eac80b](https://github.com/migrationsverket/midas/commit/997eac80b))
- **theme:** replace invalid text and border colors in dark mode ([3291a9cbd](https://github.com/migrationsverket/midas/commit/3291a9cbd))

# 7.0.0

This was a version bump only for components to align it with other projects, there were no code changes.

## 6.2.0

### 🚀 Features

- **badge:** 🆕 new component - badge to indicate user of unread items

### 🩹 Fixes

- **theme:** update icon-secondary with new value for dark mode
- **date-picker:** add disabled style to divider
- **theme:** update more tokens in tokens.ts
- **theme:** update some tokens to new naming convention
- **tabs:** fix dark mode on tabs and example on docweb
- **theme:** change the token value to icon secondary
- **link-button:** fix secondary border and icon color in dark mode

## 6.1.0

### 🚀 Features

- **text:** add description slot ([73d308a13](https://github.com/migrationsverket/midas/commit/73d308a13))

### 🩹 Fixes

- **textfield:** fix token on input value ([e79f935e3](https://github.com/migrationsverket/midas/commit/e79f935e3))
- **link-button:** add pseudo-classes in CSS link-button ([#385](https://github.com/migrationsverket/midas/pull/385))

## 6.0.1

### 🩹 Fixes

- **select:** 🐛 Selected values doesn't match selected IDs

# 6.0.0

### 🚀 Features

- **modal:** replace h2 with heading component
- ⚠️ **modal:** deprecate `ModalTrigger` and `Dialog`
- **modal:** fix overlay position to avoid moving the modal when y-overflow
- **modal:** increase z-index on overlay
- **modal:** add focustrap to modal
- **modal:** add styles and clean up types
- **modal:** add boilerplate code for new modal implementation
- use `cursor: not-allowed` for disabled elements

### 🩹 Fixes

- **layout:** change minimize menu button to icon variant
- **button:** change iconbtn color token
- **button:** tokenize icon button for better dark mode support
- **button:** clarify use of labels on button groups
- **button:** clarify use of labels on button groups
- add react types to dependencies
- remove test setup from build

### ⚠️ Breaking Changes

- **modal:** Use the new DialogTrigger and Modal instead of ModalTrigger and Dialog. New API will apply.

## 5.0.1

### 🩹 Fixes

- **checkbox:** swap old focus token
- **checkbox:** swap old tokens
- **radio:** remove old tokens
- **link-button:** fix colors on hover state
- **toast:** re-organize animations and breakpoints
- **toast:** remove explicit dep
- **toast:** update react-aria deps
- **toast:** add temporary implementation of useToastState

### Documentation Changes

- display project changelog on docweb

# 5.0.0 (2025-03-17)

### 🚀 Features

- ⚠️ support for dark mode across all components

### 🩹 Fixes

- **button:** deprecate small version
- **card:** deprecate card background
- **date-picker:** change selected date color to blue150
- **date-picker:** resize button in invalid state, fixes #312
- **date-picker:** change cursor to pointer
- **layout:** design adjustments
- **search-field:** use aria-label instead of hidden label
- **select:** remove unsupported attribute
- **select:** change direct element selector
- **table:** deprecate narrow version

### Documentation Changes

- dark mode support for storybook and docusaurus
- add instructions for bug reporting
- dark mode page on docweb
- add security disclaimers
- update select docs
- fix new tokens
- fix local dark mode on portals in SB
- updated docs with tokens
- dark mode header image
- **docs:** add new UIkit
- **localization:** add dev instructions for localization

### ⚠️ Breaking Changes

- dark mode :city_sunrise:

# 4.0.0 (2025-03-10)

### 🚀 Features

- ⚠️ updated select, multi-select and modal components

### 🩹 Fixes

- **layout:** design adjustments
- **radio:** change cursor to pointer

### Documentation Changes

- **date-picker:** add style unavailable and code example for Unavailable Date in docs
- **docs:** add new UIkit

### ⚠️ Breaking Changes

- `Select`, `MultiSelect` and `Modal` now have updated API:s, expect things not to work as before. Make sure to check the API:s before upgrading.

## 3.1.0 (2025-03-06)

### 🚀 Features

- **button:** set primary border to 2px when in high-contrast mode ([fdcf32e1d](https://github.com/migrationsverket/midas/commit/fdcf32e1d))

### 🩹 Fixes

- **calendar** set default weekday style to `short` ([#303](https://github.com/migrationsverket/midas/pull/303))
- **checkbox:** change cursor to pointer ([d5ce18403](https://github.com/migrationsverket/midas/commit/d5ce18403))
- **date-picker:** change selected date color to blue150 ([6a7e856a9](https://github.com/migrationsverket/midas/commit/6a7e856a9))
- **date-picker:** resize button in invalid state, fixes #312 ([#312](https://github.com/migrationsverket/midas/issues/312))
- **datepicker:** change cursor to pointer ([5425f7282](https://github.com/migrationsverket/midas/commit/5425f7282))
- **radio:** change cursor to pointer ([c18ec8f4e](https://github.com/migrationsverket/midas/commit/c18ec8f4e))

### Documentation Changes

- add new UIkit ([a47947b63](https://github.com/migrationsverket/midas/commit/a47947b63))
- add instructions for bug reporting ([93205ee30](https://github.com/migrationsverket/midas/commit/93205ee30))
- **date-picker:** add style unavailable and code example for Unavailable Date in docs ([469da9424](https://github.com/migrationsverket/midas/commit/469da9424))

# 3.0.0 (2025-02-28)

### 🚀 Features

- ⚠️ **search-field:** remove broken property ([1c04349ce](https://github.com/migrationsverket/midas/commit/1c04349ce))

### 🩹 Fixes

- **card:** append props.className ([#295](https://github.com/migrationsverket/midas/pull/295))
- **search-field:** move validation error message ([85c1b7990](https://github.com/migrationsverket/midas/commit/85c1b7990))
- **search-field:** useSearchField to validate input and use internal key events ([fbe8cf54a](https://github.com/migrationsverket/midas/commit/fbe8cf54a))
- **search-field:** handle custom error messages ([99649c163](https://github.com/migrationsverket/midas/commit/99649c163))
- **search-field:** add disabled styling ([f508f2f6d](https://github.com/migrationsverket/midas/commit/f508f2f6d))
- **search-field:** add validation error utility function ([1f4758e41](https://github.com/migrationsverket/midas/commit/1f4758e41))
- **search-field:** add border bottom and pixel push some paddings ([e53d56bb7](https://github.com/migrationsverket/midas/commit/e53d56bb7))
- **search-field:** validation text ([#290](https://github.com/migrationsverket/midas/pull/290))

### Documentation Changes

- **search-field:** add stories ([8766d4d8e](https://github.com/migrationsverket/midas/commit/8766d4d8e))

### ⚠️ Breaking Changes

- **search-field:** `isRequired` property of `SearchField` is no longer supported

## 2.0.1 (2025-02-27)

### 🩹 Fixes

- **radio:** fix hover on mobile, remove 100% height on RadioGroup ([#286](https://github.com/migrationsverket/midas/pull/286))
- **text-field:** update dossnr regex to support new delimiter ([c5e1b4428](https://github.com/migrationsverket/midas/commit/c5e1b4428))
- **text-field:** add rule for matching delimiters for doss nr ([026073775](https://github.com/migrationsverket/midas/commit/026073775))
- **text-field:** cover more cases on dossnr ([0f27d8b33](https://github.com/migrationsverket/midas/commit/0f27d8b33))

### Documentation Changes

- update get started with node 22 ([098e4e1e0](https://github.com/migrationsverket/midas/commit/098e4e1e0))

# 2.0.0 (2025-02-25)

### 🚀 Features

- **layout:** design improvements + tooltip ([#231](https://github.com/migrationsverket/midas/pull/231))
- ⚠️ **textarea:** rename maxCharacters property ([06116cee9](https://github.com/migrationsverket/midas/commit/06116cee9))
- ⚠️ **text-field:** rename maxCharacters property ([44eec760e](https://github.com/migrationsverket/midas/commit/44eec760e))
- **tooltip:** new component tooltip ([3bc3fcd4f](https://github.com/migrationsverket/midas/commit/3bc3fcd4f))

### 🩹 Fixes

- **accessibility:** fix focus for high contrast mode ([#267](https://github.com/migrationsverket/midas/pull/267))
- **accordion:** append classname ([aaaa0ddb1](https://github.com/migrationsverket/midas/commit/aaaa0ddb1))
- **accordion:** remove dependency array from useLayoutEffect - fix render of dynamic content in AccordionItem ([db4c920ee](https://github.com/migrationsverket/midas/commit/db4c920ee))
- **accordion:** fix render of dynamic content in AccordionItem ([#283](https://github.com/migrationsverket/midas/pull/283))
- **combobox:** append classname ([570a1998e](https://github.com/migrationsverket/midas/commit/570a1998e))
- **components:** append prop.className ([#279](https://github.com/migrationsverket/midas/pull/279))
- **file-upload:** pass unhandled props ([fc90980d9](https://github.com/migrationsverket/midas/commit/fc90980d9))
- **file-upload:** add autdocs config ([809f0b894](https://github.com/migrationsverket/midas/commit/809f0b894))
- **file-upload:** import react to get autodocs props ([e6467ca66](https://github.com/migrationsverket/midas/commit/e6467ca66))
- **file-upload:** pass unhandled props to the FileTrigger component ([#277](https://github.com/migrationsverket/midas/pull/277))
- **layout:** design adjustments ([f086ad5fe](https://github.com/migrationsverket/midas/commit/f086ad5fe))
- **layout:** fix bug where mobile menu wouldn't open ([c61923662](https://github.com/migrationsverket/midas/commit/c61923662))
- **logo:** append classname ([66a189a6c](https://github.com/migrationsverket/midas/commit/66a189a6c))
- **radio:** append classname ([796173ba2](https://github.com/migrationsverket/midas/commit/796173ba2))
- **tag:** append classname ([df88ec9fb](https://github.com/migrationsverket/midas/commit/df88ec9fb))
- **textarea:** add validation for minLength property ([8df1f931a](https://github.com/migrationsverket/midas/commit/8df1f931a))
- **textarea:** append classname ([cdd9f3e5c](https://github.com/migrationsverket/midas/commit/cdd9f3e5c))
- **textarea:** set initial counter value on render ([924f5abda](https://github.com/migrationsverket/midas/commit/924f5abda))
- **text-field:** append classname ([53f5b603c](https://github.com/migrationsverket/midas/commit/53f5b603c))
- **text-field:** set initial counter value on render ([0e9e4a44d](https://github.com/migrationsverket/midas/commit/0e9e4a44d))
- **text-field:** set the initial value for useState ([#280](https://github.com/migrationsverket/midas/pull/280))
- **theme:** add global css export ([#282](https://github.com/migrationsverket/midas/pull/282))
- **tooltip:** append classname ([0e6e6e483](https://github.com/migrationsverket/midas/commit/0e6e6e483))

### Documentation Changes

- dropdown + layout + tooltip ([28d3bc661](https://github.com/migrationsverket/midas/commit/28d3bc661))
- **components:** sync docusaurus and storybook autodocs config ([4e061ad4d](https://github.com/migrationsverket/midas/commit/4e061ad4d))
- **docs:** add documentation about skeleton component ([460bf602c](https://github.com/migrationsverket/midas/commit/460bf602c))
- **docs:** add design pattern about loaders ([702136a89](https://github.com/migrationsverket/midas/commit/702136a89))
- **docs:** add link to design pattern ([38db9d2de](https://github.com/migrationsverket/midas/commit/38db9d2de))
- **file-upload:** manually extend react aria props for autodocs ([07ecde229](https://github.com/migrationsverket/midas/commit/07ecde229))

### ⚠️ Breaking Changes

- **textarea:** TextArea propert maxCharacters is renamed to maxLength

## 1.3.0 (2025-02-19)

### 🚀 Features

- **accordion:** support react nodes in title ([#259](https://github.com/migrationsverket/midas/pull/259))
- **text-field:** add dossier number validation ([#261](https://github.com/migrationsverket/midas/pull/261))

### 🩹 Fixes

- **accordion:** support any elements in title ([1129fd742](https://github.com/migrationsverket/midas/commit/1129fd742))
- **card:** add React.useId to generate unique id ([160319d03](https://github.com/migrationsverket/midas/commit/160319d03))
- **card:** fix to read title and content ([dd8d07c72](https://github.com/migrationsverket/midas/commit/dd8d07c72))
- **card:** remove the id content from p tag ([54e4fe9cd](https://github.com/migrationsverket/midas/commit/54e4fe9cd))
- **docs:** update theme imports ([5cbd797f4](https://github.com/migrationsverket/midas/commit/5cbd797f4))
- **table:** show hover background color for striped table ([a6b4f35d5](https://github.com/migrationsverket/midas/commit/a6b4f35d5))
- **table:** striped table hover effect and unused props ([#250](https://github.com/migrationsverket/midas/pull/250))
- **table:** add pointer if row has a link ([#262](https://github.com/migrationsverket/midas/pull/262))
- **table:** preserve classNames when using props.className ([d7a9142cd](https://github.com/migrationsverket/midas/commit/d7a9142cd))
- **text-field:** add dossier number validation ([b3027b5b9](https://github.com/migrationsverket/midas/commit/b3027b5b9))
- **text-field:** +/- divider should be optional ([b1393263a](https://github.com/migrationsverket/midas/commit/b1393263a))
- **theme:** point to theme types ([#248](https://github.com/migrationsverket/midas/pull/248))
- **theme:** reorder theme export ([#265](https://github.com/migrationsverket/midas/pull/265))

## 1.2.0 (2025-02-11)

### 🚀 Features

- **components:** new api and style for accordion ([efab0a198](https://github.com/migrationsverket/midas/commit/efab0a198))
- **components:** add nvm config ([7cbbce66e](https://github.com/migrationsverket/midas/commit/7cbbce66e))

### 🩹 Fixes

- import/export text-field css directly from css module ([#212](https://github.com/migrationsverket/midas/pull/212))
- **components:** fix text when titles are longer than one row ([28b06cd31](https://github.com/migrationsverket/midas/commit/28b06cd31))
- **info-banner:** fix icon to be in same line with text in docs and story ([f37b798c3](https://github.com/migrationsverket/midas/commit/f37b798c3))
- **theme:** create separate theme export ([a6c95a23c](https://github.com/migrationsverket/midas/commit/a6c95a23c))

## 1.1.0 (2025-01-31)

### 🚀 Features

- **components:** new api and style for accordion

## 1.0.2 (2025-01-27)

### 🚀 Features

- **modal:** create a new component
- **button:** add react aria button component
- **button:** added tertiary and danger themes
- **button:** remove underline from tertiary button
- **button:** add icon and iconSize prop and logic to make icon smaller when size=small
- **button:** update button stories
- **button:** remove unused icon
- **button:** add property to change button's icon direction
- **button:** change inline style to class style
- **button:** add buttongroup component, move mobile rules
- ⚠️ **card:** new api, replace button with stretched link
- **card:** support custom link component
- **checkbox:** select all checkbox
- **checkbox:** new wrapper
- **combobox:** create a combobox component with styling
- **date-picker:** new wrapper
- **date-picker:** new datepicker
- **date-picker:** datepicker renamed daterangepicker in favor of datepicker
- **docs:** add docusaurus boilerplate
- **dropdown:** new component
- **file-upload:** new wrapper
- **flex:** add fluid variant
- **flex:** can now take all props of usual div
- **info-banner:** add support for ReactNodes in message
- **info-banner:** dismissable banner
- **link:** add standalone link variant
- **link:** ability to stretch link in parent
- **link:** add icon in prop, add disabled, and add states in css
- **link-button:** inherits api from button
- **link-button:** add full width
- **link-button:** add icon
- **logo:** new variants and refactor
- ⚠️ **modal:** new API
- **multi-select:** new component
- **radio:** new wrapper
- **search-field:** props rewrite
- **select:** new wrapper
- **sidebar:** new component
- **storybook:** add boilerplate storybook instance
- **table:** new component!
- **table:** add docs + striped option
- **tag:** new component
- **tertiary button:** change padding
- **text-area:** creat textArea component
- **text-field:** add ssn validation
- **text-field:** support counter and maxCharacters
- **ui:** export new components
-

### 🩹 Fixes

- **accordion:** hover on trigger
- **accordion:** update icon size
- **accordion:** color on iOS
- **button:** add large option to size in storybook and fix styling to tertiary
- **button:** change name large to null in the size option in storybook
- **button:** add icon variant
- **button:** share api with link-button
- **button:** change property name to iconPlacement
- **button:** adjust spacing
- **button:** update icon size
- **button:** fix styling to focus-visible state
- **button:** delete the third box-shadow and fix style to all
- **button:** add variable focus in tokens.css and fix the style with variable
- **button:** add press style on icon btn
- **button:** change the styling in focus visible to a variable
- **button:** correct spacing on icon button
- **button:** remove pixel and rem mixing
- **card:** accessibility fix on icon
- **card:** only animate out arrow
- **card:** correct border-color
- **card:** better column stretching
- **card:** support custom link
- **checkbox:** change styling of description
- **checkbox:** fix gap between label and description
- **checkbox:** change to lucide icon and fix css
- **checkbox:** fix checkbox size and disabled state css
- **checkbox:** change back to polyline for checkmark
- **checkbox:** add the animation back again
- **checkbox:** select all can be indeterminate
- **checkbox:** change the styling in focus visible to a variable
- **checkbox:** fix state could be null
- **combobox:** fix disabled state style and fix combobox test
- **combobox:** rewrite to new wrapper
- **combobox:** fix props
- **combobox:** button alignment
- **combobox:** focus style fix
- **combobox:** chevron icon will be upp when select is opened
- **combobox:** add aria-expanded to css to rotate chevron icon
- **combobox:** update icon size
- **combobox:** new focus style
- **combobox:** support modals
- **combobox:** color on iOS
- **date-picker:** correct colors
- **date-picker:** update icon size
- **date-picker:** change the styling in focus visible to a variable
- **date-picker:** new focus state
- **date-picker:** dependency update
- **date-picker:** spacing on timefields
- **date-picker:** support modals
- **date-picker:** color on iOS
- **docs:** change doc structure
- **docs:** accessibility is back
- **docs:** mend broken pages
- **docs:** fix top banner
- **docs:** test commit on GitHub
- **docs:** updates to accomodate storybook
- **docs:** remove "build with"
- **docs:** fix storybook link
- **docs:** new frontpage
- **docs:** update url
- **file-upload:** update icon size
- **file-upload:** fix text overflow mobile
- **flex:** better column stretching
- **flex:** fix column wrapping
- **grid:** better column stretching
- **info-banner:** fix dismissable button
- **info-banner:** add div props to info-banner
- **info-banner:** fix classname info clsx
- **info-banner:** update icon size
- **link:** icon stays in size
- **link:** ignore icon prop if link is standalone
- **link:** fix style to center the icon with text
- **link:** fix the wrong style
- **link:** add style underline to hover and active state
- **link:** add visited state to css
- **link:** add url address which leads to link component in docsweb
- **link:** commit
- **link:** support custom link component
- **link-button:** fix styling justify-content
- **link-button:** fix padding
- **link-button:** adjust styles + add focus styles
- **link-button:** add variants
- **link-button:** change gap to 0.5rem
- **link-button:** remove the duplicated code
- **link-button:** change justify-content to center to make fullwidth look better
- **link-button:** custom link component
- **link-button:** external link icon on target \_blank
- **linkButton:** use button style and fix the story for icon
- **logo:** add support for all `<div>` props, like className
- **logo:** html tag name fix
- **modal:** delete trigger button and fix styling
- **modal:** fix styling in css file
- **modal:** delete icon backgrund-color in css file
- **modal:** update modal docs
- **modal:** fix bug of unopenable modal + new docs
- **modal:** fix spacing
- **modal:** adjust max height and overflow
- **multi-select:** style adjustments
- **multi-select:** support for all default key
- **multi-select:** validation
- **multi-select:** change remove to update list
- **multi-select:** support modals
- **multi-select:** null on item fix
- **multi-select:** fix intermittent errors in tag removal
- **radio:** remove padding
- **radio:** change padding on label and helper text
- **radio:** remove invalid line and fix css
- **radio:** change gap between elements to 0.5rem
- **radio:** change the styling in focus visible to a variable
- **radio:** move radioGroup storybook to radio storybook, and fix tsconfig
- **search-field:** update icon size
- **search-field:** inherit focus from text-field
- **search-field:** fix padding to remove style error between button and input
- **select:** remove padding and add variables
- **select:** fix list spacing
- **select:** change to lucide icon
- **select:** fix icon alignment
- **select:** remove hard value
- **select:** add aria-expanded to css to rotate chevron icon
- **select:** change to border
- **select:** update icon size
- **select:** change box-shadow to border
- **select:** change the styling in focus visible to a variable
- **select:** support modals
- **table:** use client
- **table:** update icon size
- **tabs:** new focus state
- **tabs:** fix styles
- **tabs:** responsive
- **tag:** fix stories and css and delete unuse codes
- **tag:** styling + dismissable
- **textarea:** fix handleChange run when element focus
- **textarea:** remove focus animation
- **textarea:** fix focus
- **textarea:** change color
- **text-field:** fix text color in invald error to red color
- **text-field:** fix text color in invald error to red color
- **text-field:** update icon size
- **text-field:** remove focus animation
- **text-field:** fix focus
- **text-field:** update error message docs + support
- **text-field:** change error message when > maxCharacter
- **text-field, textarea:** fix spacing
- **theme:** include tokens again
- **toast:** larger icon
- **toast:** fix button size
- **toast:** update icon size
- **toast:** new focus state
- **ui:** add modal
- **ui:** update theme version

### ⚠️ Breaking Changes

- **modal:** new API
- **card:** new card api

## 1.0.1 (2025-01-27)

### 🚀 Features

- **tag:** create a new component
- **modal:** create a new component
- **modal:** fix styling, delete not used codes and add button component
- **button:** added tertiary and danger themes
- **button:** remove underline from tertiary button
- **button:** add icon and iconSize prop and logic to make icon smaller when size=small
- **button:** add property to change button's icon direction
- **button:** change inline style to class style
- **button:** add buttongroup component, move mobile rules
- ⚠️ **card:** new api, replace button with stretched link
- **card:** support custom link component
- **checkbox:** select all checkbox
- **checkbox:** new wrapper
- **combobox:** create a combobox component with styling
- **date-picker:** new wrapper
- **date-picker:** datepicker renamed daterangepicker in favor of datepicker
- **dropdown:** new component
- **fileupload:** new wrapper
- **flex:** add fluid variant
- **flex:** can now take all props of usual div
- **grid:** add fluid variant
- **grid:** can now take all props of usual div
- **info-banner:** add support for ReactNodes in message
- **info-banner:** dismissable banner
- **link:** add standalone link variant
- **link:** ability to stretch link in parent
- **link:** add icon in prop, add disabeld, and add states in css
- **link-button:** inherits api from button
- **link-button:** add own style, delete unuse codes, and fix the stories
- **link-button:** add full width
- **linkButton:** add icon
- **logo:** new variants and refactor
- **multi-select:** new component
- **radio:** new wrapper
- **searchfield:** props rewrite
- **select:** new wrapper
- **sidebar:** new component
- **table:** new component!
- **table:** add docs + striped option
- **tag:** new component
- **tertiary button:** change padding
- **textArea:** creat textArea component
- **textarea:** new component
- **textarea:** new wrapper
- **text-field:** add ssn validation
- **text-field:** support counter and maxCharacters
- **ui:** export new components

### 🩹 Fixes

- **accordion:** hover on trigger
- **accordion:** update icon size
- **accordion:** color on iOS
- **breadcrumbs:** fix styles + new build
- **button:** add large option to size in storybook and fix styling to tertiary
- **button:** change name large to null in the size option in storybook
- **button:** add icon variant
- **button:** share api with link-button
- **button:** change property name to iconPlacement
- **button:** delete unused inline style and fix merge
- **button:** adjust spacing
- **button:** update icon size
- **button:** fix styling to focus-visible state
- **button:** delete the third box-shadow and fix style to all
- **button:** remove the duplicated code
- **button:** move the styling from global to under button class
- **button:** add variable focus in tokens.css and fix the style with variable
- **button:** add press style on icon btn
- **button:** change the styling in focus visible to a variable
- **button:** correct spacing on icon button
- **button:** remove pixel and rem mixing
- **card:** accessibility fix on icon
- **card:** only animate out arrow
- **card:** correct border-color
- **card:** better column stretching
- **card:** support custom link
- **checkbox:** change styling of description
- **checkbox:** change to luide icon and fix css
- **checkbox:** change back to polyline for checkmark
- **checkbox:** add the animation back again
- **checkbox:** remove unused icons
- **checkbox:** change gap to 0.5rem
- **checkbox:** remove left line when invalid
- **checkbox:** adjust styling
- **checkbox:** select all can be indeterminate
- **checkbox:** change the styling in focus visible to a variable
- **checkbox:** fix state could be null
- **combobox:** add a story autocomplete,fix storybook name,the tag to ComboBox,and style focus state
- **combobox:** fix disabled state style and fix combobox test
- **combobox:** rewrite to new wrapper
- **combobox:** fix props
- **combobox:** button alignment
- **combobox:** focus style fix
- **combobox:** chevron icon will be upp when select is opened
- **combobox:** add aria-expanded to css to rotate chevron icon
- **combobox:** update icon size
- **combobox:** fix style
- **combobox:** support modals
- **combobox:** color on iOS
- **date-picker:** correct colors
- **date-picker:** update icon size
- **date-picker:** change the styling in focus visible to a variable
- **date-picker:** add variable
- **date-picker:** new focus state
- **date-picker:** spacing on timefields
- **date-picker:** support modals
- **date-picker:** color on iOS
- **docs:** change doc structure
- **docs:** accessibility is back
- **docs:** mend broken pages
- **docs:** fix top banner
- **docs:** updates to accommodate storybook
- **docs:** remove "build with"
- **docs:** fix storybook link
- **docs:** new frontpage
- **file-upload:** fix text overflow mobile
- **flex:** better column stretching
- **flex:** fix column wrapping
- **grid:** better column stretching
- **info-banner:** fix dismissable button
- **info-banner:** add div props to info-banner
- **info-banner:** fix classname info clsx
- **info-banner:** update icon size
- **link:** icon stays in size
- **link:** ignore icon prop if link is standalone
- **link:** fix style to center the icon with text
- **link:** fix the wrong style
- **link:** add style underline to hover and active state
- **link:** add visited state to css
- **link:** add url address which leads to link component in docs
- **link:** support custom link component
- **link-button:** fix styling justify-content
- **link-button:** fix padding
- **link-button:** adjust styles + add focus styles
- **link-button:** add variants
- **link-button:** change gap to 0.5rem
- **link-button:** change justify-content to center to make fullwidth look better
- **link-button:** custom link component
- **link-button:** external link icon on target \_blank
- **linkButton:** use button style and fix the story for icon
- **logo:** add support for all `<div>` props, like className
- **logo:** html tag name fix
- **modal:** delete trigger button and fix styling
- **modal:** delete unused styling, and move styling for storybook to storybook
- **modal:** fix styling in css file
- **modal:** delete icon background-color in css file
- **modal:** update modal docs
- **modal:** fix bug of unopenable modal + new docs
- **modal:** fix spacing
- **modal:** adjust max height and overflow
- **multi-select:** style adjustments
- **multi-select:** support for all default key
- **multi-select:** validation
- **multi-select:** support modals
- **multi-select:** null on item fix
- **multi-select:** fix intermittent errors in tag removal
- **radio:** remove padding
- **radio:** change padding on label and helper text
- **radio:** remove invalid line and fix css
- **radio:** change gap between elements to 0.5rem
- **radio:** change the styling in focus visible to a variable
- **search-field:** update icon size
- **search-field:** inherit focus from text-field
- **search-field:** fix padding to remove style error between button and input
- **select:** remove padding and add variables
- **select:** fix list spacing
- **select:** use client
- **select:** change to lucide icon
- **select:** fix icon alignment
- **select:** remove hard value
- **select:** add aria-expanded to css to rotate chevron icon
- **select:** change to border
- **select:** update icon size
- **select:** change box-shadow to border
- **select:** change the styling in focus visible to a variable
- **select:** support modals
- **table:** update icon size
- **tabs:** new focus state
- **tabs:** fix styles
- **tabs:** responsive
- **tag:** styling + dismissable
- **text-field:** fix text color in invald error to red color
- **textarea:** fix handleChange run when element focus
- **textarea:** remove focus animation
- **textarea:** fix focus
- **textarea:** fix to show the error when the characters be more from max
- **textarea:** change color
- **textarea:** change error message at maxCharacters
- **text-field:** remove padding
- **text-field:** fix alignment
- **text-field:** fix error message alignment
- **text-field:** fix text color in invald error to red color
- **text-field:** update icon size
- **text-field:** remove focus animation
- **text-field:** fix focus
- **text-field:** change error message when > maxCharacter
- **text-field, textarea:** fix spacing
- **toast:** larger icon
- **toast:** fix button size + new build
- **toast:** update icon size
- **toast:** new focus state
- **ui:** add modal

### ⚠️ Breaking Changes

- **modal:** new API
- **card:** new card api
- ⚠️ **toast:** new build
- ⚠️ **text-field:** new build
- ⚠️ **textarea:** new build
- ⚠️ **tabs:** new build
- ⚠️ **table:** new build
- ⚠️ **spinner:** new build
- ⚠️ **select:** new build
- ⚠️ **search-field:** new build
- ⚠️ **radio:** new build + replace vite test
- ⚠️ **logo:** new build
- ⚠️ **link-button:** new build
- ⚠️ **link:** new build
- ⚠️ **info-banner:** new build
- ⚠️ **grid:** new build
- ⚠️ **flex:** new build
- ⚠️ **file-upload:** new build
- ⚠️ **date-picker:** new build
- ⚠️ **combobox:** new build
- ⚠️ **checkbox:** new build
- ⚠️ **card:** new build
- ⚠️ **button:** new build
- ⚠️ **breadcrumbs:** new build
- ⚠️ **accordion:** new build

# Changelog

All notable changes to this project will be documented in this file. See [conventional commits](https://www.conventionalcommits.org/) for commit guidelines.

---
