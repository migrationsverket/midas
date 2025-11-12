import{S as s}from"./SearchField-DbOpQOCs.js";import"./iframe-C4nZhlHp.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-1-_3qsJZ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-CJQYAY_g.js";import"./utils-BThtOLN3.js";import"./useLocalizedStringFormatter-6ucjq8Cp.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-CocPWATQ.js";import"./useFocusRing-CUt9jPRY.js";import"./index-CdzEK6sL.js";import"./index-Bcy_e8uM.js";import"./useFormValidation-CXbCMZ0J.js";import"./useField-B48LiqQ_.js";import"./Button-BoerEFmi.js";import"./Hidden-DGAgWOv2.js";import"./useLabels-DFzN42D5.js";import"./useButton-DpHHTz7A.js";import"./search-CftQv118.js";import"./createLucideIcon-Cca3XJOR.js";import"./Button-Dfl_9rMf.js";import"./Button.module-CtQ1deO8.js";import"./x-D5_o8_hp.js";import"./useLocalizedStringFormatter-CL3ousm2.js";import"./FieldError-BIrWKztk.js";import"./Text-BtqzfC97.js";import"./Text-Bl0ISbQ7.js";const T={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
