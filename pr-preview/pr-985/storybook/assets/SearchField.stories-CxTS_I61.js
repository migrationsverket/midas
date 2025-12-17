import{S as s}from"./SearchField-AxL3OqL_.js";import"./iframe-Dmln2s8W.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-CgqiUiYQ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-DsKm9z2H.js";import"./utils-DN9YrxvM.js";import"./useLocalizedStringFormatter-Cv3mFRMK.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-CBGgj8rR.js";import"./useFocusRing-g7C5sCWj.js";import"./index-Cc6wq1BM.js";import"./index-C6K-yTup.js";import"./useFormValidation--hY_38Im.js";import"./useField-BnKPORsj.js";import"./Button-C5hq3iWd.js";import"./Hidden-7UyqWpMT.js";import"./useLabels-Bj5Rya5X.js";import"./useButton-DT7lzV_U.js";import"./search-D9r9KfjN.js";import"./createLucideIcon-DAJh3Chd.js";import"./Button-DnEmQCas.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-BqeJSIDu.js";import"./VisuallyHidden-DuElax1d.js";import"./x-Dp4VYtmK.js";import"./FieldError-cMeQo-5a.js";import"./Text-Bi8iFHf7.js";import"./Text-D8VRkt36.js";const j={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
