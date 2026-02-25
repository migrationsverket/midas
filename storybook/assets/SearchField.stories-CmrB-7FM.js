import{S as s}from"./SearchField-CdUqjiQr.js";import"./iframe-H2fTZ2nq.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DdivwlC8.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-CgUQbm6f.js";import"./utils-DW5ctycD.js";import"./useLocalizedStringFormatter-CY6ZTepc.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-Dk4GdbuG.js";import"./useFocusRing-rY5-5oYI.js";import"./index-CIV3byj9.js";import"./index-CSi78BJY.js";import"./useFormValidation-DMoO2kJv.js";import"./useField-BMix6HQr.js";import"./Button-Thvc77gT.js";import"./Hidden-4IKYQ2HC.js";import"./useLabels-CTAJFpqt.js";import"./useButton-Ch9WkEmD.js";import"./search-B0GeXRuY.js";import"./createLucideIcon-DiZz3DHh.js";import"./ClearButton-C6w4mDjZ.js";import"./Button-wmHwb-lN.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-CfxXtKTH.js";import"./VisuallyHidden-h3OxpH0T.js";import"./x-S0-Uc0vp.js";import"./FieldError-Ze_QYnbw.js";import"./Text-DSNt7iu3.js";import"./Text-K2RkR5q1.js";const q={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
