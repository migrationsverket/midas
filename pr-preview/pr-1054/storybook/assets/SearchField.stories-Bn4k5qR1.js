import{S as s}from"./SearchField-CHh9n7xp.js";import"./iframe-Dw-35drA.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DpzeWGpt.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-BE-LxPbE.js";import"./utils-CUGO82B6.js";import"./useLocalizedStringFormatter-xmiH9SGP.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DmlDyehx.js";import"./useFocusRing-BNamEjDv.js";import"./index-CtEHNpSJ.js";import"./index-DiZcibWP.js";import"./useFormValidation-CaQiCpig.js";import"./useField-Dlz_1dv-.js";import"./Button-CIiKNDDC.js";import"./Hidden-4ZD6Ocwe.js";import"./useLabels-_6TVeuod.js";import"./useButton-CerW7b9z.js";import"./search-J4Ews2VT.js";import"./createLucideIcon-Ct15IBRs.js";import"./ClearButton-B-yJ93KA.js";import"./Button-LqRiQ1bb.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-BExB6Uos.js";import"./VisuallyHidden-iwvGgNVy.js";import"./x-ftsEK93m.js";import"./FieldError-DkHYXYvi.js";import"./Text-CJvMRgPB.js";import"./Text-Cldt2zLV.js";const q={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
