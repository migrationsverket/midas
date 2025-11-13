import{S as s}from"./SearchField-BgkQHAc_.js";import"./iframe-Bj-I_53F.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-1-_3qsJZ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-C7UYN2s_.js";import"./utils-AYBXNHWH.js";import"./useLocalizedStringFormatter-DCLhEoY8.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-CC_jrgcP.js";import"./useFocusRing-3Uqdh2tR.js";import"./index-Cr9mSzEt.js";import"./index-DRLQ3B3R.js";import"./useFormValidation-DawZfh6P.js";import"./useField-Co9IJsjf.js";import"./Button-CYD4aiPQ.js";import"./Hidden-C4NKfEwd.js";import"./useLabels-R0WNnhTM.js";import"./useButton--bsyIudm.js";import"./search-CYNjydMB.js";import"./createLucideIcon-DCE2q9z-.js";import"./Button-DjY0cfru.js";import"./Button.module-CtQ1deO8.js";import"./x-DP9rj5I0.js";import"./useLocalizedStringFormatter-BN1MB58D.js";import"./FieldError-QaZ2d8uP.js";import"./Text-DOZw3K2Z.js";import"./Text-BW7nmiG_.js";const T={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
