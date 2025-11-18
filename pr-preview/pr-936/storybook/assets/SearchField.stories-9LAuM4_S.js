import{S as s}from"./SearchField-DANGZPAQ.js";import"./iframe-DL0cr3No.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-1-_3qsJZ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-oFMNdbap.js";import"./utils-BUc-cOn8.js";import"./useLocalizedStringFormatter-YyaJr3k3.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-CIP6F1s7.js";import"./useFocusRing-CUC21zm9.js";import"./index-RgupsUkd.js";import"./index-D6BEsua6.js";import"./useFormValidation-B1jylFA2.js";import"./useField-M8QTnn6A.js";import"./Button-B1jV44pP.js";import"./Hidden-pim-7Fp3.js";import"./useLabels-BC5LH5iw.js";import"./useButton-Bc5mEHZW.js";import"./search-DFB7lEcZ.js";import"./createLucideIcon-CtVHrRwE.js";import"./Button-BJrL0Zus.js";import"./Button.module-CtQ1deO8.js";import"./x-BkuPOkXI.js";import"./useLocalizedStringFormatter-BelfBJw5.js";import"./FieldError-CSzLSbH0.js";import"./Text-BZY7tPCZ.js";import"./Text-B4js3SUR.js";const T={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
