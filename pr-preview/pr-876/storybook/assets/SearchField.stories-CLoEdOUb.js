import{S as i}from"./SearchField-Bh3yhP4i.js";import"./iframe-OzXVe_TX.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-tCr9uINw.js";import"./clsx-B-dksMZM.js";import"./Form-9T3ORTNA.js";import"./useFocusRing-DizgMThA.js";import"./index-BxX1Tua9.js";import"./index-D0VI0fBs.js";import"./Input-_dhISMKx.js";import"./Hidden-B1yqLm5L.js";import"./Button-CQhvXyK9.js";import"./useLabel-T42JMCw1.js";import"./useLabels-DsiX80-5.js";import"./useButton-BhVS9jHL.js";import"./FieldError-homDiWH4.js";import"./Text-DQmoUTPX.js";import"./clsx-Ciqy0D92.js";import"./Text-C8tynj-R.js";import"./RSPContexts-DzC-BhmG.js";import"./Group-iCUipsL9.js";import"./useControlledState-CLatC1WA.js";import"./useLocalizedStringFormatter-CQl_xHp6.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-CqobKicN.js";import"./useField-DcJnjYwN.js";import"./TextField.module-DdivwlC8.js";import"./search-BjnQoW9N.js";import"./createLucideIcon-COmw-XaN.js";import"./x-BQ6XFr0a.js";import"./useLocalizedStringFormatter-MRi_Bu-E.js";import"./Button-BPALFDJW.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-Bi7DvSRw.js";const A={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
