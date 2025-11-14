import{S as s}from"./SearchField-MzD0JZUp.js";import"./iframe-DsvQYhcC.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-1-_3qsJZ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-Wd1IkDYb.js";import"./utils-ywWYrjb7.js";import"./useLocalizedStringFormatter-CzBDZOTF.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-CEZQKtc9.js";import"./useFocusRing-DKFJXZq3.js";import"./index-p-5mA69d.js";import"./index-lWE3LdPA.js";import"./useFormValidation-DyleTNHg.js";import"./useField-DJ2N2jIH.js";import"./Button-Btfg7XlR.js";import"./Hidden-B3O_gp6m.js";import"./useLabels-DkA2Lq0I.js";import"./useButton-DqkMJO2v.js";import"./search-CanAHYbr.js";import"./createLucideIcon-BGno6_ea.js";import"./Button-DiEGm4BJ.js";import"./Button.module-CtQ1deO8.js";import"./x-HSDG5LTS.js";import"./useLocalizedStringFormatter-BeNGXtO2.js";import"./FieldError-DLaiVMtb.js";import"./Text-CP8B1hu_.js";import"./Text-459A5tOX.js";const T={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
