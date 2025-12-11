import{S as s}from"./SearchField-Dt1TVBAl.js";import"./iframe-CKrxTJqk.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-CgqiUiYQ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-DaVWaM2P.js";import"./utils-CTp3wZxS.js";import"./useLocalizedStringFormatter-a3l9aGqu.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-D6547NmK.js";import"./useFocusRing-DRsukC58.js";import"./index-gQIqyNrY.js";import"./index-C-w1hNWf.js";import"./useFormValidation-Drlp9Ls6.js";import"./useField-D6Gx9W1M.js";import"./Button-DigNz_6t.js";import"./Hidden-Bbcauoo1.js";import"./useLabels-FN4mMJOV.js";import"./useButton-B9vJGxui.js";import"./search-BRTM00jh.js";import"./createLucideIcon-BNr4CCY-.js";import"./Button-DkUXR3sV.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CbUcgQXm.js";import"./VisuallyHidden-Lpl0yh2S.js";import"./x-Cgxi5PyF.js";import"./FieldError-B2UvJ45R.js";import"./Text-DxGoKI9p.js";import"./Text-Ci3fUjCZ.js";const j={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
