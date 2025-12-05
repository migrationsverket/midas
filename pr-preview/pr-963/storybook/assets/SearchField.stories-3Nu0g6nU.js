import{S as s}from"./SearchField-CUUizAly.js";import"./iframe-BludVCPL.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-CgqiUiYQ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-CuHjUcW0.js";import"./utils-BoYzwdTq.js";import"./useLocalizedStringFormatter-B4WIXBM0.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-HDrFiEGA.js";import"./useFocusRing-Bo_hMFPQ.js";import"./index-nZf0-c-4.js";import"./index-CLlIRgpI.js";import"./useFormValidation-BI-Yotv_.js";import"./useField-DYGPyTTF.js";import"./Button-CjGnslnG.js";import"./Hidden-DiUQMeVN.js";import"./useLabels-CO3fVOFf.js";import"./useButton-B0B4GjtL.js";import"./search-DbxJjfxB.js";import"./createLucideIcon-DcDehA1r.js";import"./Button-BMfaash4.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-BXNZT2cC.js";import"./VisuallyHidden-vUa_tkI4.js";import"./x-asknJrjS.js";import"./FieldError-Crs15S47.js";import"./Text-DjPdOjsD.js";import"./Text-4OIt-jaA.js";const j={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
