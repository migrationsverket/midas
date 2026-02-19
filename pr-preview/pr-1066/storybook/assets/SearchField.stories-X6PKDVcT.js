import{S as s}from"./SearchField-CIEWC9n6.js";import"./iframe-BWxdoVbq.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DBQiRr7K.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-FuJuatlB.js";import"./utils-BnYb9Hw4.js";import"./useLocalizedStringFormatter-CqDQSu3W.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DP8Mhr5R.js";import"./useFocusRing-DPldp525.js";import"./index-DG33oO9s.js";import"./index-DTDl1n2p.js";import"./useFormValidation-DNc0NnIZ.js";import"./useField-DHj-Ewwt.js";import"./Button-ccQsUA8n.js";import"./Hidden-Cxs9AA6g.js";import"./useLabels-CAVv4we_.js";import"./useButton-CdcPrfen.js";import"./search-CvXfzL66.js";import"./createLucideIcon-BPWVcFpY.js";import"./ClearButton-BFYJ2TWV.js";import"./Button-DObiC3sf.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DEH2FHS3.js";import"./VisuallyHidden-Sp8_SWOf.js";import"./x-BJpOH67y.js";import"./FieldError-CxzGL3jS.js";import"./Text-dn5dCY6n.js";import"./Text-DGZxErjX.js";const q={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};const w=["Primary","CustomValidation","Invalid","Disabled"];export{r as CustomValidation,o as Disabled,t as Invalid,e as Primary,w as __namedExportsOrder,q as default};
