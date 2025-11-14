import{S as s}from"./SearchField-BX9cFuuG.js";import"./iframe-DZEIteCN.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-1-_3qsJZ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-BuIMy712.js";import"./utils-eXp6hAHi.js";import"./useLocalizedStringFormatter-D6LBwpE0.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DFsYXydC.js";import"./useFocusRing-TrwNJxcu.js";import"./index-DKBVfWmd.js";import"./index-hdIbQAxi.js";import"./useFormValidation-WsqUix1q.js";import"./useField-VRRBZlgt.js";import"./Button-DNUZR8YI.js";import"./Hidden-GV6GWw5Y.js";import"./useLabels-jjULFaK5.js";import"./useButton-BciHUgcd.js";import"./search-MHM8h3ce.js";import"./createLucideIcon-8k5sNgIw.js";import"./Button-CX_w9LKp.js";import"./Button.module-CtQ1deO8.js";import"./x-Cku9hc0_.js";import"./useLocalizedStringFormatter-CfhNe-rq.js";import"./FieldError-ChK9olYH.js";import"./Text-Cc24C9N6.js";import"./Text-DBxfC0s8.js";const T={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
