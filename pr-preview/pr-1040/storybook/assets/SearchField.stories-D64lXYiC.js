import{S as s}from"./SearchField-sfbN_Qnl.js";import"./iframe-CKGACLCX.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DpzeWGpt.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-DDl3VCJO.js";import"./utils-C1cYwrRL.js";import"./useLocalizedStringFormatter-BI6jibPS.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BqZnJe7O.js";import"./useFocusRing-BuOXP8Hw.js";import"./index-DoQf3qpc.js";import"./index-oFvCdSIv.js";import"./useFormValidation-C0Fr8G0C.js";import"./useField-KuI-cIKx.js";import"./Button-54xKiT29.js";import"./Hidden-DNSOrP-i.js";import"./useLabels-DIZFogYA.js";import"./useButton-BILFtFpB.js";import"./search-e_DPIY4X.js";import"./createLucideIcon-RPOR-KCQ.js";import"./ClearButton-Dehc6Uic.js";import"./Button-8AXkha9Y.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CQvS5eyN.js";import"./VisuallyHidden-BHIvprIA.js";import"./x-DWT6hPY4.js";import"./FieldError-DI7Xo_Io.js";import"./Text-BArB5QvF.js";import"./Text-BXvNDZo-.js";const q={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Sök efter en person'
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Sök efter "secret"',
    validate: (value: string) => value === 'secret' ? 'Sök inte efter hemligheter' : true
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Sök efter dokument',
    isInvalid: true,
    errorMessage: 'Något gick fel, var god försök igen'
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Sök efter dokument',
    isDisabled: true
  }
}`,...o.parameters?.docs?.source}}};const w=["Primary","CustomValidation","Invalid","Disabled"];export{r as CustomValidation,o as Disabled,t as Invalid,e as Primary,w as __namedExportsOrder,q as default};
