import{S as s}from"./SearchField-CfY8V7Ow.js";import"./iframe-k-zAH7Ef.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DGUQcbB9.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-CWQoOU6w.js";import"./utils-BSpJY3Um.js";import"./useLocalizedStringFormatter-CxFXRTv0.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-R9OBVb8V.js";import"./useFocusRing-DVpNpWCG.js";import"./index-B_jnwY6D.js";import"./index-BhzajAhd.js";import"./useFormValidation-Dtr7JyRD.js";import"./useField-DvhmVMli.js";import"./Button-BdULP_1i.js";import"./Hidden-DHgR79MS.js";import"./useLabels-CYnXYQCZ.js";import"./useButton-HRso9Wou.js";import"./search-hR0ceQGK.js";import"./createLucideIcon-b2tMwHkv.js";import"./Button-DmW_TZqr.js";import"./Button.module-CtQ1deO8.js";import"./x-DPoFmvs4.js";import"./useLocalizedStringFormatter-Dx6dpw-4.js";import"./FieldError-CNbb8asv.js";import"./Text-BGMRpBYZ.js";import"./Text-BOoeMNrs.js";const T={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
