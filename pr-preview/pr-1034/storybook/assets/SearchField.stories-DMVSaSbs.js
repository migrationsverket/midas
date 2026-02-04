import{S as s}from"./SearchField-DS6FBoa5.js";import"./iframe-CdQJjHUi.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DpzeWGpt.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-C5Qq6LCr.js";import"./utils-DNRK4ZX5.js";import"./useLocalizedStringFormatter-5wGuy5gn.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-D2Mtsrjj.js";import"./useFocusRing-CWhoHb0p.js";import"./index-DYV9Lioy.js";import"./index-C-32_yVP.js";import"./useFormValidation-C90I0bWA.js";import"./useField-VCpATz6H.js";import"./Button-BTABl2Ab.js";import"./Hidden-CC5jBV06.js";import"./useLabels-Dr4fNLVL.js";import"./useButton-BnY8ifF_.js";import"./search-CJlHHIG5.js";import"./createLucideIcon-DPIpdseQ.js";import"./ClearButton-DNuwuD2Z.js";import"./Button-CglFoMow.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DDtzg0FL.js";import"./VisuallyHidden-TcZUaxvx.js";import"./x-Uh3xubMW.js";import"./FieldError-CD4-cihP.js";import"./Text-B0vmQyu5.js";import"./Text-Ch7iewHE.js";const q={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
