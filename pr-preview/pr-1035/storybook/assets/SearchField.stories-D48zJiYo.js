import{S as s}from"./SearchField-CdpuOCKB.js";import"./iframe-BWc43a1O.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DpzeWGpt.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-2cnZjxyB.js";import"./utils-39kWX_LE.js";import"./useLocalizedStringFormatter-RWz-MW4O.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-D_5CY7gJ.js";import"./useFocusRing-C4VyUsZg.js";import"./index-CLPYF8fa.js";import"./index-CGp4UFbQ.js";import"./useFormValidation-AEiBswFt.js";import"./useField-Brc245Bn.js";import"./Button-D8sshy66.js";import"./Hidden-CJZ0JVr6.js";import"./useLabels-Cx5jYDxX.js";import"./useButton-DMB5d1hu.js";import"./search-O48MJkMW.js";import"./createLucideIcon-CFy2YlCm.js";import"./ClearButton-BB_ZKQAX.js";import"./Button-Dko06iif.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-BwtwStJt.js";import"./VisuallyHidden-BkExIDrJ.js";import"./x-BymJwMBN.js";import"./FieldError-B8r7qfMZ.js";import"./Text-DAytGxCt.js";import"./Text-BcD4jl1C.js";const q={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
