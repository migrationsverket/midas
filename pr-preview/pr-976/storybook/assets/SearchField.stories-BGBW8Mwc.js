import{S as s}from"./SearchField-jlvSUE84.js";import"./iframe-BEnukkSz.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-CgqiUiYQ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-rz1_euMV.js";import"./utils-BbU1CVYT.js";import"./useLocalizedStringFormatter-BYVAgv0U.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-CNO5IBaR.js";import"./useFocusRing-CoFg4iIP.js";import"./index-CsvThf5c.js";import"./index-XX1rAQcD.js";import"./useFormValidation-DeA6ARBW.js";import"./useField-DblSzxct.js";import"./Button-BqfWUXxO.js";import"./Hidden-B9TQXGL0.js";import"./useLabels-ugYGghQ_.js";import"./useButton-D_d4gnP9.js";import"./search-BDgGQIOY.js";import"./createLucideIcon-duiEOPcW.js";import"./Button-Dm5kz4rE.js";import"./Button.module-D9QkU2r7.js";import"./useLocalizedStringFormatter-CMLQkYUH.js";import"./VisuallyHidden-CJIG9rle.js";import"./x-CoXyzLMZ.js";import"./FieldError-Bwl06kWX.js";import"./Text-DeqrOkdQ.js";import"./Text-t8HEv2as.js";const j={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
