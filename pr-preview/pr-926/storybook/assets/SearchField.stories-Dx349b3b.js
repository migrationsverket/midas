import{S as s}from"./SearchField-8AKD1s3Z.js";import"./iframe-DlRnEK4k.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-1-_3qsJZ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-RvjSpX79.js";import"./utils-D3WMCmhi.js";import"./useLocalizedStringFormatter-DyH7cYn1.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BVqKXUSF.js";import"./useFocusRing-CtQv74MI.js";import"./index-jCSvyxP9.js";import"./index-DJo1NE8t.js";import"./useFormValidation-u37mcFJ1.js";import"./useField-D4h3c7yb.js";import"./Button-BVP44qrj.js";import"./Hidden-Xdwaye0t.js";import"./useLabels-CqwaHALx.js";import"./useButton-BqQtdQbm.js";import"./search-KdEU-cuL.js";import"./createLucideIcon-BrQGCJQG.js";import"./Button-DGJbzUQa.js";import"./Button.module-CtQ1deO8.js";import"./x-CreUOsvr.js";import"./useLocalizedStringFormatter-CMmOeTrS.js";import"./FieldError-ByTImbG0.js";import"./Text-DzhCPMX9.js";import"./Text-pxXmd_kg.js";const T={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
