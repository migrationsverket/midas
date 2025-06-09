## 10.1.1 (2025-06-09)

### 🩹 Fixes

- replace invalid token --blue-140 ([#620](https://github.com/migrationsverket/midas/pull/620))
- **combobox:** virtualize the listbox ([14745432fc](https://github.com/migrationsverket/midas/commit/14745432fc))
- **combobox:** remove label element in ListBoxSection ([#631](https://github.com/migrationsverket/midas/pull/631))
- **date-picker:** fix height issue with button in field ([#623](https://github.com/migrationsverket/midas/pull/623))
- **link:** better icon logic on links, support for external and download ([#617](https://github.com/migrationsverket/midas/pull/617))
- **link-button:** add support for medium size ([#618](https://github.com/migrationsverket/midas/pull/618))

### 💅 Refactors

- **combobox:** extract shared listbox components ([bfe30e237e](https://github.com/migrationsverket/midas/commit/bfe30e237e))
- **combobox:** add explicit id prop to sections ([57b0df3264](https://github.com/migrationsverket/midas/commit/57b0df3264))
- **select:** move list item class to list box ([a3a3a6f2e1](https://github.com/migrationsverket/midas/commit/a3a3a6f2e1))
- **select:** separate code ([01926124ee](https://github.com/migrationsverket/midas/commit/01926124ee))
- **select:** merge select and combobox list item types ([ed6bbf4d50](https://github.com/migrationsverket/midas/commit/ed6bbf4d50))

### 📖 Documentation changes

- link to latest major release notes ([f5ed23dc93](https://github.com/migrationsverket/midas/commit/f5ed23dc93))
- improvements to link pages ([#612](https://github.com/migrationsverket/midas/pull/612))
- update form pattern with guidelines ([bb56ecce84](https://github.com/migrationsverket/midas/commit/bb56ecce84))
- re-add example borders ([#615](https://github.com/migrationsverket/midas/pull/615))
- add new UI-kit for XD ([096bf9bac3](https://github.com/migrationsverket/midas/commit/096bf9bac3))
- no bg on proptable accordions ([#622](https://github.com/migrationsverket/midas/pull/622))
- remove broken anchor ([e2dd1e0766](https://github.com/migrationsverket/midas/commit/e2dd1e0766))
- **combobox:** update sectioned example ([c32d5db3e6](https://github.com/migrationsverket/midas/commit/c32d5db3e6))
- **release-notes:** add release notes for 10.1.0 ([a912e097bc](https://github.com/migrationsverket/midas/commit/a912e097bc))

### 🔧 Maintenance

- test chromatic build ([8613c3cded](https://github.com/migrationsverket/midas/commit/8613c3cded))
- update test files with changed props ([fd165fa775](https://github.com/migrationsverket/midas/commit/fd165fa775))
- **deps:** bump tar-fs in the npm_and_yarn group across 1 directory ([f3b185c8e6](https://github.com/migrationsverket/midas/commit/f3b185c8e6))
- **deps-dev:** bump next in the npm_and_yarn group across 1 directory ([2b6d2af5e7](https://github.com/migrationsverket/midas/commit/2b6d2af5e7))
- **docs:** add jest globals for test files ([b804836261](https://github.com/migrationsverket/midas/commit/b804836261))
- **docs:** update docusaurus ([64d69a5239](https://github.com/migrationsverket/midas/commit/64d69a5239))
- **link-button:** remove the story icon from the storybook ([251945d26f](https://github.com/migrationsverket/midas/commit/251945d26f))

## 10.1.0 (2025-05-23)

### 🚀 Features

- **accordion:** add new variant `hasBackground` ([1022bcc58a](https://github.com/migrationsverket/midas/commit/1022bcc58a))
- **accordion:** add variant `hasBackground` ([2b429a73b3](https://github.com/migrationsverket/midas/commit/2b429a73b3))
- **select:** use midas checkbox ([94c2cdb61d](https://github.com/migrationsverket/midas/commit/94c2cdb61d))
- **select:** allow for option id to be string or number ([b9f31bac6b](https://github.com/migrationsverket/midas/commit/b9f31bac6b))
- **tag:** add new prop ([82a0998769](https://github.com/migrationsverket/midas/commit/82a0998769))
- **tag:** add dark mode style ([408be2acb7](https://github.com/migrationsverket/midas/commit/408be2acb7))

### 🩹 Fixes

- **link-button:** add disabled styling ([143f708127](https://github.com/migrationsverket/midas/commit/143f708127))
- **radio:** remove interactions with radiogroup items outside the label and button ([0b9f197971](https://github.com/migrationsverket/midas/commit/0b9f197971))
- **select:** virtualize the scroll box ([523b138e17](https://github.com/migrationsverket/midas/commit/523b138e17))
- **skeleton:** dont overwrite className and style props ([155a8ff437](https://github.com/migrationsverket/midas/commit/155a8ff437))
- **tag:** fix the missing nesting selector ([87ac33ab1c](https://github.com/migrationsverket/midas/commit/87ac33ab1c))
- **tag:** change token on button hover and pressed ([0f2ff1c422](https://github.com/migrationsverket/midas/commit/0f2ff1c422))
- **tag:** unset border to make button the right width/height ([769cfa8ec5](https://github.com/migrationsverket/midas/commit/769cfa8ec5))
- **tag:** fix the hover and fix the disabled style ([3a21642715](https://github.com/migrationsverket/midas/commit/3a21642715))

### 💅 Refactors

- **tag:** move render function to meta data ([48d9f9b126](https://github.com/migrationsverket/midas/commit/48d9f9b126))

### 📖 Documentation changes

- add usage example ([c25a9cafc5](https://github.com/migrationsverket/midas/commit/c25a9cafc5))
- control size globally in storybook + new dark mode control ([#596](https://github.com/migrationsverket/midas/pull/596))
- **tag:** add new tag page ([f3f7506d18](https://github.com/migrationsverket/midas/commit/f3f7506d18))
- **tag:** fix description text ([979a879bb3](https://github.com/migrationsverket/midas/commit/979a879bb3))

### 🔧 Maintenance

- change react import statement ([efe3c867f0](https://github.com/migrationsverket/midas/commit/efe3c867f0))
- update eslint rule to handle major versions > 9 ([ba85178773](https://github.com/migrationsverket/midas/commit/ba85178773))
- extend commitlint conventional commits config ([4daa47926d](https://github.com/migrationsverket/midas/commit/4daa47926d))
- **changelog:** group and display more commit types in changelog ([d86d18ae94](https://github.com/migrationsverket/midas/commit/d86d18ae94))
- **deps:** update RAC ([20da285b9e](https://github.com/migrationsverket/midas/commit/20da285b9e))

# 10.0.0 (2025-05-20)

### 🚀 Features

- ⚠️ **accordion:** remove deprecated prop `type='multiple'`, use `allowsMultipleExpanded` instead ([8c82cbd681](https://github.com/migrationsverket/midas/commit/8c82cbd681))
- **button:** add size property, a story and style ([946bd9aa7d](https://github.com/migrationsverket/midas/commit/946bd9aa7d))
- **button:** add back the small variant ([2112557050](https://github.com/migrationsverket/midas/commit/2112557050))
- ⚠️ **button:** remove small size variant from button ([06430f2df2](https://github.com/migrationsverket/midas/commit/06430f2df2))
- **combobox:** add size prop ([e64826ab11](https://github.com/migrationsverket/midas/commit/e64826ab11))
- **date-field:** ✨ medium size ([#558](https://github.com/migrationsverket/midas/pull/558))
- **date-picker:** add size prop ([c1e1a04444](https://github.com/migrationsverket/midas/commit/c1e1a04444))
- **file-upload:** use button size medium instead of small ([c4351ff469](https://github.com/migrationsverket/midas/commit/c4351ff469))
- ⚠️ **label:** remove deprecated variants ([36c893a748](https://github.com/migrationsverket/midas/commit/36c893a748))
- ⚠️ **modal:** remove deprecated `ModalTrigger` and `Dialog` ([9789773886](https://github.com/migrationsverket/midas/commit/9789773886))
- **progress-bar:** use button size medium instead of small ([24dad8eb80](https://github.com/migrationsverket/midas/commit/24dad8eb80))
- **search-field:** add size prop ([4dab7eea96](https://github.com/migrationsverket/midas/commit/4dab7eea96))
- **search-field:** use button size medium instead of small ([a5f6020bbd](https://github.com/migrationsverket/midas/commit/a5f6020bbd))
- **select:** add size property ([b1519f00cd](https://github.com/migrationsverket/midas/commit/b1519f00cd))
- **select:** add medium size variant ([f66c23929e](https://github.com/migrationsverket/midas/commit/f66c23929e))
- **skeleton:** allow for more semantically correct props ([703237ec04](https://github.com/migrationsverket/midas/commit/703237ec04))
- ⚠️ **skeleton:** remove deprecated props ([cf5b52095c](https://github.com/migrationsverket/midas/commit/cf5b52095c))
- ⚠️ **spinner:** remove deprecated prop `dark` ([309da278c9](https://github.com/migrationsverket/midas/commit/309da278c9))
- ⚠️ **table:** remove deprecated prop `narrow` from table ([2b61d27b75](https://github.com/migrationsverket/midas/commit/2b61d27b75))
- **table:** remove deprecation of prop `narrow` and update documentation ([4cbbb8efd9](https://github.com/migrationsverket/midas/commit/4cbbb8efd9))
- ⚠️ **tabs:** remove deprecated prop `defaultSelected` ([5271e93984](https://github.com/migrationsverket/midas/commit/5271e93984))
- **tag:** use button size medium instead of small ([731df78796](https://github.com/migrationsverket/midas/commit/731df78796))
- **theme:** add full scale of signal-red tokens ([abdca1e267](https://github.com/migrationsverket/midas/commit/abdca1e267))
- ⚠️ **theme:** remove deprecated tokens `borderInvalid` and `textInvalid` ([d2f1620dc4](https://github.com/migrationsverket/midas/commit/d2f1620dc4))
- ⚠️ **tokens:** rename tokens `blue140` & `blue170` and add new tokens `blue110`, `blue120`, rename `purple140` to `purple110` ([b79d586d53](https://github.com/migrationsverket/midas/commit/b79d586d53))
- **tokens:** add new tokens `blue50` and `blue70`, update link colors ([d814a4c961](https://github.com/migrationsverket/midas/commit/d814a4c961))

### 🩹 Fixes

- replace unsupported characters in chromatic permalink ([d653d10e69](https://github.com/migrationsverket/midas/commit/d653d10e69))
- **accordion:** set correct height on uncontained variant ([#557](https://github.com/migrationsverket/midas/pull/557))
- **calendar:** add cursor: not-allowed on disabled dates ([6592b4fb15](https://github.com/migrationsverket/midas/commit/6592b4fb15))
- **select:** increase the margin top to give more space between tag group and select ([5514f642b0](https://github.com/migrationsverket/midas/commit/5514f642b0))

### 📖 Documentation changes

- truly responsive propstable ([#554](https://github.com/migrationsverket/midas/pull/554))
- swizzle admonitions ([#538](https://github.com/migrationsverket/midas/pull/538))
- add language page ([60497665a3](https://github.com/migrationsverket/midas/commit/60497665a3))
- add untracked changelog files and update tsconfig ([9527e80ac0](https://github.com/migrationsverket/midas/commit/9527e80ac0))
- add migration guide from 8 to 9 ([777e92b2f0](https://github.com/migrationsverket/midas/commit/777e92b2f0))
- add Ui-kit for Adobe XD (version 22) ([8a28a6012f](https://github.com/migrationsverket/midas/commit/8a28a6012f))
- add migration guides ([c523716e06](https://github.com/migrationsverket/midas/commit/c523716e06))
- fix various typos + minor fixes to wording and styling of docs ✏️ ([3eb230305f](https://github.com/migrationsverket/midas/commit/3eb230305f))
- render jsdoc links as markdown in component api description field ([c2699b66a1](https://github.com/migrationsverket/midas/commit/c2699b66a1))
- add migration guide for v8.3.0 ([#585](https://github.com/migrationsverket/midas/pull/585))
- **changelog:** add docusaurus style changelog and release notes ([cba214be09](https://github.com/migrationsverket/midas/commit/cba214be09))
- **layout:** update docs on clientSideHref prop ([6f1e0807ad](https://github.com/migrationsverket/midas/commit/6f1e0807ad))
- **release:** update release notes for 10.0.0 with migrations for button ([44a6347896](https://github.com/migrationsverket/midas/commit/44a6347896))
- **release:** update release notes for 10.0.0 with migrations for accordion ([ac9007c8d1](https://github.com/migrationsverket/midas/commit/ac9007c8d1))
- **release:** update release notes for migrations of modals ([748bbcb298](https://github.com/migrationsverket/midas/commit/748bbcb298))
- **release:** add migrations for deprecated prop for spinner ([e042b919ed](https://github.com/migrationsverket/midas/commit/e042b919ed))
- **release:** update release notes for deprecated props for `Tabs` ([d83ad7cb6c](https://github.com/migrationsverket/midas/commit/d83ad7cb6c))
- **release:** update release notes for `<Table>` ([823dc5526c](https://github.com/migrationsverket/midas/commit/823dc5526c))
- **release:** update release notes for token removal ([2f9b8314c5](https://github.com/migrationsverket/midas/commit/2f9b8314c5))
- **release:** migration information for removal of `useMessageStringFormatter` ([0f18dd9824](https://github.com/migrationsverket/midas/commit/0f18dd9824))
- **release:** add migration info for `Label` ([b0f79ef73b](https://github.com/migrationsverket/midas/commit/b0f79ef73b))
- **release:** add migration info for skeleton component ([afeab9f602](https://github.com/migrationsverket/midas/commit/afeab9f602))
- **release:** link to changelog instead of specific version to avoid broken links while developing ([ada5d715b3](https://github.com/migrationsverket/midas/commit/ada5d715b3))
- **release:** remove reference to table and fix minor issues ([810321bbf3](https://github.com/migrationsverket/midas/commit/810321bbf3))
- **release:** update release notes with info on medium size components ([d6e70a99b5](https://github.com/migrationsverket/midas/commit/d6e70a99b5))
- **release:** update release notes with tokens breaking changes ([a45ef9cbf6](https://github.com/migrationsverket/midas/commit/a45ef9cbf6))
- **release:** update release notes with breaking changes `purple140` -> `purple110` ([22f685ae97](https://github.com/migrationsverket/midas/commit/22f685ae97))
- **tokens:** fix typo ([d55e6f224b](https://github.com/migrationsverket/midas/commit/d55e6f224b))

### 🔧 Maintenance

- update version in eslint config ([93edc05f7c](https://github.com/migrationsverket/midas/commit/93edc05f7c))
- add new eslint rules ([#545](https://github.com/migrationsverket/midas/pull/545))
- add npm provenance flag ([039f1daa0d](https://github.com/migrationsverket/midas/commit/039f1daa0d))
- remove max height from card-guidelines ([02a65e19bf](https://github.com/migrationsverket/midas/commit/02a65e19bf))
- use medium sized buttons ([7d55406881](https://github.com/migrationsverket/midas/commit/7d55406881))
- disable snapshots for duplicate states ([52197ad135](https://github.com/migrationsverket/midas/commit/52197ad135))
- **button:** fix code documentation ([28974126de](https://github.com/migrationsverket/midas/commit/28974126de))
- **deps:** bump vite in the npm_and_yarn group across 1 directory ([193b8d80b5](https://github.com/migrationsverket/midas/commit/193b8d80b5))
- **deps:** bump undici in the npm_and_yarn group across 1 directory ([63e9f61a23](https://github.com/migrationsverket/midas/commit/63e9f61a23))
- ⚠️ **useMessageFormatter:** remove `useMessageFormatter` since deprecation ([01d94a8d75](https://github.com/migrationsverket/midas/commit/01d94a8d75))

### 🧪 Tests updated

- **button:** add a test in primary story ([53f4fe042e](https://github.com/migrationsverket/midas/commit/53f4fe042e))
- **button:** add a test to stories ([0348794fc7](https://github.com/migrationsverket/midas/commit/0348794fc7))
- **button:** add await to expect tests ([6a72c8d05b](https://github.com/migrationsverket/midas/commit/6a72c8d05b))
- **docs:** add test baseline and chromatic tests ([57d6255477](https://github.com/migrationsverket/midas/commit/57d6255477))
- **select:** add test to check the size ([2c692d9ea0](https://github.com/migrationsverket/midas/commit/2c692d9ea0))
- **select:** fix the test ([f41535787b](https://github.com/migrationsverket/midas/commit/f41535787b))

### ⚠️ Breaking Changes

- ⚠️ **tokens:** rename tokens `blue140` & `blue170` and add new tokens `blue110`, `blue120`, rename `purple140` to `purple110` ([b79d586d53](https://github.com/migrationsverket/midas/commit/b79d586d53))
- **skeleton:** variant `rectangular` is no longer available, use `rectangle` instead. Animation is now a boolean and the prop to use is `isAnimated`
- **label:** label variants are no longer available, use component `Text` instead
- **useMessageFormatter:** Adobe has deprecated this hook in favour of `useLocalizedStringFormatter`. Use that instead!
- **theme:** use `supportBorderWarning` and `textWarning` instead
- **table:** prop `narrow` is no longer available
- **tabs:** `defaultSelected` no longer works, use `defaultSelectedKey` instead
- **spinner:** prop `dark` no longer works, use `isOnColor` instead
- **modal:** `ModalTrigger` and `Dialog` no longer works, use `DialogTrigger` and `Modal` instead
- **accordion:** API now conforms to React Aria standard. Same behavior is accomplished using `allowsMultipleExpanded`
- **button:** `size='small'` no longer has any effect on button size. Allowed sizes are `'medium' | 'large'`

# 9.0.0 (2025-05-08)

### 🩹 Fixes

- **grid:** prevent midas classnames to get overwritten ([#541](https://github.com/migrationsverket/midas/pull/541))
- **info-banner:** add correct line-height ([#540](https://github.com/migrationsverket/midas/pull/540))
- **textfield:** merge textfield and input/textarea native dom props ([#499](https://github.com/migrationsverket/midas/pull/499))

### Documentation Changes

- **toast:** fix local example in storybook ([#542](https://github.com/migrationsverket/midas/pull/542))

## 8.3.0 (2025-05-07)

### 🚀 Features

- **layout:** change background color for menu item ([d9ffc16bb6](https://github.com/migrationsverket/midas/commit/d9ffc16bb6))
- **layout:** change font weight for active menu item ([57e2485234](https://github.com/migrationsverket/midas/commit/57e2485234))
- **textfield:** add medium size variant ([#520](https://github.com/migrationsverket/midas/pull/520))
- **theme:** use `--support-border-warning` instead of `--border-invalid` ([#518](https://github.com/migrationsverket/midas/pull/518))

### 🩹 Fixes

- **accordion:** remove padding bottom for last uncontained accordionitem ([463a7fa29e](https://github.com/migrationsverket/midas/commit/463a7fa29e))
- **accordion:** add a minimal padding to allow items with margin-bottom ([e0b2d8058b](https://github.com/migrationsverket/midas/commit/e0b2d8058b))
- **combobox:** add disabled color to the icon in disabled state ([9cd5657149](https://github.com/migrationsverket/midas/commit/9cd5657149))
- **modal:** adjust modal header when content is scollable ([#527](https://github.com/migrationsverket/midas/pull/527))
- **select:** change invalid border from 3px to 2 px ([834f1f8fdc](https://github.com/migrationsverket/midas/commit/834f1f8fdc))
- **select:** add disabled styling to description ([4cabb0c8ae](https://github.com/migrationsverket/midas/commit/4cabb0c8ae))
- **textfield:** add border bottom in disabled and change ivalid border to 2px ([2bcd1d5beb](https://github.com/migrationsverket/midas/commit/2bcd1d5beb))
- **textfield:** remove opacity from disabled ([0332d83cb6](https://github.com/migrationsverket/midas/commit/0332d83cb6))

### Documentation Changes

- improvements to preview 💅 🔍 ✨ ([#530](https://github.com/migrationsverket/midas/pull/530))
- **radio:** update Radio button guidelines ([6c5038fff1](https://github.com/migrationsverket/midas/commit/6c5038fff1))

## 8.2.0 (2025-04-28)

### 🚀 Features

- **label:** deprecate prop variant and add new css class ([42e33be662](https://github.com/migrationsverket/midas/commit/42e33be662))
- **theme:** add --icon-tertiary, new color for --icon-secondary ([f0ef381472](https://github.com/migrationsverket/midas/commit/f0ef381472))
- **tooltip:** allow locale agnostic tooltip placement ([#492](https://github.com/migrationsverket/midas/pull/492))

### 🩹 Fixes

- **accordion:** remove disabled styling if component has disabled children ([1c704b714d](https://github.com/migrationsverket/midas/commit/1c704b714d))
- **checkbox:** set correct line-height and adjust high contrast visibility ([6ca7ea9ba9](https://github.com/migrationsverket/midas/commit/6ca7ea9ba9))

### Documentation Changes

- add test docs ([af6540ff7c](https://github.com/migrationsverket/midas/commit/af6540ff7c))
- move test instructions to a separate file ([33fe370e2d](https://github.com/migrationsverket/midas/commit/33fe370e2d))
- **forms:** add developer instructions for integrating midas components in forms ([ecc081d78e](https://github.com/migrationsverket/midas/commit/ecc081d78e))
- **label:** remove label docs ([#506](https://github.com/migrationsverket/midas/pull/506))
- **modal:** change arg types in storybook ([f9588f170b](https://github.com/migrationsverket/midas/commit/f9588f170b))
- **propstable:** add support for enums in table ([#511](https://github.com/migrationsverket/midas/pull/511))
- **radio:** remove radio button guideline ([d314a1d2cb](https://github.com/migrationsverket/midas/commit/d314a1d2cb))

## 8.1.0 (2025-04-23)

### 🚀 Features

- **accordion:** accordion status ✅ / 🚨 ([#485](https://github.com/migrationsverket/midas/pull/485))

### 🩹 Fixes

- **accordion:** rename invalid token ([e4b13c928](https://github.com/migrationsverket/midas/commit/e4b13c928))
- **modal:** make text in modal selectable ([#490](https://github.com/migrationsverket/midas/pull/490))
- **select:** change checkbox size to prevent disappearing border ([3ab520633](https://github.com/migrationsverket/midas/commit/3ab520633))
- **select:** remove explicit size for indeterminate symbol ([5f805c134](https://github.com/migrationsverket/midas/commit/5f805c134))
- **theme:** add dark mode focus ([#483](https://github.com/migrationsverket/midas/pull/483))

### Documentation Changes

- clarify use of global.css and disable switch functionality ([#489](https://github.com/migrationsverket/midas/pull/489))
- **link:** remove invalid dom nesting ([38a742db5](https://github.com/migrationsverket/midas/commit/38a742db5))

# 8.0.0 (2025-04-15)

### 🚀 Features

- ✨💄 add semantic z-index tokens ([#401](https://github.com/migrationsverket/midas/pull/401))
- ✨ add errorPosition to form fields ([#416](https://github.com/migrationsverket/midas/pull/416))
- **layout:** new navbar component and external variant of layout ([ad54f5955](https://github.com/migrationsverket/midas/commit/ad54f5955))
- **spinner:** change prop `dark` to `isOnColor` ([#443](https://github.com/migrationsverket/midas/pull/443))

### 🩹 Fixes

- **accordion:** fix responsive content hiding when changing screen size ([#446](https://github.com/migrationsverket/midas/pull/446))
- **button:** add cursor styling for disabled state ([1ab3f6c55](https://github.com/migrationsverket/midas/commit/1ab3f6c55))
- **calendar:** add border for high contrast mode ([7ed989df8](https://github.com/migrationsverket/midas/commit/7ed989df8))
- **calendar:** sync calendars ([3e7b4fb06](https://github.com/migrationsverket/midas/commit/3e7b4fb06))
- **calendar:** add high contrast styling for selected date ([a5af1cafe](https://github.com/migrationsverket/midas/commit/a5af1cafe))
- **combobox:** fix background color to input ([6ec2c1d3e](https://github.com/migrationsverket/midas/commit/6ec2c1d3e))
- **date-picker:** add missing disabled styles ([492a1b789](https://github.com/migrationsverket/midas/commit/492a1b789))
- **heading:** set correct styles for heading and affected components ([#394](https://github.com/migrationsverket/midas/pull/394))
- **link:** remove active styling in disabled state ([71c1e1400](https://github.com/migrationsverket/midas/commit/71c1e1400))
- **radio:** add support for horizontal orientation ([e5c9ad3eb](https://github.com/migrationsverket/midas/commit/e5c9ad3eb))
- **theme:** replace invalid text and border colors in dark mode ([a6259f46c](https://github.com/migrationsverket/midas/commit/a6259f46c))

### Documentation Changes

- use markdown links ([f1fb5714b](https://github.com/migrationsverket/midas/commit/f1fb5714b))
- update link docs with new code and examples ([a25a2def3](https://github.com/migrationsverket/midas/commit/a25a2def3))
- add github icon to navbar ([c31c8313d](https://github.com/migrationsverket/midas/commit/c31c8313d))
- 📝 add example for errorPosition property ([#425](https://github.com/migrationsverket/midas/pull/425))
- add margin to card and sibling code blocks ([8e0e328fe](https://github.com/migrationsverket/midas/commit/8e0e328fe))
- define error types at component level ([14dc2b8da](https://github.com/migrationsverket/midas/commit/14dc2b8da))
- new page explaining tokens and use of color + removed and updated tokens ([c970f0eb5](https://github.com/migrationsverket/midas/commit/c970f0eb5))
- remove live code from template ([b86abb7bc](https://github.com/migrationsverket/midas/commit/b86abb7bc))
- remove live code from loading indicator page ([301fdcdd9](https://github.com/migrationsverket/midas/commit/301fdcdd9))
- **accordion:** remove live-code and general docs update ([#430](https://github.com/migrationsverket/midas/pull/430))
- **badge:** remove live code examples ([0f58ad894](https://github.com/migrationsverket/midas/commit/0f58ad894))
- **button:** remove live code examples ([1f2f08980](https://github.com/migrationsverket/midas/commit/1f2f08980))
- **calendar:** update docs ([#469](https://github.com/migrationsverket/midas/pull/469))
- **calendar:** fix broken anchor ([338d6e907](https://github.com/migrationsverket/midas/commit/338d6e907))
- **calendar:** move import example ([ac738a65a](https://github.com/migrationsverket/midas/commit/ac738a65a))
- **card:** remove the live code block ([#467](https://github.com/migrationsverket/midas/pull/467))
- **checkbox:** remove live code block and add examples ([#456](https://github.com/migrationsverket/midas/pull/456))
- **combobox:** remove live code block and update examples ([#458](https://github.com/migrationsverket/midas/pull/458))
- **contribute:** update release process and general guidelines ([8dc21e5ca](https://github.com/migrationsverket/midas/commit/8dc21e5ca))
- **date-field:** update documentation 📅 ([#455](https://github.com/migrationsverket/midas/pull/455))
- **datepicker:** update documentation ([#457](https://github.com/migrationsverket/midas/pull/457))
- **dropdown:** remove livecode from documentation 🔽 ([#460](https://github.com/migrationsverket/midas/pull/460))
- **file-upload:** remove live code block ([ce7e140e8](https://github.com/migrationsverket/midas/commit/ce7e140e8))
- **file-upload:** move a text and add variant ([46dba413a](https://github.com/migrationsverket/midas/commit/46dba413a))
- **file-upload:** add controlled example ([3135c5826](https://github.com/migrationsverket/midas/commit/3135c5826))
- **file-upload:** add API table ([6c99aae48](https://github.com/migrationsverket/midas/commit/6c99aae48))
- **flex:** remove live code block ([#463](https://github.com/migrationsverket/midas/pull/463))
- **grid:** remove livecode from documentation ([#466](https://github.com/migrationsverket/midas/pull/466))
- **heading:** remove live code block ([284a86c6c](https://github.com/migrationsverket/midas/commit/284a86c6c))
- **heading:** expose ElementType ([79b85f4e4](https://github.com/migrationsverket/midas/commit/79b85f4e4))
- **info-banner:** remove live code ([b6540b9ba](https://github.com/migrationsverket/midas/commit/b6540b9ba))
- **info-banner:** highlight the types and dismissable ([2805914e8](https://github.com/migrationsverket/midas/commit/2805914e8))
- **label:** remove live code and update documentation ([1803a3ee1](https://github.com/migrationsverket/midas/commit/1803a3ee1))
- **label:** typo ([21386e830](https://github.com/migrationsverket/midas/commit/21386e830))
- **layout:** remove live code examples ([cf7c8b7d0](https://github.com/migrationsverket/midas/commit/cf7c8b7d0))
- **link:** fix broken url address ([#403](https://github.com/migrationsverket/midas/pull/403))
- **link-button:** remove live-code from docs ([#451](https://github.com/migrationsverket/midas/pull/451))
- **logo:** remove live code block ([#447](https://github.com/migrationsverket/midas/pull/447))
- **modal:** 📝 add examples with form elements ([#399](https://github.com/migrationsverket/midas/pull/399))
- **modal:** update modal guidelines ([4b4966ca6](https://github.com/migrationsverket/midas/commit/4b4966ca6))
- **progress-bar:** remove live code block ([#444](https://github.com/migrationsverket/midas/pull/444))
- **radio:** remove live code block and update examples ([#449](https://github.com/migrationsverket/midas/pull/449))
- **search-field:** remove the live code block ([23ebad9bf](https://github.com/migrationsverket/midas/commit/23ebad9bf))
- **skeleton:** remove live code block ([bbe03cb4e](https://github.com/migrationsverket/midas/commit/bbe03cb4e))
- **skeleton:** change the palce between the code and the component ([6b4b1dadb](https://github.com/migrationsverket/midas/commit/6b4b1dadb))
- **skeleton:** remove live code block ([9f61b7cfa](https://github.com/migrationsverket/midas/commit/9f61b7cfa))
- **spinner:** remove live code block ([#441](https://github.com/migrationsverket/midas/pull/441))
- **table:** add prop comment ([6089593a4](https://github.com/migrationsverket/midas/commit/6089593a4))
- **table:** add examples ([8a2803373](https://github.com/migrationsverket/midas/commit/8a2803373))
- **table:** remove live code ([aabbddd06](https://github.com/migrationsverket/midas/commit/aabbddd06))
- **tabs:** remove live code and update documentation ([c4b2c2e47](https://github.com/migrationsverket/midas/commit/c4b2c2e47))
- **tabs:** remove generic in prop interface ([d8bcf2b92](https://github.com/migrationsverket/midas/commit/d8bcf2b92))
- **text:** remove union type for documentation visibility ([675b94795](https://github.com/migrationsverket/midas/commit/675b94795))
- **text:** remove live code and add form usage example ([38672f286](https://github.com/migrationsverket/midas/commit/38672f286))
- **textfield:** remove live code example ([43476df57](https://github.com/migrationsverket/midas/commit/43476df57))
- **textfield:** remove live code example ([13f59adc6](https://github.com/migrationsverket/midas/commit/13f59adc6))
- **tooltip:** update tooltip documentation 🔧 ([#439](https://github.com/migrationsverket/midas/pull/439))

## 7.1.0 (2025-04-04)

### 🚀 Features

- ✨💄 add semantic z-index tokens ([#401](https://github.com/migrationsverket/midas/pull/401))

### 🩹 Fixes

- **combobox:** fix background color to input ([997eac80b](https://github.com/migrationsverket/midas/commit/997eac80b))
- **date-picker:** add missing disabled styles ([10b394897](https://github.com/migrationsverket/midas/commit/10b394897))
- **theme:** replace invalid text and border colors in dark mode ([3291a9cbd](https://github.com/migrationsverket/midas/commit/3291a9cbd))

### Documentation Changes

- **link:** fix broken url address ([#403](https://github.com/migrationsverket/midas/pull/403))
- **modal:** 📝 add examples with form elements ([#399](https://github.com/migrationsverket/midas/pull/399))

# 7.0.0 (2025-04-02)

### Documentation Changes

- remove april fools ([4bcdaa31c](https://github.com/migrationsverket/midas/commit/4bcdaa31c))
- remove april fools ([#381](https://github.com/migrationsverket/midas/pull/381))
- ♿️💄ensure that markdown links use midas styling ([b79ce1b36](https://github.com/migrationsverket/midas/commit/b79ce1b36))

## 6.2.0 (2025-04-01)

### 🚀 Features

- **badge:** 🆕 new component - badge to indicate user of unread items
- **badge:** 🆕 new component - badge to indicate user of unread items

### 🩹 Fixes

- **date-picker:** add disabled style to divider
- **link-button:** fix secondary border and icon color in dark mode
- **link-button:** fix secondary border and icon color in dark mode
- **tabs:** fix dark mode on tabs and example on docweb
- **tabs:** fix dark mode on tabs and example on docweb
- **theme:** change the token value to icon secondary
- **theme:** update some tokens to new naming convention
- **theme:** update more tokens in tokens.ts
- **theme:** update icon-secondary with new value for dark mode
- **theme:** update some tokens to new naming convention

### Documentation Changes

- april fools
- a bit longer april fools joke
- fixes on badge page
- april fools
- add clarification on when to use which loader
- **docs:** add new UI-kit
- **docs:** change wording on dark mode guide page
- **docs:** add clarification on when to use which loader
- **docs:** add new UI-kit

## 6.1.0 (2025-03-28)

### 🚀 Features

- **text:** add description slot ([73d308a13](https://github.com/migrationsverket/midas/commit/73d308a13))

### 🩹 Fixes

- **link-button:** add pseudo-classes in CSS link-button ([#385](https://github.com/migrationsverket/midas/pull/385))
- **textfield:** fix token on input value ([e79f935e3](https://github.com/migrationsverket/midas/commit/e79f935e3))
- **textfield:** fix token on input value ([#388](https://github.com/migrationsverket/midas/pull/388))

## 6.0.1 (2025-03-24)

### 🩹 Fixes

- **select:** 🐛 Selected values doesn't match selected IDs

# 6.0.0 (2025-03-24)

### 🚀 Features

- use `cursor: not-allowed` for disabled elements
- **modal:** add boilerplate code for new modal implementation
- **modal:** add styles and clean up types
- **modal:** add focustrap to modal
- **modal:** increase z-index on overlay
- **modal:** fix overlay position to avoid moving the modal when y-overflow
- ⚠️ **modal:** deprecate `ModalTrigger` and `Dialog`
- **modal:** replace h2 with heading component

### 🩹 Fixes

- remove test setup from build
- add react types to dependencies
- change button variant to icon
- **button:** clarify use of labels on button groups
- **button:** clarify use of labels on button groups
- **button:** tokenize icon button for better dark mode support
- **button:** tokenize icon button for better dark mode support
- **button:** clarify use of labels on button groups
- **button:** change iconbtn color token
- **layout:** change minimize menu button to icon variant

### Documentation Changes

- **modal:** update instructions with new modal API

### ⚠️ Breaking Changes

- **modal:** Use the new DialogTrigger and Modal instead of ModalTrigger and Dialog. New API will apply.

## 5.0.1 (2025-03-20)

### 🩹 Fixes

- **checkbox:** swap old tokens
- **checkbox:** swap old focus token
- **link-button:** fix colors on hover state
- **link-button:** fix colors on hover state
- **radio:** remove old tokens
- **toast:** add temporary implementation of useToastState
- **toast:** update react-aria deps
- **toast:** remove explicit dep
- **toast:** re-organize animations and breakpoints

### Documentation Changes

- add strict mode to docs
- add strict mode to docs
- add additional prism languages
- update release instructions and styleguide
- run dark mode image switch on client
- run dark mode image switch on client
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
