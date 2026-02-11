import{S as s}from"./SearchField-DCdYMtm7.js";import"./iframe-Drr84aUp.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DpzeWGpt.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-ORv1HaqW.js";import"./utils-Dj0d5knJ.js";import"./useLocalizedStringFormatter-DKpj8BBI.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-CbABvNjY.js";import"./useFocusRing-DsIGSL5O.js";import"./index-BiBbK_-6.js";import"./index-DRbaHGaR.js";import"./useFormValidation-D143NhVz.js";import"./useField-DFKc8azI.js";import"./Button-CwulGWpP.js";import"./Hidden-BeHVocu4.js";import"./useLabels-CW04P3B1.js";import"./useButton-ByV_k0-w.js";import"./search-Cgl9QKOF.js";import"./createLucideIcon-BYlUtrd2.js";import"./ClearButton-DfccChjf.js";import"./Button-BXBCvuas.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DN0Qnrca.js";import"./VisuallyHidden-BX3HTr1q.js";import"./x-BaHWGiCm.js";import"./FieldError-799sXCos.js";import"./Text-Dr4vVF01.js";import"./Text-v7lTDwJ8.js";const q={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
