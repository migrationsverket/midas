import{S as s}from"./SearchField-BWngJZPG.js";import"./iframe-BANheT94.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-1-_3qsJZ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-8EHg840I.js";import"./utils-CpVmviXo.js";import"./useLocalizedStringFormatter-CRsSQwk5.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-Czr5yL6z.js";import"./useFocusRing-D91tXV6i.js";import"./index-DKSwrre2.js";import"./index-Bc2dcr2L.js";import"./useFormValidation-EWuqX3DI.js";import"./useField-MGt8O-dm.js";import"./Button-AmvPyEDB.js";import"./Hidden-Dhs2zngV.js";import"./useLabels-xUlPRGkJ.js";import"./useButton-Wxvat91D.js";import"./search-B9KiiQ58.js";import"./createLucideIcon-lHZWu_Mk.js";import"./Button-CbAf7-Y_.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-BO6RGHcC.js";import"./VisuallyHidden-obCayb53.js";import"./x-B9bBhtd7.js";import"./FieldError-nlVefKur.js";import"./Text-j3VcGK0a.js";import"./Text-l44IKoDc.js";const j={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
