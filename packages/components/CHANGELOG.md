# 2.0.0 (2025-02-25)

### 🚀 Features

- ⚠️ **textfield:** rename maxCharacters property ([44eec760e](https://github.com/migrationsverket/midas/commit/44eec760e))
- ⚠️ **textarea:** rename maxCharacters property ([06116cee9](https://github.com/migrationsverket/midas/commit/06116cee9))
- **tooltip:** new component tooltip ([3bc3fcd4f](https://github.com/migrationsverket/midas/commit/3bc3fcd4f))

### 🩹 Fixes

- **accordion:** add comment ([56db5d49f](https://github.com/migrationsverket/midas/commit/56db5d49f))
- **accordion:** remove dependency array from useLayoutEffect - fix render of dynamic content in AccordionItem ([db4c920ee](https://github.com/migrationsverket/midas/commit/db4c920ee))
- **theme:** add global css export ([9786d79da](https://github.com/migrationsverket/midas/commit/9786d79da))
- **textarea:** set initial counter value on render ([15121e437](https://github.com/migrationsverket/midas/commit/15121e437))
- **textfield:** set initial counter value on render ([1f9a9cfc1](https://github.com/migrationsverket/midas/commit/1f9a9cfc1))
- **textarea:** set initial counter value on render ([924f5abda](https://github.com/migrationsverket/midas/commit/924f5abda))
- **textfield:** set initial counter value on render ([0e9e4a44d](https://github.com/migrationsverket/midas/commit/0e9e4a44d))
- **tooltip:** append classname ([0e6e6e483](https://github.com/migrationsverket/midas/commit/0e6e6e483))
- **textfield:** append classname ([53f5b603c](https://github.com/migrationsverket/midas/commit/53f5b603c))
- **textarea:** append classname ([cdd9f3e5c](https://github.com/migrationsverket/midas/commit/cdd9f3e5c))
- **tag:** append classname ([df88ec9fb](https://github.com/migrationsverket/midas/commit/df88ec9fb))
- **radio:** append classname ([796173ba2](https://github.com/migrationsverket/midas/commit/796173ba2))
- **logo:** append classname ([66a189a6c](https://github.com/migrationsverket/midas/commit/66a189a6c))
- **combobox:** append classname ([570a1998e](https://github.com/migrationsverket/midas/commit/570a1998e))
- **accordion:** append classname ([aaaa0ddb1](https://github.com/migrationsverket/midas/commit/aaaa0ddb1))
- **file-upload:** import react to get autodocs props ([e6467ca66](https://github.com/migrationsverket/midas/commit/e6467ca66))
- **file-upload:** add autdocs config ([809f0b894](https://github.com/migrationsverket/midas/commit/809f0b894))
- **file-upload:** pass unhandled props ([fc90980d9](https://github.com/migrationsverket/midas/commit/fc90980d9))
- **layout:** fix bug where mobile menu wouldn't open ([c61923662](https://github.com/migrationsverket/midas/commit/c61923662))
- **accessibility:** fix focus for high contrast mode ([#267](https://github.com/migrationsverket/midas/pull/267))
- **textarea:** add validation for minLength property ([8df1f931a](https://github.com/migrationsverket/midas/commit/8df1f931a))
- **layout:** design adjustments + skip to content link ([facdaf64f](https://github.com/migrationsverket/midas/commit/facdaf64f))
- **layout:** design review ([b1928466c](https://github.com/migrationsverket/midas/commit/b1928466c))
- **layout:** add tooltips on layout collapsed state ([5e9d0090d](https://github.com/migrationsverket/midas/commit/5e9d0090d))
- **layout:** design adjustments ([f086ad5fe](https://github.com/migrationsverket/midas/commit/f086ad5fe))

### Documentation Changes

- **components:** sync docusaurus and storybook autodocs config ([4e061ad4d](https://github.com/migrationsverket/midas/commit/4e061ad4d))
- **file-upload:** manually extend react aria props for autodocs ([07ecde229](https://github.com/migrationsverket/midas/commit/07ecde229))
- dropdown + layout + tooltip ([28d3bc661](https://github.com/migrationsverket/midas/commit/28d3bc661))

### ⚠️ Breaking Changes

- **textfield:** TextField property maxCharacters is renamed to maxLength
- **textarea:** TextArea propert maxCharacters is renamed to maxLength

### ❤️ Thank You

- derpbravely
- Jabir Khalil
- pixelrickdreamer
- Wilhelm Hjelm

## 1.3.0 (2025-02-19)

### 🚀 Features

- **textfield:** add dossier number validation ([9092008ef](https://github.com/migrationsverket/midas/commit/9092008ef))

### 🩹 Fixes

- **theme:** reorder theme export ([3398a0f68](https://github.com/migrationsverket/midas/commit/3398a0f68))
- **table:** preserve classNames when using props.className ([d7a9142cd](https://github.com/migrationsverket/midas/commit/d7a9142cd))
- **textfield:** +/- divider should be optional ([b1393263a](https://github.com/migrationsverket/midas/commit/b1393263a))
- **table:** add pointer if row has a link ([9a62302ff](https://github.com/migrationsverket/midas/commit/9a62302ff))
- **card:** clean the code ([a17aa2941](https://github.com/migrationsverket/midas/commit/a17aa2941))
- **textfield:** add dossier number validation ([b3027b5b9](https://github.com/migrationsverket/midas/commit/b3027b5b9))
- **accordion:** support any elements in title ([1129fd742](https://github.com/migrationsverket/midas/commit/1129fd742))
- **table:** remove unused props ([1cb0c2e69](https://github.com/migrationsverket/midas/commit/1cb0c2e69))
- **table:** show hover background color for striped table ([a6b4f35d5](https://github.com/migrationsverket/midas/commit/a6b4f35d5))
- **theme:** point to theme types ([98e09424f](https://github.com/migrationsverket/midas/commit/98e09424f))
- **card:** remove the id content from p tag ([54e4fe9cd](https://github.com/migrationsverket/midas/commit/54e4fe9cd))
- **card:** fix to read title and content ([dd8d07c72](https://github.com/migrationsverket/midas/commit/dd8d07c72))
- **card:** add React.useId to generate unique id ([160319d03](https://github.com/migrationsverket/midas/commit/160319d03))
- fix content to be readable by screen reader when use tab ([d49d8d4f9](https://github.com/migrationsverket/midas/commit/d49d8d4f9))

### ❤️ Thank You

- derpbravely
- jabir Khalil
- Wilhelm Hjelm

## 1.2.3 (2025-02-11)

This was a version bump only for components to align it with other projects, there were no code changes.

## 1.2.2 (2025-02-11)

This was a version bump only for components to align it with other projects, there were no code changes.

## 1.2.1 (2025-02-11)

This was a version bump only for components to align it with other projects, there were no code changes.

## 1.2.0 (2025-02-11)

### 🚀 Features

- **components:** add nvm config ([7cbbce66e](https://github.com/migrationsverket/midas/commit/7cbbce66e))
- **components:** new api and style for accordion ([efab0a198](https://github.com/migrationsverket/midas/commit/efab0a198))

### 🩹 Fixes

- **theme:** create separate theme export ([a6c95a23c](https://github.com/migrationsverket/midas/commit/a6c95a23c))
- **info-banner:** fix icon to be in same line with text in docs and story ([f37b798c3](https://github.com/migrationsverket/midas/commit/f37b798c3))
- **components:** fix text when titles are longer than one row ([28b06cd31](https://github.com/migrationsverket/midas/commit/28b06cd31))
- import/export textfield css directly from css module ([#212](https://github.com/migrationsverket/midas/pull/212))

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

- **textarea:** new component
- **docs:** add docusaurus boilerplate
- **storybook:** add boilerplate storybook instance
- **button:** add react aria button component

### 🩹 Fixes

- fix the link path in readme
- **modal:** update modal docs
- dependencies
- **docs:** update url
- **docs:** update url
- **docs:** fix storybook link
- new readme + doc build
- change node version on deploy
- **docs:** mend broken pages
- **docs:** change doc structure
- package.json and package-lock.json

### ❤️ Thank You

- jabir Khalil
- pixelrickdreamer
- Wilhelm Hjelm

## 1.0.1 (2025-01-27)

### 🚀 Features

- **textarea:** new component

### 🩹 Fixes

- fix the link path in readme
- **modal:** update modal docs
- dependencies
- **docs:** update url
- **docs:** update url
- **docs:** fix storybook link
- new readme + doc build
- change node version on deploy
- **docs:** mend broken pages
- **docs:** change doc structure

### ❤️ Thank You

- jabir Khalil
- Wilhelm Hjelm

# 1.0.0 (2025-01-27)

### 🚀 Features

- **textarea:** new component

### 🩹 Fixes

- fix the link path in readme
- **modal:** update modal docs
- dependencies
- **docs:** update url
- **docs:** update url
- **docs:** fix storybook link
- new readme + doc build
- change node version on deploy
- **docs:** mend broken pages
- **docs:** change doc structure

### ❤️ Thank You

- jabir Khalil
- Wilhelm Hjelm