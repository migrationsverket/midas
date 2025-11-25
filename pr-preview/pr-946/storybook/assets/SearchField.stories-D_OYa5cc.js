import{S as s}from"./SearchField-Dm_i0YGS.js";import"./iframe-Dme4aFdT.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-1-_3qsJZ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-BetURhw8.js";import"./utils-RWkis8G9.js";import"./useLocalizedStringFormatter-CkiUW1JU.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-CqpmIQFK.js";import"./useFocusRing-DWu_JWOd.js";import"./index-C7JOf_RQ.js";import"./index-C6e9A8g1.js";import"./useFormValidation-Cu9FWwIg.js";import"./useField-oEkr_deD.js";import"./Button-XAFJZG3z.js";import"./Hidden-C10E5C8v.js";import"./useLabels-Cct5OOSs.js";import"./useButton-DF_MCZ4k.js";import"./search-DdJGBDxs.js";import"./createLucideIcon-CNaULXtJ.js";import"./Button-DKWrf8rk.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-Dx4ypEyW.js";import"./VisuallyHidden-C5B2ZvOk.js";import"./x-tPwbUnSI.js";import"./FieldError-D1kPuc3v.js";import"./Text-CMIivFWB.js";import"./Text-gw1qxFi7.js";const j={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
