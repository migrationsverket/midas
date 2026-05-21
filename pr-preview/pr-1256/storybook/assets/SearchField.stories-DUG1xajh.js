import{S as i}from"./SearchField-DJonuo_E.js";import"./iframe-B5sjefct.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-fPAwABKa.js";import"./clsx-B-dksMZM.js";import"./Form-DV6cj1j8.js";import"./useFocusRing-sOnwHe33.js";import"./index-DtgNuOCD.js";import"./index-Czs7kpwC.js";import"./Input-Cb4Gy95r.js";import"./Hidden-B2p0iUh8.js";import"./Button-cTz3Pef6.js";import"./useLabel-CW7f36mN.js";import"./useLabels-Dbnz0AcO.js";import"./useButton-k5p-sniw.js";import"./FieldError-DnuLUqIw.js";import"./Text-EO7MNkCF.js";import"./clsx-Ciqy0D92.js";import"./Text-BTlYwDV5.js";import"./RSPContexts-BkqIbQHr.js";import"./Group-BBOJyT9l.js";import"./useControlledState-C9npmvg7.js";import"./useLocalizedStringFormatter-BDTDudxH.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BRs7Ot9H.js";import"./useField-rQs3eruV.js";import"./TextField.module-DdivwlC8.js";import"./search-BHGqsHXC.js";import"./createLucideIcon-CQqZaZFl.js";import"./x-ypr4Mk8U.js";import"./useLocalizedStringFormatter-DrEfy0xs.js";import"./Button-B7RHQDq3.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-C9CixXME.js";const A={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source},description:{story:"Future default in v18 — opt in today with `showButton={false}`.\nCompose your own `Button` outside `SearchField` for explicit submit.\nEnter still works for keyboard submission.",...r.parameters?.docs?.description}}};const G=["Primary","CustomValidation","Invalid","Disabled","WithoutButton"];export{t as CustomValidation,s as Disabled,o as Invalid,e as Primary,r as WithoutButton,G as __namedExportsOrder,A as default};
