import{S as s}from"./SearchField-DyvUvVvi.js";import"./iframe-C2syMjcx.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-1-_3qsJZ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-DcPxF_iu.js";import"./utils-NPw_IpSj.js";import"./useLocalizedStringFormatter-BaZve-XC.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DggaPNad.js";import"./useFocusRing-BTCdOLkE.js";import"./index-kesApnNk.js";import"./index-D9WKceHM.js";import"./useFormValidation-C0k6ZwBy.js";import"./useField-BbLW6q43.js";import"./Button-q8T4B1eY.js";import"./Hidden-D_ZXlJ-E.js";import"./useLabels-CxTL3OJE.js";import"./useButton-Cq9o22NE.js";import"./search-DleWEg_k.js";import"./createLucideIcon-Cx2M3zR4.js";import"./Button-DFdezlA2.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-CVow8Wj7.js";import"./VisuallyHidden-CT7-H4Xi.js";import"./x-CNQ7hU2a.js";import"./FieldError-M6Mt7RYl.js";import"./Text-BzSdjjAy.js";import"./Text-CW1-kOgu.js";const j={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
