import{S as s}from"./SearchField-LE6Eo1gQ.js";import"./iframe-B5mKUI4c.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-1fNSVGjT.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-xvk7L9VL.js";import"./utils-DeW7LaO1.js";import"./useLocalizedStringFormatter-9u2UdEi1.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BYZ5nwm1.js";import"./useFocusRing-CgbRETJq.js";import"./index-BhZP_iQU.js";import"./index-4ahidsI-.js";import"./useFormValidation-D5XvDLkr.js";import"./useField-B5R57QYN.js";import"./Button-BrTPVwzK.js";import"./Hidden-CSsTijhC.js";import"./useLabels-B2xIaWSz.js";import"./useButton-BO8k0dou.js";import"./search-BuDvNqj7.js";import"./createLucideIcon-ByiINced.js";import"./ClearButton-DMJ1kImj.js";import"./Button-DdQrsI7w.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DgKQ4iI2.js";import"./VisuallyHidden-Xt4BPEfK.js";import"./x-CzqSHOZc.js";import"./FieldError-CWRNW1G1.js";import"./Text-BYCbsMCs.js";import"./Text-B1l_WlEL.js";const q={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
