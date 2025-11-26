import{S as s}from"./SearchField-DluJbDG2.js";import"./iframe-g7NEJkuC.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-1-_3qsJZ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-BfrgZwaU.js";import"./utils-0G2rZpWX.js";import"./useLocalizedStringFormatter-Ck5RdZog.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DPgzgftV.js";import"./useFocusRing-umR6fa2b.js";import"./index-CHObnUG4.js";import"./index-D3ZTBEsf.js";import"./useFormValidation-pQBCJ-I-.js";import"./useField-TSEdftWR.js";import"./Button-DLz7qxXY.js";import"./Hidden-D0w2WJXS.js";import"./useLabels-CaMMn4xN.js";import"./useButton-DLlC1wR-.js";import"./search-CJBWFSHz.js";import"./createLucideIcon-968lwoO8.js";import"./Button-wkNo0dzg.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-BH3Jo7uS.js";import"./VisuallyHidden-DsC2d4kL.js";import"./x-BwjZIwdP.js";import"./FieldError-BxotCqXX.js";import"./Text-2wl8S3yv.js";import"./Text-COXbJ1k6.js";const j={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
