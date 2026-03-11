import{S as s}from"./SearchField-tkgynmQN.js";import"./iframe-BXrAfsjq.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DdivwlC8.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-CpFSzBx7.js";import"./utils-cdAGpjgV.js";import"./useLocalizedStringFormatter-A_mBW6J-.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-B5LyVcim.js";import"./useFocusRing-DgM5hB_S.js";import"./index-DX8EYVJ-.js";import"./index-Dw2cXarQ.js";import"./useFormValidation-BLxToia1.js";import"./useField-JUGchugn.js";import"./Button-By4fIxyI.js";import"./Hidden-DJwBGsVR.js";import"./useLabels-CpmKdeaa.js";import"./useButton-V4TYrtKf.js";import"./search-WQfmHsCU.js";import"./createLucideIcon-CYigPS-O.js";import"./ClearButton-Bc1cjg5-.js";import"./Button-ClxvzqtQ.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-CRM_oh5H.js";import"./VisuallyHidden-DmvbNouy.js";import"./x-D2S3wmoi.js";import"./FieldError-BVjBbXJN.js";import"./Text-aWKwJErA.js";import"./Text-DoxGzedC.js";const q={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
