import{S as s}from"./SearchField-CKgEMsE1.js";import"./iframe-BNcdEUXj.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-CgqiUiYQ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-DGlddZrL.js";import"./utils-Bxcv5MPT.js";import"./useLocalizedStringFormatter-QBa3_aSW.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DdHnyVt6.js";import"./useFocusRing-C6YM28qN.js";import"./index-TMTY01Ep.js";import"./index-DSdXJGSi.js";import"./useFormValidation-BlNQ6Bf-.js";import"./useField-CjdfMRgy.js";import"./Button-CaKLSY2s.js";import"./Hidden-B0zthcPy.js";import"./useLabels-Cq9B0I-L.js";import"./useButton-DEu1-L8J.js";import"./search-DDUGu-Dj.js";import"./createLucideIcon-E9DumC9p.js";import"./Button-BL-fsXV7.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CfXz0OFm.js";import"./VisuallyHidden-C4uEYBAI.js";import"./x-BEnNVYyo.js";import"./FieldError-BtZ0TnQj.js";import"./Text-B53mvpty.js";import"./Text-DR0_UwJ4.js";const j={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
