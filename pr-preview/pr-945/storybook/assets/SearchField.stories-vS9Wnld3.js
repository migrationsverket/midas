import{S as s}from"./SearchField-DKKnVq-A.js";import"./iframe-XX0Vdbj7.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-1-_3qsJZ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-CExhW45z.js";import"./utils-CbDu8gNr.js";import"./useLocalizedStringFormatter-BMuLFIl9.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-CPzV1WIx.js";import"./useFocusRing-DZkPrIsz.js";import"./index-DTlV7nv2.js";import"./index-BrPE2rn6.js";import"./useFormValidation-4Agwc_rw.js";import"./useField-DGsM5StF.js";import"./Button-DY_cHSjI.js";import"./Hidden-BPeBnAY5.js";import"./useLabels-BB7TQJZF.js";import"./useButton-afcNCAs_.js";import"./search-D0MNMuaw.js";import"./createLucideIcon-cScy24ZI.js";import"./Button-CgwWNrBR.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-BYLA1ivb.js";import"./VisuallyHidden-D9J82ZWu.js";import"./x-BJd4-ddg.js";import"./FieldError-ChwcOMX4.js";import"./Text-BeRQ2kjX.js";import"./Text-DyXudq4d.js";const j={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
