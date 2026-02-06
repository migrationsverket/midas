import{S as s}from"./SearchField-DXyWfjga.js";import"./iframe-4ccXjq77.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DpzeWGpt.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-DeDHhxt6.js";import"./utils-DzCHUaRu.js";import"./useLocalizedStringFormatter-B9UWcyjq.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-Cw6v0MyZ.js";import"./useFocusRing-CDKSPNwB.js";import"./index-BwwLwywv.js";import"./index-sBShM5Ej.js";import"./useFormValidation-BWYLQkYp.js";import"./useField-CcBjpygh.js";import"./Button-BAGANk7J.js";import"./Hidden-DAE9e0zC.js";import"./useLabels-BHOH4TdR.js";import"./useButton-DZhhLg_c.js";import"./search-DZWZyq6J.js";import"./createLucideIcon-DXb3Bj9J.js";import"./ClearButton-CjOJqOPd.js";import"./Button-vy5h-HEb.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-BZCTuKsH.js";import"./VisuallyHidden-D208qjgw.js";import"./x-KN0xw9Pv.js";import"./FieldError-C5onB_PA.js";import"./Text-CrNaDmnw.js";import"./Text-uQy3wyWh.js";const q={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
