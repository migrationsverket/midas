import{S as s}from"./SearchField-DsDco8nB.js";import"./iframe-GJIV0jhi.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-1-_3qsJZ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-Dv7dRxR4.js";import"./utils-SjaA0yG3.js";import"./useLocalizedStringFormatter-gn54IrKP.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-CxJfi2FA.js";import"./useFocusRing-CK_C_BwU.js";import"./index-C4Uh3RJ4.js";import"./index-VoTlDwim.js";import"./useFormValidation-DbISqNTd.js";import"./useField-CrgtcRqm.js";import"./Button-JyF5O3_f.js";import"./Hidden-BJsyoLBN.js";import"./useLabels-vYy7nIsq.js";import"./useButton-DXeUeID3.js";import"./search-RC6FCbp_.js";import"./createLucideIcon-Cn9h6HqS.js";import"./Button-CsYpEVDI.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-q-Ln1_vz.js";import"./VisuallyHidden-CRj1GIcN.js";import"./x-C8F5BlTd.js";import"./FieldError-B7rd3v3G.js";import"./Text-DrabhmgK.js";import"./Text-DdZm8tc2.js";const j={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
