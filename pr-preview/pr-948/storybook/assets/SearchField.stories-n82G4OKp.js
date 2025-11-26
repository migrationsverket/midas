import{S as s}from"./SearchField-Bs6rk78H.js";import"./iframe-C1leRaCi.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-1-_3qsJZ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-ByljhpRz.js";import"./utils-BGVkhvRq.js";import"./useLocalizedStringFormatter-Ya10jvmU.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-C6_zbFuF.js";import"./useFocusRing-DlbSN8Ae.js";import"./index-DEAN_h1R.js";import"./index-v0huand3.js";import"./useFormValidation-DKueZ1JI.js";import"./useField-7qqyFdNc.js";import"./Button-M9uB7-Jb.js";import"./Hidden-Cqw8yHzL.js";import"./useLabels-DSFbCLKG.js";import"./useButton-k9xAcm15.js";import"./search-sx-uACC2.js";import"./createLucideIcon-C44Pm6ej.js";import"./Button-CwoNmGBb.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-BWxVH0_G.js";import"./VisuallyHidden-YPgCWLl2.js";import"./x-C71pF5OR.js";import"./FieldError-BUrHU4SW.js";import"./Text-dqBDklPG.js";import"./Text-C7wFv8Yh.js";const j={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
