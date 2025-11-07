import{S as s}from"./SearchField-BUcDvEO_.js";import"./iframe-vLU3ZPRp.js";import"./preload-helper-Ct5FWWRu.js";import"./TextField.module-DGUQcbB9.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-ByKlwbeC.js";import"./utils-DhZrwm_O.js";import"./useLocalizedStringFormatter-ClxqUl6z.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-UseI2f2P.js";import"./useFocusRing-Bdvv7-N7.js";import"./index-CXkLaqV8.js";import"./index-C_9Z2w_o.js";import"./useFormValidation-Ce41O5Wr.js";import"./useField-BkORJVKr.js";import"./Button-BF62bU3H.js";import"./Hidden-C166yhsD.js";import"./useLabels-B_0ZYLKk.js";import"./useButton-CfBERvKC.js";import"./search-1nP25AiG.js";import"./createLucideIcon-B9fGN9f3.js";import"./Button-CXmMlpXW.js";import"./Button.module-CtQ1deO8.js";import"./x-QToY_gZ3.js";import"./useLocalizedStringFormatter-BSTjQpQD.js";import"./FieldError-CZDoRijc.js";import"./Text-DgAlTZx7.js";import"./Text-UPxG90YY.js";const T={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
