import{S as s}from"./SearchField-BS7R0UhG.js";import"./iframe-xQKE6wa6.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-1-_3qsJZ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-DfGN0GbI.js";import"./utils-7domtJUf.js";import"./useLocalizedStringFormatter-B7SsWOnS.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-CVfECSUB.js";import"./useFocusRing-1X-zoPws.js";import"./index-DKS5doAt.js";import"./index-DrDygLFm.js";import"./useFormValidation-BXZDXhHG.js";import"./useField-CSryOIk-.js";import"./Button-Bt7XBPAl.js";import"./Hidden-tXn6HuYt.js";import"./useLabels-D4MCwU7s.js";import"./useButton-DqqVSO88.js";import"./search-zLqizT7m.js";import"./createLucideIcon-CCTWRIL7.js";import"./Button-V66Mfsaz.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-C_k1kBfl.js";import"./VisuallyHidden-CWmr-2Og.js";import"./x-BPGViDSS.js";import"./FieldError-BacFZILj.js";import"./Text-D5teWlx5.js";import"./Text-Z6s--rdv.js";const j={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};const q=["Primary","CustomValidation","Invalid","Disabled"];export{r as CustomValidation,o as Disabled,t as Invalid,e as Primary,q as __namedExportsOrder,j as default};
