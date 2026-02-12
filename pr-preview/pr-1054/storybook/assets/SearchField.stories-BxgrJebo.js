import{S as s}from"./SearchField-CrO9tGKc.js";import"./iframe-CYK4t1Gh.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DpzeWGpt.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-D_0fPRZq.js";import"./utils-DBHsElOT.js";import"./useLocalizedStringFormatter-BN4ru8sL.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-7nuyCBDw.js";import"./useFocusRing-DWc7f6DB.js";import"./index-BosHGsFI.js";import"./index-CUCu8Kx5.js";import"./useFormValidation-BM9SNmH0.js";import"./useField-BNsk_9RN.js";import"./Button-DECZbtu5.js";import"./Hidden-Dhsxn_Nf.js";import"./useLabels-Dbxh0r6V.js";import"./useButton-O6-M5fpP.js";import"./search-Dba_thpj.js";import"./createLucideIcon-C53JEkqI.js";import"./ClearButton-F7rNhDnY.js";import"./Button-BE1wltEw.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DZIAFqP_.js";import"./VisuallyHidden-4kkr3OtB.js";import"./x-DW5q0vat.js";import"./FieldError-BeOTnay7.js";import"./Text-Ch4tHKq-.js";import"./Text-B_DUIRzD.js";const q={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
