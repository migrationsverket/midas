import{S as s}from"./SearchField-DiWyR_QN.js";import"./iframe-CcSZizfH.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DdivwlC8.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-Cjje-kqG.js";import"./utils-C8tqShtU.js";import"./useLocalizedStringFormatter-VCKLQeQ3.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DTTUY1p9.js";import"./useFocusRing-BV9r26_i.js";import"./index-DDpsSQPb.js";import"./index-BLMh0pMH.js";import"./useFormValidation-DLSKiRYE.js";import"./useField-B3CUWj3-.js";import"./Button-AvjZljXr.js";import"./Hidden-DB8IdLZR.js";import"./useLabels-B5_NTSEx.js";import"./useButton-CZz_VRDR.js";import"./search-ybXoHT9K.js";import"./createLucideIcon-qYjCz2jy.js";import"./ClearButton-D6iBvO28.js";import"./Button-u3SbUu_V.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-CYEHmnz_.js";import"./VisuallyHidden-DtOJH9kD.js";import"./x-B1Gc0sgF.js";import"./FieldError-Cco9xgcd.js";import"./Text-JtTDVkrn.js";import"./Text-CD36Kyta.js";const q={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
