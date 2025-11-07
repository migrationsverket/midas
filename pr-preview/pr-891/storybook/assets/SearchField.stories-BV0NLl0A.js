import{S as s}from"./SearchField-DtSzipSS.js";import"./iframe-CNb7O3fM.js";import"./preload-helper-Ct5FWWRu.js";import"./TextField.module-DGUQcbB9.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-DD-yjPuv.js";import"./utils-D0vAnsQi.js";import"./useLocalizedStringFormatter-BEOuTl9U.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-OrmVOGp2.js";import"./useFocusRing-92_f-Cnn.js";import"./index-DNw74xlK.js";import"./index-TauKm_TR.js";import"./useFormValidation-BuLzsVDi.js";import"./useField-scaQtCkp.js";import"./Button-C3beaqZU.js";import"./Hidden-DQksNeyO.js";import"./useLabels-BMdYA1hN.js";import"./useButton-BknTUIzA.js";import"./search-8SJod_zH.js";import"./createLucideIcon-DJgDtxVY.js";import"./Button-B4oa6PJg.js";import"./Button.module-CtQ1deO8.js";import"./x-TcNfQOEz.js";import"./useLocalizedStringFormatter-CicGHgzn.js";import"./FieldError-B18HvADb.js";import"./Text-bNJPpR3N.js";import"./Text-IpU7O3G7.js";const T={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
