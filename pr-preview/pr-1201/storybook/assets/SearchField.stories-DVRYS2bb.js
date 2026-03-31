import{S as n}from"./SearchField-CCwLgT8O.js";import"./iframe-BBhwDnFO.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-Bd87UzLz.js";import"./clsx-B-dksMZM.js";import"./Form-CqRiR74T.js";import"./useFocusRing-B_sqHjIH.js";import"./index-BlvuKTGl.js";import"./index-_W7tIlCY.js";import"./Input-Cp0H90Bq.js";import"./Hidden-QElrSbG6.js";import"./Button-CckDCqMW.js";import"./useLabel-cKvXwArV.js";import"./useLabels-Brd-Ii1p.js";import"./useButton-BBvNlSl7.js";import"./FieldError-CYJ3UXof.js";import"./Text-CuEErEoe.js";import"./clsx-Ciqy0D92.js";import"./Text-DjN1krRx.js";import"./RSPContexts-DMx7X0Ic.js";import"./Group-BlEQrDe0.js";import"./useControlledState-Kegn83S3.js";import"./useLocalizedStringFormatter-BEHHwBjc.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DlY1kp4Q.js";import"./useField-awkoEfr0.js";import"./TextField.module-DdivwlC8.js";import"./search-S-dBeNHv.js";import"./createLucideIcon-DfX1ZOng.js";import"./x-CHXjKLnv.js";import"./useLocalizedStringFormatter-xYmRvro2.js";import"./Button-xHV73jzN.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-CeBruMUu.js";const j={component:n,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:i=>i==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}},a={parameters:{docs:{description:{story:'Use inputMode="search" to activate the search keyboard on mobile, which shows a "Search" or "Go" action key instead of "Return".'}}},args:{placeholder:"Sök efter en person",inputMode:"search"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Sök efter en person'
  }
}`,...e.parameters?.docs?.source},description:{story:`Default behavior in v17 — the built-in submit button is shown.
The button is not in the tab order; use Enter to submit or click the button.`,...e.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Sök efter "secret"',
    validate: (value: string) => value === 'secret' ? 'Sök inte efter hemligheter' : true
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Sök efter dokument',
    isInvalid: true,
    errorMessage: 'Något gick fel, var god försök igen'
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Sök efter dokument',
    isDisabled: true
  }
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: 'Without button (v18 default)',
  args: {
    placeholder: 'Sök efter en person',
    showButton: false
  }
}`,...r.parameters?.docs?.source},description:{story:"Future default in v18 — opt in today with `showButton={false}`.\nCompose your own `Button` outside `SearchField` for explicit submit.\nEnter still works for keyboard submission.",...r.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Use inputMode="search" to activate the search keyboard on mobile, which shows a "Search" or "Go" action key instead of "Return".'
      }
    }
  },
  args: {
    placeholder: 'Sök efter en person',
    inputMode: 'search'
  }
}`,...a.parameters?.docs?.source}}};const q=["Primary","CustomValidation","Invalid","Disabled","WithoutButton","InputModeSearch"];export{t as CustomValidation,s as Disabled,a as InputModeSearch,o as Invalid,e as Primary,r as WithoutButton,q as __namedExportsOrder,j as default};
