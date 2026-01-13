import{S as s}from"./SearchField-0ouUzVi_.js";import"./iframe-C-ZgYTLd.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-CgqiUiYQ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-j9N21RQd.js";import"./utils-5FE85UMg.js";import"./useLocalizedStringFormatter-D5GDJFPJ.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DlmJhj-Z.js";import"./useFocusRing-Bc0MHDjd.js";import"./index-ChPkoH3I.js";import"./index-CXE28Dj1.js";import"./useFormValidation-DFhaQe1w.js";import"./useField-D678ic1M.js";import"./Button-B6pX2OWD.js";import"./Hidden-DYGqIVaB.js";import"./useLabels-2zRZ-jjd.js";import"./useButton-qcLY0iFO.js";import"./search-BDySI4ph.js";import"./createLucideIcon-DhqApzLs.js";import"./ClearButton-B68yG85u.js";import"./Button-h5IDA3ie.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DVNEhNrj.js";import"./VisuallyHidden-BOVmsq2q.js";import"./x-CGX4TCwo.js";import"./FieldError-BgIsxqD2.js";import"./Text-ZgpLFqnp.js";import"./Text-BR0bAKi6.js";const q={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
