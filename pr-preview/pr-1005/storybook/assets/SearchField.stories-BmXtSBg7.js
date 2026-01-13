import{S as s}from"./SearchField-BjQYlCVm.js";import"./iframe-BBLpafwf.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-CgqiUiYQ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-CsxbOKlZ.js";import"./utils-BRp6xYAP.js";import"./useLocalizedStringFormatter-B9BHTFqE.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DJsAUwHM.js";import"./useFocusRing-BBkgX1wP.js";import"./index-e8OPjBDY.js";import"./index-DI-_kXwT.js";import"./useFormValidation-5FNa8kHq.js";import"./useField-CjE2cDRc.js";import"./Button-Dw_yAd9_.js";import"./Hidden-DOfZA5Lu.js";import"./useLabels-Qhz8Dm5U.js";import"./useButton-DPuerBPE.js";import"./search-HKVyICOp.js";import"./createLucideIcon-_MMWm-eO.js";import"./Button-BN6Xx9p1.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-6NC92a7V.js";import"./VisuallyHidden-DuPFMQS_.js";import"./x-DuCwogba.js";import"./FieldError-D1_ZzpXP.js";import"./Text-BYn86eAe.js";import"./Text-BnZA8JI4.js";const j={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
