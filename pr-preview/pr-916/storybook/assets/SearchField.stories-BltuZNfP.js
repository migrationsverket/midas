import{S as s}from"./SearchField-ZgNAtC5Y.js";import"./iframe-ylZf3Rzh.js";import"./preload-helper-Ct5FWWRu.js";import"./TextField.module-DGUQcbB9.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-Cl9-8Wdt.js";import"./utils-D06pAXX_.js";import"./useLocalizedStringFormatter-CDM70I-6.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-C7uk9wws.js";import"./useFocusRing-Bo93gYby.js";import"./index-Bq-vAhim.js";import"./index-Crjclm7s.js";import"./useFormValidation-DQYvxRz3.js";import"./useField-BvB7zQrO.js";import"./Button-DhYk_hW2.js";import"./Hidden-CalmMv23.js";import"./useLabels-Bxulg4qY.js";import"./useButton-C5dBSQLo.js";import"./search-jTQtuuZC.js";import"./createLucideIcon-9MEtXIpu.js";import"./Button-DIVvbVZE.js";import"./Button.module-CtQ1deO8.js";import"./x-8CDfFUmn.js";import"./useLocalizedStringFormatter-snId5igW.js";import"./FieldError-DTCUMNT4.js";import"./Text-Db7o3Fbo.js";import"./Text-8r5M_h2W.js";const T={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
