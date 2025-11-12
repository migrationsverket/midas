import{S as s}from"./SearchField-3lMtaGD4.js";import"./iframe-D7Zuc-eZ.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-1-_3qsJZ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-DIhMi3rJ.js";import"./utils-BiMXr0U2.js";import"./useLocalizedStringFormatter-DxUzIujy.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-CJouXrYa.js";import"./useFocusRing-B1DA-kmZ.js";import"./index-P0vLAtIQ.js";import"./index-Dzd6xkVH.js";import"./useFormValidation-BWUsfsfP.js";import"./useField-CA4s6n78.js";import"./Button-DK5fi9wQ.js";import"./Hidden-D0GIwlxM.js";import"./useLabels-cw0VgUfo.js";import"./useButton-UDg4Vaiu.js";import"./search-4QFJsage.js";import"./createLucideIcon-BQQxESn4.js";import"./Button-4Dy92-64.js";import"./Button.module-CtQ1deO8.js";import"./x-BKMZouJb.js";import"./useLocalizedStringFormatter-CI8X4Tw9.js";import"./FieldError-CPRxs1lF.js";import"./Text-CwUj7ln9.js";import"./Text-D6rxf28L.js";const T={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
