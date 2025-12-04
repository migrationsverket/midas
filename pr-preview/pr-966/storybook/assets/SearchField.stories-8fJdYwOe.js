import{S as s}from"./SearchField-Dcou3SDA.js";import"./iframe-DfJuQE8m.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-CgqiUiYQ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-eRrBZcf1.js";import"./utils-DhOIe8g4.js";import"./useLocalizedStringFormatter-DiGWatbI.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-Rr4wsSyH.js";import"./useFocusRing-DEOWgYwB.js";import"./index-CQALj8IV.js";import"./index-BkqquRj0.js";import"./useFormValidation-jGn96_h-.js";import"./useField-BJyW5WxN.js";import"./Button-C1h3qiWM.js";import"./Hidden-L0FDO2bN.js";import"./useLabels-ukq135hJ.js";import"./useButton-D5urjP3V.js";import"./search-Mcve5tXm.js";import"./createLucideIcon-Bek8kOw5.js";import"./Button-DUMkSbLt.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CAe3Ejvu.js";import"./VisuallyHidden-Cs6c7lY9.js";import"./x-CHMzvCCf.js";import"./FieldError-C1ud7pvY.js";import"./Text-BE6FOv1W.js";import"./Text-C0meLp2u.js";const j={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
