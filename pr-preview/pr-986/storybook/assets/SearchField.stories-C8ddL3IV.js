import{S as s}from"./SearchField-CRMMENKx.js";import"./iframe-BkwZBgQB.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-CgqiUiYQ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-BBX4_4Sa.js";import"./utils-DRDg4FYD.js";import"./useLocalizedStringFormatter-DU0hnyiw.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-KBZgRS_a.js";import"./useFocusRing-yaIiikqm.js";import"./index-Dc04iqLv.js";import"./index-tLxIEPdH.js";import"./useFormValidation-CLD-WUtI.js";import"./useField-DZPzH0zS.js";import"./Button-DpNES8Mp.js";import"./Hidden-CjaNJwk3.js";import"./useLabels-CoCvP3vg.js";import"./useButton-f6mPFvlj.js";import"./search-BzuYHJco.js";import"./createLucideIcon-D32Zx4L2.js";import"./Button-BXuxybWM.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-BDvEu7Qr.js";import"./VisuallyHidden-CfZQE67O.js";import"./x-DQzFCr8_.js";import"./FieldError-CywfLTZm.js";import"./Text-CqraFZpH.js";import"./Text-BS5-w4Gk.js";const j={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
