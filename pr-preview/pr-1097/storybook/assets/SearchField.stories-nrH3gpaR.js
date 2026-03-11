import{S as s}from"./SearchField-qi_nkRlR.js";import"./iframe-BwuZ39Vz.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DdivwlC8.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-CNRISZnR.js";import"./utils-Dazgo93a.js";import"./useLocalizedStringFormatter-Dlk9HRO-.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-SBNGNCLl.js";import"./useFocusRing-DWqwuqDQ.js";import"./index-BYlaNIkZ.js";import"./index-Db__52FI.js";import"./useFormValidation-uPUxiMCI.js";import"./useField-Dq1pou23.js";import"./Button-Cn77Lxgi.js";import"./Hidden-C8O8FPO6.js";import"./useLabels-D0VSRyAt.js";import"./useButton-C25K8Bao.js";import"./search-BEf58DtE.js";import"./createLucideIcon-B-TCaGAA.js";import"./ClearButton-DrxjMDnw.js";import"./Button-BINP1rbK.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-Ni97qJq4.js";import"./VisuallyHidden-3B0Aqf7R.js";import"./x-CW77mceo.js";import"./FieldError-6yyVufrl.js";import"./Text-zo_PZ5oe.js";import"./Text-D0CV2pqO.js";const q={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
