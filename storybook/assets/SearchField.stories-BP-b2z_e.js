import{S as s}from"./SearchField-DGhKXPAg.js";import"./iframe-DyxCcCyx.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-1-_3qsJZ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-D71RWKqh.js";import"./utils-BW0-JoNA.js";import"./useLocalizedStringFormatter-z0DNDuDP.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-D9uUIfKK.js";import"./useFocusRing-V7JnXRkU.js";import"./index-Bg_Ixq-d.js";import"./index-mxOIoeQ7.js";import"./useFormValidation-Br76oWhD.js";import"./useField-DTfyaP-5.js";import"./Button-CGJ03pmK.js";import"./Hidden-VmbWRniU.js";import"./useLabels-SpNJAkxC.js";import"./useButton-DaIHAkHH.js";import"./search-DPBv9jlL.js";import"./createLucideIcon-DUhw7aDt.js";import"./Button-B8YpJpXe.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-FMsSjGTt.js";import"./VisuallyHidden-DtpJAIUo.js";import"./x-_PMfnmjw.js";import"./FieldError-DdTU2tDW.js";import"./Text-B9nGcsnc.js";import"./Text-CB6Z4njm.js";const j={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
