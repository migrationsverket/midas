import{S as s}from"./SearchField-BEjijAWl.js";import"./iframe-DADKt-kQ.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-1-_3qsJZ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-CgzivPoq.js";import"./utils-CKJqdrmj.js";import"./useLocalizedStringFormatter-CP2_5yue.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-CepHJpON.js";import"./useFocusRing-Bv8Jxajo.js";import"./index-C7Jitojr.js";import"./index-Bq3agvIg.js";import"./useFormValidation-GLqBpRvw.js";import"./useField-BGkGozFn.js";import"./Button-CJT79hNC.js";import"./Hidden-kCpqRsBu.js";import"./useLabels-BkZNSNp-.js";import"./useButton-OTdhny-d.js";import"./search-BK9Lf1d_.js";import"./createLucideIcon-C_Dtelqq.js";import"./Button-DnuKH5Gw.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-BwsyMi25.js";import"./VisuallyHidden-CsnTJoII.js";import"./x-Fn4Q0OGq.js";import"./FieldError-D8LV-R92.js";import"./Text-D8zsPiTt.js";import"./Text-hz03lBtp.js";const j={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
