import{S as s}from"./SearchField-EVKxI4Kj.js";import"./iframe-BMeVz6y-.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DdivwlC8.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-Mz74w--R.js";import"./utils-gLrvz57I.js";import"./useLocalizedStringFormatter-B6BaJT_D.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-CO-xMpuL.js";import"./useFocusRing-B3A74r94.js";import"./index-C78FzeUG.js";import"./index-DuQDy4Im.js";import"./useFormValidation-B6ysVh97.js";import"./useField-9rt5-gOQ.js";import"./Button-YuHrdvqU.js";import"./Hidden-BtcHHrEj.js";import"./useLabels-DU1760XI.js";import"./useButton-BfWVW3lI.js";import"./search-DGFCMCKR.js";import"./createLucideIcon-DWjVVpun.js";import"./ClearButton-ChXNGhMR.js";import"./Button-DkV7wLYz.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-BThYc7xn.js";import"./VisuallyHidden-DGyUcRul.js";import"./x-Bqp_P532.js";import"./FieldError-B9b-doZT.js";import"./Text-BobX77Rp.js";import"./Text-D9ERza-j.js";const q={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
