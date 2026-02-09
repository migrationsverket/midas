import{S as s}from"./SearchField-Be8m6-K4.js";import"./iframe-CDlGoVBX.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DpzeWGpt.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-CcD6TCI7.js";import"./utils-DK0QJ5bq.js";import"./useLocalizedStringFormatter-FToakcQL.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DnEnbiaG.js";import"./useFocusRing-GV8a7-dB.js";import"./index-CClkoolm.js";import"./index-D9EgTrn3.js";import"./useFormValidation-C3JGr8K4.js";import"./useField-C4i4gm-f.js";import"./Button-ChHi1CmX.js";import"./Hidden-D3g4_ydn.js";import"./useLabels-Bnvu_zoZ.js";import"./useButton-CEiQ-7P6.js";import"./search-B9iDeHJT.js";import"./createLucideIcon-DnI-ftFI.js";import"./ClearButton-HRsWTaKZ.js";import"./Button-bhz0d5b_.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-D9wBWCji.js";import"./VisuallyHidden-BoTcuaXb.js";import"./x-DzdEbKW-.js";import"./FieldError-BTnAzmQ0.js";import"./Text-gvo1OKGS.js";import"./Text-Cflgqxbo.js";const q={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
