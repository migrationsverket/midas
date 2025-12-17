import{S as s}from"./SearchField-Bs8bJJa_.js";import"./iframe-QHZf_0KR.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-CgqiUiYQ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-pIXeoVBI.js";import"./utils-DMdfkNzG.js";import"./useLocalizedStringFormatter-GxiQzKTn.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-McR9knVE.js";import"./useFocusRing-ClHcu_zQ.js";import"./index-CHGNqM_2.js";import"./index-xKnCm_n3.js";import"./useFormValidation-wuEhW6nY.js";import"./useField-CVccv3lq.js";import"./Button-f4n0U-wU.js";import"./Hidden-nvOr4Cn2.js";import"./useLabels-D7QHi2xh.js";import"./useButton-3BOwEEH4.js";import"./search-C0RsO8kT.js";import"./createLucideIcon-BceMF_ih.js";import"./Button-mxQSmzlb.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CDkPYuns.js";import"./VisuallyHidden-DFyPHr9C.js";import"./x-4jZqf9VP.js";import"./FieldError-kIYsyYtJ.js";import"./Text-DKbBjvoe.js";import"./Text-DUZE8-2g.js";const j={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
