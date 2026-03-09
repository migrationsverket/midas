import{S as s}from"./SearchField-C5kdTgQF.js";import"./iframe-C7bjyZwM.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DdivwlC8.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-D62BjFgf.js";import"./utils-CIiQPwyX.js";import"./useLocalizedStringFormatter-BA72XhLM.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DxO_Ht67.js";import"./useFocusRing-5twuRh50.js";import"./index-BcQ7-9aJ.js";import"./index-Dy0iqIGJ.js";import"./useFormValidation-BWm46lJU.js";import"./useField-CpAfE4lc.js";import"./Button-C2JLJi6L.js";import"./Hidden-aFyf7gu8.js";import"./useLabels-B0ZdbmeW.js";import"./useButton-JOi2-Sum.js";import"./search-D8a6F2y5.js";import"./createLucideIcon-C5pih5R6.js";import"./ClearButton-C_fpAgsA.js";import"./Button-B0ce8tXc.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-CRvjyLqR.js";import"./VisuallyHidden-B7bbQpVf.js";import"./x-nSKEkmzv.js";import"./FieldError-BXfQY4zD.js";import"./Text-BJaGdqWL.js";import"./Text-C5NeNGM2.js";const q={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
