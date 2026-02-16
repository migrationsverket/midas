import{S as s}from"./SearchField-CbyQaAMV.js";import"./iframe-B1z-gzHE.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DpzeWGpt.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-B3HQDcvg.js";import"./utils-CEIeqKii.js";import"./useLocalizedStringFormatter-DWVhSEJI.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-4hdYMRQF.js";import"./useFocusRing-BvsKcShr.js";import"./index-Di8dd2eE.js";import"./index-BOkWMc0e.js";import"./useFormValidation-w3v3W7gn.js";import"./useField-d_oeHlDs.js";import"./Button-D77i-hon.js";import"./Hidden-Cs2MCe5s.js";import"./useLabels-Dmi7cw95.js";import"./useButton-fu8jG2Pq.js";import"./search-LUW0rxPD.js";import"./createLucideIcon-B5DI2OI0.js";import"./ClearButton-7nJzYbhO.js";import"./Button-pqjMbnpp.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-BEmp5YcF.js";import"./VisuallyHidden-Bj8GOm3o.js";import"./x-CglcQKFI.js";import"./FieldError-CT39iQs7.js";import"./Text-BYCHxNL_.js";import"./Text-Dl9x0CG8.js";const q={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
