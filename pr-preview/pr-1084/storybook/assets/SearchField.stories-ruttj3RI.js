import{S as s}from"./SearchField-BmlHxl6O.js";import"./iframe-BpGtKQe1.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DdivwlC8.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-MlmZVz50.js";import"./utils-BKq0-BjK.js";import"./useLocalizedStringFormatter-ByTL2pAC.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-B6DY9W_n.js";import"./useFocusRing-DM78EYAE.js";import"./index-WHmZXjR5.js";import"./index-A40XJ3N3.js";import"./useFormValidation-DkBdVNDk.js";import"./useField-CWTTVHZk.js";import"./Button-C7_RBjc4.js";import"./Hidden-C6AmhJiF.js";import"./useLabels-Bl-mky30.js";import"./useButton-eFtWSIwf.js";import"./search-o1Ao4ql0.js";import"./createLucideIcon-Bd7t5Cp9.js";import"./ClearButton-D05E4U_V.js";import"./Button-D8xW_9uS.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-DTV9lzwh.js";import"./VisuallyHidden-BXvACDV4.js";import"./x-CUMp7a-i.js";import"./FieldError-CvO6Yv2r.js";import"./Text-Bsc-Zvgg.js";import"./Text-DVPUkm5u.js";const q={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
