import{S as s}from"./SearchField-isqSc5_G.js";import"./iframe-DpimZ4vu.js";import"./preload-helper-Ct5FWWRu.js";import"./TextField.module-DGUQcbB9.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-Dm6fk6wz.js";import"./utils-sUShH4Zp.js";import"./useLocalizedStringFormatter-k2WHvzo2.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-Ba0HfLu6.js";import"./useFocusRing-Cvk1I5yA.js";import"./index-BFp4dbMl.js";import"./index-DXLavACN.js";import"./useFormValidation-C8ab9TDZ.js";import"./useField-CyRcp8lA.js";import"./Button-BlvOxMDL.js";import"./Hidden-D8U0ds-5.js";import"./useLabels-QQqtllqV.js";import"./useButton-DLLjkHVB.js";import"./search-NFUBzd7y.js";import"./createLucideIcon-2ltAEOx8.js";import"./Button-CAiuqkSW.js";import"./Button.module-CtQ1deO8.js";import"./x-D4VC0369.js";import"./useLocalizedStringFormatter-BuRxbTNW.js";import"./FieldError-yhW5HiV-.js";import"./Text-BU40xBzY.js";import"./Text-HCdZ9zIX.js";const T={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
