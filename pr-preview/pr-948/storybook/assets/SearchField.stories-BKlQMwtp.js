import{S as s}from"./SearchField-R1_pFAL6.js";import"./iframe-D7Ymg_mK.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-1-_3qsJZ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-B4Qeg9Wh.js";import"./utils-kIFV34ck.js";import"./useLocalizedStringFormatter-C60pseOF.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-CfEuT84J.js";import"./useFocusRing-Bl9_YbgB.js";import"./index-vaQrj-3c.js";import"./index-B0QmpyiM.js";import"./useFormValidation-C-qAShxs.js";import"./useField-Cr8xxzOP.js";import"./Button-C0Ip64qm.js";import"./Hidden-BCS-fde6.js";import"./useLabels-BTNuMlRw.js";import"./useButton-BwjaRMSI.js";import"./search-DGd2Jqp5.js";import"./createLucideIcon-BztK-xjn.js";import"./Button-C9Sv5uf1.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-DfS2oHAS.js";import"./VisuallyHidden-DIX_96la.js";import"./x-BokWoqhe.js";import"./FieldError-CsP61a2L.js";import"./Text-9YYjoimb.js";import"./Text-DAtUy53c.js";const j={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
