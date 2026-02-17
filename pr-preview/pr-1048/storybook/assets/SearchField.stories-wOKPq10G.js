import{S as s}from"./SearchField-9su-8N96.js";import"./iframe-DFPNwlkc.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-Cm6797Xw.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-DApIq544.js";import"./utils-CV6nHplc.js";import"./useLocalizedStringFormatter-ERBM7yjl.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-3j3P3Pcj.js";import"./useFocusRing-BCqmlDXx.js";import"./index-BDUmJqpj.js";import"./index-Dpft1Kq9.js";import"./useFormValidation-CfPOxHPb.js";import"./useField-BGeccqxt.js";import"./Button-DQefDSoE.js";import"./Hidden-D0i80-zA.js";import"./number-DfkVkf0F.js";import"./useLabels-3zYOWwD6.js";import"./useButton-DiLGUc5M.js";import"./search--7zaCKO2.js";import"./createLucideIcon-C-NMhMRQ.js";import"./ClearButton-BTmjrYg7.js";import"./Button-kZACelDn.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DCEDmOYO.js";import"./VisuallyHidden-ChW5Sl-W.js";import"./x-Dg7QfrZy.js";import"./FieldError-C5roi1Sk.js";import"./Text-C4FKP_kf.js";import"./Text-tvz73rc8.js";const w={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};const A=["Primary","CustomValidation","Invalid","Disabled"];export{r as CustomValidation,o as Disabled,t as Invalid,e as Primary,A as __namedExportsOrder,w as default};
