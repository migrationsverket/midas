import{S as s}from"./SearchField-DMiy9iax.js";import"./iframe-CfYlVJbT.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-CgqiUiYQ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-BKJCcjym.js";import"./utils-CJmxlmBT.js";import"./useLocalizedStringFormatter-BY8QYVwG.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-2f_4fm7z.js";import"./useFocusRing-CoZPHDQr.js";import"./index-Ye0e-ntf.js";import"./index-CP4lNSy2.js";import"./useFormValidation-BsmaiakS.js";import"./useField-All465gQ.js";import"./Button-CF5oaspZ.js";import"./Hidden-CLJR8IU5.js";import"./useLabels-CfaUcrJ-.js";import"./useButton-CwgKmRtS.js";import"./search-DAODQ27q.js";import"./createLucideIcon-BodeLy3S.js";import"./Button-mO0qg6G0.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-XdRVw3Iq.js";import"./VisuallyHidden-DRHGK4kj.js";import"./x-pOvGEv2b.js";import"./FieldError-C1ZSTrtV.js";import"./Text-DPDTmGdI.js";import"./Text-a5g5-yXG.js";const j={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
