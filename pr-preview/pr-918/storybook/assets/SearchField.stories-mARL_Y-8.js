import{S as s}from"./SearchField-Dob-YVq2.js";import"./iframe-D2cP6F3a.js";import"./preload-helper-Ct5FWWRu.js";import"./TextField.module-DGUQcbB9.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-DiQVtu_9.js";import"./utils-CYJ56a8d.js";import"./useLocalizedStringFormatter-p6d-BWaj.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DJJK6v3m.js";import"./useFocusRing-CsKyeFC3.js";import"./index-A2jXSN8N.js";import"./index-D5U9Enu4.js";import"./useFormValidation-DIv14Bs9.js";import"./useField-DcPBr2th.js";import"./Button-BdbvQjYI.js";import"./Hidden-CdI2XBpM.js";import"./useLabels-Ml9cK1SD.js";import"./useButton-BE931KVW.js";import"./search-RPVF-eeZ.js";import"./createLucideIcon-_SNHOGNJ.js";import"./Button-C8E-6QCz.js";import"./Button.module-CtQ1deO8.js";import"./x-PLqZwYbr.js";import"./useLocalizedStringFormatter-BVfbfq2Q.js";import"./FieldError-C0d-xSA7.js";import"./Text-uTyTF2xO.js";import"./Text-7-ZoUH1T.js";const T={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
