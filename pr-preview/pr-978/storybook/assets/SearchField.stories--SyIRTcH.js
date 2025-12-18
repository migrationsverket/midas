import{S as s}from"./SearchField-B07fqHIF.js";import"./iframe-BgZjYXda.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-CgqiUiYQ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-BOn_mVp6.js";import"./utils-D0CD63H9.js";import"./useLocalizedStringFormatter-CBItuOna.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-Bvhh3F0C.js";import"./useFocusRing-BCl8bI7q.js";import"./index-DsdCiTSh.js";import"./index-MXE8Cyql.js";import"./useFormValidation-DTSDYxU2.js";import"./useField-CibIDzOa.js";import"./Button-BEN3V4yN.js";import"./Hidden-CxgDdtDK.js";import"./useLabels-B7Wr4Ixw.js";import"./useButton-GZvAYJ-B.js";import"./search-Dnm7qhnc.js";import"./createLucideIcon-BhiKWk6O.js";import"./Button-C93M6E-Z.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-wqfGz20J.js";import"./VisuallyHidden--CMfLrKZ.js";import"./x-CxMc9Wke.js";import"./FieldError-B_6bKRLN.js";import"./Text-BdUrBZw-.js";import"./Text-CRywFydi.js";const j={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
