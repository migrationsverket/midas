import{S as s}from"./SearchField-DBGEeBsg.js";import"./iframe-DRiJSY7M.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DdivwlC8.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-BP1yiS2k.js";import"./utils-BJDSFOW5.js";import"./useLocalizedStringFormatter-BbfEnz-t.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DZGYskYH.js";import"./useFocusRing-B6J0ruRj.js";import"./index-9zNSRqxn.js";import"./index-BQ1pxiFP.js";import"./useFormValidation-BivglJc0.js";import"./useField-DFiBvVn6.js";import"./Button-BUgilED8.js";import"./Hidden-qasJP2Cu.js";import"./useLabels-mUQxQX-2.js";import"./useButton-0YT_Gb4U.js";import"./search-BEchcDm7.js";import"./createLucideIcon-Dzsyexy7.js";import"./ClearButton-BYXNu9xY.js";import"./Button-G02mwiay.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-CxYPA09E.js";import"./VisuallyHidden-K6FaPgYL.js";import"./x-CBVQBqGf.js";import"./FieldError-BjsiVnPf.js";import"./Text-X4vUYIPT.js";import"./Text-B3YlrlLH.js";const q={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
