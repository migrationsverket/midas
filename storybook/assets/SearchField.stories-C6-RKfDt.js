import{S as s}from"./SearchField-DAq3Psqc.js";import"./iframe-DZlNJ8S4.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-1-_3qsJZ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-CQnmbS5S.js";import"./utils-B9k6LEuL.js";import"./useLocalizedStringFormatter-DCAuiTpO.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-t8ae-k2J.js";import"./useFocusRing-Be4o6Un8.js";import"./index-DC3wIA-C.js";import"./index-DR5hiXYB.js";import"./useFormValidation-DA7hKUI3.js";import"./useField-BUkOR3W7.js";import"./Button-DZzK2L52.js";import"./Hidden-C6Hj6bpW.js";import"./useLabels-f8gjmpAz.js";import"./useButton-Zpg8HNK7.js";import"./search-BSy96PC8.js";import"./createLucideIcon-CyJv2oB_.js";import"./Button-CXMyUl9m.js";import"./Button.module-CtQ1deO8.js";import"./x-Cu3No43V.js";import"./useLocalizedStringFormatter-WQhR5XKG.js";import"./FieldError-Slpr0HzK.js";import"./Text-D4o9xbR1.js";import"./Text-CdVje7KY.js";const T={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
