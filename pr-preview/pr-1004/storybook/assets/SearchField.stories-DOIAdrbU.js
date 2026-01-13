import{S as s}from"./SearchField-DL03IKrD.js";import"./iframe-CLDUBT6H.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-CgqiUiYQ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-BGBJm32t.js";import"./utils-B2mKk8ds.js";import"./useLocalizedStringFormatter-BmkSBfS1.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BbYFC34E.js";import"./useFocusRing-Dyp-2U09.js";import"./index-CQqCc5kI.js";import"./index-CGFri1B6.js";import"./useFormValidation-BoSETYwH.js";import"./useField-DYxJUrLm.js";import"./Button-CMos7Slo.js";import"./Hidden-DLcE0MmQ.js";import"./useLabels-BZXL5PjD.js";import"./useButton-CWWImr4k.js";import"./search-BtB_pwFT.js";import"./createLucideIcon-5ka4vtZl.js";import"./Button-B6mQ2Bq0.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-BaqAvC1h.js";import"./VisuallyHidden-B6ZRi5s4.js";import"./x-BXo-ziXi.js";import"./FieldError-Br1ud4c9.js";import"./Text-DVTsZrXV.js";import"./Text-t9fg8swz.js";const j={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
