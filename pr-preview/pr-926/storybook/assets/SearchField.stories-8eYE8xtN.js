import{S as s}from"./SearchField-D4Ypb3GE.js";import"./iframe-CwELpm8M.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-1-_3qsJZ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-D5v3Kw8A.js";import"./utils-DK9hRE35.js";import"./useLocalizedStringFormatter-B76o2d2j.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BAqGBJqr.js";import"./useFocusRing-CwasRKhc.js";import"./index-CCt8ZrIH.js";import"./index-Bygjd08t.js";import"./useFormValidation-Bl1CCT6H.js";import"./useField-C5cGb6wM.js";import"./Button-sDGd8VvU.js";import"./Hidden-D5d1b3lW.js";import"./useLabels-I-6zbtHM.js";import"./useButton-BRLQrzoM.js";import"./search-BkV9K6Ye.js";import"./createLucideIcon-DWP8AM-1.js";import"./Button-CUSbYPw5.js";import"./Button.module-CtQ1deO8.js";import"./x-C39WqzVu.js";import"./useLocalizedStringFormatter-BloNYZ0_.js";import"./FieldError-BlDvxHZK.js";import"./Text-DYkkk1QK.js";import"./Text-DWmt2BS8.js";const T={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
