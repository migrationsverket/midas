import{S as s}from"./SearchField-CAnkD2G0.js";import"./iframe-DXZswXcd.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-1-_3qsJZ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-CJ_efx1W.js";import"./utils-Cf0-1u65.js";import"./useLocalizedStringFormatter-LFtnKqVA.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-CtfY75Pr.js";import"./useFocusRing-BG9tZgKA.js";import"./index-Crv0Q4vS.js";import"./index-C1YRI8qY.js";import"./useFormValidation-BEgmi4Gj.js";import"./useField-DOslAXN9.js";import"./Button-D1-arsKK.js";import"./Hidden-DHOmIzAb.js";import"./useLabels-DwvLFUwE.js";import"./useButton-C6Wl-MUd.js";import"./search-CvVZIsD5.js";import"./createLucideIcon-Jyt4-ntd.js";import"./Button-AcRXejUz.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-BQ5mUNua.js";import"./VisuallyHidden-BQhZj104.js";import"./x-B9aDcILT.js";import"./FieldError-BvKOTYSn.js";import"./Text-nnXd3bBi.js";import"./Text-BGzfgZXL.js";const j={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
