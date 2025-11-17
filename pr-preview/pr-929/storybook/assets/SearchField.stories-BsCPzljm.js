import{S as s}from"./SearchField-vuIhRGab.js";import"./iframe-DfKVIDFT.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-1-_3qsJZ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-D9mSLKmW.js";import"./utils-BsJ338XX.js";import"./useLocalizedStringFormatter-CRP9x8Uw.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BG0cn_vi.js";import"./useFocusRing-DqSVY-T2.js";import"./index-DmKxMGqW.js";import"./index-i8eomWHR.js";import"./useFormValidation-B6hiRjg-.js";import"./useField-BlKwpNVf.js";import"./Button-B4NKyMIN.js";import"./Hidden-DXHl2rmN.js";import"./useLabels-DK3feGvu.js";import"./useButton-C03Un9El.js";import"./search-ktHRxrEp.js";import"./createLucideIcon-B4afkyr6.js";import"./Button-BbeKBUCA.js";import"./Button.module-CtQ1deO8.js";import"./x-Dk5lZioI.js";import"./useLocalizedStringFormatter-CCU9GJU2.js";import"./FieldError-Dd8N4USr.js";import"./Text-T0mofHnw.js";import"./Text-Ds5rOpWL.js";const T={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};const j=["Primary","CustomValidation","Invalid","Disabled"];export{r as CustomValidation,o as Disabled,t as Invalid,e as Primary,j as __namedExportsOrder,T as default};
