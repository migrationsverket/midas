import{S as s}from"./SearchField-C8LBdZfj.js";import"./iframe-CYrC2O7n.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DdivwlC8.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-CWVzqNB6.js";import"./utils-W9KFSJyi.js";import"./useLocalizedStringFormatter-D52FmrAL.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BPInpXO5.js";import"./useFocusRing-DwhBMXNM.js";import"./index-Dd5lO-PO.js";import"./index-BE0HShMl.js";import"./useFormValidation-CYVywKCd.js";import"./useField-BuQKvOvB.js";import"./Button-BKTJlLGY.js";import"./Hidden-Cuqxaz-j.js";import"./useLabels-JnCkPdA7.js";import"./useButton-DzzAV_qM.js";import"./search-CxmZDSCB.js";import"./createLucideIcon-B2v0PGO8.js";import"./ClearButton-s_FT3Kh6.js";import"./Button-OKR0VFLl.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-CEUvbGBF.js";import"./VisuallyHidden-vjowbZXC.js";import"./x-Bso_vTII.js";import"./FieldError-Co8p2V5G.js";import"./Text-kU8vQOsb.js";import"./Text-C6dUuRFD.js";const q={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
