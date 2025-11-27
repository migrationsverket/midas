import{S as s}from"./SearchField-BgqsV_Sq.js";import"./iframe-Db2uI-3P.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-1-_3qsJZ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-CZZXp4YV.js";import"./utils-jUY8qSDP.js";import"./useLocalizedStringFormatter-3OqgJ0pn.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-Dr2UGFVi.js";import"./useFocusRing-CebZnfE_.js";import"./index-CVj3Bmq5.js";import"./index-Bysub-x3.js";import"./useFormValidation-D_AAXofS.js";import"./useField-D6ASrV9v.js";import"./Button-DMQEpNPi.js";import"./Hidden-DjwTIE0a.js";import"./useLabels-DN0FLkUT.js";import"./useButton-D_S8tzc1.js";import"./search-CO9packl.js";import"./createLucideIcon-BFgY7rx4.js";import"./Button-Cc1zKl5-.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-CXXYPB7Q.js";import"./VisuallyHidden-BhcBefFA.js";import"./x-DKfF27R2.js";import"./FieldError-4TO5MPa-.js";import"./Text-D0PoOoWm.js";import"./Text-EcRg05iA.js";const j={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
