import{S as s}from"./SearchField-C-WsG-5d.js";import"./iframe-C7QVanE1.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-CgqiUiYQ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-wg0wExfo.js";import"./utils-DryWrSsO.js";import"./useLocalizedStringFormatter-CpMZdteZ.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-D05VSCUA.js";import"./useFocusRing-CUPRYPTR.js";import"./index-CZH-gIg2.js";import"./index-CQdr9i86.js";import"./useFormValidation-DgNcLFsP.js";import"./useField-BkcLQ7gE.js";import"./Button-B0ygehGU.js";import"./Hidden-DWveG1to.js";import"./useLabels-CDWq4CCD.js";import"./useButton-Bgb6cmzM.js";import"./search-Dq37Uhuz.js";import"./createLucideIcon-Ci9lC38R.js";import"./Button-CCRsXMgo.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DHWurjhu.js";import"./VisuallyHidden-6jSDaJWd.js";import"./x-BoziCGps.js";import"./FieldError-Bc8wiCVr.js";import"./Text-Caxmjr4k.js";import"./Text-DDFZmojY.js";const j={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
