import{S as s}from"./SearchField-BVZhz_qq.js";import"./iframe-CHZFuQnS.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DGUQcbB9.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-BUxHgcPu.js";import"./utils-BMim5o3v.js";import"./useLocalizedStringFormatter-ByyIuzas.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-SKQiUmBv.js";import"./useFocusRing-CavgNYvf.js";import"./index-w7Yupy6f.js";import"./index-CDEgt3K9.js";import"./useFormValidation-BX4gxdZw.js";import"./useField-D6WqRLMl.js";import"./Button-UHVq7cxV.js";import"./Hidden-cAwEj1a8.js";import"./useLabels-BBjpyqdS.js";import"./useButton-BIaKLlnn.js";import"./search-B7fSqBV8.js";import"./createLucideIcon-EluUf1Sj.js";import"./Button-CKnin4O7.js";import"./Button.module-CtQ1deO8.js";import"./x-CLn_wROP.js";import"./useLocalizedStringFormatter-J_3FYVXR.js";import"./FieldError-B-mi-Hc9.js";import"./Text-Dd_mwADg.js";import"./Text-BMVuAeY2.js";const T={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
