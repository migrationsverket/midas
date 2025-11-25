import{S as s}from"./SearchField-CqtoYqUa.js";import"./iframe-fq9A6FK9.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-1-_3qsJZ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-qB5AvSM2.js";import"./utils-B2shJBpj.js";import"./useLocalizedStringFormatter-CK759rVD.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DEprl-EE.js";import"./useFocusRing-NaSrpACO.js";import"./index-DC3OJijG.js";import"./index-DBTT0pcE.js";import"./useFormValidation-cD1hDx--.js";import"./useField-mWqaLvOj.js";import"./Button-W9ho1VFG.js";import"./Hidden-DjVuHnC7.js";import"./useLabels-B4JEmX2w.js";import"./useButton-BbvEdJxo.js";import"./search-BmYkPbpF.js";import"./createLucideIcon-CP4QsOlK.js";import"./Button-BHnqVWV3.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-Ddt---zu.js";import"./VisuallyHidden-CnCvc7Jt.js";import"./x-DGGtshoA.js";import"./FieldError-B7eqknUY.js";import"./Text-DMJYBmih.js";import"./Text-DT84MTLn.js";const j={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
