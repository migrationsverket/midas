import{S as s}from"./SearchField-Bu-F-lnN.js";import"./iframe-BnvIDWhX.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-CgqiUiYQ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-DHwPIbAN.js";import"./utils-BvQhf5aw.js";import"./useLocalizedStringFormatter-CQGgYv2z.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DK2zy1S8.js";import"./useFocusRing-kt0fM5Eg.js";import"./index-DZ5e4qNw.js";import"./index-BBb9LXyW.js";import"./useFormValidation-DldjmbqA.js";import"./useField-D9ELBiEA.js";import"./Button-2vHqoAit.js";import"./Hidden-SpBz5CyG.js";import"./useLabels-C7yBIXeo.js";import"./useButton-Dxyw1gnX.js";import"./search-ChYPj4gM.js";import"./createLucideIcon-CfqM0T4F.js";import"./Button-DqvzVHOE.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-BCUIru9v.js";import"./VisuallyHidden-BHMQPsJv.js";import"./x-tgwQ7WbQ.js";import"./FieldError-BXYDl_68.js";import"./Text-CcU36hjn.js";import"./Text-C7YaW3xP.js";const j={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
