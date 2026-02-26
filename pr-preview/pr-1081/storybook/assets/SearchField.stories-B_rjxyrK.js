import{S as s}from"./SearchField-Bjs0rl0-.js";import"./iframe-Ca9PeS4b.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DdivwlC8.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-55nfPVrT.js";import"./utils-CUoV_pAF.js";import"./useLocalizedStringFormatter-CRS5dirU.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-Bo7lxpx9.js";import"./useFocusRing-B56DIc1T.js";import"./index-n_MeXCZI.js";import"./index-CcFOlZnw.js";import"./useFormValidation-0CkrV3-A.js";import"./useField-Bs-tUlaz.js";import"./Button-DLBOkC9W.js";import"./Hidden-ZKBw_h0J.js";import"./useLabels-5MQe5wH1.js";import"./useButton-jHPk0lvT.js";import"./search-e-prV6tx.js";import"./createLucideIcon-CT83y0Ua.js";import"./ClearButton-CT6X9qD-.js";import"./Button-DaI6b5l3.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-fmn21mIk.js";import"./VisuallyHidden-BJAuUKrr.js";import"./x-BHPi5tAp.js";import"./FieldError-3WYDLCHb.js";import"./Text-ZWT-9m7v.js";import"./Text-DlcQ59dF.js";const q={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
