import{S as s}from"./SearchField-8fnQ_Z0X.js";import"./iframe-B3cZlMLq.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-1-_3qsJZ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-BjN-icKh.js";import"./utils-C2IA6zAi.js";import"./useLocalizedStringFormatter-BxBaRmG-.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-c3tpRuHu.js";import"./useFocusRing-Dkrn5RRD.js";import"./index-pKcy2ErU.js";import"./index-D2uszoET.js";import"./useFormValidation-DpSJBzg9.js";import"./useField-bNv-bTy9.js";import"./Button-D5tqtILh.js";import"./Hidden-qU92wu5k.js";import"./useLabels-gayIneyO.js";import"./useButton-DYFBzz8O.js";import"./search-DRATlvVz.js";import"./createLucideIcon-cIeaTryR.js";import"./Button-D3BwvYvD.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-ChaREiKB.js";import"./VisuallyHidden-DFgNwsT9.js";import"./x-Bh2TZMn2.js";import"./FieldError-CwMfAejD.js";import"./Text-BDM3k8gp.js";import"./Text-DMP_bw7r.js";const j={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
