import{S as s}from"./SearchField-DWQIsKzz.js";import"./iframe-sg9dJLsH.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-1-_3qsJZ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-gOtQm8WB.js";import"./utils-CuYvAqJx.js";import"./useLocalizedStringFormatter-mDQ95DtQ.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-B6sqZEPf.js";import"./useFocusRing-CEQfJAUz.js";import"./index-Csa_AQe7.js";import"./index-6sLC6slB.js";import"./useFormValidation-DNlbGXcC.js";import"./useField-CH0W7eg0.js";import"./Button-BKCBYEjA.js";import"./Hidden-CxJfSG1h.js";import"./useLabels-Coj_Gh5d.js";import"./useButton-BnqHgeWw.js";import"./search-DiUwVwo9.js";import"./createLucideIcon-CR8l7k0W.js";import"./Button-B-3midel.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-oI-bADgc.js";import"./VisuallyHidden-BZkmQQPq.js";import"./x-BuVDIX29.js";import"./FieldError-BrQNt60r.js";import"./Text-1XpSl3_S.js";import"./Text-qPBHnq8h.js";const j={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
