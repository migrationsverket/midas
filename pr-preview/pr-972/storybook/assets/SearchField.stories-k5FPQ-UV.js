import{S as s}from"./SearchField-CO6ENMOj.js";import"./iframe-D0MbCfGX.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-CgqiUiYQ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-C8xGgj4C.js";import"./utils-HqVyPsx5.js";import"./useLocalizedStringFormatter-2hEikx4k.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DlU4aTta.js";import"./useFocusRing-Bu7gL19x.js";import"./index-hynslO7V.js";import"./index-fjtbWm9v.js";import"./useFormValidation-B97Efddu.js";import"./useField-BMJKgdNF.js";import"./Button-CwpQ0ZRN.js";import"./Hidden-nmq2QyfL.js";import"./useLabels-bAB6zu2C.js";import"./useButton-B-HcF5FI.js";import"./search-DtqWxC4U.js";import"./createLucideIcon-BVgI_rj9.js";import"./Button-ZcS88E_Q.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-Cp1Qq6jQ.js";import"./VisuallyHidden-CztvSzbh.js";import"./x-R-Hlv3Cg.js";import"./FieldError-CJdCsbD5.js";import"./Text-C56uKtog.js";import"./Text-lYk5NG0J.js";const j={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
