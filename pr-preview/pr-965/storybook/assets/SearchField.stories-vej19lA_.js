import{S as s}from"./SearchField-Wz6OOzMk.js";import"./iframe-DFv6IHfp.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-CgqiUiYQ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-DjNdup5v.js";import"./utils-CdweZ9b8.js";import"./useLocalizedStringFormatter-CRBwvr9e.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-Bn-D9wLY.js";import"./useFocusRing-DHeKREWZ.js";import"./index-DQr9Z14G.js";import"./index-BeE2cmwc.js";import"./useFormValidation-BKYaHahd.js";import"./useField-Dw1jR3Ho.js";import"./Button-Dw6Cj4Ep.js";import"./Hidden-CEz7ZVFR.js";import"./useLabels-M6t6KXNG.js";import"./useButton-DauDJiKf.js";import"./search-DkB8rT3e.js";import"./createLucideIcon-DF7DR1uu.js";import"./Button-CR2f2OCB.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-Dap2ufNk.js";import"./VisuallyHidden-Ddtdw3a8.js";import"./x-ZchVGeng.js";import"./FieldError-lQrH4ZG6.js";import"./Text-DUn2-1vf.js";import"./Text-3gfxnPvb.js";const j={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
