import{S as i}from"./SearchField-DSTxnPsd.js";import"./iframe-CpD0sz2e.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-ojEvGYm9.js";import"./clsx-B-dksMZM.js";import"./Form-DxMz1J6H.js";import"./useFocusRing-CBhF1Pep.js";import"./index-2osu5sAu.js";import"./index-C5xpIHaH.js";import"./Input-dDREXL9s.js";import"./Hidden-CJYkSVxl.js";import"./Button-TIyC3aNe.js";import"./useLabel-BcpaW40H.js";import"./useLabels-DFOTVMl_.js";import"./useButton-ku5NYICY.js";import"./FieldError-DwX7T7Dy.js";import"./Text-eC571-Sp.js";import"./clsx-Ciqy0D92.js";import"./Text-BdNXNsJY.js";import"./RSPContexts-C3ByxqzR.js";import"./Group-CAOphb69.js";import"./useControlledState-DBG5XgRx.js";import"./useLocalizedStringFormatter-CO2jAPcS.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-C1s1PE88.js";import"./useField-rnQHL0Me.js";import"./TextField.module-DdivwlC8.js";import"./search-CTBF_lAN.js";import"./createLucideIcon-DFkdkqMu.js";import"./x-CZaGtiyi.js";import"./useLocalizedStringFormatter-BvEEsuGU.js";import"./Button-BEQpNkHS.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-BXLSQV9r.js";const A={component:i,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},t={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},o={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},s={args:{placeholder:"Sök efter dokument",isDisabled:!0}},r={name:"Without button (v18 default)",args:{placeholder:"Sök efter en person",showButton:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
