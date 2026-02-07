import{S as s}from"./SearchField-CV7yr1hO.js";import"./iframe-CxuIO7a7.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DpzeWGpt.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-CkPJQRbj.js";import"./utils-CXGq3B-b.js";import"./useLocalizedStringFormatter-CU3oIUiy.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DkRYEP4M.js";import"./useFocusRing-B6J0mh3g.js";import"./index-DUo9Y50I.js";import"./index-gnxrYTyY.js";import"./useFormValidation-Csa25t6B.js";import"./useField-DWmTECu8.js";import"./Button-DRAmhx2z.js";import"./Hidden-BA1jWOK0.js";import"./useLabels-HWrLLSK0.js";import"./useButton-D-iZZiOo.js";import"./search-jxusMEIt.js";import"./createLucideIcon-CDa9bc5n.js";import"./ClearButton-OQyyTq9v.js";import"./Button-BYXk57rI.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-D0rrceAj.js";import"./VisuallyHidden-aHkENNoL.js";import"./x-B251onrY.js";import"./FieldError-94aBjoZy.js";import"./Text-DdhSqAlM.js";import"./Text-DcyHZz0V.js";const q={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
