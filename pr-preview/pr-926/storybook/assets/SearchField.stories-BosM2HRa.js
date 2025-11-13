import{S as s}from"./SearchField-CMy2lYNZ.js";import"./iframe-FtEa7VQj.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-1-_3qsJZ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-CCkxZ5nC.js";import"./utils-COfxaHf8.js";import"./useLocalizedStringFormatter-iKxxmVnK.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-COuSDOkd.js";import"./useFocusRing-D8XlJGR3.js";import"./index-DAEPIqsi.js";import"./index-loZrsOH8.js";import"./useFormValidation-CZtyidDU.js";import"./useField-Bzl4_aAY.js";import"./Button-Dqxngb1_.js";import"./Hidden-DvRPXbsY.js";import"./useLabels-BKIUEpC2.js";import"./useButton-cS6iWc3P.js";import"./search-B-c9rGi_.js";import"./createLucideIcon-BFKkZNi-.js";import"./Button-BHyJkgwt.js";import"./Button.module-CtQ1deO8.js";import"./x-DiP6oz7r.js";import"./useLocalizedStringFormatter-DEPSzweY.js";import"./FieldError-ClKp2imH.js";import"./Text-ESAF9nxg.js";import"./Text-DiMsQpYZ.js";const T={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
