import{S as s}from"./SearchField-6ZH__pzO.js";import"./iframe-CmqPL-ve.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DdivwlC8.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-DSdzAD24.js";import"./utils-SAP-OCBT.js";import"./useLocalizedStringFormatter-B-4EZhTm.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField--OhJxVk7.js";import"./useFocusRing-C_UBzR4Z.js";import"./index-D6miHDB-.js";import"./index-BBGo7RoQ.js";import"./useFormValidation-DGYf2tyw.js";import"./useField-CWYy_yBm.js";import"./Button-9NJzBnLU.js";import"./Hidden-C_mQN8s6.js";import"./useLabels-Bi-sZgxK.js";import"./useButton-CQub_DYW.js";import"./search-DzlF7hkU.js";import"./createLucideIcon-s6c-d0_0.js";import"./ClearButton-CU0ltLs2.js";import"./x-B30kXvjA.js";import"./Button-M655P-gZ.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-BKe91JX1.js";import"./VisuallyHidden-DSb_BfCD.js";import"./FieldError-6cTdJ_Za.js";import"./Text-DLxMYZ1_.js";import"./Text-9ERWHN0X.js";const q={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
