import{S as s}from"./SearchField-B-36Hr5x.js";import"./iframe-DTEEsWKs.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-1-_3qsJZ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-DH-4U24x.js";import"./utils-Bei6jhoM.js";import"./useLocalizedStringFormatter-ClfAxNed.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-Bg5yeq6w.js";import"./useFocusRing-Bt_R5Kxb.js";import"./index-CDhAOoC2.js";import"./index-CAL1rCpR.js";import"./useFormValidation-BgckL5go.js";import"./useField-DH4gi-7n.js";import"./Button-D8fw21xh.js";import"./Hidden-H9M_Xkwd.js";import"./useLabels-hQ-tPN-N.js";import"./useButton-Ci76CoW9.js";import"./search-wtkbSp-A.js";import"./createLucideIcon-CxA0LOFq.js";import"./Button-Ir9Meu39.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-4UzQK-SV.js";import"./VisuallyHidden-DXWpkl8V.js";import"./x-JqIoOrJh.js";import"./FieldError-YzVCmXmy.js";import"./Text-D2Kdkld6.js";import"./Text-RBLlkHxH.js";const j={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
