## 1.2.2 (2025-02-11)

This was a version bump only, there were no code changes.

## 1.2.1 (2025-02-11)

This was a version bump only, there were no code changes.

## 1.2.0 (2025-02-11)

### 🚀 Features

- **components:** new api and style for accordion ([efab0a198](https://github.com/migrationsverket/midas/commit/efab0a198))
- **components:** add nvm config ([7cbbce66e](https://github.com/migrationsverket/midas/commit/7cbbce66e))

### 🩹 Fixes

- import/export textfield css directly from css module ([#212](https://github.com/migrationsverket/midas/pull/212))
- **components:** fix text when titles are longer than one row ([28b06cd31](https://github.com/migrationsverket/midas/commit/28b06cd31))
- **info-banner:** fix icon to be in same line with text in docs and story ([f37b798c3](https://github.com/migrationsverket/midas/commit/f37b798c3))
- **theme:** create separate theme export ([a6c95a23c](https://github.com/migrationsverket/midas/commit/a6c95a23c))
- **theme:** search replace theme paths ([305581347](https://github.com/migrationsverket/midas/commit/305581347))

### ❤️ Thank You

- Axel Engström
- jabir Khalil
- pixelrickdreamer @pixelrickdreamer
- Wilhelm Hjelm

## 1.1.0 (2025-01-31)

### 🚀 Features

- **components:** new api and style for accordion

### 🩹 Fixes

- import/export textfield css directly from css module

### ❤️ Thank You

- pixelrickdreamer
- Wilhelm Hjelm

## 1.0.2 (2025-01-27)

### 🚀 Features

- **DS-434/tag:** create a new component
- **Modal:** create a new component
- **Modal:** create a new component
- **Modal:** fix styling, delete not used codes and add button component
- ⚠️  **accordion:** new build
- ⚠️  **breadcrumbs:** new build
- **button:** add react aria button component
- **button:** added tertiary and danger themes
- ⚠️  **button:** new build
- **button:** remove underline from tertiary button
- **button:** add icon and iconSize prop and logic to make icon smaller when size=small
- **button:** update button stories
- **button:** remove unused icon
- **button:** add property to change button's icon direction
- **button:** change inline style to class style
- **button:** add buttongroup component, move mobile rules
- ⚠️  **card:** new build
- ⚠️  **card:** new api, replace button with stretched link
- **card:** support custom link component
- **checkbox:** select all checkbox
- **checkbox:** new wrapper
- ⚠️  **checkbox:** new build
- **combobox:** create a combobox component with styling
- ⚠️  **combobox:** new build
- **date-picker:** new wrapper
- **date-picker:** new datepicker
- **date-picker:** datepicker renamed daterangepicker in favor of datepicker
- ⚠️  **date-picker:** new build
- **docs:** add docusaurus boilerplate
- **dropdown:** new component
- ⚠️  **file-upload:** new build
- **fileupload:** new wrapper
- **flex:** add fluid variant
- **flex:** can now take all props of usual div
- ⚠️  **flex:** new build
- **grid:** add fluid variant
- **grid:** can now take all props of usual div
- ⚠️  **grid:** new build
- **info-banner:** add support for ReactNodes in message
- **info-banner:** dismissable banner
- ⚠️  **info-banner:** new build
- ⚠️  **link:** new build
- **link:** add standalone link variant
- **link:** ability to stretch link in parent
- **link:** add icon in prop, add disabeld, and add states in css
- ⚠️  **link-button:** new build
- **link-button:** inherits api from button
- **link-button:** add own style, delete unuse codes, and fix the stories
- **link-button:** add full width
- **link-button:** add full width and delete unuse code
- **linkButton:** add icon
- ⚠️  **logo:** new build
- **logo:** new variants and refactor
- ⚠️  **modal:** new API
- **multi-select:** new component
- **radio:** new wrapper
- ⚠️  **radio:** new build + replace vite test
- ⚠️  **search-field:** new build
- **searchfield:** props rewrite
- **select:** new wrapper
- ⚠️  **select:** new build
- **sidebar:** new component
- ⚠️  **spinner:** new build
- **storybook:** add boilerplate storybook instance
- **table:** new component!
- ⚠️  **table:** new build
- **table:** add docs + striped option
- ⚠️  **tabs:** new build
- **tag:** new component
- **tertiary button:** change padding
- **textArea:** creat textArea component
- **textarea:** new component
- **textarea:** new wrapper
- ⚠️  **textarea:** new build
- **textfield:** add ssn validation
- ⚠️  **textfield:** new build
- **textfield:** support counter and maxCharacters
- **theme:** new build
- ⚠️  **toast:** new build
- **ui:** export new components
- **ui:** new build

### 🩹 Fixes

- add new text
- add size small to button component
- add size small to button component
- add size small to button component
- package.json and package-lock.json
- delete not used imoprt from button component and delete not use test.txt
- change node version on deploy
- new readme + doc build
- a littel fixing
- add test for textarea in textfield.spec
- add test for textarea
- shows an error when the max current charaters are more from max charecters
- shows an error when the max current charaters are more from max charecters
- shows an error when the max current charaters are more from max charecters
- add how many characters are over from max characters
- fix disable state text color and change px to rem
- add a character's collector when there is no max characters was given
- add isDisabled in AriaSelect tag and fix the style in css
- remove file
- dependencies
- fix the link path in readme
- **accordion:** new build
- **accordion:** fix changelog
- **accordion:** hover on trigger
- **accordion:** update icon size
- **accordion:** color on iOS
- **breadcrumbs:** fix styles + new build
- **breadcrumbs:** remove stories from build
- **breadcrumbs:** update deps
- **breadcrumbs:** dependency update
- **breadcrumbs:** update deps
- **button:** add large option to size in storybook and fix styling to tertiary
- **button:** change name large to null in the size option in storybook
- **button:** new build
- **button:** test fix
- **button:** add icon variant
- **button:** clear changelog
- **button:** share api with link-button
- **button:** change property name to iconPlacement
- **button:** delete unuse inline style and fix merge
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
- **card:** accecibility fix on icon
- **card:** new build
- **card:** only animate out arrow
- **card:** correct border-color
- **card:** clear changelog
- **card:** remove stories from build
- **card:** update deps
- **card:** update deps
- **card:** better column stretching
- **card:** support custom link
- **checkbox:** new build
- **checkbox:** change styling of description
- **checkbox:** fix gap between label and description
- **checkbox:** change to luide icon and fix css
- **checkbox:** fix checkbox size and disabled state css
- **checkbox:** change back to polyline for checkmark
- **checkbox:** add the animation back again
- **checkbox:** remove unused icons
- **checkbox:** change gap to 0.5rem
- **checkbox:** remove left line when invalid
- **checkbox:** change gap to 0,5rem
- **checkbox:** remove stories from build + clear changelog
- **checkbox:** adjust styling
- **checkbox:** select all can be indeterminate
- **checkbox:** change the styling in focus visible to a variable
- **checkbox:** fix state could be null
- **combobox:** add a story autocomplete,fix storybook name,the tag to ComboBox,and style focus state
- **combobox:** fix diabled state style and fix combobox test
- **combobox:** naming, docs, build
- **combobox:** rewrite to new wrapper
- **combobox:** fix props
- **combobox:** button alignment
- **combobox:** naming
- **combobox:** focus style fix
- **combobox:** chevron icon will be upp when select is opened
- **combobox:** add aria-expanded to css to rotate chevron icon
- **combobox:** remove unessecary component rename + a11y
- **combobox:** remove stories from build
- **combobox:** update readme
- **combobox:** update icon size
- **combobox:** new focus style
- **combobox:** fix style
- **combobox:** support modals
- **combobox:** color on iOS
- **combobox:** fix build
- **date-picker:** new build
- **date-picker:** correct color on placeholder
- **date-picker:** correct colors
- **date-picker:** remove stories from build
- **date-picker:** update deps
- **date-picker:** fix deps
- **date-picker:** update icon size
- **date-picker:** change the styling in focus visible to a variable
- **date-picker:** add variable
- **date-picker:** new focus state
- **date-picker:** dependency update
- **date-picker:** spacing on timefields
- **date-picker:** update deps
- **date-picker:** support modals
- **date-picker:** add deps
- **date-picker:** color on iOS
- **date-picker:** update deps
- **date-picker:** update deps
- **docs:** change doc structure
- **docs:** accessibility is back
- **docs:** mend broken pages
- **docs:** fix top banner
- **docs:** test commit on GitHub
- **docs:** updates to accomodate storybook
- **docs:** remove "build with"
- **docs:** fix storybook link
- **docs:** new frontpage
- **docs:** fix broken link
- **docs:** update url
- **docs:** update url
- **docs:** fix broken link
- **file-upload:** fix build
- **file-upload:** remove stories from build
- **file-upload:** update deps
- **file-upload:** update icon size
- **file-upload:** fix text overflow mobile
- **flex:** new build
- **flex:** remove stories from build
- **flex:** better column stretching
- **flex:** fix column wrapping
- **grid:** new build
- **grid:** remove stories from build
- **grid:** update readme
- **grid:** better column stretching
- **info-banner:** new build
- **info-banner:** fix dismissable button
- **info-banner:** add div props to info-banner
- **info-banner:** remove stories from build
- **info-banner:** update deps
- **info-banner:** fix classname info clsx
- **info-banner:** update icon size
- **link:** new build
- **link:** remove stories from build
- **link:** update readme
- **link:** icon stays in size
- **link:** ignore icon prop if link is standalone
- **link:** fix style to center the icon with text
- **link:** fix the wrong style
- **link:** add style underline to hover and active state
- **link:** add visited state to css
- **link:** add url address which leads to link component in docsweb
- **link:** commit
- **link:** support custom link component
- **link-button:** new build
- **link-button:** update deps
- **link-button:** update readme
- **link-button:** fix dependency
- **link-button:** fix styling justify-content
- **link-button:** fix padding
- **link-button:** adjust styles + add focus styles
- **link-button:** add variants
- **link-button:** change gap to 0.5rem
- **link-button:** remove the duplicated code
- **link-button:** change justify-content to center to make fullwidth look better
- **link-button:** custom link component
- **link-button:** external link icon on target _blank
- **linkButton:** use button style and fix the story for icon
- **logo:** new build
- **logo:** remove stories from build + clear changelog
- **logo:** add support for all <div> props, like className
- **logo:** html tag name fix
- **modal:** delete trigger button and fix styling
- **modal:** delete unuse styling, and move styling for storybook to storybook
- **modal:** fix styling in css file
- **modal:** delete icon backgrund-color in css file
- **modal:** update modal docs
- **modal:** fix bug of unopenable modal + new docs
- **modal:** fix spacing
- **modal:** adjust max height and overflow
- **multi-select:** style adjustments
- **multi-select:** support for all default key
- **multi-select:** validation
- **multi-select:** fix project
- **multi-select:** fix build
- **multi-select:** change remove to update list
- **multi-select:** support modals
- **multi-select:** null on item fix
- **multi-select:** fix intermittent errors in tag removal
- **radio:** remove padding
- **radio:** new build
- **radio:** change padding on label and helper text
- **radio:** remove invalid line and fix css
- **radio:** change gap between elements to 0.5rem
- **radio:** remove stories from build + clear changelog
- **radio:** change the styling in focus visible to a variable
- **radio:** move radioGroup storybook to radio storybook, and fix tsconfig
- **radio:** fix data in stories
- **search-field:** remove stories from build
- **search-field:** update deps
- **search-field:** update deps
- **search-field:** update readme
- **search-field:** fix deps
- **search-field:** update icon size
- **search-field:** inherit focus from textField
- **search-field:** dependency update
- **search-field:** update deps
- **search-field:** update deps
- **search-field:** update deps
- **search-field:** fix padding to remove style error between button and input
- **select:** remove padding and add variables
- **select:** fix list spacing
- **select:** new build
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
- **spinner:** new build
- **spinner:** remove stories from build
- **spinner:** update deps
- **spinner:** update readme
- **table:** use client
- **table:** remove stories from build
- **table:** update deps
- **table:** update readme
- **table:** update icon size
- **tabs:** new build
- **tabs:** update readme
- **tabs:** new focus state
- **tabs:** fix styles
- **tabs:** responsive
- **tag:** fix stories and css and delete unuse codes
- **tag:** styling + dismissable
- **tag:** fix project
- **tag:** dependency update
- **textField:** fix text color in invald error to red color
- **textarea:** fix handleChange run when element focus
- **textarea:** naming
- **textarea:** remove stories from build
- **textarea:** remove stories from build
- **textarea:** update readme
- **textarea:** remove focus animation
- **textarea:** fix focus
- **textarea:** fix to show the error when the characters be more from max
- **textarea:** change color
- **textarea:** change error message at maxCharacters
- **textarea:** change error message when > maxCharacter
- **textfield:** remove padding
- **textfield:** new build
- **textfield:** style
- **textfield:** fix alignment
- **textfield:** fix error message alignment
- **textfield:** fix stories
- **textfield:** update deps
- **textfield:** update readme
- **textfield:** fix text color in invald error to red color
- **textfield:** update icon size
- **textfield:** remove focus animation
- **textfield:** fix focus
- **textfield:** update error message docs + support
- **textfield:** change error message when > maxCharacter
- **textfield, textarea:** fix spacing
- **theme:** include tokens again
- **theme:** clear changelog
- **theme:** update version
- **theme:** add new variable (bump)
- **toast:** larger icon
- **toast:** fix button size + new build
- **toast:** remove stories from build
- **toast:** update deps
- **toast:** update readme
- **toast:** update icon size
- **toast:** new focus state
- **toast:** update deps + fix lint for now
- **toast:** update deps + lint
- **toast:** refreshed code, design and docs
- **ui:** update deps
- **ui:** update deps
- **ui:** add modal
- **ui:** update theme version
- **ui:** dependency update + added multi-select
- **ui:** update deps
- **ui:** update deps

### ⚠️  Breaking Changes

- **modal:** new API
- **card:** new card api
- ⚠️  **toast:** new build
- ⚠️  **textfield:** new build
- ⚠️  **textarea:** new build
- ⚠️  **tabs:** new build
- ⚠️  **table:** new build
- ⚠️  **spinner:** new build
- ⚠️  **select:** new build
- ⚠️  **search-field:** new build
- ⚠️  **radio:** new build + replace vite test
- ⚠️  **logo:** new build
- ⚠️  **link-button:** new build
- ⚠️  **link:** new build
- ⚠️  **info-banner:** new build
- ⚠️  **grid:** new build
- ⚠️  **flex:** new build
- ⚠️  **file-upload:** new build
- ⚠️  **date-picker:** new build
- ⚠️  **combobox:** new build
- ⚠️  **checkbox:** new build
- ⚠️  **card:** new build
- ⚠️  **button:** new build
- ⚠️  **breadcrumbs:** new build
- ⚠️  **accordion:** new build

### ❤️ Thank You

- jabir khalil
- jabir Khalil
- PHIEKS
- pixelrickdreamer
- Wilhelm Hjelm
- wilhjelmig

## 1.0.1 (2025-01-27)

### 🚀 Features

- **DS-434/tag:** create a new component
- **Modal:** create a new component
- **Modal:** create a new component
- **Modal:** fix styling, delete not used codes and add button component
- ⚠️  **accordion:** new build
- ⚠️  **breadcrumbs:** new build
- **button:** added tertiary and danger themes
- ⚠️  **button:** new build
- **button:** remove underline from tertiary button
- **button:** add icon and iconSize prop and logic to make icon smaller when size=small
- **button:** update button stories
- **button:** remove unused icon
- **button:** add property to change button's icon direction
- **button:** change inline style to class style
- **button:** add buttongroup component, move mobile rules
- ⚠️  **card:** new build
- ⚠️  **card:** new api, replace button with stretched link
- **card:** support custom link component
- **checkbox:** select all checkbox
- **checkbox:** new wrapper
- ⚠️  **checkbox:** new build
- **combobox:** create a combobox component with styling
- ⚠️  **combobox:** new build
- **date-picker:** new wrapper
- **date-picker:** new datepicker
- **date-picker:** datepicker renamed daterangepicker in favor of datepicker
- ⚠️  **date-picker:** new build
- **dropdown:** new component
- ⚠️  **file-upload:** new build
- **fileupload:** new wrapper
- **flex:** add fluid variant
- **flex:** can now take all props of usual div
- ⚠️  **flex:** new build
- **grid:** add fluid variant
- **grid:** can now take all props of usual div
- ⚠️  **grid:** new build
- **info-banner:** add support for ReactNodes in message
- **info-banner:** dismissable banner
- ⚠️  **info-banner:** new build
- ⚠️  **link:** new build
- **link:** add standalone link variant
- **link:** ability to stretch link in parent
- **link:** add icon in prop, add disabeld, and add states in css
- ⚠️  **link-button:** new build
- **link-button:** inherits api from button
- **link-button:** add own style, delete unuse codes, and fix the stories
- **link-button:** add full width
- **link-button:** add full width and delete unuse code
- **linkButton:** add icon
- ⚠️  **logo:** new build
- **logo:** new variants and refactor
- ⚠️  **modal:** new API
- **multi-select:** new component
- **radio:** new wrapper
- ⚠️  **radio:** new build + replace vite test
- ⚠️  **search-field:** new build
- **searchfield:** props rewrite
- **select:** new wrapper
- ⚠️  **select:** new build
- **sidebar:** new component
- ⚠️  **spinner:** new build
- **table:** new component!
- ⚠️  **table:** new build
- **table:** add docs + striped option
- ⚠️  **tabs:** new build
- **tag:** new component
- **tertiary button:** change padding
- **textArea:** creat textArea component
- **textarea:** new component
- **textarea:** new wrapper
- ⚠️  **textarea:** new build
- **textfield:** add ssn validation
- ⚠️  **textfield:** new build
- **textfield:** support counter and maxCharacters
- **theme:** new build
- ⚠️  **toast:** new build
- **ui:** export new components
- **ui:** new build

### 🩹 Fixes

- change node version on deploy
- new readme + doc build
- a littel fixing
- add test for textarea in textfield.spec
- add test for textarea
- shows an error when the max current charaters are more from max charecters
- shows an error when the max current charaters are more from max charecters
- shows an error when the max current charaters are more from max charecters
- add how many characters are over from max characters
- fix disable state text color and change px to rem
- add a character's collector when there is no max characters was given
- add isDisabled in AriaSelect tag and fix the style in css
- remove file
- dependencies
- fix the link path in readme
- **accordion:** new build
- **accordion:** fix changelog
- **accordion:** hover on trigger
- **accordion:** update icon size
- **accordion:** color on iOS
- **breadcrumbs:** fix styles + new build
- **breadcrumbs:** remove stories from build
- **breadcrumbs:** update deps
- **breadcrumbs:** dependency update
- **breadcrumbs:** update deps
- **button:** add large option to size in storybook and fix styling to tertiary
- **button:** change name large to null in the size option in storybook
- **button:** new build
- **button:** test fix
- **button:** add icon variant
- **button:** clear changelog
- **button:** share api with link-button
- **button:** change property name to iconPlacement
- **button:** delete unuse inline style and fix merge
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
- **card:** accecibility fix on icon
- **card:** new build
- **card:** only animate out arrow
- **card:** correct border-color
- **card:** clear changelog
- **card:** remove stories from build
- **card:** update deps
- **card:** update deps
- **card:** better column stretching
- **card:** support custom link
- **checkbox:** new build
- **checkbox:** change styling of description
- **checkbox:** fix gap between label and description
- **checkbox:** change to luide icon and fix css
- **checkbox:** fix checkbox size and disabled state css
- **checkbox:** change back to polyline for checkmark
- **checkbox:** add the animation back again
- **checkbox:** remove unused icons
- **checkbox:** change gap to 0.5rem
- **checkbox:** remove left line when invalid
- **checkbox:** change gap to 0,5rem
- **checkbox:** remove stories from build + clear changelog
- **checkbox:** adjust styling
- **checkbox:** select all can be indeterminate
- **checkbox:** change the styling in focus visible to a variable
- **checkbox:** fix state could be null
- **combobox:** add a story autocomplete,fix storybook name,the tag to ComboBox,and style focus state
- **combobox:** fix diabled state style and fix combobox test
- **combobox:** naming, docs, build
- **combobox:** rewrite to new wrapper
- **combobox:** fix props
- **combobox:** button alignment
- **combobox:** naming
- **combobox:** focus style fix
- **combobox:** chevron icon will be upp when select is opened
- **combobox:** add aria-expanded to css to rotate chevron icon
- **combobox:** remove unessecary component rename + a11y
- **combobox:** remove stories from build
- **combobox:** update readme
- **combobox:** update icon size
- **combobox:** new focus style
- **combobox:** fix style
- **combobox:** support modals
- **combobox:** color on iOS
- **combobox:** fix build
- **date-picker:** new build
- **date-picker:** correct color on placeholder
- **date-picker:** correct colors
- **date-picker:** remove stories from build
- **date-picker:** update deps
- **date-picker:** fix deps
- **date-picker:** update icon size
- **date-picker:** change the styling in focus visible to a variable
- **date-picker:** add variable
- **date-picker:** new focus state
- **date-picker:** dependency update
- **date-picker:** spacing on timefields
- **date-picker:** update deps
- **date-picker:** support modals
- **date-picker:** add deps
- **date-picker:** color on iOS
- **date-picker:** update deps
- **date-picker:** update deps
- **docs:** change doc structure
- **docs:** accessibility is back
- **docs:** mend broken pages
- **docs:** fix top banner
- **docs:** test commit on GitHub
- **docs:** updates to accomodate storybook
- **docs:** remove "build with"
- **docs:** fix storybook link
- **docs:** new frontpage
- **docs:** fix broken link
- **docs:** update url
- **docs:** update url
- **docs:** fix broken link
- **file-upload:** fix build
- **file-upload:** remove stories from build
- **file-upload:** update deps
- **file-upload:** update icon size
- **file-upload:** fix text overflow mobile
- **flex:** new build
- **flex:** remove stories from build
- **flex:** better column stretching
- **flex:** fix column wrapping
- **grid:** new build
- **grid:** remove stories from build
- **grid:** update readme
- **grid:** better column stretching
- **info-banner:** new build
- **info-banner:** fix dismissable button
- **info-banner:** add div props to info-banner
- **info-banner:** remove stories from build
- **info-banner:** update deps
- **info-banner:** fix classname info clsx
- **info-banner:** update icon size
- **link:** new build
- **link:** remove stories from build
- **link:** update readme
- **link:** icon stays in size
- **link:** ignore icon prop if link is standalone
- **link:** fix style to center the icon with text
- **link:** fix the wrong style
- **link:** add style underline to hover and active state
- **link:** add visited state to css
- **link:** add url address which leads to link component in docsweb
- **link:** commit
- **link:** support custom link component
- **link-button:** new build
- **link-button:** update deps
- **link-button:** update readme
- **link-button:** fix dependency
- **link-button:** fix styling justify-content
- **link-button:** fix padding
- **link-button:** adjust styles + add focus styles
- **link-button:** add variants
- **link-button:** change gap to 0.5rem
- **link-button:** remove the duplicated code
- **link-button:** change justify-content to center to make fullwidth look better
- **link-button:** custom link component
- **link-button:** external link icon on target _blank
- **linkButton:** use button style and fix the story for icon
- **logo:** new build
- **logo:** remove stories from build + clear changelog
- **logo:** add support for all <div> props, like className
- **logo:** html tag name fix
- **modal:** delete trigger button and fix styling
- **modal:** delete unuse styling, and move styling for storybook to storybook
- **modal:** fix styling in css file
- **modal:** delete icon backgrund-color in css file
- **modal:** update modal docs
- **modal:** fix bug of unopenable modal + new docs
- **modal:** fix spacing
- **modal:** adjust max height and overflow
- **multi-select:** style adjustments
- **multi-select:** support for all default key
- **multi-select:** validation
- **multi-select:** fix project
- **multi-select:** fix build
- **multi-select:** change remove to update list
- **multi-select:** support modals
- **multi-select:** null on item fix
- **multi-select:** fix intermittent errors in tag removal
- **radio:** remove padding
- **radio:** new build
- **radio:** change padding on label and helper text
- **radio:** remove invalid line and fix css
- **radio:** change gap between elements to 0.5rem
- **radio:** remove stories from build + clear changelog
- **radio:** change the styling in focus visible to a variable
- **radio:** move radioGroup storybook to radio storybook, and fix tsconfig
- **radio:** fix data in stories
- **search-field:** remove stories from build
- **search-field:** update deps
- **search-field:** update deps
- **search-field:** update readme
- **search-field:** fix deps
- **search-field:** update icon size
- **search-field:** inherit focus from textField
- **search-field:** dependency update
- **search-field:** update deps
- **search-field:** update deps
- **search-field:** update deps
- **search-field:** fix padding to remove style error between button and input
- **select:** remove padding and add variables
- **select:** fix list spacing
- **select:** new build
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
- **spinner:** new build
- **spinner:** remove stories from build
- **spinner:** update deps
- **spinner:** update readme
- **table:** use client
- **table:** remove stories from build
- **table:** update deps
- **table:** update readme
- **table:** update icon size
- **tabs:** new build
- **tabs:** update readme
- **tabs:** new focus state
- **tabs:** fix styles
- **tabs:** responsive
- **tag:** fix stories and css and delete unuse codes
- **tag:** styling + dismissable
- **tag:** fix project
- **tag:** dependency update
- **textField:** fix text color in invald error to red color
- **textarea:** fix handleChange run when element focus
- **textarea:** naming
- **textarea:** remove stories from build
- **textarea:** remove stories from build
- **textarea:** update readme
- **textarea:** remove focus animation
- **textarea:** fix focus
- **textarea:** fix to show the error when the characters be more from max
- **textarea:** change color
- **textarea:** change error message at maxCharacters
- **textarea:** change error message when > maxCharacter
- **textfield:** remove padding
- **textfield:** new build
- **textfield:** style
- **textfield:** fix alignment
- **textfield:** fix error message alignment
- **textfield:** fix stories
- **textfield:** update deps
- **textfield:** update readme
- **textfield:** fix text color in invald error to red color
- **textfield:** update icon size
- **textfield:** remove focus animation
- **textfield:** fix focus
- **textfield:** update error message docs + support
- **textfield:** change error message when > maxCharacter
- **textfield, textarea:** fix spacing
- **theme:** include tokens again
- **theme:** clear changelog
- **theme:** update version
- **theme:** add new variable (bump)
- **toast:** larger icon
- **toast:** fix button size + new build
- **toast:** remove stories from build
- **toast:** update deps
- **toast:** update readme
- **toast:** update icon size
- **toast:** new focus state
- **toast:** update deps + fix lint for now
- **toast:** update deps + lint
- **toast:** refreshed code, design and docs
- **ui:** update deps
- **ui:** update deps
- **ui:** add modal
- **ui:** update theme version
- **ui:** dependency update + added multi-select
- **ui:** update deps
- **ui:** update deps

### ⚠️  Breaking Changes

- **modal:** new API
- **card:** new card api
- ⚠️  **toast:** new build
- ⚠️  **textfield:** new build
- ⚠️  **textarea:** new build
- ⚠️  **tabs:** new build
- ⚠️  **table:** new build
- ⚠️  **spinner:** new build
- ⚠️  **select:** new build
- ⚠️  **search-field:** new build
- ⚠️  **radio:** new build + replace vite test
- ⚠️  **logo:** new build
- ⚠️  **link-button:** new build
- ⚠️  **link:** new build
- ⚠️  **info-banner:** new build
- ⚠️  **grid:** new build
- ⚠️  **flex:** new build
- ⚠️  **file-upload:** new build
- ⚠️  **date-picker:** new build
- ⚠️  **combobox:** new build
- ⚠️  **checkbox:** new build
- ⚠️  **card:** new build
- ⚠️  **button:** new build
- ⚠️  **breadcrumbs:** new build
- ⚠️  **accordion:** new build

### ❤️ Thank You

- jabir Khalil
- PHIEKS
- pixelrickdreamer
- Wilhelm Hjelm
- wilhjelmig

# 1.0.0 (2025-01-27)

### 🚀 Features

- **DS-434/tag:** create a new component
- **Modal:** create a new component
- **Modal:** create a new component
- **Modal:** fix styling, delete not used codes and add button component
- ⚠️  **accordion:** new build
- ⚠️  **breadcrumbs:** new build
- **button:** added tertiary and danger themes
- ⚠️  **button:** new build
- **button:** remove underline from tertiary button
- **button:** add icon and iconSize prop and logic to make icon smaller when size=small
- **button:** update button stories
- **button:** remove unused icon
- **button:** add property to change button's icon direction
- **button:** change inline style to class style
- **button:** add buttongroup component, move mobile rules
- ⚠️  **card:** new build
- ⚠️  **card:** new api, replace button with stretched link
- **card:** support custom link component
- **checkbox:** select all checkbox
- **checkbox:** new wrapper
- ⚠️  **checkbox:** new build
- **combobox:** create a combobox component with styling
- ⚠️  **combobox:** new build
- **date-picker:** new wrapper
- **date-picker:** new datepicker
- **date-picker:** datepicker renamed daterangepicker in favor of datepicker
- ⚠️  **date-picker:** new build
- **dropdown:** new component
- ⚠️  **file-upload:** new build
- **fileupload:** new wrapper
- **flex:** add fluid variant
- **flex:** can now take all props of usual div
- ⚠️  **flex:** new build
- **grid:** add fluid variant
- **grid:** can now take all props of usual div
- ⚠️  **grid:** new build
- **info-banner:** add support for ReactNodes in message
- **info-banner:** dismissable banner
- ⚠️  **info-banner:** new build
- ⚠️  **link:** new build
- **link:** add standalone link variant
- **link:** ability to stretch link in parent
- **link:** add icon in prop, add disabeld, and add states in css
- ⚠️  **link-button:** new build
- **link-button:** inherits api from button
- **link-button:** add own style, delete unuse codes, and fix the stories
- **link-button:** add full width
- **link-button:** add full width and delete unuse code
- **linkButton:** add icon
- ⚠️  **logo:** new build
- **logo:** new variants and refactor
- ⚠️  **modal:** new API
- **multi-select:** new component
- **radio:** new wrapper
- ⚠️  **radio:** new build + replace vite test
- ⚠️  **search-field:** new build
- **searchfield:** props rewrite
- **select:** new wrapper
- ⚠️  **select:** new build
- **sidebar:** new component
- ⚠️  **spinner:** new build
- **table:** new component!
- ⚠️  **table:** new build
- **table:** add docs + striped option
- ⚠️  **tabs:** new build
- **tag:** new component
- **tertiary button:** change padding
- **textArea:** creat textArea component
- **textarea:** new component
- **textarea:** new wrapper
- ⚠️  **textarea:** new build
- **textfield:** add ssn validation
- ⚠️  **textfield:** new build
- **textfield:** support counter and maxCharacters
- **theme:** new build
- ⚠️  **toast:** new build
- **ui:** export new components
- **ui:** new build

### 🩹 Fixes

- change node version on deploy
- new readme + doc build
- a littel fixing
- add test for textarea in textfield.spec
- add test for textarea
- shows an error when the max current charaters are more from max charecters
- shows an error when the max current charaters are more from max charecters
- shows an error when the max current charaters are more from max charecters
- add how many characters are over from max characters
- fix disable state text color and change px to rem
- add a character's collector when there is no max characters was given
- add isDisabled in AriaSelect tag and fix the style in css
- remove file
- dependencies
- fix the link path in readme
- **accordion:** new build
- **accordion:** fix changelog
- **accordion:** hover on trigger
- **accordion:** update icon size
- **accordion:** color on iOS
- **breadcrumbs:** fix styles + new build
- **breadcrumbs:** remove stories from build
- **breadcrumbs:** update deps
- **breadcrumbs:** dependency update
- **breadcrumbs:** update deps
- **button:** add large option to size in storybook and fix styling to tertiary
- **button:** change name large to null in the size option in storybook
- **button:** new build
- **button:** test fix
- **button:** add icon variant
- **button:** clear changelog
- **button:** share api with link-button
- **button:** change property name to iconPlacement
- **button:** delete unuse inline style and fix merge
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
- **card:** accecibility fix on icon
- **card:** new build
- **card:** only animate out arrow
- **card:** correct border-color
- **card:** clear changelog
- **card:** remove stories from build
- **card:** update deps
- **card:** update deps
- **card:** better column stretching
- **card:** support custom link
- **checkbox:** new build
- **checkbox:** change styling of description
- **checkbox:** fix gap between label and description
- **checkbox:** change to luide icon and fix css
- **checkbox:** fix checkbox size and disabled state css
- **checkbox:** change back to polyline for checkmark
- **checkbox:** add the animation back again
- **checkbox:** remove unused icons
- **checkbox:** change gap to 0.5rem
- **checkbox:** remove left line when invalid
- **checkbox:** change gap to 0,5rem
- **checkbox:** remove stories from build + clear changelog
- **checkbox:** adjust styling
- **checkbox:** select all can be indeterminate
- **checkbox:** change the styling in focus visible to a variable
- **checkbox:** fix state could be null
- **combobox:** add a story autocomplete,fix storybook name,the tag to ComboBox,and style focus state
- **combobox:** fix diabled state style and fix combobox test
- **combobox:** naming, docs, build
- **combobox:** rewrite to new wrapper
- **combobox:** fix props
- **combobox:** button alignment
- **combobox:** naming
- **combobox:** focus style fix
- **combobox:** chevron icon will be upp when select is opened
- **combobox:** add aria-expanded to css to rotate chevron icon
- **combobox:** remove unessecary component rename + a11y
- **combobox:** remove stories from build
- **combobox:** update readme
- **combobox:** update icon size
- **combobox:** new focus style
- **combobox:** fix style
- **combobox:** support modals
- **combobox:** color on iOS
- **combobox:** fix build
- **date-picker:** new build
- **date-picker:** correct color on placeholder
- **date-picker:** correct colors
- **date-picker:** remove stories from build
- **date-picker:** update deps
- **date-picker:** fix deps
- **date-picker:** update icon size
- **date-picker:** change the styling in focus visible to a variable
- **date-picker:** add variable
- **date-picker:** new focus state
- **date-picker:** dependency update
- **date-picker:** spacing on timefields
- **date-picker:** update deps
- **date-picker:** support modals
- **date-picker:** add deps
- **date-picker:** color on iOS
- **date-picker:** update deps
- **date-picker:** update deps
- **docs:** change doc structure
- **docs:** accessibility is back
- **docs:** mend broken pages
- **docs:** fix top banner
- **docs:** test commit on GitHub
- **docs:** updates to accomodate storybook
- **docs:** remove "build with"
- **docs:** fix storybook link
- **docs:** new frontpage
- **docs:** fix broken link
- **docs:** update url
- **docs:** update url
- **docs:** fix broken link
- **file-upload:** fix build
- **file-upload:** remove stories from build
- **file-upload:** update deps
- **file-upload:** update icon size
- **file-upload:** fix text overflow mobile
- **flex:** new build
- **flex:** remove stories from build
- **flex:** better column stretching
- **flex:** fix column wrapping
- **grid:** new build
- **grid:** remove stories from build
- **grid:** update readme
- **grid:** better column stretching
- **info-banner:** new build
- **info-banner:** fix dismissable button
- **info-banner:** add div props to info-banner
- **info-banner:** remove stories from build
- **info-banner:** update deps
- **info-banner:** fix classname info clsx
- **info-banner:** update icon size
- **link:** new build
- **link:** remove stories from build
- **link:** update readme
- **link:** icon stays in size
- **link:** ignore icon prop if link is standalone
- **link:** fix style to center the icon with text
- **link:** fix the wrong style
- **link:** add style underline to hover and active state
- **link:** add visited state to css
- **link:** add url address which leads to link component in docsweb
- **link:** commit
- **link:** support custom link component
- **link-button:** new build
- **link-button:** update deps
- **link-button:** update readme
- **link-button:** fix dependency
- **link-button:** fix styling justify-content
- **link-button:** fix padding
- **link-button:** adjust styles + add focus styles
- **link-button:** add variants
- **link-button:** change gap to 0.5rem
- **link-button:** remove the duplicated code
- **link-button:** change justify-content to center to make fullwidth look better
- **link-button:** custom link component
- **link-button:** external link icon on target _blank
- **linkButton:** use button style and fix the story for icon
- **logo:** new build
- **logo:** remove stories from build + clear changelog
- **logo:** add support for all <div> props, like className
- **logo:** html tag name fix
- **modal:** delete trigger button and fix styling
- **modal:** delete unuse styling, and move styling for storybook to storybook
- **modal:** fix styling in css file
- **modal:** delete icon backgrund-color in css file
- **modal:** update modal docs
- **modal:** fix bug of unopenable modal + new docs
- **modal:** fix spacing
- **modal:** adjust max height and overflow
- **multi-select:** style adjustments
- **multi-select:** support for all default key
- **multi-select:** validation
- **multi-select:** fix project
- **multi-select:** fix build
- **multi-select:** change remove to update list
- **multi-select:** support modals
- **multi-select:** null on item fix
- **multi-select:** fix intermittent errors in tag removal
- **radio:** remove padding
- **radio:** new build
- **radio:** change padding on label and helper text
- **radio:** remove invalid line and fix css
- **radio:** change gap between elements to 0.5rem
- **radio:** remove stories from build + clear changelog
- **radio:** change the styling in focus visible to a variable
- **radio:** move radioGroup storybook to radio storybook, and fix tsconfig
- **radio:** fix data in stories
- **search-field:** remove stories from build
- **search-field:** update deps
- **search-field:** update deps
- **search-field:** update readme
- **search-field:** fix deps
- **search-field:** update icon size
- **search-field:** inherit focus from textField
- **search-field:** dependency update
- **search-field:** update deps
- **search-field:** update deps
- **search-field:** update deps
- **search-field:** fix padding to remove style error between button and input
- **select:** remove padding and add variables
- **select:** fix list spacing
- **select:** new build
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
- **spinner:** new build
- **spinner:** remove stories from build
- **spinner:** update deps
- **spinner:** update readme
- **table:** use client
- **table:** remove stories from build
- **table:** update deps
- **table:** update readme
- **table:** update icon size
- **tabs:** new build
- **tabs:** update readme
- **tabs:** new focus state
- **tabs:** fix styles
- **tabs:** responsive
- **tag:** fix stories and css and delete unuse codes
- **tag:** styling + dismissable
- **tag:** fix project
- **tag:** dependency update
- **textField:** fix text color in invald error to red color
- **textarea:** fix handleChange run when element focus
- **textarea:** naming
- **textarea:** remove stories from build
- **textarea:** remove stories from build
- **textarea:** update readme
- **textarea:** remove focus animation
- **textarea:** fix focus
- **textarea:** fix to show the error when the characters be more from max
- **textarea:** change color
- **textarea:** change error message at maxCharacters
- **textarea:** change error message when > maxCharacter
- **textfield:** remove padding
- **textfield:** new build
- **textfield:** style
- **textfield:** fix alignment
- **textfield:** fix error message alignment
- **textfield:** fix stories
- **textfield:** update deps
- **textfield:** update readme
- **textfield:** fix text color in invald error to red color
- **textfield:** update icon size
- **textfield:** remove focus animation
- **textfield:** fix focus
- **textfield:** update error message docs + support
- **textfield:** change error message when > maxCharacter
- **textfield, textarea:** fix spacing
- **theme:** include tokens again
- **theme:** clear changelog
- **theme:** update version
- **theme:** add new variable (bump)
- **toast:** larger icon
- **toast:** fix button size + new build
- **toast:** remove stories from build
- **toast:** update deps
- **toast:** update readme
- **toast:** update icon size
- **toast:** new focus state
- **toast:** update deps + fix lint for now
- **toast:** update deps + lint
- **toast:** refreshed code, design and docs
- **ui:** update deps
- **ui:** update deps
- **ui:** add modal
- **ui:** update theme version
- **ui:** dependency update + added multi-select
- **ui:** update deps
- **ui:** update deps

### ⚠️  Breaking Changes

- **modal:** new API
- **card:** new card api
- ⚠️  **toast:** new build
- ⚠️  **textfield:** new build
- ⚠️  **textarea:** new build
- ⚠️  **tabs:** new build
- ⚠️  **table:** new build
- ⚠️  **spinner:** new build
- ⚠️  **select:** new build
- ⚠️  **search-field:** new build
- ⚠️  **radio:** new build + replace vite test
- ⚠️  **logo:** new build
- ⚠️  **link-button:** new build
- ⚠️  **link:** new build
- ⚠️  **info-banner:** new build
- ⚠️  **grid:** new build
- ⚠️  **flex:** new build
- ⚠️  **file-upload:** new build
- ⚠️  **date-picker:** new build
- ⚠️  **combobox:** new build
- ⚠️  **checkbox:** new build
- ⚠️  **card:** new build
- ⚠️  **button:** new build
- ⚠️  **breadcrumbs:** new build
- ⚠️  **accordion:** new build

### ❤️ Thank You

- jabir Khalil
- PHIEKS
- pixelrickdreamer
- Wilhelm Hjelm
- wilhjelmig

# Changelog

All notable changes to this project will be documented in this file. See [conventional commits](https://www.conventionalcommits.org/) for commit guidelines.

---
## [unreleased]

### ♻️ Refactoring

- **(button)** change label for null to Default (null) for better semantics - ([8601a72](https://github.com/migrationsverket/midas/commits/8601a72ada63b88c520f2b5b6ae86f653152ac55)) - PHIEKS
- **(danger button)** changed colors of hover and pressed to signalRed130 and signalRed150 - ([db690ae](https://github.com/migrationsverket/midas/commits/db690ae914155ce0f38ccccad8baf422269ce90c)) - PHIEKS
- **(docs)** change structure docs - ([a22ffaf](https://github.com/migrationsverket/midas/commits/a22ffaf54debf92f8ffd2c407a0f3749de570b82)) - Wilhelm Hjelm
- **(link)** change css - ([8319676](https://github.com/migrationsverket/midas/commits/8319676e6477fb34b30fd55cb031e6af2bed4d19)) - PHIEKS
- **(teaxtfield)** new textfield wrapper component - ([44a96e9](https://github.com/migrationsverket/midas/commits/44a96e9bff768f5d6016d85ec9a573d8869ceae3)) - jabir Khalil
- **(textarea)** name convention - ([6dd7f86](https://github.com/migrationsverket/midas/commits/6dd7f860e0659d08e309b14c5cb93cf03fd28ccb)) - Wilhelm Hjelm
- **(textarea)** properly fix textarea folder name - ([cdf4cf2](https://github.com/migrationsverket/midas/commits/cdf4cf2d92e449f7fda873948eb5521e27c13e91)) - Wilhelm Hjelm
- **(theme)** build tokens css from tokens ts - ([1f0cfa4](https://github.com/migrationsverket/midas/commits/1f0cfa4601929d58bd27ad9c0d1a572969bb5f9d)) - Wilhelm Hjelm
- **(tokens)** added token signalRed150 - ([13df91d](https://github.com/migrationsverket/midas/commits/13df91d9d28a36f99651813a0eacc47866b26d86)) - PHIEKS
- **(tokens)** make changes in the right file! - ([27ea2df](https://github.com/migrationsverket/midas/commits/27ea2dfe2ccc244aa860d83d591293ed28373c44)) - PHIEKS
- restructure - ([3249c37](https://github.com/migrationsverket/midas/commits/3249c378ff347568aef225baf4b4625d95a93f69)) - Wilhelm Hjelm
- change namespace to @midas-ds - ([c82a991](https://github.com/migrationsverket/midas/commits/c82a991704658b0120dc28309c972535db095946)) - Wilhelm Hjelm
- new playground apps - ([d415c17](https://github.com/migrationsverket/midas/commits/d415c17ebee4b1b2011d3baa0aeccadf43261429)) - Wilhelm Hjelm
- change import - ([6ced9ef](https://github.com/migrationsverket/midas/commits/6ced9efd9aa7975d4b8f5f76a83e0f3e34f40d57)) - Wilhelm Hjelm
- change test - ([a717056](https://github.com/migrationsverket/midas/commits/a717056a3014197b1bb4cc62899f1c9c2f16280c)) - Wilhelm Hjelm
- fixes - ([4e5ee55](https://github.com/migrationsverket/midas/commits/4e5ee551ee17eee06ab02d46c0d5ce1235f06d23)) - Wilhelm Hjelm
- upgrade - ([5bda647](https://github.com/migrationsverket/midas/commits/5bda647e7ef2d5d20a284ac4d6ffc893ab059e25)) - Wilhelm Hjelm
- deploy - ([c238523](https://github.com/migrationsverket/midas/commits/c2385239e6e8246a03a9747be6168bc86c9dcb93)) - Wilhelm Hjelm
- fix build - ([926c018](https://github.com/migrationsverket/midas/commits/926c0188070ad060836fea2f7aa0dd31eb51a69b)) - Wilhelm Hjelm
- fix build - ([583280a](https://github.com/migrationsverket/midas/commits/583280a4f0f2ee4d53e8628806ce134cca9b6ea2)) - Wilhelm Hjelm
- new output path - ([3299e38](https://github.com/migrationsverket/midas/commits/3299e38af0571bc74e732473bd34ec6928212408)) - Wilhelm Hjelm
- actions - ([f8b670d](https://github.com/migrationsverket/midas/commits/f8b670de4a24e08b09f18679d6520fb2036bd891)) - Wilhelm Hjelm
- merge - ([1f52d8a](https://github.com/migrationsverket/midas/commits/1f52d8ab15bcbbe1498e8985b97d75309a0cc2a3)) - PHIEKS
- storybook restructure - ([dfbb50c](https://github.com/migrationsverket/midas/commits/dfbb50c98d440af53eac38f360b4180ca72a9df0)) - Wilhelm Hjelm
- storybook fix types - ([4da2398](https://github.com/migrationsverket/midas/commits/4da239899f7348320e7ba2f91a502cf42c8ddfb7)) - Wilhelm Hjelm
- fix husky rules - ([3514cb3](https://github.com/migrationsverket/midas/commits/3514cb35bc211c8a951eb213e798eb09763a271d)) - Wilhelm Hjelm
- husky rules - ([f6e8008](https://github.com/migrationsverket/midas/commits/f6e80088696a47fae81fe5f0eba7fe3e7dda6caa)) - Wilhelm Hjelm
- husky rules - ([5cea4aa](https://github.com/migrationsverket/midas/commits/5cea4aa0c8cbb51525bbe6116a089ea1cb1a11b5)) - Wilhelm Hjelm
- fix commitlint and commits - ([15ee1f5](https://github.com/migrationsverket/midas/commits/15ee1f546bec7fc1813c369249b58a2a5af4e377)) - Wilhelm Hjelm
- remove proseWrap - ([4ad4612](https://github.com/migrationsverket/midas/commits/4ad461262629b30c2a6915ae7f3874ea9bc68983)) - PHIEKS

### ✅ Tests

- **(modal)** remove test - ([e1c976a](https://github.com/migrationsverket/midas/commits/e1c976a9bd36ec41f567bfed0e1d58e5d09f3e76)) - Wilhelm Hjelm

### ✨Features

- **(DS-434/tag)** create a new component - ([23d36cd](https://github.com/migrationsverket/midas/commits/23d36cd97193dccbb40b7d57350251ff6a5b22b9)) - jabir Khalil
- **(Modal)** create a new component - ([9f3ba44](https://github.com/migrationsverket/midas/commits/9f3ba445f2e4c60c4d029377978ab1b8c623635a)) - jabir Khalil
- **(Modal)** create a new component - ([02ca9df](https://github.com/migrationsverket/midas/commits/02ca9df1b5d115bacb669dd1c8c8dda42b7d8ebb)) - jabir Khalil
- **(Modal)** fix styling, delete not used codes and add button component - ([d13c8d0](https://github.com/migrationsverket/midas/commits/d13c8d0d56f07f38f58dd9a3ddf0746bb7ada095)) - jabir Khalil
- **(accordion)** [**breaking**] new build - ([d7a3d40](https://github.com/migrationsverket/midas/commits/d7a3d40c2cf86e068c16fa5004fa7146d76ee640)) - Wilhelm Hjelm
- **(breadcrumbs)** [**breaking**] new build - ([33ae364](https://github.com/migrationsverket/midas/commits/33ae364ae4fdc8aae5178ae0cbf5431a68f3fbf9)) - Wilhelm Hjelm
- **(button)** [**breaking**] new build - ([cf0f9b2](https://github.com/migrationsverket/midas/commits/cf0f9b2e7962f93232cdc8742274e353155c74e8)) - Wilhelm Hjelm
- **(button)** remove underline from tertiary button - ([113b3a5](https://github.com/migrationsverket/midas/commits/113b3a5e479d2dd5a7af0e1cf9a5175cc2295a97)) - PHIEKS
- **(button)** add icon and iconSize prop and logic to make icon smaller when size=small - ([44c637f](https://github.com/migrationsverket/midas/commits/44c637f81f6be797b59b91187379c845a6052929)) - PHIEKS
- **(button)** update button stories - ([2a85551](https://github.com/migrationsverket/midas/commits/2a85551a3694789683c78cff47fc9dcd78f5543a)) - PHIEKS
- **(button)** remove unused icon - ([91b8e5b](https://github.com/migrationsverket/midas/commits/91b8e5b7c65e31adc9ef0cd2f3dd669e7f17c9c0)) - PHIEKS
- **(button)** add property to change button's icon direction - ([cfd3dbe](https://github.com/migrationsverket/midas/commits/cfd3dbe31bd11ee6e40bb08e4e8eeeed3f59a6dd)) - jabir Khalil
- **(button)** change inline style to class style - ([724d45d](https://github.com/migrationsverket/midas/commits/724d45d85b9b61e204ffea627a62422f78cd3e7b)) - jabir Khalil
- **(button)** add buttongroup component, move mobile rules - ([6ba8ec5](https://github.com/migrationsverket/midas/commits/6ba8ec5d0a84654e75b3902b5e2b47b505a7445b)) - Wilhelm Hjelm
- **(card)** [**breaking**] new build - ([8d3d9f1](https://github.com/migrationsverket/midas/commits/8d3d9f14bf9d9ef46b85b425648289d0bc8517bc)) - Wilhelm Hjelm
- **(card)** [**breaking**] new api, replace button with stretched link - ([a87d021](https://github.com/migrationsverket/midas/commits/a87d02101dde2b91bf9881be2ea5f663940f4a4d)) - Wilhelm Hjelm
- **(card)** support custom link component - ([556a24b](https://github.com/migrationsverket/midas/commits/556a24b89b90524c471170c5bba2163f60e7d418)) - Wilhelm Hjelm
- **(checkbox)** new wrapper - ([6f23b57](https://github.com/migrationsverket/midas/commits/6f23b57b9efc08efcfc913ca75aff799c96d2707)) - Wilhelm Hjelm
- **(checkbox)** [**breaking**] new build - ([9d4bbde](https://github.com/migrationsverket/midas/commits/9d4bbde760f16321b573a2072a601491e2602565)) - Wilhelm Hjelm
- **(combobox)** create a combobox component with styling - ([b604153](https://github.com/migrationsverket/midas/commits/b6041539a4bba2777f7485426f099d1a30b82a63)) - jabir Khalil
- **(combobox)** [**breaking**] new build - ([e867ce4](https://github.com/migrationsverket/midas/commits/e867ce426aa495c63f22bc7437ea8c7a62a1d6b6)) - Wilhelm Hjelm
- **(date-picker)** new wrapper - ([d9f65eb](https://github.com/migrationsverket/midas/commits/d9f65ebd7dbf9193548692ace46ec18033d35213)) - Wilhelm Hjelm
- **(date-picker)** new datepicker - ([6b48888](https://github.com/migrationsverket/midas/commits/6b48888369f5a639f450ec335c183a6b098bd733)) - Wilhelm Hjelm
- **(date-picker)** datepicker renamed daterangepicker in favor of datepicker - ([1749b36](https://github.com/migrationsverket/midas/commits/1749b363539759e451a3b1d7d7221e847b63ab66)) - Wilhelm Hjelm
- **(date-picker)** [**breaking**] new build - ([b395ea7](https://github.com/migrationsverket/midas/commits/b395ea7dfab133c57d9541149e4e34f08757d48c)) - Wilhelm Hjelm
- **(dropdown)** new component - ([b7573b2](https://github.com/migrationsverket/midas/commits/b7573b2577a6c72f9d62ef5132f9bc15a4dae0c4)) - Wilhelm Hjelm
- **(file-upload)** [**breaking**] new build - ([ed8219b](https://github.com/migrationsverket/midas/commits/ed8219b9b0985697e31f0de84c1089428dbeb5e6)) - Wilhelm Hjelm
- **(fileupload)** new wrapper - ([a948f22](https://github.com/migrationsverket/midas/commits/a948f2250fe619d17ed5d514ebe2586ccab990a3)) - Wilhelm Hjelm
- **(flex)** add fluid variant - ([5a749ff](https://github.com/migrationsverket/midas/commits/5a749ff1cb1ed13733e56c48f334737fec116930)) - Wilhelm Hjelm
- **(flex)** can now take all props of usual div - ([535ffef](https://github.com/migrationsverket/midas/commits/535ffefd71479b060a2a40962a3e67f898b3bb2e)) - Wilhelm Hjelm
- **(flex)** [**breaking**] new build - ([6bd011f](https://github.com/migrationsverket/midas/commits/6bd011f34cb1e48f7888acb2f0fb1b57fb08ef2f)) - Wilhelm Hjelm
- **(grid)** add fluid variant - ([babaa23](https://github.com/migrationsverket/midas/commits/babaa23bec011f3a4fb15c705284b0ca87f6d4d8)) - Wilhelm Hjelm
- **(grid)** can now take all props of usual div - ([93976ad](https://github.com/migrationsverket/midas/commits/93976ada6838774003bacd558e634e536988ab08)) - Wilhelm Hjelm
- **(grid)** [**breaking**] new build - ([622d7ef](https://github.com/migrationsverket/midas/commits/622d7efcb16c278f645ab03294d753fa85a39791)) - Wilhelm Hjelm
- **(info-banner)** add support for ReactNodes in message - ([8947dc0](https://github.com/migrationsverket/midas/commits/8947dc0572a656a93b010dcf2b6f1b55d2657d2a)) - Wilhelm Hjelm
- **(info-banner)** dismissable banner - ([e5ab7d0](https://github.com/migrationsverket/midas/commits/e5ab7d0fe792512710c5df540bc62616e0a10313)) - Wilhelm Hjelm
- **(info-banner)** [**breaking**] new build - ([d34c98f](https://github.com/migrationsverket/midas/commits/d34c98f86b7f665018c3e1dc96ff3ae70cbe5816)) - Wilhelm Hjelm
- **(link)** [**breaking**] new build - ([62a1b20](https://github.com/migrationsverket/midas/commits/62a1b20a686fbbc60ba829331027052903320d02)) - Wilhelm Hjelm
- **(link)** add standalone link variant - ([ec4aed3](https://github.com/migrationsverket/midas/commits/ec4aed3c7f8cb1d1f33abfc55ef40a61927a14a0)) - Wilhelm Hjelm
- **(link)** ability to stretch link in parent - ([cd4dc18](https://github.com/migrationsverket/midas/commits/cd4dc18c7e062bb4d076c4f24d1d2090caed42c6)) - Wilhelm Hjelm
- **(link)** add icon in prop, add disabeld, and add states in css - ([fb25727](https://github.com/migrationsverket/midas/commits/fb25727d7b96d6bac59d9d2e78e370cb91f06705)) - jabir Khalil
- **(link-button)** [**breaking**] new build - ([9f7c29a](https://github.com/migrationsverket/midas/commits/9f7c29aa4bfed8447eaa01be718b28876685ab10)) - Wilhelm Hjelm
- **(link-button)** inherits api from button - ([7cd24c0](https://github.com/migrationsverket/midas/commits/7cd24c01097861428c864a02a5edb79a61ff40d3)) - Wilhelm Hjelm
- **(link-button)** add own style, delete unuse codes, and fix the stories - ([1489514](https://github.com/migrationsverket/midas/commits/14895149dc80a456dedb728240f0ae7511bd568d)) - jabir Khalil
- **(link-button)** add full width - ([3a183ce](https://github.com/migrationsverket/midas/commits/3a183ce5cf88f9549a8d0fcabb20bfcceef34cd0)) - jabir Khalil
- **(link-button)** add full width and delete unuse code - ([7cc43d8](https://github.com/migrationsverket/midas/commits/7cc43d8404c610fecd9048a21549926a830fa6f7)) - jabir Khalil
- **(linkButton)** add icon - ([ee4dab9](https://github.com/migrationsverket/midas/commits/ee4dab978ddd33e23be09258dc72fc7dddeadeae)) - jabir Khalil
- **(logo)** [**breaking**] new build - ([633018f](https://github.com/migrationsverket/midas/commits/633018f687c3f86874cb89516a719ebf93606767)) - Wilhelm Hjelm
- **(logo)** new variants and refactor - ([58ab2c9](https://github.com/migrationsverket/midas/commits/58ab2c9f0f2cd8d490e2760f29408e98f3cb2cc8)) - Wilhelm Hjelm
- **(modal)** [**breaking**] new API - ([6147348](https://github.com/migrationsverket/midas/commits/61473485306c1a6f3836eaba4c0d605fbb1e2b0c)) - Wilhelm Hjelm
- **(multi-select)** new component - ([359d159](https://github.com/migrationsverket/midas/commits/359d1594f19d4982f7ada01e86a7cd9fc945c0cc)) - Wilhelm Hjelm
- **(radio)** new wrapper - ([bf415ce](https://github.com/migrationsverket/midas/commits/bf415ce0b6bcf9eed7d5f9dc0e9d8236e1e0e92b)) - Wilhelm Hjelm
- **(radio)** [**breaking**] new build + replace vite test - ([20fbca5](https://github.com/migrationsverket/midas/commits/20fbca552745ffff9a82f229036249bd628accd2)) - Wilhelm Hjelm
- **(search-field)** [**breaking**] new build - ([f2f04eb](https://github.com/migrationsverket/midas/commits/f2f04ebb69bb8ee8593ab03be5e21b8b0243aeeb)) - Wilhelm Hjelm
- **(searchfield)** props rewrite - ([de736c1](https://github.com/migrationsverket/midas/commits/de736c1b7b9f65c67f4052eeffb6537a9f96f911)) - Wilhelm Hjelm
- **(select)** new wrapper - ([a091086](https://github.com/migrationsverket/midas/commits/a0910868f36151326a2bb5b12da9c5431a32493a)) - Wilhelm Hjelm
- **(select)** [**breaking**] new build - ([d3f9148](https://github.com/migrationsverket/midas/commits/d3f9148391dd85b932bc02d2024b60c1dd3abb84)) - Wilhelm Hjelm
- **(sidebar)** new component - ([ac135ce](https://github.com/migrationsverket/midas/commits/ac135cebc14d331e93476787296c4a55385afff2)) - Wilhelm Hjelm
- **(spinner)** [**breaking**] new build - ([2a19638](https://github.com/migrationsverket/midas/commits/2a1963837e8317f99d92721602224587e768f605)) - Wilhelm Hjelm
- **(table)** new component! - ([c4aed74](https://github.com/migrationsverket/midas/commits/c4aed746775ba4215ae15b74031672b5bdcbd1c3)) - Wilhelm Hjelm
- **(table)** [**breaking**] new build - ([45e403e](https://github.com/migrationsverket/midas/commits/45e403e3cb323efe563e2ca9472745ef8c88f0dc)) - Wilhelm Hjelm
- **(table)** add docs + striped option - ([5d9c70f](https://github.com/migrationsverket/midas/commits/5d9c70ff47950a4f2f9e917f2ed0faa3bd916389)) - Wilhelm Hjelm
- **(tabs)** [**breaking**] new build - ([853ea67](https://github.com/migrationsverket/midas/commits/853ea67f00aac646cb28e9e15920349c6ef8313d)) - Wilhelm Hjelm
- **(tag)** new component - ([311d71e](https://github.com/migrationsverket/midas/commits/311d71e89e97fe732b666fa182de771c53d1644c)) - Wilhelm Hjelm
- **(tertiary button)** change padding - ([192241f](https://github.com/migrationsverket/midas/commits/192241f7d997b81ef0e54bcec316ffc8050bb021)) - PHIEKS
- **(textArea)** creat textArea component - ([bfd96d1](https://github.com/migrationsverket/midas/commits/bfd96d1c3d4c401a060c79e70e1223028f17eb16)) - jabir Khalil
- **(textarea)** new component - ([78483c4](https://github.com/migrationsverket/midas/commits/78483c41f729f474337c90d9dbfb9ce1bbb34392)) - Wilhelm Hjelm
- **(textarea)** new wrapper - ([8c5368f](https://github.com/migrationsverket/midas/commits/8c5368f485241494df80075bfeefa73ebf8f4f5e)) - Wilhelm Hjelm
- **(textarea)** [**breaking**] new build - ([3d07b87](https://github.com/migrationsverket/midas/commits/3d07b874005ecaa57597917b356563947018a252)) - Wilhelm Hjelm
- **(textfield)** add ssn validation - ([9506a18](https://github.com/migrationsverket/midas/commits/9506a181aceb16b5e1d7a0db451e5c3971a69f02)) - Wilhelm Hjelm
- **(textfield)** [**breaking**] new build - ([2ee22be](https://github.com/migrationsverket/midas/commits/2ee22be19150bd8dd83760eebfd264e08efd111b)) - Wilhelm Hjelm
- **(textfield)** support counter and maxCharacters - ([ab97d0c](https://github.com/migrationsverket/midas/commits/ab97d0c9e59107b77829fedcbd02886e0b6804fc)) - Wilhelm Hjelm
- **(theme)** new build - ([2129739](https://github.com/migrationsverket/midas/commits/2129739beab6328bf169a2f2dd7a0b41674b19a5)) - Wilhelm Hjelm
- **(toast)** [**breaking**] new build - ([112541b](https://github.com/migrationsverket/midas/commits/112541be068face0f44867ca15da72cfa256ec2f)) - Wilhelm Hjelm
- **(ui)** export new components - ([6bef09f](https://github.com/migrationsverket/midas/commits/6bef09f1a5afc990c2941a209e52970bf2329636)) - Wilhelm Hjelm
- **(ui)** new build - ([53c8550](https://github.com/migrationsverket/midas/commits/53c85506453f53d1ab6cd26b0d6481842abec6f8)) - Wilhelm Hjelm

### 💄 Style

- **(tokens)** right name of token this time - ([83e88f2](https://github.com/migrationsverket/midas/commits/83e88f2d03846d6100b468bb7023de851e8450fe)) - PHIEKS
- serach field style fix - ([0ecef63](https://github.com/migrationsverket/midas/commits/0ecef634dc8364a221a2da7e43d6d346975f0d2e)) - Wilhelm Hjelm

### 📝 Documentation

- **(accordion)** remove duplicate guidelines - ([9a0845d](https://github.com/migrationsverket/midas/commits/9a0845dd466e7b310a9d03069cae1cfe42bb164f)) - PHIEKS
- **(accordion)** remove duplicate guidelines - ([a3edb66](https://github.com/migrationsverket/midas/commits/a3edb661be3fbb9918cadb9ec913e7cf43e8f380)) - PHIEKS
- **(button)** structure guidelines with subheadings and change some wording - ([d4781b3](https://github.com/migrationsverket/midas/commits/d4781b3cd4df166ead2a6406b3a7b5149e0de052)) - PHIEKS
- **(button)** structure guidelines with subheadings and change some wording - ([c6dea49](https://github.com/migrationsverket/midas/commits/c6dea4986636756cb6329060f77e31758cba5526)) - PHIEKS
- **(button)** remove duplicate text - ([aafbc84](https://github.com/migrationsverket/midas/commits/aafbc840cda75235159403936b3a42e5b3b64db0)) - PHIEKS
- **(button)** update button documentation - ([bb81047](https://github.com/migrationsverket/midas/commits/bb810474c333d49dca78c1a2318e08ab7a45dcec)) - PHIEKS
- **(button)** add text about iconPlacement - ([e60b42f](https://github.com/migrationsverket/midas/commits/e60b42f743917504a5ba28c639bf31d18997a2a4)) - jabir Khalil
- **(button)** add livecodeblock to examples - ([2b3f285](https://github.com/migrationsverket/midas/commits/2b3f28541e9f889f88faff3f5ed0b13426340827)) - PHIEKS
- **(button)** remove small button and outdated info about button placement - ([52902a4](https://github.com/migrationsverket/midas/commits/52902a4168b3a610a397817ff0655780ac293361)) - PHIEKS
- **(button)** 'remove parts again after merge - ([db4bd13](https://github.com/migrationsverket/midas/commits/db4bd13039d1f86330324fc19d5eff3d4613126d)) - PHIEKS
- **(button)** fix examples after merge - ([8bad45f](https://github.com/migrationsverket/midas/commits/8bad45ff7637293e674c58f0fb6948045f90d039)) - PHIEKS
- **(button flowchart)** fix flowchart order - ([379db93](https://github.com/migrationsverket/midas/commits/379db9343d42d3174f33a5afa2ca4644edb63ea6)) - PHIEKS
- **(card)** remove old instructions and tbd guidelines - ([ecce285](https://github.com/migrationsverket/midas/commits/ecce285f3d80c20d26dca1cfb765307ef48ae855)) - PHIEKS
- **(card)** remove old instructions and tbd guidelines - ([984e8be](https://github.com/migrationsverket/midas/commits/984e8beeb7404e8e7d788d023ae5cf049dec8d0c)) - PHIEKS
- **(checkbox)** remove sentence about using select as alternative to checkbox - ([a5ba68b](https://github.com/migrationsverket/midas/commits/a5ba68b4aee59dba2659f26d62c9619527a8dc4a)) - PHIEKS
- **(checkbox)** remove sentence about using select as alternative to checkbox - ([5b55085](https://github.com/migrationsverket/midas/commits/5b550850cc6fc14f95b08e848b79c6de6f235141)) - PHIEKS
- **(checkbox)** change wording in intro - ([47431fc](https://github.com/migrationsverket/midas/commits/47431fc70ce143773da251354ac7d3e206bd8711)) - PHIEKS
- **(config)** add cache magic to favicon path - ([aeb74c0](https://github.com/migrationsverket/midas/commits/aeb74c09e01a4459a191da68a30b4d5a7b252a11)) - PHIEKS
- **(design)** add XD-file as a downloadable asset - ([8af0238](https://github.com/migrationsverket/midas/commits/8af0238c3b424caad9a3bb4910492d50f7a8a6cd)) - PHIEKS
- **(design)** add asset in zip format instead - ([2b69438](https://github.com/migrationsverket/midas/commits/2b694389bb6adb011a38249950f789ac141c769a)) - PHIEKS
- **(design)** add latest UI kit - ([e046db0](https://github.com/migrationsverket/midas/commits/e046db00e7c3613cc8d77977d2b5280985dd35c9)) - PHIEKS
- **(design)** add new version of UI-kit - ([58ae7dc](https://github.com/migrationsverket/midas/commits/58ae7dc99e0ef91241b4c99901565bf2e6c772a4)) - PHIEKS
- **(design)** remove stray link - ([e66d78b](https://github.com/migrationsverket/midas/commits/e66d78b4769854e048307d3fb2bfb10b27e2b5d3)) - PHIEKS
- **(design/index)** change wording to make it clearer - ([25c416d](https://github.com/migrationsverket/midas/commits/25c416db405b1e746e599635733345881c88399d)) - PHIEKS
- **(design/index)** change wording to make it clearer - ([16c8242](https://github.com/migrationsverket/midas/commits/16c8242adf3817338fa1870039ab3a38546c45e9)) - PHIEKS
- **(docs)** rewrite examples and fix domain - ([e45987d](https://github.com/migrationsverket/midas/commits/e45987dd7da2467597f029cc566ac25f11785c81)) - Wilhelm Hjelm
- **(docs)** rewrite examples and fix domain - ([44b7aae](https://github.com/migrationsverket/midas/commits/44b7aae856c750bb9a31fc89b077835a3a3aa518)) - Wilhelm Hjelm
- **(docs)** add new UI-kit and link - ([d61a8cf](https://github.com/migrationsverket/midas/commits/d61a8cf0ac758bbe1dc6fa0b1404d0d99c079e5a)) - PHIEKS
- **(error-message)** change headings and restructure text to make it clearer. Remove loose text - ([000406a](https://github.com/migrationsverket/midas/commits/000406a7bbfdd6b1a1e46187cbfa19cd39041ef1)) - PHIEKS
- **(error-message)** change headings and restructure text to make it clearer. Remove loose text - ([a341764](https://github.com/migrationsverket/midas/commits/a3417642dca77907b5e84e9967a68600e77d67aa)) - PHIEKS
- **(flex)** switch only swedish term to english - ([b8664a1](https://github.com/migrationsverket/midas/commits/b8664a19488e77e7d580b9048799ad81a055588f)) - PHIEKS
- **(form.stories)** make two examples, one simple and one with two columns - ([3806117](https://github.com/migrationsverket/midas/commits/3806117ea83709cf54d1019a818e7c1b891372ea)) - PHIEKS
- **(forms)** remove loose text - ([71670ed](https://github.com/migrationsverket/midas/commits/71670ed238414ba75cd624c451ce9d506ac4395f)) - PHIEKS
- **(forms)** remove loose text - ([022c0ae](https://github.com/migrationsverket/midas/commits/022c0aeb1bef54b38e719a7b4be0714daab57b22)) - PHIEKS
- **(icons)** change sentence to only swedish - ([ef12424](https://github.com/migrationsverket/midas/commits/ef12424128e9111996798987f3d6ba8fc9ff90bd)) - PHIEKS
- **(icons)** change sentence to only swedish - ([4785c29](https://github.com/migrationsverket/midas/commits/4785c295886cd198613439d2eb2e92d31eb9fecc)) - PHIEKS
- **(intro)** add infobanner - ([173acee](https://github.com/migrationsverket/midas/commits/173aceec7bca80277af23b72c2bae8e32259eb84)) - PHIEKS
- **(intro)** change wording on info-banner - ([4e7def8](https://github.com/migrationsverket/midas/commits/4e7def8e5f5420f898e14266fb5603fc6b301044)) - PHIEKS
- **(intro)** change main heading - ([84074d0](https://github.com/migrationsverket/midas/commits/84074d02ebcae3fbc6c7bf3ec353833b8f96f88e)) - PHIEKS
- **(language)** remove fields, they do not add value - ([2803a3c](https://github.com/migrationsverket/midas/commits/2803a3c771c5ef261863593889fb4831fed97d0d)) - PHIEKS
- **(language)** remove fields, they do not add value - ([1ee52c4](https://github.com/migrationsverket/midas/commits/1ee52c4027160af22d02753e73b4439302ed616b)) - PHIEKS
- **(link)** change description and introduction - ([c93d941](https://github.com/migrationsverket/midas/commits/c93d941ae1133b886ae7fe7e45884a05f68991d1)) - PHIEKS
- **(link button)** fix broken links - ([15f4c62](https://github.com/migrationsverket/midas/commits/15f4c624d9efbdb01e5d5a5f6a4271c469e44c20)) - PHIEKS
- **(logo)** text change + added flex - ([32b7053](https://github.com/migrationsverket/midas/commits/32b7053b19a60621668967a4b44eb535ac617d86)) - PHIEKS
- **(logo)** changed examples - ([ca94d1a](https://github.com/migrationsverket/midas/commits/ca94d1a04cd5c88b1fb99a1cd418561988a11b9a)) - PHIEKS
- **(multi-select)** change wording and remove incomplete flowchart - ([d192de9](https://github.com/migrationsverket/midas/commits/d192de9a8392681ea0b5b41e51e903a1fcf31ba0)) - PHIEKS
- **(multi-select)** change wording in intro - ([261d174](https://github.com/migrationsverket/midas/commits/261d1740e3db7e0064aa42e0ce7cbc3eb85023bf)) - PHIEKS
- **(multi-select)** fix misleading example - ([db710bc](https://github.com/migrationsverket/midas/commits/db710bc9e25d0581cb2485e8ba227740b5f9c3b3)) - pixelrickdreamer
- **(radio)** change example to fruits - ([8c7ced3](https://github.com/migrationsverket/midas/commits/8c7ced30019d7e243e7639dff8bf8ef8b8d0b5c2)) - PHIEKS
- **(radio)** change example to fruits - ([08ada35](https://github.com/migrationsverket/midas/commits/08ada352699a66c5fa927ce32fb373851b1335ca)) - PHIEKS
- **(radio)** update info - ([c9b69a0](https://github.com/migrationsverket/midas/commits/c9b69a0eee2e5aa6d70dc6be41bcfec4e320fa61)) - Wilhelm Hjelm
- **(radio)** change wording on intro section - ([914c1ff](https://github.com/migrationsverket/midas/commits/914c1ff7f81ecbad3e50af1231bd988aefd745c1)) - PHIEKS
- **(radio)** change example to 3 fruits to follow our guidelines - ([2d75249](https://github.com/migrationsverket/midas/commits/2d75249e9fd19fdcf7e74679876100a0ff5a8e22)) - PHIEKS
- **(radio)** change wording on intro section - ([f2e6750](https://github.com/migrationsverket/midas/commits/f2e6750a645e6388e375686c7900ddd9a32e42fc)) - PHIEKS
- **(radio)** change example to 3 fruits to follow our guidelines - ([02f75cd](https://github.com/migrationsverket/midas/commits/02f75cd95929eebf1199c3f3a96ba797aae5821c)) - PHIEKS
- **(radio)** merge trouble - ([30f5c3f](https://github.com/migrationsverket/midas/commits/30f5c3ffa7fa0c7d3000cea822115767583ed0a5)) - PHIEKS
- **(radio)** remove incomplete flowchart - ([a660805](https://github.com/migrationsverket/midas/commits/a660805eeca7bb00570cc9b37cbb5eac2269a39c)) - PHIEKS
- **(radio)** change wording in intro - ([bbf17e1](https://github.com/migrationsverket/midas/commits/bbf17e16497ef9796c57b451d39e43c34f79965e)) - PHIEKS
- **(radio)** remove the section normal användning - ([25bc10c](https://github.com/migrationsverket/midas/commits/25bc10c0e51aa4ad87847e03201b278b3d546445)) - jabir Khalil
- **(relase14)** remove text - ([8ea8b10](https://github.com/migrationsverket/midas/commits/8ea8b103bd94a29fc7ab6b140d86a52d43e90208)) - PHIEKS
- **(release 12)** change wording - ([91cd220](https://github.com/migrationsverket/midas/commits/91cd220252d9c829f28f62efadd45cdb7727ce54)) - PHIEKS
- **(release 12)** change wording - ([7863443](https://github.com/migrationsverket/midas/commits/7863443fb79636340a76daade8a2961eb788009a)) - PHIEKS
- **(release 13)** add base for release notes - ([7c203c0](https://github.com/migrationsverket/midas/commits/7c203c02a9cfd69ba08ee354e449bd1c74ab73c1)) - PHIEKS
- **(release12)** add text and change some wording - ([fde263b](https://github.com/migrationsverket/midas/commits/fde263bd5e54594bd78ddcfd6fcd20cc8ca6514e)) - PHIEKS
- **(release12)** change more wording - ([6143c0d](https://github.com/migrationsverket/midas/commits/6143c0d19a65136bef822ed3f91c5d2930604494)) - PHIEKS
- **(release13)** added info about Remix - ([afa47b7](https://github.com/migrationsverket/midas/commits/afa47b796a52c666b4e98e50d6afadd1d72fa4ad)) - PHIEKS
- **(release13)** release notes update - ([caecd6b](https://github.com/migrationsverket/midas/commits/caecd6b4ca7fcfdfc5eaa250a3303ddc2197d394)) - PHIEKS
- **(release14)** change wording - ([14f9874](https://github.com/migrationsverket/midas/commits/14f9874ebe9efaaae188d766377115c2240be731)) - PHIEKS
- **(select)** change guidelines regarding when to use select - ([62cde9c](https://github.com/migrationsverket/midas/commits/62cde9c0d6a52b872a4f991c46d6fd3fa0751c07)) - PHIEKS
- **(select)** change wording and remove incomplete flowchart - ([0be1a60](https://github.com/migrationsverket/midas/commits/0be1a6035c84036034f216ba377329b6c59c1c8e)) - PHIEKS
- **(select)** change wording in intro - ([8c806f1](https://github.com/migrationsverket/midas/commits/8c806f1ef0a5e631a3ff2c9450f4c78021035d98)) - PHIEKS
- **(spinner)** add use case and guidelines - ([fb9a70d](https://github.com/migrationsverket/midas/commits/fb9a70d35002796750d56edc8652c1a194db2dec)) - PHIEKS
- **(spinner)** remove stray ; - ([ac25825](https://github.com/migrationsverket/midas/commits/ac258252674a0d4773dd3f501683f9c653bccfb1)) - PHIEKS
- **(tabs)** fix install command - ([f85745d](https://github.com/migrationsverket/midas/commits/f85745d2e124642060ee6f7701416082ba732faa)) - PHIEKS
- **(textfield)** change flexcolumn to {2} to make an actual short field - ([812e20b](https://github.com/migrationsverket/midas/commits/812e20bcd348001e3e2943a46381d4ed38fb1662)) - PHIEKS
- **(textfield)** change flexcolumn to {2} to make an actual short field - ([940edf8](https://github.com/migrationsverket/midas/commits/940edf861cfd425c0d3399d6d50df4a071eb3601)) - PHIEKS
- **(textfield)** change wording in section about Personnummer - ([2c96e1c](https://github.com/migrationsverket/midas/commits/2c96e1ca01b8ccd57426fb110dc04ad50eeed782)) - PHIEKS
- **(textfield)** change live Code Block from section egna felmeddelanden to code block - ([e4e2cb5](https://github.com/migrationsverket/midas/commits/e4e2cb5a471bdc309b790c5576eec97028c69cab)) - jabir Khalil
- **(textfield)** add tsx in code block in egena felmeddelanden section code - ([b9cced7](https://github.com/migrationsverket/midas/commits/b9cced765180ed75f40311df32ac159d1afa3748)) - jabir Khalil
- **(textfield)** change wording - ([c994813](https://github.com/migrationsverket/midas/commits/c9948139ae5a761eab8feb076039acea373e0e71)) - PHIEKS
- **(toast)** add flex component to wrap buttons in live code block exemple - ([b94d358](https://github.com/migrationsverket/midas/commits/b94d358b8036697f04f969d48d60ee3c8a012864)) - jabir Khalil
- **(toast)** add fluid to flex component in live code block - ([7ec1430](https://github.com/migrationsverket/midas/commits/7ec1430a1a351aaf795e5d6b6cc0d9133e3af8ad)) - jabir Khalil
- **(toast)** change flexItem col 6 to col 3 in live code block - ([3b5dedd](https://github.com/migrationsverket/midas/commits/3b5deddb8479f87b3d5ce51cc7a234ba3e874b62)) - jabir Khalil
- **(ui-kit)** fix XD-link and remove Figma link - ([4669f56](https://github.com/migrationsverket/midas/commits/4669f56450e655fce8048a6da07405ae92e1e08d)) - PHIEKS
- update info files - ([9ada72d](https://github.com/migrationsverket/midas/commits/9ada72d895cab703c271559e40700c297b35e8a9)) - Wilhelm Hjelm
- update info - ([bce62ca](https://github.com/migrationsverket/midas/commits/bce62ca4c090c8f9c78fd737865fec602ccf3a7a)) - Wilhelm Hjelm
- startpage fix - ([ae33852](https://github.com/migrationsverket/midas/commits/ae3385213b690a18231120979785cb09e4552e8a)) - Wilhelm Hjelm
- change logo on storybook - ([8c89738](https://github.com/migrationsverket/midas/commits/8c897384aacd78001cf051f984d9da021516ebb0)) - Wilhelm Hjelm
- update info - ([bdc63f7](https://github.com/migrationsverket/midas/commits/bdc63f739f91282e9c9ce95993bec0cb68dac1a2)) - Wilhelm Hjelm
- fix card, startpage, about page - ([c48700c](https://github.com/migrationsverket/midas/commits/c48700caaa479228f41675385a53af852b31c83a)) - Wilhelm Hjelm
- add flowcharts to selct, radio and checkbox - ([303623b](https://github.com/migrationsverket/midas/commits/303623b73b7756612e693eea0baa9dbfdaf12820)) - PHIEKS
- remove status badges from text pages - ([277d872](https://github.com/migrationsverket/midas/commits/277d872f2ffc29d7f74ef924ab5d93174af74955)) - PHIEKS
- remove guidelines that are only TBD - ([fd7e28d](https://github.com/migrationsverket/midas/commits/fd7e28d0278ae7ce959c2dbccfc54b91b3eac2d4)) - PHIEKS
- remove status badges from text pages - ([14aeb43](https://github.com/migrationsverket/midas/commits/14aeb4300b9091d623314fd6273f286d3b5070c5)) - PHIEKS
- remove guidelines that are only TBD - ([4c3f337](https://github.com/migrationsverket/midas/commits/4c3f33758e9c0a583eadf13c6eec7f8c73c9e5f6)) - PHIEKS
- update info - ([f2ff00e](https://github.com/migrationsverket/midas/commits/f2ff00efdfa27d27b13dd3eda24dd028894f8c34)) - Wilhelm Hjelm
- sprint 12 blog - ([42b7dc6](https://github.com/migrationsverket/midas/commits/42b7dc64cbe2c9dcfa092224e33d6eb1d5def98d)) - Wilhelm Hjelm
- sprint12 blog - ([ec6ddf5](https://github.com/migrationsverket/midas/commits/ec6ddf5dc40caf129dade43acb7776e0a7e68793)) - Wilhelm Hjelm
- fix sprint page - ([fd8ee2b](https://github.com/migrationsverket/midas/commits/fd8ee2bd67e5da0cd15df22a7d075255a1a42a1f)) - Wilhelm Hjelm
- fix sprint page - ([35fca37](https://github.com/migrationsverket/midas/commits/35fca3722c7d88e0d488b3faa3ae8fbb1f950996)) - Wilhelm Hjelm
- update info - ([3bb8429](https://github.com/migrationsverket/midas/commits/3bb842955ef78ac7e9ae44a7fd3e62664aa2c890)) - Wilhelm Hjelm
- change wording - ([7e5ce16](https://github.com/migrationsverket/midas/commits/7e5ce161eb91b49fa6c1669594966d1ac0590109)) - PHIEKS
- fix styling in flowchart button (add primary) - ([fb7414d](https://github.com/migrationsverket/midas/commits/fb7414d4738e860d5814e0662ec39b5ab94cfef3)) - jabir Khalil
- add styling to flowchart - ([8982125](https://github.com/migrationsverket/midas/commits/898212534a203e467f3403ecf693fe88e32296ee)) - PHIEKS
- rearrange and add styling to flowcharts - ([3725769](https://github.com/migrationsverket/midas/commits/37257697b7e555097aa4de6286adcba82cd15cd1)) - PHIEKS
- add remix explaination for new build - ([f421662](https://github.com/migrationsverket/midas/commits/f421662f36393c9eb551a93baac987fb589f03ae)) - Wilhelm Hjelm
- fix personnummer example - ([3499855](https://github.com/migrationsverket/midas/commits/3499855675bb416c936c692c4c6ea230c63e2722)) - Wilhelm Hjelm
- some pages lacked description - ([023e781](https://github.com/migrationsverket/midas/commits/023e781abc5d5a962f1c82cafe9721cd862892ed)) - Wilhelm Hjelm
- releasenotes - ([94dcb94](https://github.com/migrationsverket/midas/commits/94dcb94433b8d8822b56f660ca6aa270e4c83046)) - Wilhelm Hjelm
- suggestion startpage - ([70b0dd7](https://github.com/migrationsverket/midas/commits/70b0dd71a42c5472ed154baf3daf756db902c992)) - Wilhelm Hjelm
- table desc - ([ab409eb](https://github.com/migrationsverket/midas/commits/ab409eb5315bef1f2c215920d17831bc41c5d437)) - Wilhelm Hjelm
- releasenotes - ([2f38920](https://github.com/migrationsverket/midas/commits/2f38920e822a811908d714b56da3a680668e224c)) - Wilhelm Hjelm
- updated startpage - ([bd455ee](https://github.com/migrationsverket/midas/commits/bd455ee67d5c8cd78588e4967451775d54fbd53e)) - Wilhelm Hjelm
- add errorMessage to textfield and fix css line-height - ([f7c062b](https://github.com/migrationsverket/midas/commits/f7c062bd80ea721d2286ea413a4214567fe313d1)) - jabir Khalil
- update info - ([49465b0](https://github.com/migrationsverket/midas/commits/49465b007ddb3662ce5b8ba7b8279749b0bf8483)) - Wilhelm Hjelm
- update to docs code blocks - ([77012df](https://github.com/migrationsverket/midas/commits/77012df00b336940c494a7338e5ece1ea75adb10)) - Wilhelm Hjelm
- remove changelog - ([8bab931](https://github.com/migrationsverket/midas/commits/8bab93117c85eb1ccf9506e89fbba5d079cbbfc2)) - Wilhelm Hjelm
- update info - ([75632b7](https://github.com/migrationsverket/midas/commits/75632b7b503c8899b9701d565f67ab810fec3f5b)) - Wilhelm Hjelm
- update info - ([1a439a9](https://github.com/migrationsverket/midas/commits/1a439a99988637104921bd3be14939f0e2f8548e)) - Wilhelm Hjelm
- fix download links - ([c40d589](https://github.com/migrationsverket/midas/commits/c40d58901f44a573023012c5cba7328fdf3fe474)) - Wilhelm Hjelm
- change some swedish wording - ([ffb45c2](https://github.com/migrationsverket/midas/commits/ffb45c2b8ed94f1856a99ebce34f7d1fd593022a)) - Wilhelm Hjelm
- change favicon and delete files which are not used - ([3c86428](https://github.com/migrationsverket/midas/commits/3c86428c0e2dc3c64db9f28c2c586ea34a0567d5)) - jabir Khalil
- add linkButton with icon - ([5b53315](https://github.com/migrationsverket/midas/commits/5b533152a9c7939987a266e158b3c56441d6607a)) - jabir Khalil
- fix merge - ([ef857c4](https://github.com/migrationsverket/midas/commits/ef857c4390998ae6bc1585242f9a108a94120623)) - jabir Khalil
- add icon to linkbutton - ([ee4bb86](https://github.com/migrationsverket/midas/commits/ee4bb86d45690ce5a3dea38e61ac4c07539eb51c)) - jabir Khalil
- fix text - ([1c7f000](https://github.com/migrationsverket/midas/commits/1c7f00065a4c6f519d65b521de33167b1232be60)) - jabir Khalil
- test new header - ([71bd8ff](https://github.com/migrationsverket/midas/commits/71bd8ffd22e7f21fe7c185a7d1bdf462788d6514)) - Wilhelm Hjelm
- fix transparent backgrund to favicon - ([fe4a7d5](https://github.com/migrationsverket/midas/commits/fe4a7d5b68fe15fedc2ebe5a967c0f5c40d11d3c)) - jabir Khalil
- add swedish names - ([1f9c17c](https://github.com/migrationsverket/midas/commits/1f9c17ce6bd15977acabde75cb2586c38eefe8bb)) - Wilhelm Hjelm
- 14 release notes - ([96e3f5a](https://github.com/migrationsverket/midas/commits/96e3f5afc24e40a5155192f46433c001770e09a3)) - Wilhelm Hjelm
- add new info - ([8f319ff](https://github.com/migrationsverket/midas/commits/8f319ffb7d46781182d6a15091fe2d4bed516402)) - Wilhelm Hjelm
- new info - ([cae5f15](https://github.com/migrationsverket/midas/commits/cae5f15ee824f184a07a0c88364c1c0facf42770)) - Wilhelm Hjelm
- new versions - ([6f94105](https://github.com/migrationsverket/midas/commits/6f9410565ac8fe45bd15979380e2b1a3c9185793)) - Wilhelm Hjelm
- add design pattern on buttons and links. Remove flowchart - ([d41db25](https://github.com/migrationsverket/midas/commits/d41db25e1c834a0c652a22e5c84b271b2f8ae003)) - PHIEKS
- change storybook link to include parent - ([06dab97](https://github.com/migrationsverket/midas/commits/06dab97ce196dac8b3c4ce6f4383c4e8ba1737d9)) - Wilhelm Hjelm
- add Personnummer design pattern - ([a90caa3](https://github.com/migrationsverket/midas/commits/a90caa3e20bb6521696493c0f677733bf9b2fa83)) - PHIEKS
- change some wording - ([85368cb](https://github.com/migrationsverket/midas/commits/85368cbf3c9f47bc715eac25bfafece08ed026dd)) - PHIEKS
- change wording - ([e46d30e](https://github.com/migrationsverket/midas/commits/e46d30e6369872e768e34582f345b9ea1d229374)) - PHIEKS
- change wording - ([d90c643](https://github.com/migrationsverket/midas/commits/d90c6434320bee1791b292aa2f5474efe6d94bb2)) - PHIEKS
- add period - ([43541f7](https://github.com/migrationsverket/midas/commits/43541f73059c396e6efcb850f0cc44c8793749f0)) - PHIEKS
- search-field data - ([b35cb41](https://github.com/migrationsverket/midas/commits/b35cb4100632418a6bd45c32b6e0071601a6d9fd)) - Wilhelm Hjelm
- release 15 start - ([f94f215](https://github.com/migrationsverket/midas/commits/f94f21596061a4477d8271a9a52ec7f6c5edda12)) - Wilhelm Hjelm
- add draft of  releasenotes for release 15 - ([43a6880](https://github.com/migrationsverket/midas/commits/43a688030f2a29a2e7f94687b71ad160422da819)) - PHIEKS
- new version of modal - ([0ec4dd3](https://github.com/migrationsverket/midas/commits/0ec4dd3b3b4d83af1e0db5c368f1fef47f627db1)) - Wilhelm Hjelm
- add draft of design pattern for buttons and links - ([367dd0d](https://github.com/migrationsverket/midas/commits/367dd0d53e4c2ea1f0431b5ae3438d4bd578157d)) - PHIEKS
- add more text - ([981d4b9](https://github.com/migrationsverket/midas/commits/981d4b912103499aea40b4ef6b071453ccb8961b)) - PHIEKS
- add examples - ([3458741](https://github.com/migrationsverket/midas/commits/3458741f5244f44ecb3351c69afcc513a26d7832)) - PHIEKS
- add live  code blocks - ([58f528d](https://github.com/migrationsverket/midas/commits/58f528d80f23ebd4f0eba43a4e37a380f106f5c5)) - PHIEKS
- hideCode on LiveCodeBlock - ([6c6b033](https://github.com/migrationsverket/midas/commits/6c6b033e7789b35a869ff68b9bef26aae4989224)) - Wilhelm Hjelm
- add hideCode to codeblocks - ([06d504a](https://github.com/migrationsverket/midas/commits/06d504af1e5b640733a86a0756173c01dd9ac3f5)) - PHIEKS
- change wording - ([de4eb76](https://github.com/migrationsverket/midas/commits/de4eb7611b7d4a33957f47969b19d16f9ceac1fe)) - PHIEKS
- add example to error-message pattern - ([96c5587](https://github.com/migrationsverket/midas/commits/96c5587ec1af3dcf640c860d91a0db7e339b7227)) - PHIEKS
- add example to forms pattern - ([22fa646](https://github.com/migrationsverket/midas/commits/22fa646755b24c5367e529b3f6c499cedb1229f5)) - PHIEKS
- releasenotes - ([cc53d87](https://github.com/migrationsverket/midas/commits/cc53d8770f17b7f771456739cca443fe67ebb70d)) - Wilhelm Hjelm
- new flowchart for select decision - ([0391461](https://github.com/migrationsverket/midas/commits/03914617a0d642a19c5b06ea2f0735db921c8b8b)) - Wilhelm Hjelm
- change wording - ([8b4d28c](https://github.com/migrationsverket/midas/commits/8b4d28c86a37ad34013e5ce4c6da7bbd206f4073)) - PHIEKS
- updated info - ([afe6b51](https://github.com/migrationsverket/midas/commits/afe6b51a083c4dc0ea5471898038114f2f8dc877)) - Wilhelm Hjelm
- move mobile menu trigger - ([d18b1cc](https://github.com/migrationsverket/midas/commits/d18b1cc515776916077886bbf15537d272e05d41)) - Wilhelm Hjelm
- remove guidelines and add link to DIGG - ([5343015](https://github.com/migrationsverket/midas/commits/53430153091bad5180d869feef68edbca913d434)) - PHIEKS
- add accessibility info from Patrik - ([668c694](https://github.com/migrationsverket/midas/commits/668c6946fc13e4ae729607d224f9cce1d5c95e1c)) - PHIEKS
- textfield validation - ([c57c9fb](https://github.com/migrationsverket/midas/commits/c57c9fb2780e5e2b7dc5fcc73674dfab8dc43575)) - Wilhelm Hjelm
- no reference on multiselect - ([ea7cad4](https://github.com/migrationsverket/midas/commits/ea7cad4707f1135ebbb94901df63a69860f5a13b)) - Wilhelm Hjelm
- updated info - ([10c421f](https://github.com/migrationsverket/midas/commits/10c421f539d8ee808c718af4f185dd96805693b6)) - Wilhelm Hjelm
- add new UI-kit and change link - ([d83806d](https://github.com/migrationsverket/midas/commits/d83806d17d155b25dec07065a86eea8a82ab562b)) - PHIEKS
- add new UI-kit with minor changes - ([780ed09](https://github.com/migrationsverket/midas/commits/780ed09871d99292545e5e8903b39926ad0ac7cc)) - PHIEKS
- updated info - ([2fbcb65](https://github.com/migrationsverket/midas/commits/2fbcb651fad1b8c30bf3d63240af1419c3702dba)) - Wilhelm Hjelm
- add version to link text for clarity - ([33637fa](https://github.com/migrationsverket/midas/commits/33637fa2cf7f66c45d87ef1ce43dbd3fa442f24f)) - PHIEKS
- fix link formatting - ([dbbac52](https://github.com/migrationsverket/midas/commits/dbbac5221d63f9209007a390a753400889b6fcdc)) - PHIEKS
- change text and add new link - ([f451446](https://github.com/migrationsverket/midas/commits/f451446f8ef668e6fc0290e497b918dddf25ab1d)) - PHIEKS
- beroenden - ([659beeb](https://github.com/migrationsverket/midas/commits/659beeba7a7f4259d229143ea7c935f7896a9ecf)) - Wilhelm Hjelm
- fix newline - ([072af76](https://github.com/migrationsverket/midas/commits/072af760ecd42636bee993f2eb2b85d5f20f7617)) - Wilhelm Hjelm
- fix links - ([b1fe775](https://github.com/migrationsverket/midas/commits/b1fe775d2070ffbbacf61752b5f005a2e4234528)) - Wilhelm Hjelm
- move riktlinjer to bottom on every component page - ([55614de](https://github.com/migrationsverket/midas/commits/55614ded111715b87a572e50203cffd6f578e02d)) - PHIEKS
- update old release on API change - ([fc6114b](https://github.com/migrationsverket/midas/commits/fc6114b4a63f432bc8c4f3ffc57fa5b005f3745c)) - Wilhelm Hjelm
- remove duplicate riktlinjer - ([b25a351](https://github.com/migrationsverket/midas/commits/b25a3513cc79930c5a73986c9fbab038cb72ee3e)) - Wilhelm Hjelm
- remove breadcumbs, tags and bottom nav - ([be0fbe8](https://github.com/migrationsverket/midas/commits/be0fbe883e9fac74f64e85b97a4f4bb2ca06f362)) - Wilhelm Hjelm
- test responsive - ([7fad63f](https://github.com/migrationsverket/midas/commits/7fad63f6d034e0a3b649a6696def0442cd8210a1)) - Wilhelm Hjelm
- test responsive - ([83019b9](https://github.com/migrationsverket/midas/commits/83019b9bd1540ce48fb618fe2a21a9bd79ec1b1b)) - Wilhelm Hjelm
- first draft of release notes - ([d02e512](https://github.com/migrationsverket/midas/commits/d02e5129a6a986632a51adcae85eeb92a17aaac4)) - PHIEKS
- add more stuff - ([57a3216](https://github.com/migrationsverket/midas/commits/57a3216c0025c1bd6d9c64afcdf7feac67b11c99)) - PHIEKS
- change wording - ([f15a729](https://github.com/migrationsverket/midas/commits/f15a7297b45ab942d2777b159cdd14c479c1593a)) - PHIEKS
- automatically get latest release - ([d953654](https://github.com/migrationsverket/midas/commits/d95365482815e6995677a856688476e97dc6f007)) - Wilhelm Hjelm
- update info - ([da600fa](https://github.com/migrationsverket/midas/commits/da600fa98c4f3682b5b6a2a1f55c68190e7ca213)) - Wilhelm Hjelm
- info - ([8647940](https://github.com/migrationsverket/midas/commits/864794091f08cfa567eabfdf1fe19b31c9b6b071)) - Wilhelm Hjelm
- add design principles for web - ([0e639a5](https://github.com/migrationsverket/midas/commits/0e639a517560146813b42104837eb351d84fa260)) - PHIEKS
- add first draft of release notes 17 - ([edad5fd](https://github.com/migrationsverket/midas/commits/edad5fd12ee21c0dfe74e310f1416b71b396e686)) - PHIEKS
- add more notes to release notes - ([1b1c35f](https://github.com/migrationsverket/midas/commits/1b1c35f2c9a224f5f1817b8afc8151964440e25f)) - PHIEKS
- code example on toast - ([e1c8fbc](https://github.com/migrationsverket/midas/commits/e1c8fbcc1f2543ad65d1ae6f1e7d26ba1aabe455)) - Wilhelm Hjelm
- remove Introduction from all component pages - ([ef546dd](https://github.com/migrationsverket/midas/commits/ef546dd5945092bb21ca500dd62559cd3760bb09)) - PHIEKS
- remove stray ## - ([7208f18](https://github.com/migrationsverket/midas/commits/7208f18ad09bbb91d0e32e8e65586fc6c8f41966)) - PHIEKS
- streamline "installation och användning" - ([c6906fb](https://github.com/migrationsverket/midas/commits/c6906fbc3619bbcd8b1477b0fe4d6b333e555539)) - Wilhelm Hjelm
- update data - ([98c73fe](https://github.com/migrationsverket/midas/commits/98c73feb54f745e8a6ebd386a44d23eaecc4f383)) - Wilhelm Hjelm
- list of updated components - ([bcffd5d](https://github.com/migrationsverket/midas/commits/bcffd5d195737376abbe64978ad1b54374a4f178)) - Wilhelm Hjelm
- client side routing - ([893b64f](https://github.com/migrationsverket/midas/commits/893b64f0e2be604d11d296177318b7fae7486075)) - Wilhelm Hjelm
- remove duplicate heading - ([a4bcc4c](https://github.com/migrationsverket/midas/commits/a4bcc4c4ce6a9627cc7b55daaff3f54dd250f829)) - Wilhelm Hjelm
- new section guider - ([a648c3a](https://github.com/migrationsverket/midas/commits/a648c3a8ce26a682544d7d30173b81cac648504e)) - Wilhelm Hjelm
- add local search functionality - ([9ea87d9](https://github.com/migrationsverket/midas/commits/9ea87d9c2c22066bd7e1aebe0875c3891839fd79)) - pixelrickdreamer
- some search style change + swedish - ([e014624](https://github.com/migrationsverket/midas/commits/e014624a7c08737424473953309e00a8baa4133d)) - Wilhelm Hjelm
- move search to devDeps - ([8549217](https://github.com/migrationsverket/midas/commits/854921744dc97ddf5bf5430e1c4e337ebf6477b4)) - Wilhelm Hjelm
- start release notes - ([8018d4e](https://github.com/migrationsverket/midas/commits/8018d4e59f6588e747e82f48f67f81fbe3d8d5c0)) - Wilhelm Hjelm

### 🚧 Miscellaneous Chores

- **(accordion)** release version 1.0.1 [skip-ci] - ([ad14501](https://github.com/migrationsverket/midas/commits/ad1450150fadd74eca90dde118586fa204668f15)) - Wilhelm Hjelm
- **(breadcrumbs)** release version 0.0.4 [skip-ci] - ([1014ea6](https://github.com/migrationsverket/midas/commits/1014ea6fa4862fe0b5bcabece2da04bfa8be80b9)) - Wilhelm Hjelm
- **(button)** release version 0.5.29 [skip-ci] - ([6c07f8d](https://github.com/migrationsverket/midas/commits/6c07f8dd9ab09ad25640b407ebedcfbf68accd7a)) - Wilhelm Hjelm
- **(button)** release version 0.6.3 [skip-ci] - ([45095ed](https://github.com/migrationsverket/midas/commits/45095ed147075071ef12f1a0432810270bdd505b)) - Wilhelm Hjelm
- **(button)** release version 0.6.4 [skip-ci] - ([e0683af](https://github.com/migrationsverket/midas/commits/e0683afd203bb766d0caddba283cf7c43d18cbdf)) - Wilhelm Hjelm
- **(button)** release version 0.6.4 [skip-ci] - ([c798bdf](https://github.com/migrationsverket/midas/commits/c798bdf6f4b572259053e7355701b060071cf32d)) - Wilhelm Hjelm
- **(button)** release version 1.0.1 [skip-ci] - ([db67593](https://github.com/migrationsverket/midas/commits/db675938e88070821ed4afc3b6793f36df6e5842)) - Wilhelm Hjelm
- **(card)** release version 0.3.3 [skip-ci] - ([398efab](https://github.com/migrationsverket/midas/commits/398efabc6776fd19c37df642fac64d05d7be5836)) - Wilhelm Hjelm
- **(card)** release version 0.3.4 [skip-ci] - ([e02378f](https://github.com/migrationsverket/midas/commits/e02378f644812352d0e957b56021b46098334bdc)) - Wilhelm Hjelm
- **(card)** release version 0.3.4 [skip-ci] - ([0984ef8](https://github.com/migrationsverket/midas/commits/0984ef8c12f73f8df52664be5e9e29188bc330d6)) - Wilhelm Hjelm
- **(card)** release version 0.3.4 [skip-ci] - ([c1574b8](https://github.com/migrationsverket/midas/commits/c1574b89acca2592907bf655319aaab58c7362a4)) - Wilhelm Hjelm
- **(card)** release version 1.0.1 [skip-ci] - ([9e9236e](https://github.com/migrationsverket/midas/commits/9e9236ebffd80869f72b12691fa5d01d0f0e9315)) - Wilhelm Hjelm
- **(checkbox)** remove hard color code - ([b72c918](https://github.com/migrationsverket/midas/commits/b72c9180fa504c07aa1dc901822e521c6208141a)) - Wilhelm Hjelm
- **(checkbox)** release version 0.5.2 [skip-ci] - ([7b74b68](https://github.com/migrationsverket/midas/commits/7b74b68cb412ae8db4b50ba0cb618444d9d0a939)) - Wilhelm Hjelm
- **(checkbox)** release - ([ff34c6e](https://github.com/migrationsverket/midas/commits/ff34c6e33031fbb1b516003b24f5fa1324aeeab4)) - Wilhelm Hjelm
- **(checkbox)** release version 0.6.0 [skip-ci] - ([0e0790c](https://github.com/migrationsverket/midas/commits/0e0790c85c7ee00b5906bfc8da5c3027c26977ef)) - Wilhelm Hjelm
- **(checkbox)** release version 0.6.0 [skip-ci] - ([f7cc03c](https://github.com/migrationsverket/midas/commits/f7cc03ce6a36bad14d8285f5dc82b31cd1a2225f)) - Wilhelm Hjelm
- **(combobox)** release version 0.1.0 [skip-ci] - ([32c1752](https://github.com/migrationsverket/midas/commits/32c17522ec346a28604906846fedad9d373216bb)) - Wilhelm Hjelm
- **(date-picker)** prevent style clashing - ([243dc9e](https://github.com/migrationsverket/midas/commits/243dc9eecd47f42ab04dd281f64f0aa97ecd956c)) - Wilhelm Hjelm
- **(date-picker)** release version 0.1.1 [skip-ci] - ([d14e2d4](https://github.com/migrationsverket/midas/commits/d14e2d4f8370c128a8a98670cb3a98d8778aebae)) - Wilhelm Hjelm
- **(deps)** bump the npm_and_yarn group across 1 directory with 5 updates - ([e13df8a](https://github.com/migrationsverket/midas/commits/e13df8af33ea13545e6602ed2cae00f337382892)) - dependabot[bot]
- **(deps)** bump next in the npm_and_yarn group across 1 directory - ([16fe477](https://github.com/migrationsverket/midas/commits/16fe4770a8f1295a4d979cc60daa41c9e09b07d7)) - dependabot[bot]
- **(deps)** bump rollup in the npm_and_yarn group across 1 directory - ([02db51d](https://github.com/migrationsverket/midas/commits/02db51d23ce184e589356ca02703bee25aff2ab0)) - dependabot[bot]
- **(deps)** bump next in the npm_and_yarn group across 1 directory - ([a5b9f89](https://github.com/migrationsverket/midas/commits/a5b9f898da6e2fa1713c0638e4c2e331dd8de1be)) - dependabot[bot]
- **(deps)** bump next in the npm_and_yarn group across 1 directory - ([cc5fad3](https://github.com/migrationsverket/midas/commits/cc5fad3204bc411ca2afa7a81587bc3188dfa070)) - dependabot[bot]
- **(deps-dev)** bump vite in the npm_and_yarn group across 1 directory - ([5df3d9c](https://github.com/migrationsverket/midas/commits/5df3d9c581f3ec570d5bdca3af743d035f6f20ad)) - dependabot[bot]
- **(deps-dev)** bump axios in the npm_and_yarn group across 1 directory - ([ccc1a2f](https://github.com/migrationsverket/midas/commits/ccc1a2f235095192e54359a774ae6ef57029abc8)) - dependabot[bot]
- **(deps-dev)** bump the npm_and_yarn group across 2 directories with 1 update - ([988f86e](https://github.com/migrationsverket/midas/commits/988f86e8dcbfc833810f2e4ad2b4902984cfc5e5)) - dependabot[bot]
- **(deps-dev)** bump mermaid - ([f224f70](https://github.com/migrationsverket/midas/commits/f224f704b93c11a8ce05c3995a57e4b94f1057e4)) - dependabot[bot]
- **(docs)** new template - ([8cefe30](https://github.com/migrationsverket/midas/commits/8cefe301cad97ad1fc8da21a288b3f18c1f66172)) - Wilhelm Hjelm
- **(docs)** new info - ([fd7bc75](https://github.com/migrationsverket/midas/commits/fd7bc751d7eaaf05abe5ed6fe0f4089d2786ec7b)) - Wilhelm Hjelm
- **(file-upload)** remove padding - ([a33b96d](https://github.com/migrationsverket/midas/commits/a33b96d547f9ef106ccc7bf5535a1f4e82ee2425)) - Wilhelm Hjelm
- **(file-upload)** bump - ([52c47f0](https://github.com/migrationsverket/midas/commits/52c47f046b13e1eda5cbb8d48f77000a0bc5468f)) - Wilhelm Hjelm
- **(info-banner)** release version 0.3.0 [skip-ci] - ([58c963e](https://github.com/migrationsverket/midas/commits/58c963e3257039d86ece9dd2d5fb50f642344bd4)) - Wilhelm Hjelm
- **(info-banner)** release version 0.3.0 [skip-ci] - ([68c3a51](https://github.com/migrationsverket/midas/commits/68c3a51c6262cf0f9686771d9a05dcab4345aad2)) - Wilhelm Hjelm
- **(layout)** release version 0.0.1-beta.2 [skip-ci] - ([b42e814](https://github.com/migrationsverket/midas/commits/b42e8143fb2b01c00de837eaaf884f52d2c5a9c5)) - Wilhelm Hjelm
- **(layout)** release version 0.0.1-beta.0 [skip-ci] - ([3fb064b](https://github.com/migrationsverket/midas/commits/3fb064b67c0a565d2250acd37103ddd1171f580d)) - Wilhelm Hjelm
- **(layout)** release version 0.0.1-beta.1 [skip-ci] - ([139f60d](https://github.com/migrationsverket/midas/commits/139f60d7176bf737ce6198c5002ad5c072938e11)) - Wilhelm Hjelm
- **(link)** release version 0.0.2 [skip-ci] - ([2a7781f](https://github.com/migrationsverket/midas/commits/2a7781fdfc7f37392a23937e08417beb4e1b3485)) - Wilhelm Hjelm
- **(link)** release version 0.0.3 [skip-ci] - ([0269940](https://github.com/migrationsverket/midas/commits/026994029f3377fcd8c4e6bc2ea4edba6b43d792)) - Wilhelm Hjelm
- **(logo)** release version 0.2.54 [skip-ci] - ([295b718](https://github.com/migrationsverket/midas/commits/295b718b05657461265fe2a0a4785c2ffc7185fb)) - Wilhelm Hjelm
- **(modal)** add readme - ([a1881a0](https://github.com/migrationsverket/midas/commits/a1881a0efbbeb6cabf0b76be691d913d6a96b7eb)) - Wilhelm Hjelm
- **(modal)** release version 0.1.1 [skip-ci] - ([7d794fd](https://github.com/migrationsverket/midas/commits/7d794fde2b4234bc8805910a101a684795e8cdee)) - Wilhelm Hjelm
- **(multi-select)** release version 0.1.1 [skip-ci] - ([7bdcf7b](https://github.com/migrationsverket/midas/commits/7bdcf7b8d014b9bfbe9cefc628aa6bcebcea5cb2)) - Wilhelm Hjelm
- **(radio)** release version 0.6.3 [skip-ci] - ([1f7061c](https://github.com/migrationsverket/midas/commits/1f7061c7a2be1fbae8ef05c62ca37bae181914fd)) - Wilhelm Hjelm
- **(radio)** release version 0.7.0 [skip-ci] - ([673f115](https://github.com/migrationsverket/midas/commits/673f11569e40385557630ba7a3db2f9f10486098)) - Wilhelm Hjelm
- **(radio)** release version 0.7.0 [skip-ci] - ([8b45ef1](https://github.com/migrationsverket/midas/commits/8b45ef16f69d8cea797e40b20e6fe7602fd7a55c)) - Wilhelm Hjelm
- **(search-field)** release version 0.0.2 [skip-ci] - ([255d67b](https://github.com/migrationsverket/midas/commits/255d67b0eb8e67248053e07b35d5b51a61e10adb)) - Wilhelm Hjelm
- **(search-field)** release version 1.0.3 [skip-ci] - ([fa5b533](https://github.com/migrationsverket/midas/commits/fa5b5331a194bd729ce01cd7859468fa8b8e34da)) - Wilhelm Hjelm
- **(select)** release version 0.4.24 [skip-ci] - ([91238f0](https://github.com/migrationsverket/midas/commits/91238f09b386d45f05ad1210b3da87c6e086a215)) - Wilhelm Hjelm
- **(select)** adjust props - ([d10a5e0](https://github.com/migrationsverket/midas/commits/d10a5e0e243ae5e798c8b54c5a0411892dec1f0b)) - Wilhelm Hjelm
- **(select)** release version 0.4.25 [skip-ci] - ([5f25f75](https://github.com/migrationsverket/midas/commits/5f25f758645c82ee1ae557e0001b5f156e5507d0)) - Wilhelm Hjelm
- **(select)** release version 0.4.25 [skip-ci] - ([6b86dc1](https://github.com/migrationsverket/midas/commits/6b86dc1dbcc3fd296bd05d7cf5c9e44782dfb413)) - Wilhelm Hjelm
- **(select)** release version 0.5.2 [skip-ci] - ([56c65f0](https://github.com/migrationsverket/midas/commits/56c65f084f7737fe854618037d6f8681be3215a7)) - Wilhelm Hjelm
- **(table)** release version 0.1.0 [skip-ci] - ([83afbeb](https://github.com/migrationsverket/midas/commits/83afbeb7a774177563f17d22d6d801a7aca93a21)) - Wilhelm Hjelm
- **(textarea)** release version 0.0.2 [skip-ci] - ([aee3973](https://github.com/migrationsverket/midas/commits/aee39731f672b8d4af77b53fcf8f20840209b4c2)) - Wilhelm Hjelm
- **(textarea)** release version 0.0.3 [skip-ci] - ([3be15c2](https://github.com/migrationsverket/midas/commits/3be15c2518b22e56cf5ed37f37c0b2167f92ca01)) - Wilhelm Hjelm
- **(textfield)** wrapper - ([40e7333](https://github.com/migrationsverket/midas/commits/40e733301cf133025baf00ae318928d00c0f322a)) - Wilhelm Hjelm
- **(textfield)** release version 0.11.0 [skip-ci] - ([3b27a1a](https://github.com/migrationsverket/midas/commits/3b27a1a68a4e953adb7c39f7a738d7b3c4902cf2)) - Wilhelm Hjelm
- **(theme)** release version 0.5.33 [skip-ci] - ([5e24461](https://github.com/migrationsverket/midas/commits/5e24461301523f798eb7e3ee8047312e09551964)) - Wilhelm Hjelm
- **(theme)** release version 0.5.26 [skip-ci] - ([197993d](https://github.com/migrationsverket/midas/commits/197993d37ab7f0b2fb3729becf0f01bd2ecf11e8)) - Wilhelm Hjelm
- **(theme)** release version 0.5.3 [skip-ci] - ([6d0d75e](https://github.com/migrationsverket/midas/commits/6d0d75e590789ec7ddd7ca3dd69c588b56e26cdc)) - Wilhelm Hjelm
- **(theme)** release version 0.5.4 [skip-ci] - ([65012ab](https://github.com/migrationsverket/midas/commits/65012abf7c41458801d5a17336184f2e8e393436)) - Wilhelm Hjelm
- **(theme)** release version 1.0.1 [skip-ci] - ([e85c42a](https://github.com/migrationsverket/midas/commits/e85c42addcd1cf98f7ffd1e151a0226fac6bbcc4)) - Wilhelm Hjelm
- **(toast)** release version 0.5.2 [skip-ci] - ([426a627](https://github.com/migrationsverket/midas/commits/426a627a59462154a517b68d79888e5fc7b3339d)) - Wilhelm Hjelm
- **(toast)** release version 0.5.2 [skip-ci] - ([021864e](https://github.com/migrationsverket/midas/commits/021864e9f5555e2605003e29dba1e582a7c3d2f4)) - Wilhelm Hjelm
- **(toast)** fix max-width and timeout in stories - ([81f626f](https://github.com/migrationsverket/midas/commits/81f626f0c88f7b6727be62b6e3b52b0b03f66794)) - Wilhelm Hjelm
- **(toast)** fix colors - ([c064136](https://github.com/migrationsverket/midas/commits/c0641362876b0efc37a247a865ea5a8bdc798267)) - Wilhelm Hjelm
- **(toast)** fix font size - ([b59dcf3](https://github.com/migrationsverket/midas/commits/b59dcf3154791dcfc220a2ee3d2611d5b8e9cf54)) - Wilhelm Hjelm
- **(ui)** release version 0.5.29 [skip-ci] - ([1b66902](https://github.com/migrationsverket/midas/commits/1b66902975cfec358c01a475a1e46de234b2ee04)) - Wilhelm Hjelm
- **(ui)** new release command - ([f18c5de](https://github.com/migrationsverket/midas/commits/f18c5de3a39f5a23dd07aad2f6efc537a0581e8a)) - Wilhelm Hjelm
- project adjustments - ([5ab19f8](https://github.com/migrationsverket/midas/commits/5ab19f89f7e8c1e879deee1880143f7d699d85b8)) - Wilhelm Hjelm
- fixes - ([7f472c1](https://github.com/migrationsverket/midas/commits/7f472c1517f09e0965745de008745bfc9258973e)) - Wilhelm Hjelm
- fix indent - ([ac419cf](https://github.com/migrationsverket/midas/commits/ac419cfb9bfe5ad13270b84cb418304418ff797d)) - Wilhelm Hjelm
- project files - ([5af83d4](https://github.com/migrationsverket/midas/commits/5af83d4d05f10b4b2d3f8320d344d5727ed2460d)) - Wilhelm Hjelm
- storybook examples - ([f473499](https://github.com/migrationsverket/midas/commits/f473499fa525029483bd802ff0942edbb2695b35)) - Wilhelm Hjelm
- fix storybook build - ([94da4ea](https://github.com/migrationsverket/midas/commits/94da4ea805a5fbc942d11cd9a5d1e57568b042a0)) - Wilhelm Hjelm
- add storybook build path to gitingore - ([9b47bd8](https://github.com/migrationsverket/midas/commits/9b47bd894e535d6c3550456a930444eaf8611047)) - Wilhelm Hjelm
- packages - ([db49bc7](https://github.com/migrationsverket/midas/commits/db49bc74fd48ae620564980751e6493b09202ead)) - Wilhelm Hjelm
- packages - ([b61411e](https://github.com/migrationsverket/midas/commits/b61411e188e7b6da704388179ab11f8fc4f49970)) - Wilhelm Hjelm
- add workflows to release branches - ([22bf8f8](https://github.com/migrationsverket/midas/commits/22bf8f87532ba67b6a6f991644ab3588903363cc)) - Wilhelm Hjelm
- new versions - ([6a78ee0](https://github.com/migrationsverket/midas/commits/6a78ee01f0de1283ffe4904b52535af178d83bc0)) - Wilhelm Hjelm
- new versions - ([967cc2f](https://github.com/migrationsverket/midas/commits/967cc2fba57b1be5cfe2cde5a15e81ae75a07c05)) - Wilhelm Hjelm
- added tests to release/branch - ([290aa06](https://github.com/migrationsverket/midas/commits/290aa06bcd7f0d6715a96dbe8aceb3d53f48dcb4)) - Wilhelm Hjelm
- add/remove packages + eslint rules - ([69fa09b](https://github.com/migrationsverket/midas/commits/69fa09b132e1476a6d451602417bc678667c562f)) - Wilhelm Hjelm
- fix linting - ([fd49a81](https://github.com/migrationsverket/midas/commits/fd49a81531b7b7ba92e3a6c4ccc9a06158798306)) - Wilhelm Hjelm
- remove vitest - ([ec1e411](https://github.com/migrationsverket/midas/commits/ec1e411ec8f249f18f060eae79c96987eb70288a)) - Wilhelm Hjelm
- add jest config - ([3dc785f](https://github.com/migrationsverket/midas/commits/3dc785fe9d9d5f3156a34584b24d37c5166a4751)) - Wilhelm Hjelm
- "fix" remix test - ([eab9798](https://github.com/migrationsverket/midas/commits/eab9798175251f2b8feffacb6ecb1715741d57dd)) - Wilhelm Hjelm
- new remix app - ([af755e9](https://github.com/migrationsverket/midas/commits/af755e94e62ddd9854894de64ad7edcac6011512)) - Wilhelm Hjelm
- remove remix test - ([e3924e8](https://github.com/migrationsverket/midas/commits/e3924e8c550cf8530238812bab72526a1f09c6a2)) - Wilhelm Hjelm
- new editor styles - ([76611ed](https://github.com/migrationsverket/midas/commits/76611edce5078eb39ab2babf642a8bdcbf6563c0)) - Wilhelm Hjelm
- readd package - ([b141a60](https://github.com/migrationsverket/midas/commits/b141a60f621962a62216f4c8440b9bdc17f709a9)) - Wilhelm Hjelm
- fix packages - ([af1ab71](https://github.com/migrationsverket/midas/commits/af1ab71f272bb00517002629c3e8d90649233fb9)) - Wilhelm Hjelm
- upgrade packages - ([76453a5](https://github.com/migrationsverket/midas/commits/76453a55b715256a7083a0b5e1dcbecba9f126f1)) - Wilhelm Hjelm
- replace @nx/linter with new package - ([5deb2f1](https://github.com/migrationsverket/midas/commits/5deb2f1dbfac41c8bbcf0d7074a08df4c56dd6ef)) - Wilhelm Hjelm
- change package name - ([fdaf598](https://github.com/migrationsverket/midas/commits/fdaf59851ee96f599e08cd15924a1f8db51797d7)) - Wilhelm Hjelm
- change package - ([8cf7a92](https://github.com/migrationsverket/midas/commits/8cf7a927bc5ea4e446102f6c44fbb812d5ac0a66)) - Wilhelm Hjelm
- update deps - ([037798a](https://github.com/migrationsverket/midas/commits/037798a37759af8d454bc63581b4e15a83463db8)) - Wilhelm Hjelm
- update deps - ([52b8c17](https://github.com/migrationsverket/midas/commits/52b8c17a2819ebe7eab2fe2bb9a23b9a4d76625c)) - Wilhelm Hjelm
- update deps - ([b88ce0a](https://github.com/migrationsverket/midas/commits/b88ce0a447fd392ca77f0d1e875d572856eb3029)) - Wilhelm Hjelm
- update deps - ([0ba17b9](https://github.com/migrationsverket/midas/commits/0ba17b912627fd2a60d7cff274ed523428c9b33e)) - Wilhelm Hjelm
- update packages - ([4c55232](https://github.com/migrationsverket/midas/commits/4c552326dfd13fc3f3e028214aa0c00e59bd9158)) - Wilhelm Hjelm
- add vs code extensions recomendations - ([99e1388](https://github.com/migrationsverket/midas/commits/99e1388ae1d26c2f8295cc031910d37fd94c4563)) - Wilhelm Hjelm
- lint fixes - ([26a6f49](https://github.com/migrationsverket/midas/commits/26a6f49f553addfd34d33cf40397a437afe667be)) - Wilhelm Hjelm
- project files - ([e25b542](https://github.com/migrationsverket/midas/commits/e25b5423ecc4bae714437b145d6b5cb289c59664)) - Wilhelm Hjelm
- test new changelog - ([f0a49dd](https://github.com/migrationsverket/midas/commits/f0a49dd2697302b719202ca19fe16fec2cc58bfc)) - Wilhelm Hjelm
- fix proper stylelinting - ([79b0104](https://github.com/migrationsverket/midas/commits/79b0104d068399c43c1f8819089e4e176f887773)) - Wilhelm Hjelm
- test pr-release workflow - ([ca2ff0f](https://github.com/migrationsverket/midas/commits/ca2ff0f694ee416a10df8191d4022ccee1708c39)) - Wilhelm Hjelm
- test updated workflow - ([8484188](https://github.com/migrationsverket/midas/commits/8484188c8144e761b1b439ca7f945dcf6a009b0b)) - Wilhelm Hjelm
- test permissions - ([12ee266](https://github.com/migrationsverket/midas/commits/12ee26615b9922464ecc7936178f68d62505faef)) - Wilhelm Hjelm
- test permission - ([a176ee0](https://github.com/migrationsverket/midas/commits/a176ee03063035bcfeb4391c255c217de646809e)) - Wilhelm Hjelm
- remove main as target - ([5246d26](https://github.com/migrationsverket/midas/commits/5246d264506d60a0c9244fecbc6570670ed0cc69)) - Wilhelm Hjelm
- fix title - ([220cd92](https://github.com/migrationsverket/midas/commits/220cd92a935d93c71797dc5604003a2c9fb5e24f)) - Wilhelm Hjelm
- test env - ([8c631a0](https://github.com/migrationsverket/midas/commits/8c631a0ef7f6faacc04664c2b356c6c050f7b708)) - Wilhelm Hjelm
- test PR_NUMBER - ([94cd258](https://github.com/migrationsverket/midas/commits/94cd258d9269af6152effffcfbe85709cd9de842)) - Wilhelm Hjelm
- test pr-preview - ([b31e261](https://github.com/migrationsverket/midas/commits/b31e2617f8b0810f043d3589b66a99b63bd87587)) - Wilhelm Hjelm
- remove console.log - ([997cbc0](https://github.com/migrationsverket/midas/commits/997cbc06e9d1bc9fe58a017e5a7e114cb9cd1e32)) - Wilhelm Hjelm
- test new permission - ([fb9c53d](https://github.com/migrationsverket/midas/commits/fb9c53dfce0fb553f581cd026e3d3d4aa625e381)) - Wilhelm Hjelm
- fix docId - ([0e0f968](https://github.com/migrationsverket/midas/commits/0e0f96812adad41924800df12690c19f2bfe1309)) - Wilhelm Hjelm
- remove documentation test - ([ee42001](https://github.com/migrationsverket/midas/commits/ee42001597f478349286c5dc7b4a520cf0c4d47a)) - Wilhelm Hjelm
- fix padding - ([7994992](https://github.com/migrationsverket/midas/commits/7994992867ec88c09078abefcd6ce6d991537a88)) - Wilhelm Hjelm
- fix margin - ([591c646](https://github.com/migrationsverket/midas/commits/591c64668c6659dd5486f5090c725e5ddef32d89)) - Wilhelm Hjelm
- 80% - ([c4eb098](https://github.com/migrationsverket/midas/commits/c4eb0985b141eaeb3650b29250f2890d39b8ea49)) - Wilhelm Hjelm
- update project readme - ([d16d9ae](https://github.com/migrationsverket/midas/commits/d16d9aeb0828c9493bcf20e0f8f1fcc8c3e315e3)) - Wilhelm Hjelm
- add mdx support to prettier and eslint - ([6260942](https://github.com/migrationsverket/midas/commits/6260942e534a370b838200d8cc5feb94f1721b48)) - Wilhelm Hjelm
- lint css files - ([7c6916c](https://github.com/migrationsverket/midas/commits/7c6916cbbf209889019aeee11f198cf2ebe7271e)) - Wilhelm Hjelm
- move some project files - ([3331156](https://github.com/migrationsverket/midas/commits/3331156948aad13e9e8ed8b079a7331163e2d3a9)) - Wilhelm Hjelm
- add new extension recommendation - ([98bfff6](https://github.com/migrationsverket/midas/commits/98bfff67b7392ee4a27402927ed8d09e2c9cf189)) - Wilhelm Hjelm
- remove pr comments - ([23f3cda](https://github.com/migrationsverket/midas/commits/23f3cda506271128eb7cd42d2b5729a61b1179b6)) - Wilhelm Hjelm
- fix lint - ([8e90b89](https://github.com/migrationsverket/midas/commits/8e90b89d63eaab515dfc60960ba31b08d58b01c4)) - Wilhelm Hjelm
- release fixes - ([321e027](https://github.com/migrationsverket/midas/commits/321e027bcdbfa9f6a797f0a1e06fb4fc919b3700)) - Wilhelm Hjelm
- force scopes to have exact project names - ([4f009cb](https://github.com/migrationsverket/midas/commits/4f009cbfc31b23a86779d8bfc16b2e533aa9e81b)) - Wilhelm Hjelm
- test new workflow - ([14df129](https://github.com/migrationsverket/midas/commits/14df129a6adeca4e6259e1ed3af95ff63ed515ac)) - Wilhelm Hjelm
- test permissions - ([4296e17](https://github.com/migrationsverket/midas/commits/4296e17de38373899e20f27169bdade32b9ebfa3)) - Wilhelm Hjelm
- add deps - ([1740a72](https://github.com/migrationsverket/midas/commits/1740a72b3a817036eccbea90cfb6f30e70441c13)) - Wilhelm Hjelm
- fix icon size - ([702fffc](https://github.com/migrationsverket/midas/commits/702fffcca0da69344e7186954e341779286f69f8)) - Wilhelm Hjelm
- link button style - ([f68ec76](https://github.com/migrationsverket/midas/commits/f68ec7636c918e6c8e74f71d69f7ab9a9fdf9312)) - Wilhelm Hjelm
- change recomendations and settings - ([bc24f9a](https://github.com/migrationsverket/midas/commits/bc24f9af04976706bb0f97d083ba7da1565453c9)) - Wilhelm Hjelm
- fix card test - ([aa1a506](https://github.com/migrationsverket/midas/commits/aa1a50667fe9a2f762fc3fb0475760f1e2b5b503)) - Wilhelm Hjelm
- fix card props - ([3bd040c](https://github.com/migrationsverket/midas/commits/3bd040cd174511ab2df9caa110d2aa4ff998eeb0)) - Wilhelm Hjelm
- remove icon - ([f0a7e10](https://github.com/migrationsverket/midas/commits/f0a7e10304fead692faad703f82edfac28ac737a)) - Wilhelm Hjelm
- test base url - ([777a602](https://github.com/migrationsverket/midas/commits/777a6027b0b4a43408fc94e4e8032c970e4c5634)) - Wilhelm Hjelm
- test storybook link - ([0713ecf](https://github.com/migrationsverket/midas/commits/0713ecfa5e56b399f8bfe706a76e273f2debbcdd)) - Wilhelm Hjelm
- fix tags - ([661e98f](https://github.com/migrationsverket/midas/commits/661e98fcb5f375a0fa5f9effee9efec411d52691)) - Wilhelm Hjelm
- multi-select start - ([bc6a348](https://github.com/migrationsverket/midas/commits/bc6a3487d5cbceaf144d52e15b117adfc30f5af2)) - Wilhelm Hjelm
- fixes - ([6141270](https://github.com/migrationsverket/midas/commits/6141270284599892f3bd4148025d40f11f5af7b8)) - Wilhelm Hjelm
- fix warning - ([d68260d](https://github.com/migrationsverket/midas/commits/d68260d159dba78f5bf1a3365c38cad0e2bf9d5f)) - Wilhelm Hjelm
- fix multiselect story - ([f481730](https://github.com/migrationsverket/midas/commits/f4817307313786a81183e0d9b7aea38691c91b06)) - Wilhelm Hjelm
- build file - ([861e37f](https://github.com/migrationsverket/midas/commits/861e37ffb78f392cd2e99ddfac67b2621a6e0929)) - Wilhelm Hjelm
- added pre release workflow - ([ddbd264](https://github.com/migrationsverket/midas/commits/ddbd264d465cdb4173198e08ca5329729623d6aa)) - Wilhelm Hjelm
- datepicker - ([5c72a7b](https://github.com/migrationsverket/midas/commits/5c72a7bef2dfccd506f55290d199a4767b54b535)) - Wilhelm Hjelm
- remove deps - ([b8133f6](https://github.com/migrationsverket/midas/commits/b8133f6979ed6afbba4974c7d3ef38c2fd637aae)) - Wilhelm Hjelm
- fix package-lock - ([a5fdf6e](https://github.com/migrationsverket/midas/commits/a5fdf6ec32ea9ec3e6deb6831277c657eb95f567)) - Wilhelm Hjelm
- merge - ([33c4c12](https://github.com/migrationsverket/midas/commits/33c4c124fdc7f5723d3b26e91f6e779b3b08e629)) - jabir Khalil
- merge - ([9f7e084](https://github.com/migrationsverket/midas/commits/9f7e084602937e04e24e23c81fba3a3ef4a9ab60)) - PHIEKS
- update app - ([4f2c7b8](https://github.com/migrationsverket/midas/commits/4f2c7b8efe856e851921ba2f12a31b214b00eaba)) - Wilhelm Hjelm
- spacing - ([f9677cd](https://github.com/migrationsverket/midas/commits/f9677cd4eea9a766f3913b0bcb84b1da8ead6b35)) - Wilhelm Hjelm
- fixes - ([ca77556](https://github.com/migrationsverket/midas/commits/ca77556587f49464bfac28a526f86aac8c18e76b)) - Wilhelm Hjelm
- update colors - ([d1682d4](https://github.com/migrationsverket/midas/commits/d1682d4d154fd945c2c767d94a824c33981057d2)) - Wilhelm Hjelm
- package updates - ([a11103e](https://github.com/migrationsverket/midas/commits/a11103ea79cf1796d8637583329690ad27d9437d)) - Wilhelm Hjelm
- remove import - ([d36a17b](https://github.com/migrationsverket/midas/commits/d36a17b45d89963848009f9a0e88cc5e986c5bdd)) - Wilhelm Hjelm
- update sizes - ([f82aa9b](https://github.com/migrationsverket/midas/commits/f82aa9bafb45b6179e004b5acf3bfe8ab23f1be6)) - Wilhelm Hjelm
- npm audit - ([b18dd23](https://github.com/migrationsverket/midas/commits/b18dd2324a14f3111f5f9dae8c3f572bea52202a)) - pixelrickdreamer
- linkbutton - ([56da608](https://github.com/migrationsverket/midas/commits/56da60804c65681aedf74b0be5a0b533f746329a)) - Wilhelm Hjelm
- package updates - ([0e4e000](https://github.com/migrationsverket/midas/commits/0e4e00077f75dd285c428823a8484b95147e37c2)) - Wilhelm Hjelm
- fix test - ([5918086](https://github.com/migrationsverket/midas/commits/5918086afd6b30f4c41482e63874929f32b7a14a)) - Wilhelm Hjelm
- test new version - ([faafd0e](https://github.com/migrationsverket/midas/commits/faafd0e2954272b1c718c63b48219aecd48ad5e9)) - Wilhelm Hjelm
- fix sidebar height - ([8b76708](https://github.com/migrationsverket/midas/commits/8b76708b7981ba7121bdd38f54eddfe897c78bdd)) - Wilhelm Hjelm
- remove spacing - ([23046eb](https://github.com/migrationsverket/midas/commits/23046eb71a8768f9a2c1c2b2a752f91c86bc9c5c)) - Wilhelm Hjelm
- placeholders - ([2482fb5](https://github.com/migrationsverket/midas/commits/2482fb5ea4e26b57450138d81b018175c5d59574)) - Wilhelm Hjelm
- fix buttons - ([73f3ab1](https://github.com/migrationsverket/midas/commits/73f3ab11b0c7782ff42ce5ffc94c2a52c8533fe2)) - Wilhelm Hjelm
- button type - ([d86fcd7](https://github.com/migrationsverket/midas/commits/d86fcd7bc8f797588da4d74c2cdd04dfd3eace01)) - Wilhelm Hjelm
- change to white "theme" - ([afa24c5](https://github.com/migrationsverket/midas/commits/afa24c5cb0b1f2d4e8d2b3d2ac581bd62767f75a)) - Wilhelm Hjelm
- separate header - ([8f22500](https://github.com/migrationsverket/midas/commits/8f22500885a30bb93946f95c18f7cc98f51dbc7f)) - Wilhelm Hjelm
- update examples - ([68bf279](https://github.com/migrationsverket/midas/commits/68bf279e74549603455243fff7a620273e6e27cf)) - Wilhelm Hjelm
- animate backdrop - ([93d7f50](https://github.com/migrationsverket/midas/commits/93d7f5064c3f08a96b2a11e2ce7ca83c9322f067)) - Wilhelm Hjelm
- rename to layout - ([b2652fb](https://github.com/migrationsverket/midas/commits/b2652fb2619265844f9c90ee85ff0a86333df982)) - Wilhelm Hjelm
- separate sidebar - ([234495c](https://github.com/migrationsverket/midas/commits/234495cce42300be13e9244a175acaad34f1a424)) - Wilhelm Hjelm
- autodocs on layout - ([50cf786](https://github.com/migrationsverket/midas/commits/50cf786c3744dbeb743ef16bd8d44dfab2cdfa1c)) - Wilhelm Hjelm
- fresh packages - ([43c971e](https://github.com/migrationsverket/midas/commits/43c971eaa858ab72d2fc5cbca63770088307457d)) - Wilhelm Hjelm
- potential fix build error - ([707cc82](https://github.com/migrationsverket/midas/commits/707cc82f8aa2ba8ffaef1e6517b1cb1db51498b5)) - Wilhelm Hjelm
- fix - ([3d24ec4](https://github.com/migrationsverket/midas/commits/3d24ec4f5c79ce138678c9ffbb21115808eb6dc9)) - Wilhelm Hjelm
- remove imports - ([adbb879](https://github.com/migrationsverket/midas/commits/adbb879544f72383e0fd4e1e3d9715bf61b5f8de)) - Wilhelm Hjelm

### 🩹 Bug Fixes

- **(accordion)** new build - ([d3acc2d](https://github.com/migrationsverket/midas/commits/d3acc2def844e74aa01a697e5df95ad8d76af3be)) - Wilhelm Hjelm
- **(accordion)** fix changelog - ([56c7a02](https://github.com/migrationsverket/midas/commits/56c7a02f624b6181702a87888026f3b199c705e3)) - Wilhelm Hjelm
- **(accordion)** hover on trigger - ([b1e167b](https://github.com/migrationsverket/midas/commits/b1e167b7c2bd29a403a1a6fdcc0903f8b043bdac)) - Wilhelm Hjelm
- **(accordion)** update icon size - ([4abd6da](https://github.com/migrationsverket/midas/commits/4abd6da54b9f5f5b26ac6b2d7113dca1bd219f0e)) - Wilhelm Hjelm
- **(accordion)** color on iOS - ([af63b92](https://github.com/migrationsverket/midas/commits/af63b92cd91ccf0016b32b3ac1a40a6477e3c785)) - Wilhelm Hjelm
- **(breadcrumbs)** fix styles + new build - ([b8268f7](https://github.com/migrationsverket/midas/commits/b8268f7987808b1e9b8bde696b6850b86bf5642f)) - Wilhelm Hjelm
- **(breadcrumbs)** remove stories from build - ([1121b09](https://github.com/migrationsverket/midas/commits/1121b09e886bf945db5673dfc401fcdc8d3c9749)) - Wilhelm Hjelm
- **(breadcrumbs)** update deps - ([867d8cc](https://github.com/migrationsverket/midas/commits/867d8ccb24ffcf46aefaaac2ea6e67c2da8db576)) - Wilhelm Hjelm
- **(breadcrumbs)** dependency update - ([ab6cf96](https://github.com/migrationsverket/midas/commits/ab6cf967fffcb450b28e7ffb62bb985d510f2a38)) - Wilhelm Hjelm
- **(breadcrumbs)** update deps - ([85f51a8](https://github.com/migrationsverket/midas/commits/85f51a86af54312b2465826cd86c59dcb5805dd1)) - Wilhelm Hjelm
- **(button)** new build - ([acd3cc7](https://github.com/migrationsverket/midas/commits/acd3cc7ca9cbf499b34b8607aa61f3ea7073b15a)) - Wilhelm Hjelm
- **(button)** add large option to size in storybook and fix styling to tertiary - ([849b9ba](https://github.com/migrationsverket/midas/commits/849b9badb54859140f7214f76728d5ed474aa357)) - jabir Khalil
- **(button)** change name large to null in the size option in storybook - ([b1bebe2](https://github.com/migrationsverket/midas/commits/b1bebe2743a80c118479795b2fec56e6401ac2f2)) - jabir Khalil
- **(button)** test fix - ([2ec104c](https://github.com/migrationsverket/midas/commits/2ec104ca9b5703fafbe15f99433c8e12929db3b2)) - Wilhelm Hjelm
- **(button)** add icon variant - ([22c93b2](https://github.com/migrationsverket/midas/commits/22c93b2460bde11727052c9ba6b4662a24635fa3)) - Wilhelm Hjelm
- **(button)** clear changelog - ([8679f61](https://github.com/migrationsverket/midas/commits/8679f61668fbd8d7caf054bebf746c281c024642)) - Wilhelm Hjelm
- **(button)** share api with link-button - ([7a4ca21](https://github.com/migrationsverket/midas/commits/7a4ca217453d3891d9fb8abfd90c8f11f0fff124)) - Wilhelm Hjelm
- **(button)** change property name to iconPlacement - ([d4aa3ee](https://github.com/migrationsverket/midas/commits/d4aa3eed32dc7725b2938e90fafe1d0ac52afafe)) - jabir Khalil
- **(button)** delete unuse inline style and fix merge - ([c87b2bf](https://github.com/migrationsverket/midas/commits/c87b2bf3de9bbc0e5858f8d3181d70b25340fbb0)) - jabir Khalil
- **(button)** update icon size - ([2ad3e31](https://github.com/migrationsverket/midas/commits/2ad3e316bd49bbe0aff35370f8491fa76773ff6c)) - Wilhelm Hjelm
- **(button)** adjust spacing - ([13bcc90](https://github.com/migrationsverket/midas/commits/13bcc90a1b59919b8b11d7fe9d06759554324142)) - Wilhelm Hjelm
- **(button)** fix styling to focus-visible state - ([f3bb6a9](https://github.com/migrationsverket/midas/commits/f3bb6a96bd07f68addb93ec5d551ea244a70dc81)) - jabir Khalil
- **(button)** delete the third box-shadow and fix style to all - ([b2dd9a3](https://github.com/migrationsverket/midas/commits/b2dd9a30265992036f2b33777556ec3dfca92de4)) - jabir Khalil
- **(button)** remove the duplicated code - ([a626db8](https://github.com/migrationsverket/midas/commits/a626db89f779bb5fb5a325b0a58ccdc008619a3f)) - jabir Khalil
- **(button)** move the styling from global to under button class - ([d69d784](https://github.com/migrationsverket/midas/commits/d69d78434ab8f1fdb43373717e322422239fbbc2)) - jabir Khalil
- **(button)** add variable focus in tokens.css and fix the style with variable - ([ad3468d](https://github.com/migrationsverket/midas/commits/ad3468dfe002b5f6e9b99d81fc36f1ee8817c64d)) - jabir Khalil
- **(button)** change the styling in focus visible to a variable - ([5f2f912](https://github.com/migrationsverket/midas/commits/5f2f91283c7e5f9bd6e5c4b50a2a8848e89adb9c)) - jabir Khalil
- **(button)** add press style on icon btn - ([ab32101](https://github.com/migrationsverket/midas/commits/ab3210140e769c5cd7a40bef2149760aaca85175)) - Wilhelm Hjelm
- **(button)** correct spacing on icon button - ([1bd04c0](https://github.com/migrationsverket/midas/commits/1bd04c0f317b05a734a2a33b31028d85ec432802)) - Wilhelm Hjelm
- **(card)** accecibility fix on icon - ([7053535](https://github.com/migrationsverket/midas/commits/705353556cdcdfedc38be9dcd15c094af7e0b461)) - Wilhelm Hjelm
- **(card)** new build - ([06b10cc](https://github.com/migrationsverket/midas/commits/06b10cc36c585d92dd0e2b297a8fa91110b1d3c6)) - Wilhelm Hjelm
- **(card)** only animate out arrow - ([7cebdd5](https://github.com/migrationsverket/midas/commits/7cebdd523ff3acb2fd6b4f3d0eb08ed1700915ed)) - Wilhelm Hjelm
- **(card)** correct border-color - ([c62b094](https://github.com/migrationsverket/midas/commits/c62b09403f1dba12585f78c581b1345460fc6385)) - Wilhelm Hjelm
- **(card)** clear changelog - ([afc2f36](https://github.com/migrationsverket/midas/commits/afc2f3678059efd0a1400f44f7e7792a2e44b229)) - Wilhelm Hjelm
- **(card)** remove stories from build - ([0a48f1d](https://github.com/migrationsverket/midas/commits/0a48f1d8bb31db9afc1434d33457db0d4124b9e8)) - Wilhelm Hjelm
- **(card)** update deps - ([00fdad5](https://github.com/migrationsverket/midas/commits/00fdad57b6acbd1ec94bc86db7c898cd11e82fe5)) - Wilhelm Hjelm
- **(card)** update deps - ([d0bde7c](https://github.com/migrationsverket/midas/commits/d0bde7c6d970d5c4ba938a2fe57d021b8d8c66d1)) - Wilhelm Hjelm
- **(card)** better column stretching - ([67fa08e](https://github.com/migrationsverket/midas/commits/67fa08e09ea9866cee35ada4cf6199be7624db30)) - Wilhelm Hjelm
- **(card)** support custom link - ([7eb6948](https://github.com/migrationsverket/midas/commits/7eb6948e58e457ee521ae33fa7aa96c13c80574d)) - Wilhelm Hjelm
- **(checkbox)** new build - ([cd3071b](https://github.com/migrationsverket/midas/commits/cd3071b63832602170c7a964cd7ab1cda33656ba)) - Wilhelm Hjelm
- **(checkbox)** change styling of description - ([eaf0d37](https://github.com/migrationsverket/midas/commits/eaf0d3735946f989b5b3d8350791fbc477a6b8ad)) - PHIEKS
- **(checkbox)** fix gap between label and description - ([8d548f1](https://github.com/migrationsverket/midas/commits/8d548f19c41de8d1659b9f0de3e54e1e00949917)) - PHIEKS
- **(checkbox)** change to luide icon and fix css - ([ee52b3f](https://github.com/migrationsverket/midas/commits/ee52b3f1c65810a5f1ea14537f7ef078494da64d)) - PHIEKS
- **(checkbox)** fix checkbox size and disabled state css - ([7a95ba1](https://github.com/migrationsverket/midas/commits/7a95ba1134d1ab48a92acff07ca84a31b303e0e7)) - PHIEKS
- **(checkbox)** change back to polyline for checkmark - ([a72f517](https://github.com/migrationsverket/midas/commits/a72f5174cf224f5db0a105fa0f99c21d348efc21)) - PHIEKS
- **(checkbox)** add the animation back again - ([8985f51](https://github.com/migrationsverket/midas/commits/8985f51d569de213bf19d0090e0d664fd24cf7bc)) - PHIEKS
- **(checkbox)** remove unused icons - ([6afeca6](https://github.com/migrationsverket/midas/commits/6afeca62ad4d28431c1edb485b5fce6caa6941ff)) - PHIEKS
- **(checkbox)** remove left line when invalid - ([287185c](https://github.com/migrationsverket/midas/commits/287185c8dd6946f6534166be4f7335d1f8ae0202)) - PHIEKS
- **(checkbox)** change gap to 0.5rem - ([a266269](https://github.com/migrationsverket/midas/commits/a266269842cd09619eb463752fc8f766edc98c4d)) - PHIEKS
- **(checkbox)** change gap to 0,5rem - ([d17b76b](https://github.com/migrationsverket/midas/commits/d17b76bb16c0a811108420569da6c99bd9d5476e)) - PHIEKS
- **(checkbox)** remove stories from build + clear changelog - ([5b171e1](https://github.com/migrationsverket/midas/commits/5b171e17a2a4161b268548e7b0ec0616183c2c21)) - Wilhelm Hjelm
- **(checkbox)** change the styling in focus visible to a variable - ([fcd7692](https://github.com/migrationsverket/midas/commits/fcd769247055f3d1e53e4fcf660ef73f2ea03d38)) - jabir Khalil
- **(checkbox)** adjust styling - ([b663ef1](https://github.com/migrationsverket/midas/commits/b663ef15a8c70d57693be467ea71bc7ee0c6628c)) - Wilhelm Hjelm
- **(checkbox)** select all can be indeterminate - ([8d6c8c3](https://github.com/migrationsverket/midas/commits/8d6c8c3b677ae95235192b5f42aee7b5f87194c6)) - Wilhelm Hjelm
- **(checkbox)** fix state could be null - ([a3368b2](https://github.com/migrationsverket/midas/commits/a3368b2f25806d9dfddb3410f5c6a48838afb79e)) - Wilhelm Hjelm
- **(combobox)** add a story autocomplete,fix storybook name,the tag to ComboBox,and style focus state - ([f1179bc](https://github.com/migrationsverket/midas/commits/f1179bcdbcb43dec3880421ad6f169bdbd8b8bae)) - jabir Khalil
- **(combobox)** fix diabled state style and fix combobox test - ([25f2c89](https://github.com/migrationsverket/midas/commits/25f2c890583f2c74f0927819adbeb2e05e3ce0ea)) - jabir Khalil
- **(combobox)** naming, docs, build - ([f9de90a](https://github.com/migrationsverket/midas/commits/f9de90aaf06157223ab4bd083dcc9f4a11e0466d)) - Wilhelm Hjelm
- **(combobox)** rewrite to new wrapper - ([0802df3](https://github.com/migrationsverket/midas/commits/0802df3d7e92dad99d73941ada7d35431e56fc80)) - Wilhelm Hjelm
- **(combobox)** fix props - ([79bc05f](https://github.com/migrationsverket/midas/commits/79bc05f54b6d02242e500a0c9c79ee5b7ea42638)) - Wilhelm Hjelm
- **(combobox)** button alignment - ([896a150](https://github.com/migrationsverket/midas/commits/896a150b6988338341e37113202b100a2573ab3e)) - Wilhelm Hjelm
- **(combobox)** naming - ([8814de2](https://github.com/migrationsverket/midas/commits/8814de28cd47c31bf55f6c5c81cd177de7e5b2c7)) - Wilhelm Hjelm
- **(combobox)** focus style fix - ([a341465](https://github.com/migrationsverket/midas/commits/a3414652809aff53f988e18f52c2c318b8653c9a)) - Wilhelm Hjelm
- **(combobox)** chevron icon will be upp when select is opened - ([817ef6f](https://github.com/migrationsverket/midas/commits/817ef6fa004b3c0f28d57b3b4d513cb79770776a)) - jabir Khalil
- **(combobox)** add aria-expanded to css to rotate chevron icon - ([548503d](https://github.com/migrationsverket/midas/commits/548503d2d8f9db8363bedf5a4954ad8186103206)) - jabir Khalil
- **(combobox)** remove unessecary component rename + a11y - ([c55c5cd](https://github.com/migrationsverket/midas/commits/c55c5cd948008a22afaebe4c857cd105e8c3c6fb)) - Wilhelm Hjelm
- **(combobox)** remove stories from build - ([1f7dbca](https://github.com/migrationsverket/midas/commits/1f7dbcaa7f1021ee5a1f36cf7930e734f760f8e4)) - Wilhelm Hjelm
- **(combobox)** update readme - ([76ebbab](https://github.com/migrationsverket/midas/commits/76ebbab3f4998933713b2b5ab6611fb546bedd5d)) - Wilhelm Hjelm
- **(combobox)** update icon size - ([12d6f22](https://github.com/migrationsverket/midas/commits/12d6f22556b3e7aeaee7af90fbffbd1cb80a1974)) - Wilhelm Hjelm
- **(combobox)** new focus style - ([70343e3](https://github.com/migrationsverket/midas/commits/70343e3d54976b837a6e7a3083dd100bf421cf16)) - jabir Khalil
- **(combobox)** fix style - ([f754c72](https://github.com/migrationsverket/midas/commits/f754c72073bc062a6750c5095708d46d4c8f9e0d)) - Wilhelm Hjelm
- **(combobox)** color on iOS - ([52bbe02](https://github.com/migrationsverket/midas/commits/52bbe02b8a5858805b5551f06250359d3e591d99)) - Wilhelm Hjelm
- **(combobox)** support modals - ([faa16f0](https://github.com/migrationsverket/midas/commits/faa16f03c2cb52c1874e7e1984521e77649fe664)) - Wilhelm Hjelm
- **(combobox)** fix build - ([2c15ffd](https://github.com/migrationsverket/midas/commits/2c15ffd0a7cf7dbdeb24193c8731c6cf7ad536ac)) - Wilhelm Hjelm
- **(date-picker)** new build - ([728228c](https://github.com/migrationsverket/midas/commits/728228cf91371a61002c39bd24d9620389c955cf)) - Wilhelm Hjelm
- **(date-picker)** correct color on placeholder - ([8e78cce](https://github.com/migrationsverket/midas/commits/8e78cce53c8388a16b5ecdaad99f6153367debea)) - Wilhelm Hjelm
- **(date-picker)** correct colors - ([b0b58db](https://github.com/migrationsverket/midas/commits/b0b58dbb439bdc6ecedd7b9025846150e2e60285)) - Wilhelm Hjelm
- **(date-picker)** remove stories from build - ([101b473](https://github.com/migrationsverket/midas/commits/101b4737ae95a9773363cbf98f73a5c679e6d624)) - Wilhelm Hjelm
- **(date-picker)** update deps - ([768544a](https://github.com/migrationsverket/midas/commits/768544af3818d4eaf097670c4a95de524b80740e)) - Wilhelm Hjelm
- **(date-picker)** fix deps - ([56d7613](https://github.com/migrationsverket/midas/commits/56d7613cfbdfe8429c95096e8695de26755eb670)) - Wilhelm Hjelm
- **(date-picker)** update icon size - ([0ecaa4a](https://github.com/migrationsverket/midas/commits/0ecaa4a9be48c7a728ad44f83a63fe9456c71b3e)) - Wilhelm Hjelm
- **(date-picker)** change the styling in focus visible to a variable - ([1b20694](https://github.com/migrationsverket/midas/commits/1b20694357e4b6b1dbbcc4dcbf1ebbd35d08fa28)) - jabir Khalil
- **(date-picker)** add variable - ([26ecb15](https://github.com/migrationsverket/midas/commits/26ecb155673028253eb01673157bef9a14d3ea5d)) - jabir Khalil
- **(date-picker)** new focus state - ([0c1d404](https://github.com/migrationsverket/midas/commits/0c1d404964be7c9862f0969aecd0a010214ef022)) - Wilhelm Hjelm
- **(date-picker)** dependency update - ([cd6842a](https://github.com/migrationsverket/midas/commits/cd6842a4b7de98aefb204abe9f8a442ac8c31abb)) - Wilhelm Hjelm
- **(date-picker)** spacing on timefields - ([9d54455](https://github.com/migrationsverket/midas/commits/9d544555fb5c76d8464244e6dfdfcec82f8b3dcc)) - Wilhelm Hjelm
- **(date-picker)** update deps - ([509bd43](https://github.com/migrationsverket/midas/commits/509bd4326a065a63b615ebf5ee22e559e72e2324)) - Wilhelm Hjelm
- **(date-picker)** color on iOS - ([26b827c](https://github.com/migrationsverket/midas/commits/26b827c595274123239989e08e1c1e6b6f359b43)) - Wilhelm Hjelm
- **(date-picker)** support modals - ([3ae02ca](https://github.com/migrationsverket/midas/commits/3ae02ca55d078c6372e660e5ffbf452f0073b007)) - Wilhelm Hjelm
- **(date-picker)** add deps - ([3e4bd50](https://github.com/migrationsverket/midas/commits/3e4bd5065e2b8de66866905e3e74c17a51b24da6)) - Wilhelm Hjelm
- **(date-picker)** update deps - ([6647cbd](https://github.com/migrationsverket/midas/commits/6647cbdb6d652ad388dd3cfb34debd8aac2b0783)) - Wilhelm Hjelm
- **(date-picker)** update deps - ([a5e12f2](https://github.com/migrationsverket/midas/commits/a5e12f25cb434af80f1dbbf36b23fd1875032467)) - Wilhelm Hjelm
- **(docs)** fix top banner - ([e5326fe](https://github.com/migrationsverket/midas/commits/e5326fe7888a08b67869e3c06d2dc9513e0506b1)) - Wilhelm Hjelm
- **(docs)** test commit on GitHub - ([4d5748e](https://github.com/migrationsverket/midas/commits/4d5748eec04927879ec5b8f8dcbad2ac56c05c55)) - wilhjelmig
- **(docs)** updates to accomodate storybook - ([f6b7738](https://github.com/migrationsverket/midas/commits/f6b77384b383485d87289d804f0253a8a2a35287)) - Wilhelm Hjelm
- **(docs)** remove "build with" - ([83d9f46](https://github.com/migrationsverket/midas/commits/83d9f46de8a546dfd6446be76cabb109e2d91efd)) - Wilhelm Hjelm
- **(docs)** fix storybook link - ([36b1548](https://github.com/migrationsverket/midas/commits/36b1548564a7fa1550dfb196645f36e0b03fb1e0)) - Wilhelm Hjelm
- **(docs)** new frontpage - ([e216eaf](https://github.com/migrationsverket/midas/commits/e216eaf423e9e9f6f0f1add5857bad5e9ed10a63)) - Wilhelm Hjelm
- **(docs)** fix broken link - ([aa79f43](https://github.com/migrationsverket/midas/commits/aa79f43f3070b1a22fbf35f07c8fe76a428b5ae3)) - Wilhelm Hjelm
- **(docs)** update url - ([94f6860](https://github.com/migrationsverket/midas/commits/94f68602c2b5ca8800a26120a980e5bc3becbefb)) - Wilhelm Hjelm
- **(docs)** update url - ([42bc9f7](https://github.com/migrationsverket/midas/commits/42bc9f709a98713eee088dedb9766f8b719791bf)) - Wilhelm Hjelm
- **(docs)** fix broken link - ([ba36066](https://github.com/migrationsverket/midas/commits/ba36066d65d8e0d3e7f9f01d2bfb42e9350fb85a)) - Wilhelm Hjelm
- **(file-upload)** fix build - ([85ddcf7](https://github.com/migrationsverket/midas/commits/85ddcf7aac22c1dd717c0eda3b0d191486e5d2ed)) - Wilhelm Hjelm
- **(file-upload)** remove stories from build - ([1c0c356](https://github.com/migrationsverket/midas/commits/1c0c3561edda56c43e5b35e846e72ef154719936)) - Wilhelm Hjelm
- **(file-upload)** update deps - ([d31d5a6](https://github.com/migrationsverket/midas/commits/d31d5a619f6a116e620ba9d07f3184886de15265)) - Wilhelm Hjelm
- **(file-upload)** update icon size - ([8751ee6](https://github.com/migrationsverket/midas/commits/8751ee62fe2ab3ee794e3ba8f897d5a45b3d3093)) - Wilhelm Hjelm
- **(file-upload)** fix text overflow mobile - ([93af02b](https://github.com/migrationsverket/midas/commits/93af02b09c90e68d5256294b508eb4556786f13b)) - Wilhelm Hjelm
- **(flex)** new build - ([aa9ddbd](https://github.com/migrationsverket/midas/commits/aa9ddbda1e3a78399f9aab0b116478bf6b4c0a7e)) - Wilhelm Hjelm
- **(flex)** remove stories from build - ([c62361f](https://github.com/migrationsverket/midas/commits/c62361f71a079832dddbb47de5db77b8f6fd8cff)) - Wilhelm Hjelm
- **(flex)** better column stretching - ([ce63580](https://github.com/migrationsverket/midas/commits/ce63580e0d6b2b2d8e4ec25140074f9008b95415)) - Wilhelm Hjelm
- **(flex)** fix column wrapping - ([c442295](https://github.com/migrationsverket/midas/commits/c4422953e13035b95ace560af0bbf3152ca17e5d)) - Wilhelm Hjelm
- **(grid)** new build - ([8103518](https://github.com/migrationsverket/midas/commits/8103518cefb84b6214405fe52908b34eebd4eb0e)) - Wilhelm Hjelm
- **(grid)** remove stories from build - ([2735373](https://github.com/migrationsverket/midas/commits/27353736d1e9ae673232628c995341388b85fa85)) - Wilhelm Hjelm
- **(grid)** update readme - ([4a238f6](https://github.com/migrationsverket/midas/commits/4a238f6373f9ee3ed92cab2c86cc512f9ca3ba9d)) - Wilhelm Hjelm
- **(grid)** better column stretching - ([760253f](https://github.com/migrationsverket/midas/commits/760253f34aa4a5f4dff8735444c00dfddeba1732)) - Wilhelm Hjelm
- **(info-banner)** new build - ([c8fa059](https://github.com/migrationsverket/midas/commits/c8fa059d641ec74d511c058be9eda983e0cc5149)) - Wilhelm Hjelm
- **(info-banner)** fix dismissable button - ([ad2ffdf](https://github.com/migrationsverket/midas/commits/ad2ffdff56068959580c99717176c35f7adbff13)) - Wilhelm Hjelm
- **(info-banner)** add div props to info-banner - ([66c5669](https://github.com/migrationsverket/midas/commits/66c5669f58e4389e9350c9b9d24b17784e8c3e56)) - Wilhelm Hjelm
- **(info-banner)** remove stories from build - ([24a837a](https://github.com/migrationsverket/midas/commits/24a837a8c7e6b36543d72958801997d95e3a8663)) - Wilhelm Hjelm
- **(info-banner)** update deps - ([44408ac](https://github.com/migrationsverket/midas/commits/44408ac02b1f7636f95ec359fb2721f252cb8fc8)) - Wilhelm Hjelm
- **(info-banner)** fix classname info clsx - ([841fccb](https://github.com/migrationsverket/midas/commits/841fccb62e10cbfda4d22604ae941a5df7a5c0ac)) - Wilhelm Hjelm
- **(info-banner)** update icon size - ([e137456](https://github.com/migrationsverket/midas/commits/e137456bd1a5fa3f88acddab556d27e278c71f27)) - Wilhelm Hjelm
- **(link)** new build - ([a7f0a5f](https://github.com/migrationsverket/midas/commits/a7f0a5ff62ea71b6a46e088f80ae94a3b7f52345)) - Wilhelm Hjelm
- **(link)** remove stories from build - ([4071754](https://github.com/migrationsverket/midas/commits/4071754f910930e3d41f1face293acba4a79ec1c)) - Wilhelm Hjelm
- **(link)** update readme - ([e2f295f](https://github.com/migrationsverket/midas/commits/e2f295f62e555f256f5b3b8d8f20c62c73ec94ad)) - Wilhelm Hjelm
- **(link)** icon stays in size - ([fc5ebeb](https://github.com/migrationsverket/midas/commits/fc5ebeb89bb93056348f113dbc65488bd2d526fb)) - Wilhelm Hjelm
- **(link)** ignore icon prop if link is standalone - ([8b75335](https://github.com/migrationsverket/midas/commits/8b7533560278def2f858926d676a3effd415bef8)) - Wilhelm Hjelm
- **(link)** fix style to center the icon with text - ([2d79dcd](https://github.com/migrationsverket/midas/commits/2d79dcd03c081b54156ac0571ab71bf33823c311)) - jabir Khalil
- **(link)** fix the wrong style - ([ebf8942](https://github.com/migrationsverket/midas/commits/ebf8942f8cadc0d10c9fd5d70b6ca37f85d6d263)) - jabir Khalil
- **(link)** add style underline to hover and active state - ([420b77c](https://github.com/migrationsverket/midas/commits/420b77ca61a22702ae966939a7ae0bd9d13d153b)) - jabir Khalil
- **(link)** add visited state to css - ([de42c19](https://github.com/migrationsverket/midas/commits/de42c193427fea835f665648158dc415121255b4)) - jabir Khalil
- **(link)** add url address which leads to link component in docsweb - ([19ebc2f](https://github.com/migrationsverket/midas/commits/19ebc2fa6dedbe567f7d34c68c6d170705b6ca90)) - jabir Khalil
- **(link)** commit - ([1175df8](https://github.com/migrationsverket/midas/commits/1175df83edb8af9f8711798f6c54c09d6b89f8aa)) - jabir Khalil
- **(link)** support custom link component - ([01f5653](https://github.com/migrationsverket/midas/commits/01f5653c2227f7ab00b2870121cfe9c0ddc740f7)) - Wilhelm Hjelm
- **(link-button)** new build - ([e8feb75](https://github.com/migrationsverket/midas/commits/e8feb751e67779c90058bc9e27a7136977927488)) - Wilhelm Hjelm
- **(link-button)** update deps - ([859365c](https://github.com/migrationsverket/midas/commits/859365ce82a70e2a861508a330ec52e4691f747d)) - Wilhelm Hjelm
- **(link-button)** update readme - ([0339220](https://github.com/migrationsverket/midas/commits/0339220ae15f3b471f3e377db3df1c63357c022f)) - Wilhelm Hjelm
- **(link-button)** fix dependency - ([7857125](https://github.com/migrationsverket/midas/commits/785712598c8733fd1c14cd9b5e28a302ddfb262e)) - jabir Khalil
- **(link-button)** fix styling justify-content - ([71ff50d](https://github.com/migrationsverket/midas/commits/71ff50d86c2cb20b19af5460baa6cceff1262399)) - jabir Khalil
- **(link-button)** fix padding - ([4e67d49](https://github.com/migrationsverket/midas/commits/4e67d492e414293aaea6fd4163a5bcfa3472fe13)) - jabir Khalil
- **(link-button)** adjust styles + add focus styles - ([830c880](https://github.com/migrationsverket/midas/commits/830c88093a32c91755a422c42bcd2e644738d750)) - Wilhelm Hjelm
- **(link-button)** add variants - ([641dad3](https://github.com/migrationsverket/midas/commits/641dad3075f0b44020ac4e3a13da20632719cbb5)) - Wilhelm Hjelm
- **(link-button)** remove the duplicated code - ([f5a3a40](https://github.com/migrationsverket/midas/commits/f5a3a40e9b160aea8db05f66f4e95dae5114f6db)) - jabir Khalil
- **(link-button)** change gap to 0.5rem - ([8d1e94a](https://github.com/migrationsverket/midas/commits/8d1e94a5cf536f893295c701c113eaa8fa050ff2)) - PHIEKS
- **(link-button)** change justify-content to center to make fullwidth look better - ([dae7932](https://github.com/migrationsverket/midas/commits/dae793279802471011c0aeabe24685de2c27d96d)) - PHIEKS
- **(link-button)** custom link component - ([414e233](https://github.com/migrationsverket/midas/commits/414e233e1b0e7bed7527c38efb529da66d5ea97d)) - Wilhelm Hjelm
- **(link-button)** external link icon on target _blank - ([358520d](https://github.com/migrationsverket/midas/commits/358520d132516bd030469ff6fc822887bc70afd7)) - Wilhelm Hjelm
- **(linkButton)** use button style and fix the story for icon - ([12b4ace](https://github.com/migrationsverket/midas/commits/12b4ace2444c47f5d583e548e2b08ce9843e5e8d)) - jabir Khalil
- **(logo)** new build - ([2ed0f63](https://github.com/migrationsverket/midas/commits/2ed0f639255b546600d8d1c78a89031ba35a12ec)) - Wilhelm Hjelm
- **(logo)** remove stories from build + clear changelog - ([a045d3d](https://github.com/migrationsverket/midas/commits/a045d3d6eda1c2e1bd804afab3619686781dc8bb)) - Wilhelm Hjelm
- **(logo)** add support for all <div> props, like className - ([48c8ade](https://github.com/migrationsverket/midas/commits/48c8ade872e21b159f126095eceb529093a2ef9d)) - Wilhelm Hjelm
- **(logo)** html tag name fix - ([bdec843](https://github.com/migrationsverket/midas/commits/bdec8438d92997f623cce6b35e02ef6659c36d8b)) - Wilhelm Hjelm
- **(modal)** delete trigger button and fix styling - ([64a93e6](https://github.com/migrationsverket/midas/commits/64a93e623bd3a80216ededb5fa0dee1daeeb73f7)) - jabir Khalil
- **(modal)** delete unuse styling, and move styling for storybook to storybook - ([b1631b0](https://github.com/migrationsverket/midas/commits/b1631b02e02755ec0165ae5ee0845843077a1b9e)) - jabir Khalil
- **(modal)** fix styling in css file - ([577c812](https://github.com/migrationsverket/midas/commits/577c8124542f7fc34ce371e540d8789119fca4a8)) - jabir Khalil
- **(modal)** delete icon backgrund-color in css file - ([983e3dc](https://github.com/migrationsverket/midas/commits/983e3dc8fe7a5f3d266fc752556a1203466a7bdb)) - jabir Khalil
- **(modal)** update modal docs - ([62f2546](https://github.com/migrationsverket/midas/commits/62f254652334eeb33e26ed41eb3259422b48dc5b)) - Wilhelm Hjelm
- **(modal)** fix bug of unopenable modal + new docs - ([e21f7ee](https://github.com/migrationsverket/midas/commits/e21f7eefa10c4de898dfce7dfaf2580eb6caec15)) - Wilhelm Hjelm
- **(modal)** fix spacing - ([9c5a41a](https://github.com/migrationsverket/midas/commits/9c5a41a15451378889c5e48c156a750f2d14aa2b)) - Wilhelm Hjelm
- **(modal)** adjust max height and overflow - ([6e14b30](https://github.com/migrationsverket/midas/commits/6e14b30d1ab71d27e8c03f70c6d9e41d7c2bf0bf)) - Wilhelm Hjelm
- **(multi-select)** style adjustments - ([6caf8b6](https://github.com/migrationsverket/midas/commits/6caf8b669613d46ba58c1c1bd345ca0e9c68a50e)) - Wilhelm Hjelm
- **(multi-select)** support for all default key - ([99394f9](https://github.com/migrationsverket/midas/commits/99394f927aadde38fa5ccb35a80e8c6383320cc7)) - Wilhelm Hjelm
- **(multi-select)** validation - ([bdc09e9](https://github.com/migrationsverket/midas/commits/bdc09e908a10a1a3f3362042732c25bdff6fe320)) - Wilhelm Hjelm
- **(multi-select)** fix project - ([ced8ad1](https://github.com/migrationsverket/midas/commits/ced8ad1394339c0ecda71227dc6a9bbcc5f2ad2a)) - Wilhelm Hjelm
- **(multi-select)** fix build - ([3e64cdd](https://github.com/migrationsverket/midas/commits/3e64cdd45fab8bd72d23b805f652428516e1ac4e)) - Wilhelm Hjelm
- **(multi-select)** change remove to update list - ([a856f02](https://github.com/migrationsverket/midas/commits/a856f0216f201b608524ff91620a26432286d2a1)) - Wilhelm Hjelm
- **(multi-select)** support modals - ([8382491](https://github.com/migrationsverket/midas/commits/8382491276eb8ea237e9cf340cac322bd2bda241)) - Wilhelm Hjelm
- **(multi-select)** null on item fix - ([d9e0b01](https://github.com/migrationsverket/midas/commits/d9e0b01346ae6b1609b321d3bca9ac0b8dc634eb)) - Wilhelm Hjelm
- **(multi-select)** fix intermittent errors in tag removal - ([7ec65ea](https://github.com/migrationsverket/midas/commits/7ec65ea47b6513cdff8a53685a26579a876a3bbb)) - pixelrickdreamer
- **(radio)** remove padding - ([d091ca4](https://github.com/migrationsverket/midas/commits/d091ca412e9840f7a6f586667991eff1c802371a)) - Wilhelm Hjelm
- **(radio)** new build - ([8ec235c](https://github.com/migrationsverket/midas/commits/8ec235ce95bcb252abc818133e7bb9f18e080b69)) - Wilhelm Hjelm
- **(radio)** change padding on label and helper text - ([9064f56](https://github.com/migrationsverket/midas/commits/9064f56f76f738bf9f6d24f74f3078ec75bceef8)) - PHIEKS
- **(radio)** remove invalid line and fix css - ([19f1e18](https://github.com/migrationsverket/midas/commits/19f1e189e5a394c0317f198bf02b81cf835398d2)) - PHIEKS
- **(radio)** change gap between elements to 0.5rem - ([aba80bc](https://github.com/migrationsverket/midas/commits/aba80bc9b7597709d3cf6e0242bb91c0889503f6)) - PHIEKS
- **(radio)** remove stories from build + clear changelog - ([a065754](https://github.com/migrationsverket/midas/commits/a065754140520d6f0076501ed91a1e4d6424e12d)) - Wilhelm Hjelm
- **(radio)** change the styling in focus visible to a variable - ([0d51fb6](https://github.com/migrationsverket/midas/commits/0d51fb6e2820e9564d5e2fa4fa36dd26af2c43e7)) - jabir Khalil
- **(radio)** move radioGroup storybook to radio storybook, and fix tsconfig - ([6a9b236](https://github.com/migrationsverket/midas/commits/6a9b236590a743128723aa27b85971a0fe1b57fa)) - jabir Khalil
- **(radio)** fix data in stories - ([20d938b](https://github.com/migrationsverket/midas/commits/20d938b90649f3e43a2803e12be573b218190884)) - jabir Khalil
- **(search-field)** remove stories from build - ([7a6adf0](https://github.com/migrationsverket/midas/commits/7a6adf03ff121db7fa6bb43128f1b988facb4f12)) - Wilhelm Hjelm
- **(search-field)** update deps - ([965bf29](https://github.com/migrationsverket/midas/commits/965bf295ce71c75bd7c6db60f05cd2fc29db1d88)) - Wilhelm Hjelm
- **(search-field)** update deps - ([b6a2670](https://github.com/migrationsverket/midas/commits/b6a2670deec2b3594f39e0a4b7d1f7390e2a3e33)) - Wilhelm Hjelm
- **(search-field)** update readme - ([47592c0](https://github.com/migrationsverket/midas/commits/47592c093f5a793eb6b6dd874d445975c633f5b5)) - Wilhelm Hjelm
- **(search-field)** fix deps - ([ea51719](https://github.com/migrationsverket/midas/commits/ea517191b106ab7cd41f4ea319ecdf90e9cf69f4)) - Wilhelm Hjelm
- **(search-field)** update icon size - ([149abd6](https://github.com/migrationsverket/midas/commits/149abd6e68099b22281d8af5d3861bbf62c6af5e)) - Wilhelm Hjelm
- **(search-field)** inherit focus from textField - ([6657845](https://github.com/migrationsverket/midas/commits/6657845ae28ad7293f6cc0cc8fd17de23101c356)) - jabir Khalil
- **(search-field)** dependency update - ([92777f5](https://github.com/migrationsverket/midas/commits/92777f52507465ce6bbc14851f3bca277aab6332)) - Wilhelm Hjelm
- **(search-field)** update deps - ([5f9f96b](https://github.com/migrationsverket/midas/commits/5f9f96b1687e6f95a3a6481b2825f55a4977c254)) - Wilhelm Hjelm
- **(search-field)** update deps - ([156e2c2](https://github.com/migrationsverket/midas/commits/156e2c2bd00fed04881c394d7e4e6e1de2370aa0)) - Wilhelm Hjelm
- **(search-field)** update deps - ([b04c43c](https://github.com/migrationsverket/midas/commits/b04c43c26904fd8ed871e1cd727e5a8f37c826cb)) - Wilhelm Hjelm
- **(select)** remove padding and add variables - ([7609a86](https://github.com/migrationsverket/midas/commits/7609a8642418bd30a356cc385bb9ed6250556028)) - Wilhelm Hjelm
- **(select)** fix list spacing - ([9e079e9](https://github.com/migrationsverket/midas/commits/9e079e9436b66d3e309b30430920a4092cb983fe)) - Wilhelm Hjelm
- **(select)** new build - ([56d48d0](https://github.com/migrationsverket/midas/commits/56d48d03e11c41afd964d733e9055a9306754aeb)) - Wilhelm Hjelm
- **(select)** use client - ([4538389](https://github.com/migrationsverket/midas/commits/4538389c71ba90cd7b83979915428930936ec664)) - Wilhelm Hjelm
- **(select)** change to lucide icon - ([c9cbd10](https://github.com/migrationsverket/midas/commits/c9cbd10db71b198d8459d4f7dc68f059a89f2996)) - PHIEKS
- **(select)** fix icon alignment - ([e9b7f9d](https://github.com/migrationsverket/midas/commits/e9b7f9df016d5c68f28b12fddd2105318a6ff06a)) - PHIEKS
- **(select)** remove hard value - ([4866d1c](https://github.com/migrationsverket/midas/commits/4866d1cc3bcb6506846ffb429edc3966d75b8c8b)) - Wilhelm Hjelm
- **(select)** add aria-expanded to css to rotate chevron icon - ([7ca8556](https://github.com/migrationsverket/midas/commits/7ca8556c4e1afeb42918962d8397f8c80e231418)) - jabir Khalil
- **(select)** change to border - ([f724cc2](https://github.com/migrationsverket/midas/commits/f724cc2e528e14a7f99f33fbd97d6873e8ed98a3)) - Wilhelm Hjelm
- **(select)** update icon size - ([c9560e8](https://github.com/migrationsverket/midas/commits/c9560e84a0a0540aa02b177e900a0b35a3017790)) - Wilhelm Hjelm
- **(select)** change the styling in focus visible to a variable - ([8353e47](https://github.com/migrationsverket/midas/commits/8353e4727015067507ff02d7b63ddbcaf07d8ae3)) - jabir Khalil
- **(select)** change box-shadow to border - ([6784d14](https://github.com/migrationsverket/midas/commits/6784d1491534503d8c3c1f8fb8531e09a61343ec)) - Wilhelm Hjelm
- **(select)** support modals - ([4b004d5](https://github.com/migrationsverket/midas/commits/4b004d51d0857dd7054b672af62da78c7f2552c0)) - Wilhelm Hjelm
- **(spinner)** new build - ([8c77bf0](https://github.com/migrationsverket/midas/commits/8c77bf06c7cc59629c1304886e43de1d899c841a)) - Wilhelm Hjelm
- **(spinner)** remove stories from build - ([d2e8c1d](https://github.com/migrationsverket/midas/commits/d2e8c1d18d652931d181f3c219c6d28459e9bdca)) - Wilhelm Hjelm
- **(spinner)** update deps - ([4615050](https://github.com/migrationsverket/midas/commits/46150509aae06e7ea3a6a80da61c2686ea0ca8c0)) - Wilhelm Hjelm
- **(spinner)** update readme - ([a41246e](https://github.com/migrationsverket/midas/commits/a41246ea694454402655e35f9df18c33957a5d6d)) - Wilhelm Hjelm
- **(table)** use client - ([fc9bda5](https://github.com/migrationsverket/midas/commits/fc9bda5cd3fd446fc3e857b3c1db20d4cddd1d43)) - Wilhelm Hjelm
- **(table)** remove stories from build - ([8287a67](https://github.com/migrationsverket/midas/commits/8287a67d0c09eebcecf5ea99966b4d2c0b56ab85)) - Wilhelm Hjelm
- **(table)** update deps - ([647fda3](https://github.com/migrationsverket/midas/commits/647fda3c0100ae452d8b8a892ec7fc7e67babbbf)) - Wilhelm Hjelm
- **(table)** update readme - ([c05fdac](https://github.com/migrationsverket/midas/commits/c05fdaca74b64405edb49cd78284b76ae431d4a0)) - Wilhelm Hjelm
- **(table)** update icon size - ([7de821b](https://github.com/migrationsverket/midas/commits/7de821b8cc8f5bba52b652be8e450c366d4f2951)) - Wilhelm Hjelm
- **(tabs)** new build - ([91a58e1](https://github.com/migrationsverket/midas/commits/91a58e1c0c96c12e665596cbc274c79b034a70e6)) - Wilhelm Hjelm
- **(tabs)** update readme - ([723eb3f](https://github.com/migrationsverket/midas/commits/723eb3f893e7a7b1d7e1a3f563b21bedf7522f35)) - Wilhelm Hjelm
- **(tabs)** new focus state - ([7cc95c9](https://github.com/migrationsverket/midas/commits/7cc95c9dfe8955ad2db2c430e3e398498129f1a2)) - Wilhelm Hjelm
- **(tabs)** fix styles - ([8340403](https://github.com/migrationsverket/midas/commits/834040365025a8e09260cfdfa2f48ae9e337c61b)) - Wilhelm Hjelm
- **(tabs)** responsive - ([212eff6](https://github.com/migrationsverket/midas/commits/212eff6c2e76d7dcdefac7b096a5821d1ed86c94)) - Wilhelm Hjelm
- **(tag)** fix stories and css and delete unuse codes - ([6280a13](https://github.com/migrationsverket/midas/commits/6280a131c95b74c4cb2532ac1dbac4a562267182)) - jabir Khalil
- **(tag)** styling + dismissable - ([54c492a](https://github.com/migrationsverket/midas/commits/54c492aa3cd67904a2b5b9aa2f56ac63a84a5b07)) - Wilhelm Hjelm
- **(tag)** fix project - ([97e289b](https://github.com/migrationsverket/midas/commits/97e289b039ba81b4a38fc990105e7935c1d66dde)) - Wilhelm Hjelm
- **(tag)** dependency update - ([108c6e3](https://github.com/migrationsverket/midas/commits/108c6e3573edc4743ed003e5c72faf916775afe5)) - Wilhelm Hjelm
- **(textField)** fix text color in invald error to red color - ([a5b38a9](https://github.com/migrationsverket/midas/commits/a5b38a99416e0b33a350394da02d32070825e957)) - jabir Khalil
- **(textarea)** fix handleChange run when element focus - ([e631acd](https://github.com/migrationsverket/midas/commits/e631acd0568e63135541b0e0296142255ad1ce5d)) - Wilhelm Hjelm
- **(textarea)** naming - ([0c0498c](https://github.com/migrationsverket/midas/commits/0c0498c63389169e95fabd36a63e78d4446e6275)) - Wilhelm Hjelm
- **(textarea)** remove stories from build - ([418f2fe](https://github.com/migrationsverket/midas/commits/418f2fe7cc35ec7a6c8fa89bab3ccfc1084be7e0)) - Wilhelm Hjelm
- **(textarea)** remove stories from build - ([b4176ff](https://github.com/migrationsverket/midas/commits/b4176ff040aaeb0adc2343e703325366344fa2d1)) - Wilhelm Hjelm
- **(textarea)** update readme - ([4e68e35](https://github.com/migrationsverket/midas/commits/4e68e3538389d1c4b5b2451c2f3a78db9a7ed05f)) - Wilhelm Hjelm
- **(textarea)** remove focus animation - ([0b8929f](https://github.com/migrationsverket/midas/commits/0b8929f0cd187f37fd197ef47466b772c411f005)) - Wilhelm Hjelm
- **(textarea)** fix focus - ([add7471](https://github.com/migrationsverket/midas/commits/add747148e68ef3d0aa23274726890e055b9c7f2)) - Wilhelm Hjelm
- **(textarea)** fix to show the error when the characters be more from max - ([19199f1](https://github.com/migrationsverket/midas/commits/19199f1c657f257b8f4ad87e82996f5ae032d140)) - jabir Khalil
- **(textarea)** change color - ([92d32e3](https://github.com/migrationsverket/midas/commits/92d32e3635e4e6446ea417b4080230da73899691)) - jabir Khalil
- **(textarea)** change error message at maxCharacters - ([14b2774](https://github.com/migrationsverket/midas/commits/14b277455a30ef25df47fca581fc81957bedf5c4)) - Wilhelm Hjelm
- **(textarea)** change error message when > maxCharacter - ([25512c6](https://github.com/migrationsverket/midas/commits/25512c622fc25eacbe58e3a127bc8e81c82b8cbd)) - PHIEKS
- **(textfield)** remove padding - ([21422a2](https://github.com/migrationsverket/midas/commits/21422a2976e8b93346e4d52d5e4df8d006154d94)) - Wilhelm Hjelm
- **(textfield)** style - ([b525f0e](https://github.com/migrationsverket/midas/commits/b525f0e742aa7561bf19d404a3c4e9dd3c3c4104)) - Wilhelm Hjelm
- **(textfield)** new build - ([082df93](https://github.com/migrationsverket/midas/commits/082df93df1b250bf3be6d351a49a35ca86212b9f)) - Wilhelm Hjelm
- **(textfield)** fix alignment - ([3938ac5](https://github.com/migrationsverket/midas/commits/3938ac53e51290e2c3c42055958a514d5d73ee17)) - Wilhelm Hjelm
- **(textfield)** fix error message alignment - ([6478166](https://github.com/migrationsverket/midas/commits/647816687cfa2b7d7018c73151f0f638d877c606)) - Wilhelm Hjelm
- **(textfield)** fix stories - ([650a55d](https://github.com/migrationsverket/midas/commits/650a55d985dee8c6f3a6378226e5b42e19c352e3)) - Wilhelm Hjelm
- **(textfield)** update deps - ([ad01f0a](https://github.com/migrationsverket/midas/commits/ad01f0a23ae0b64ca066a468be987c624377ec0c)) - Wilhelm Hjelm
- **(textfield)** update readme - ([ef5d329](https://github.com/migrationsverket/midas/commits/ef5d329c8a3d0f14994d2c54483d7e0246c4395d)) - Wilhelm Hjelm
- **(textfield)** fix text color in invald error to red color - ([d0b65d1](https://github.com/migrationsverket/midas/commits/d0b65d17db1e89c04eef25205a798629e24e504a)) - Wilhelm Hjelm
- **(textfield)** update icon size - ([f3afab8](https://github.com/migrationsverket/midas/commits/f3afab853cf368361999e9478bcd8d31387a6186)) - Wilhelm Hjelm
- **(textfield)** remove focus animation - ([b2fb402](https://github.com/migrationsverket/midas/commits/b2fb4025fe0e60c57c540dca6492b8e7edbcac7f)) - Wilhelm Hjelm
- **(textfield)** fix focus - ([202b8f6](https://github.com/migrationsverket/midas/commits/202b8f64f40c2ae4ec3f5aa5d38d8ca916270acc)) - Wilhelm Hjelm
- **(textfield)** update error message docs + support - ([beba749](https://github.com/migrationsverket/midas/commits/beba749369ce5e36dd02a0faa09876fb2a68db20)) - Wilhelm Hjelm
- **(textfield)** change error message when > maxCharacter - ([221abdf](https://github.com/migrationsverket/midas/commits/221abdf91a721fd63d51b42d8650ff02398b5860)) - PHIEKS
- **(textfield, textarea)** fix spacing - ([c1c78d1](https://github.com/migrationsverket/midas/commits/c1c78d1dd35e1a940dcf3df4fd5f17f17e00e982)) - Wilhelm Hjelm
- **(theme)** include tokens again - ([03b6516](https://github.com/migrationsverket/midas/commits/03b65163c8178f39ff3db52dbe860cb9e17ed7bb)) - Wilhelm Hjelm
- **(theme)** clear changelog - ([e9e454a](https://github.com/migrationsverket/midas/commits/e9e454acb10401893d9d44e6f686a13dfe152144)) - Wilhelm Hjelm
- **(theme)** update version - ([cf91176](https://github.com/migrationsverket/midas/commits/cf91176744548f349697245dfc38d2e2b34407b9)) - Wilhelm Hjelm
- **(theme)** add new variable (bump) - ([bb9a3cb](https://github.com/migrationsverket/midas/commits/bb9a3cb0ed60349218b0e333e88f14898dd5a42f)) - Wilhelm Hjelm
- **(toast)** larger icon - ([d109d95](https://github.com/migrationsverket/midas/commits/d109d95481a2579ed92e828dd795bf6a3a81074d)) - Wilhelm Hjelm
- **(toast)** fix button size + new build - ([76d967c](https://github.com/migrationsverket/midas/commits/76d967cf49160128e1327ef28d25289972dab815)) - Wilhelm Hjelm
- **(toast)** remove stories from build - ([c059437](https://github.com/migrationsverket/midas/commits/c059437415d05b230850799650b13bf26510e941)) - Wilhelm Hjelm
- **(toast)** update deps - ([338dc1d](https://github.com/migrationsverket/midas/commits/338dc1de0103e8d06cbc4e6630331fa0051325a0)) - Wilhelm Hjelm
- **(toast)** update readme - ([a0e8786](https://github.com/migrationsverket/midas/commits/a0e87863ee5da83fbf9e64d2896a2a1a5273ee45)) - Wilhelm Hjelm
- **(toast)** update icon size - ([eee5cc9](https://github.com/migrationsverket/midas/commits/eee5cc9dd7bd2a8c22097e70743f0886d180ab26)) - Wilhelm Hjelm
- **(toast)** new focus state - ([f460952](https://github.com/migrationsverket/midas/commits/f460952ea76af4f8d6a8f2740cdec2e8c69012a0)) - Wilhelm Hjelm
- **(toast)** update deps + lint - ([717bc9b](https://github.com/migrationsverket/midas/commits/717bc9bdac9b68241b540d844950136a2f6f8c71)) - Wilhelm Hjelm
- **(toast)** update deps + fix lint for now - ([24a9506](https://github.com/migrationsverket/midas/commits/24a950687e0ebc4e169098461b1566fd00ad6a78)) - Wilhelm Hjelm
- **(toast)** refreshed code, design and docs - ([df43d00](https://github.com/migrationsverket/midas/commits/df43d0076985417b1fb2ac5c837c1e2ac3c6f5c2)) - Wilhelm Hjelm
- **(ui)** update deps - ([0f35eb6](https://github.com/migrationsverket/midas/commits/0f35eb66a35fc93855e8e396b7f058b9e40f22f4)) - Wilhelm Hjelm
- **(ui)** update deps - ([ed768b1](https://github.com/migrationsverket/midas/commits/ed768b1448689ed40e89d584225c4a755e1c10b3)) - Wilhelm Hjelm
- **(ui)** add modal - ([df294b2](https://github.com/migrationsverket/midas/commits/df294b204871b54a57cbf15ceac64e187dd33c7d)) - Wilhelm Hjelm
- **(ui)** update theme version - ([0fd97a0](https://github.com/migrationsverket/midas/commits/0fd97a049542ab36fb663db3c78f53b17da41d75)) - Wilhelm Hjelm
- **(ui)** dependency update + added multi-select - ([1cf0729](https://github.com/migrationsverket/midas/commits/1cf07294f8c3bc3d0b5184909e4f5a4653802328)) - Wilhelm Hjelm
- **(ui)** update deps - ([220dae3](https://github.com/migrationsverket/midas/commits/220dae3cd5d9290baa2709f5db160065dbd0eb99)) - Wilhelm Hjelm
- **(ui)** update deps - ([4a3d497](https://github.com/migrationsverket/midas/commits/4a3d49760cfc5e98b885affcdc8ca587b928c8b5)) - Wilhelm Hjelm
- a littel fixing - ([1853317](https://github.com/migrationsverket/midas/commits/18533172505c5cb5ff2bd297bc873a2197e1a08a)) - jabir Khalil
- add test for textarea in textfield.spec - ([b95cbf6](https://github.com/migrationsverket/midas/commits/b95cbf67480cc8f935f3fe3f0b840f0605e3f105)) - jabir Khalil
- add test for textarea - ([3b9c7a9](https://github.com/migrationsverket/midas/commits/3b9c7a9c976e141f6067272fbd5d651bc2472220)) - jabir Khalil
- shows an error when the max current charaters are more from max charecters - ([986b17a](https://github.com/migrationsverket/midas/commits/986b17a00ab19798998597a141981b647b88e986)) - jabir Khalil
- shows an error when the max current charaters are more from max charecters - ([eae3b37](https://github.com/migrationsverket/midas/commits/eae3b3731727f6b0711e77a1f736cc7f3329d1cb)) - jabir Khalil
- shows an error when the max current charaters are more from max charecters - ([bf5c89d](https://github.com/migrationsverket/midas/commits/bf5c89d8d4fce745e2b5af36c257cd0e0e82f98c)) - jabir Khalil
- add how many characters are over from max characters - ([0e05859](https://github.com/migrationsverket/midas/commits/0e05859b05b8896b205ec214a0b3fec2d29243f0)) - jabir Khalil
- change node version on deploy - ([53c9c4d](https://github.com/migrationsverket/midas/commits/53c9c4d9f3155d3f3100310153ab346f3a18a45c)) - Wilhelm Hjelm
- new readme + doc build - ([385b3a1](https://github.com/migrationsverket/midas/commits/385b3a1df8abd56219d607c69959bab44f304cf3)) - Wilhelm Hjelm
- fix disable state text color and change px to rem - ([335ebad](https://github.com/migrationsverket/midas/commits/335ebad5a53c4f248eb8309789c9318c031b9179)) - jabir Khalil
- add a character's collector when there is no max characters was given - ([0b35029](https://github.com/migrationsverket/midas/commits/0b35029c6d3aef75eda6023e0f8c591351e8c067)) - jabir Khalil
- add isDisabled in AriaSelect tag and fix the style in css - ([bc08566](https://github.com/migrationsverket/midas/commits/bc085669b793a98e9027f45befc21d1bde11c8b0)) - jabir Khalil
- remove file - ([d0d3b5d](https://github.com/migrationsverket/midas/commits/d0d3b5d28121c480fc6ee14ca6c845d61393ab69)) - Wilhelm Hjelm
- dependencies - ([31903a3](https://github.com/migrationsverket/midas/commits/31903a3ae041ab37fb1d6c2df2f57b294b48ebad)) - Wilhelm Hjelm
- fix the link path in readme - ([3cec027](https://github.com/migrationsverket/midas/commits/3cec027a74e8fe26d8304cc9117e3c92e3a71847)) - jabir Khalil

---
## [@mig-design/button@0.5.29](https://github.com/migrationsverket/midas/commits/@mig-design/button@0.5.29)

### 🚧 Miscellaneous Chores

- **(button)** release version 0.5.29 [skip-ci] - ([b92452b](https://github.com/migrationsverket/midas/commits/b92452b7139a52f9c0af8ebffb392452b99c981b)) - Wilhelm Hjelm

---
## [@mig-design/theme@0.5.33](https://github.com/migrationsverket/midas/commits/@mig-design/theme@0.5.33)

### 🚧 Miscellaneous Chores

- **(theme)** release version 0.5.33 [skip-ci] - ([9897f94](https://github.com/migrationsverket/midas/commits/9897f9414ac1ed39a764adf2f1282f3acf6f8e05)) - Wilhelm Hjelm

---
## [@mig-design/theme@0.5.32](https://github.com/migrationsverket/midas/commits/@mig-design/theme@0.5.32)

### 🚧 Miscellaneous Chores

- **(theme)** release version 0.5.32 [skip-ci] - ([0208d45](https://github.com/migrationsverket/midas/commits/0208d454138869c768c19c1137fa8b39008edebf)) - Wilhelm Hjelm

---
## [@mig-design/theme@0.5.31](https://github.com/migrationsverket/midas/commits/@mig-design/theme@0.5.31)

### 🚧 Miscellaneous Chores

- **(theme)** release version 0.5.31 [skip-ci] - ([796b1dd](https://github.com/migrationsverket/midas/commits/796b1dd9c8e9075242a0cbaefdd9a5ce4b9e7106)) - Wilhelm Hjelm

---
## [@mig-design/theme@0.5.30](https://github.com/migrationsverket/midas/commits/@mig-design/theme@0.5.30)

### 🚧 Miscellaneous Chores

- **(theme)** release version 0.5.30 [skip-ci] - ([cafec01](https://github.com/migrationsverket/midas/commits/cafec010cff2a7a276fb9a5fca349038a954e55a)) - Wilhelm Hjelm

---
## [@migrationsverket/button@0.7.0](https://github.com/migrationsverket/midas/commits/@migrationsverket/button@0.7.0)

### ♻️ Refactoring

- **(docs)** new structure - ([973c4d2](https://github.com/migrationsverket/midas/commits/973c4d21d8f4e8508c1d322e4b9cf8dcd6cfbcbd)) - Wilhelm Hjelm

### ✨Features

- **(button)** added tertiary and danger themes - ([1f96aa8](https://github.com/migrationsverket/midas/commits/1f96aa8ca4ee0ed010263f0a28aeb1f82b6a9d28)) - Wilhelm Hjelm
- **(checkbox)** select all checkbox - ([78f0fb8](https://github.com/migrationsverket/midas/commits/78f0fb88f534ef7dbf5aafa8b2595bd7111f6b56)) - Wilhelm Hjelm

### 🚧 Miscellaneous Chores

- **(button)** release version 0.7.0 [skip-ci] - ([749a108](https://github.com/migrationsverket/midas/commits/749a1084add203436a5207acaeb01f6b778d757b)) - Wilhelm Hjelm

### 🩹 Bug Fixes

- **(docs)** change doc structure - ([35adf3e](https://github.com/migrationsverket/midas/commits/35adf3e9b6e5303f276a6a301fb6ccec6a9cbb12)) - Wilhelm Hjelm
- **(docs)** accessibility is back - ([eeebd9d](https://github.com/migrationsverket/midas/commits/eeebd9dceb7e6dc28bddb1de8c0ae619d8f4670e)) - Wilhelm Hjelm
- **(docs)** mend broken pages - ([50c6381](https://github.com/migrationsverket/midas/commits/50c6381ff975f48b1282c43474f9623f537f5b0a)) - Wilhelm Hjelm

---
## [@migrationsverket/ui@0.5.25](https://github.com/migrationsverket/midas/commits/@migrationsverket/ui@0.5.25)

### 🚧 Miscellaneous Chores

- **(textfield)** release version 0.9.25 [skip-ci] - ([592fac7](https://github.com/migrationsverket/midas/commits/592fac7f4cc3eec66115844b46087ee73b0b5505)) - Wilhelm Hjelm

---
## [@migrationsverket/tabs@0.0.2](https://github.com/migrationsverket/midas/commits/@migrationsverket/tabs@0.0.2)

### 🚧 Miscellaneous Chores

- **(tabs)** release version 0.0.2 [skip-ci] - ([483c06e](https://github.com/migrationsverket/midas/commits/483c06ea4d7ecd38edd409188e7a73c99aad99e9)) - Wilhelm Hjelm

---
## [@migrationsverket/search-field@0.0.4](https://github.com/migrationsverket/midas/commits/@migrationsverket/search-field@0.0.4)

### 🚧 Miscellaneous Chores

- **(search-field)** release version 0.0.4 [skip-ci] - ([501eaa0](https://github.com/migrationsverket/midas/commits/501eaa014948a3ee8d006f05362885275ece371a)) - Wilhelm Hjelm

---
## [@migrationsverket/logo@0.2.54](https://github.com/migrationsverket/midas/commits/@migrationsverket/logo@0.2.54)

### 🚧 Miscellaneous Chores

- **(logo)** release version 0.2.54 [skip-ci] - ([49745e9](https://github.com/migrationsverket/midas/commits/49745e9c4870d578d5dc50cf7d13ca141c1dfa36)) - Wilhelm Hjelm

---
## [@migrationsverket/link@0.2.9](https://github.com/migrationsverket/midas/commits/@migrationsverket/link@0.2.9)

### 🚧 Miscellaneous Chores

- **(link)** release version 0.2.9 [skip-ci] - ([df96d02](https://github.com/migrationsverket/midas/commits/df96d024f74bc89a2cf1d5e33b1d4e047b880d02)) - Wilhelm Hjelm

---
## [@migrationsverket/flex@0.0.4](https://github.com/migrationsverket/midas/commits/@migrationsverket/flex@0.0.4)

### 🚧 Miscellaneous Chores

- **(flex)** release version 0.0.4 [skip-ci] - ([fb1a7be](https://github.com/migrationsverket/midas/commits/fb1a7bec57dcdaf901169a57d57536a5b7438a1c)) - Wilhelm Hjelm

---
## [@migrationsverket/link-button@0.2.8](https://github.com/migrationsverket/midas/commits/@migrationsverket/link-button@0.2.8)

### 🚧 Miscellaneous Chores

- **(link-button)** release version 0.2.8 [skip-ci] - ([dc7f58e](https://github.com/migrationsverket/midas/commits/dc7f58e62a4765cc7213eb02facd649e0fce9171)) - Wilhelm Hjelm

---
## [@migrationsverket/breadcrumbs@0.0.3](https://github.com/migrationsverket/midas/commits/@migrationsverket/breadcrumbs@0.0.3)

### 🚧 Miscellaneous Chores

- **(breadcrumbs)** release version 0.0.3 [skip-ci] - ([3c77cb2](https://github.com/migrationsverket/midas/commits/3c77cb2a4612691f36770cf09d0378edcce1a9c3)) - Wilhelm Hjelm

---
## [@migrationsverket/card@0.2.7](https://github.com/migrationsverket/midas/commits/@migrationsverket/card@0.2.7)

### 🚧 Miscellaneous Chores

- **(card)** release version 0.2.7 [skip-ci] - ([6a84cd2](https://github.com/migrationsverket/midas/commits/6a84cd2a0116829e44d3cf3c0de7152e1adf60d9)) - Wilhelm Hjelm

---
## [@migrationsverket/checkbox@0.3.30](https://github.com/migrationsverket/midas/commits/@migrationsverket/checkbox@0.3.30)

### 🚧 Miscellaneous Chores

- **(checkbox)** release version 0.3.30 [skip-ci] - ([1a6eefe](https://github.com/migrationsverket/midas/commits/1a6eefe4541be96842e177266c8fc149300c4fa1)) - Wilhelm Hjelm

---
## [@migrationsverket/grid@0.0.3](https://github.com/migrationsverket/midas/commits/@migrationsverket/grid@0.0.3)

### 🚧 Miscellaneous Chores

- **(grid)** release version 0.0.3 [skip-ci] - ([4be764a](https://github.com/migrationsverket/midas/commits/4be764af47d956e2039ae96ba716712e1f1d5c23)) - Wilhelm Hjelm

---
## [@migrationsverket/file-upload@0.3.22](https://github.com/migrationsverket/midas/commits/@migrationsverket/file-upload@0.3.22)

### 🚧 Miscellaneous Chores

- **(file-upload)** release version 0.3.22 [skip-ci] - ([d00e185](https://github.com/migrationsverket/midas/commits/d00e1858340717eed1c004997f2e501f65dafddc)) - Wilhelm Hjelm

---
## [@migrationsverket/date-picker@0.0.1](https://github.com/migrationsverket/midas/commits/@migrationsverket/date-picker@0.0.1)

### 🚧 Miscellaneous Chores

- **(date-picker)** release version 0.0.1 [skip-ci] - ([07f2983](https://github.com/migrationsverket/midas/commits/07f298386c29aad03d2c0d834641a7c770b4d0dd)) - Wilhelm Hjelm

---
## [@migrationsverket/file-upload@0.3.21](https://github.com/migrationsverket/midas/commits/@migrationsverket/file-upload@0.3.21)

### 🚧 Miscellaneous Chores

- **(file-upload)** release version 0.3.21 [skip-ci] - ([3732e28](https://github.com/migrationsverket/midas/commits/3732e28c9a2360ede8eb29b4ba71a73ae3cf8893)) - Wilhelm Hjelm

---
## [@migrationsverket/flex@0.0.3](https://github.com/migrationsverket/midas/commits/@migrationsverket/flex@0.0.3)

### 🚧 Miscellaneous Chores

- **(flex)** release version 0.0.3 [skip-ci] - ([ed9ac1d](https://github.com/migrationsverket/midas/commits/ed9ac1db93abb3535e83cfd6889afb40b2b124c4)) - Wilhelm Hjelm

---
## [@migrationsverket/link@0.2.8](https://github.com/migrationsverket/midas/commits/@migrationsverket/link@0.2.8)

### 🚧 Miscellaneous Chores

- **(link)** release version 0.2.8 [skip-ci] - ([8cec674](https://github.com/migrationsverket/midas/commits/8cec6743c859d39dd3fe72b25dbd06edfb20f08f)) - Wilhelm Hjelm

---
## [@migrationsverket/link-button@0.2.7](https://github.com/migrationsverket/midas/commits/@migrationsverket/link-button@0.2.7)

### 🚧 Miscellaneous Chores

- **(link-button)** release version 0.2.7 [skip-ci] - ([d363d43](https://github.com/migrationsverket/midas/commits/d363d43fc661072a76d61eca9f4e40b2e7053196)) - Wilhelm Hjelm

---
## [@migrationsverket/logo@0.2.53](https://github.com/migrationsverket/midas/commits/@migrationsverket/logo@0.2.53)

### 🚧 Miscellaneous Chores

- **(logo)** release version 0.2.53 [skip-ci] - ([eb718ae](https://github.com/migrationsverket/midas/commits/eb718ae658c72d265892dbc059042c155daa8596)) - Wilhelm Hjelm

---
## [@migrationsverket/search-field@0.0.3](https://github.com/migrationsverket/midas/commits/@migrationsverket/search-field@0.0.3)

### 🚧 Miscellaneous Chores

- **(search-field)** release version 0.0.3 [skip-ci] - ([ab8a56f](https://github.com/migrationsverket/midas/commits/ab8a56f81cee5ca542ac45bbd169cef39842d59c)) - Wilhelm Hjelm

---
## [@migrationsverket/select@0.4.24](https://github.com/migrationsverket/midas/commits/@migrationsverket/select@0.4.24)

### 🚧 Miscellaneous Chores

- **(search-field)** release version 0.0.2 [skip-ci] - ([c314d71](https://github.com/migrationsverket/midas/commits/c314d71576d9e74ba25659cc7f4444355be8f21a)) - Wilhelm Hjelm

---
## [@migrationsverket/date-picker@0.0.4](https://github.com/migrationsverket/midas/commits/@migrationsverket/date-picker@0.0.4)

### 🚧 Miscellaneous Chores

- **(date-picker)** release version 0.0.4 [skip-ci] - ([7640f9c](https://github.com/migrationsverket/midas/commits/7640f9c19d1cd493dfae4c2c2d4bf91b926a2842)) - Wilhelm Hjelm

---
## [@migrationsverket/radio@0.6.2](https://github.com/migrationsverket/midas/commits/@migrationsverket/radio@0.6.2)

### 🚧 Miscellaneous Chores

- **(radio)** release version 0.6.2 [skip-ci] - ([6581163](https://github.com/migrationsverket/midas/commits/658116351afda12830f6a6366242ec577a2f0849)) - Wilhelm Hjelm

---
## [@migrationsverket/logo@0.2.52](https://github.com/migrationsverket/midas/commits/@migrationsverket/logo@0.2.52)

### 🚧 Miscellaneous Chores

- **(logo)** release version 0.2.52 [skip-ci] - ([39d3e78](https://github.com/migrationsverket/midas/commits/39d3e78658931227ad32e2b01ce5c0538917eff0)) - Wilhelm Hjelm

---
## [@migrationsverket/link@0.2.7](https://github.com/migrationsverket/midas/commits/@migrationsverket/link@0.2.7)

### 🚧 Miscellaneous Chores

- **(link)** release version 0.2.7 [skip-ci] - ([ef06755](https://github.com/migrationsverket/midas/commits/ef06755a81abffa70a449bd359f69bfcc37a6af5)) - Wilhelm Hjelm

---
## [@migrationsverket/date-picker@0.0.3](https://github.com/migrationsverket/midas/commits/@migrationsverket/date-picker@0.0.3)

### 🚧 Miscellaneous Chores

- **(date-picker)** release version 0.0.3 [skip-ci] - ([0dd5ceb](https://github.com/migrationsverket/midas/commits/0dd5cebb32a6110082a5c41d410a53bb9c7e2303)) - Wilhelm Hjelm

---
## [@migrationsverket/breadcrumbs@0.0.2](https://github.com/migrationsverket/midas/commits/@migrationsverket/breadcrumbs@0.0.2)

### ♻️ Refactoring

- new repo + setup - ([da79b19](https://github.com/migrationsverket/midas/commits/da79b198d78e9a5d7110742a430a87b0af06ba97)) - Wilhelm Hjelm
- fix test - ([1fe3c5b](https://github.com/migrationsverket/midas/commits/1fe3c5b61131b7ef7eca7e389ef7293fd5eeddab)) - Wilhelm Hjelm
- new component + fix doc web - ([50b7d96](https://github.com/migrationsverket/midas/commits/50b7d96343150b9b7bb6c48b0fe6da9f4d990bba)) - Wilhelm Hjelm

### 🚧 Miscellaneous Chores

- **(button)** some style changes - ([65a5950](https://github.com/migrationsverket/midas/commits/65a59504f8fb5d78a5f36f39ba59d764f5b81742)) - Wilhelm Hjelm
- **(tests)** fix some tests - ([d7f2160](https://github.com/migrationsverket/midas/commits/d7f21602b84f1caa24d5acab6d764e8349e61cc2)) - Wilhelm Hjelm

### 🩹 Bug Fixes

- add size small to button component - ([a3412a7](https://github.com/migrationsverket/midas/commits/a3412a760dfd24ea66168bcf3aa94fef844adcfa)) - jabir Khalil
- add size small to button component - ([dbb95f5](https://github.com/migrationsverket/midas/commits/dbb95f5b6e923aa48bdf862294fd7317104316c2)) - jabir Khalil
- add size small to button component - ([d7e6e91](https://github.com/migrationsverket/midas/commits/d7e6e9136a0290363c60e8e7dd04d2a921807315)) - jabir Khalil
- package.json and package-lock.json - ([fb0afb8](https://github.com/migrationsverket/midas/commits/fb0afb8d4d4849bd129376bdcc6d5b7149eb30d4)) - jabir Khalil
- delete not used imoprt from button component and delete not use test.txt - ([04d86cc](https://github.com/migrationsverket/midas/commits/04d86cc258e12861a3db1f9500b6dc088f79c35d)) - jabir Khalil

---
## [@migrationsverket/link@0.2.6](https://github.com/migrationsverket/midas/commits/@migrationsverket/link@0.2.6)

### 🚧 Miscellaneous Chores

- **(link)** release version 0.2.6 [skip-ci] - ([adaf177](https://github.com/migrationsverket/midas/commits/adaf177f60b1d64dce3f0cea8fa34cf5f10960e3)) - Wilhelm Hjelm

---
## [@migrationsverket/info-banner@0.1.2](https://github.com/migrationsverket/midas/commits/@migrationsverket/info-banner@0.1.2)

### 🚧 Miscellaneous Chores

- **(grid)** release version 0.0.2 [skip-ci] - ([c03e212](https://github.com/migrationsverket/midas/commits/c03e212bb1319b1ebae23cc12508289297d00c7c)) - Wilhelm Hjelm

---
## [@migrationsverket/flex@0.0.2](https://github.com/migrationsverket/midas/commits/@migrationsverket/flex@0.0.2)

### 🚧 Miscellaneous Chores

- **(flex)** release version 0.0.2 [skip-ci] - ([3b0b367](https://github.com/migrationsverket/midas/commits/3b0b367e12c8ad601d2bceeb0f3d513e5b1117c3)) - Wilhelm Hjelm

---
## [@migrationsverket/theme@0.5.29](https://github.com/migrationsverket/midas/commits/@migrationsverket/theme@0.5.29)

### 🚧 Miscellaneous Chores

- **(theme)** release version 0.5.29 [skip-ci] - ([23b037a](https://github.com/migrationsverket/midas/commits/23b037aceaa0f48eebb1234e23fbead34627451a)) - Wilhelm Hjelm

---
## [@migrationsverket/theme@0.5.28](https://github.com/migrationsverket/midas/commits/@migrationsverket/theme@0.5.28)

### 🚧 Miscellaneous Chores

- **(theme)** release version 0.5.28 [skip-ci] - ([1a36b87](https://github.com/migrationsverket/midas/commits/1a36b87e72bf339239c49c1d32223a88e7ef3a3e)) - Wilhelm Hjelm

---
## [@migrationsverket/theme@0.5.27](https://github.com/migrationsverket/midas/commits/@migrationsverket/theme@0.5.27)

### 🚧 Miscellaneous Chores

- **(theme)** release version 0.5.27 [skip-ci] - ([cb9df2f](https://github.com/migrationsverket/midas/commits/cb9df2fc819e7abd6f11caceed6102d54d2e560f)) - Wilhelm Hjelm

---
## [@migrationsverket/theme@0.5.26](https://github.com/migrationsverket/midas/commits/@migrationsverket/theme@0.5.26)

### 🚧 Miscellaneous Chores

- **(theme)** release version 0.5.26 [skip-ci] - ([288a450](https://github.com/migrationsverket/midas/commits/288a4505138055bb62d82a3e3336264c131283a2)) - Wilhelm Hjelm

---
## [@migrationsverket/theme@0.5.25](https://github.com/migrationsverket/midas/commits/@migrationsverket/theme@0.5.25)

### 🚧 Miscellaneous Chores

- **(theme)** release version 0.5.25 [skip-ci] - ([0a229da](https://github.com/migrationsverket/midas/commits/0a229da01a63da08c24560aa8a7a8911b45a9a1a)) - Wilhelm Hjelm

---
## [@migrationsverket/accordion@0.4.25](https://github.com/migrationsverket/midas/commits/@migrationsverket/accordion@0.4.25)

### 🚧 Miscellaneous Chores

- **(accordion)** release version 0.4.25 [skip-ci] - ([dfeb394](https://github.com/migrationsverket/midas/commits/dfeb3942347d76b4f2a5e15b4c6ab3f00c12fe3d)) - Wilhelm Hjelm

---
## [@migrationsverket/button@0.6.4](https://github.com/migrationsverket/midas/commits/@migrationsverket/button@0.6.4)

### 🚧 Miscellaneous Chores

- **(button)** release version 0.6.4 [skip-ci] - ([b10087d](https://github.com/migrationsverket/midas/commits/b10087d85d96d806442412073f97c3658cecc2f1)) - Wilhelm Hjelm

---
## [@migrationsverket/button@0.6.3](https://github.com/migrationsverket/midas/commits/@migrationsverket/button@0.6.3)

### 🚧 Miscellaneous Chores

- **(button)** release version 0.6.3 [skip-ci] - ([88b52da](https://github.com/migrationsverket/midas/commits/88b52daeff0977bc096e1411a20a5e6cda033e69)) - Wilhelm Hjelm

---
## [@migrationsverket/button@0.6.1](https://github.com/migrationsverket/midas/commits/@migrationsverket/button@0.6.1)

### 🚧 Miscellaneous Chores

- **(button)** release version 0.6.1 [skip-ci] - ([60a5d54](https://github.com/migrationsverket/midas/commits/60a5d547e46ba17e00e8d23f5b934f6052487284)) - Wilhelm Hjelm

---
## [@migrationsverket/theme@0.5.24] - 2024-06-12

### ♻️ Refactoring

- start migration, theme, button, base configs - ([b8926f2](https://github.com/migrationsverket/midas/commits/b8926f25cc718c2727d3e5ad5355eddb20703dc3)) - Wilhelm Hjelm
- ui-package - ([92c257a](https://github.com/migrationsverket/midas/commits/92c257a0b1ab950bf9fc402989e16b2c7235ece9)) - Wilhelm Hjelm
- button etc - ([8d7574d](https://github.com/migrationsverket/midas/commits/8d7574d4f7de9e3a42c88e4e0e54fba28aac3eca)) - Wilhelm Hjelm

### ✨Features

- **(button)** add react aria button component (#1) - ([dd849e1](https://github.com/migrationsverket/midas/commits/dd849e1e19829869cd392c6fab6c6b696f58ab8f)) - pixelrickdreamer
- **(docs)** add docusaurus boilerplate (#3) - ([716847a](https://github.com/migrationsverket/midas/commits/716847aedc69cd1e68d7d3cb2a7079abd1f8e3b7)) - pixelrickdreamer
- **(storybook)** add boilerplate storybook instance (#2) - ([a94970f](https://github.com/migrationsverket/midas/commits/a94970fab5aa187afb88dcef2ec7658651b9fb0a)) - pixelrickdreamer

### 📝 Documentation

- update readme - ([2449e65](https://github.com/migrationsverket/midas/commits/2449e6599ab0593b022a6d4327a329ac685a44a7)) - pixelrickdreamer
- Update README.md - ([d71bbb2](https://github.com/migrationsverket/midas/commits/d71bbb2244295704181d12f5d446871da7021333)) - pixelrickdreamer
- Update README.md - ([8127b57](https://github.com/migrationsverket/midas/commits/8127b5785a00a0a396d76766b7418a41cf8a6835)) - pixelrickdreamer
- Update README.md - ([c5f61d3](https://github.com/migrationsverket/midas/commits/c5f61d3be44835de448c2d3d0e507a8fb3eeea18)) - pixelrickdreamer
- change edit url for docs - ([8fb3938](https://github.com/migrationsverket/midas/commits/8fb39381e390220d1552ed7497eb7f310ff452d5)) - pixelrick
- Update README.md - ([d3b775d](https://github.com/migrationsverket/midas/commits/d3b775db4a001add9883cba1aabcfa557dc415e2)) - pixelrickdreamer

### 🚧 Miscellaneous Chores

- **(docusaurus)** fix linting errors (#5) - ([e130253](https://github.com/migrationsverket/midas/commits/e130253843be2dddcf9f03f66ce8e00bfeb650e3)) - pixelrickdreamer
- **(nx)** init nx monorepo - ([70d89d9](https://github.com/migrationsverket/midas/commits/70d89d9db723184ae312ff2d9f82c4cc9b427a35)) - pixelrickdreamer
- update nx deps (#7) - ([47d4f7c](https://github.com/migrationsverket/midas/commits/47d4f7c739fbacd4f17f3b3b488899b04ab31bdf)) - pixelrickdreamer
- add boilerplate remix app (#8) - ([635bc49](https://github.com/migrationsverket/midas/commits/635bc4967a1a36e97a4bf26ceb676384a54ffbbe)) - pixelrickdreamer
- upgrade storybook to 8.1.3 - ([ca6d4cb](https://github.com/migrationsverket/midas/commits/ca6d4cba54cd18c10c0123f9aeadd5f13ebcf6c7)) - pixelrickdreamer
- upgrade nx to 19.x - ([8e6d215](https://github.com/migrationsverket/midas/commits/8e6d2150a46b174d992375ae74bfc0c77aed46a7)) - pixelrickdreamer
- upgrade docusaurus to 3.3.2 - ([f91b1f5](https://github.com/migrationsverket/midas/commits/f91b1f5c32bc5369f89a876f1e46fac9bb247717)) - pixelrickdreamer
- build errors - ([a8ad4e6](https://github.com/migrationsverket/midas/commits/a8ad4e652b843d80c21c0f39731beb107931da26)) - Wilhelm Hjelm
- don't reference origin/develop - ([e243e1f](https://github.com/migrationsverket/midas/commits/e243e1fca35b67a9ae9d417e876a20c67d56647e)) - Wilhelm Hjelm

### 🩹 Bug Fixes

- add new text - ([e0d9192](https://github.com/migrationsverket/midas/commits/e0d9192df134868fc2e5f2244f87bd59dbcb23ac)) - jabir khalil

<!-- generated by git-cliff -->
