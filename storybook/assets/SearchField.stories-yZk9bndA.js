import{S as s}from"./SearchField-prqsgjB0.js";import"./iframe-EoEhw5Zh.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DdivwlC8.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-cFso-qT1.js";import"./utils-9vpvreaM.js";import"./useLocalizedStringFormatter-SZJWhWFc.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-Dwc5-RtS.js";import"./useFocusRing-DMgSEdD4.js";import"./index-Dr8ff7Yx.js";import"./index-BnBZZEud.js";import"./useFormValidation-BEz7E7z8.js";import"./useField-CmCZJ2oU.js";import"./Button-DjmrYvse.js";import"./Hidden-CX87kr-j.js";import"./useLabels-CyiNSM6o.js";import"./useButton-CoeBifMi.js";import"./search-BqCywecX.js";import"./createLucideIcon-mCwC6Qs_.js";import"./ClearButton-CNkkPd6i.js";import"./x-D6rw-x5f.js";import"./Button-y454-6pk.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-Crb0wUWJ.js";import"./VisuallyHidden-q1pwiIQH.js";import"./FieldError-D-MKG4ii.js";import"./Text-DXp13W0h.js";import"./Text-D9CNFP89.js";const q={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
