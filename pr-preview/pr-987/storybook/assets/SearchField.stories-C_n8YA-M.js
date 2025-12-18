import{S as s}from"./SearchField-BIoo_Kr0.js";import"./iframe-C6_-e7NK.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-CgqiUiYQ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState--v8NGJnX.js";import"./utils-Bbmqvbo3.js";import"./useLocalizedStringFormatter-D7bjjg4_.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BcFXVHGn.js";import"./useFocusRing-BXSkyUM9.js";import"./index-DPxO6KUo.js";import"./index-Bwwn4N2G.js";import"./useFormValidation-CMpXllZv.js";import"./useField-DP5dlwby.js";import"./Button-CdXu0ILf.js";import"./Hidden-BPDqmKbL.js";import"./useLabels-JWkxwXER.js";import"./useButton-BMxkS-67.js";import"./search-CoH_kWLM.js";import"./createLucideIcon-D6PH1BXQ.js";import"./Button-DxcAJTpN.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-FHnrTC9O.js";import"./VisuallyHidden-BCTu162M.js";import"./x-KVb9IDQ9.js";import"./FieldError-DV33LILC.js";import"./Text-F1WQVY7m.js";import"./Text-DRnoGrtX.js";const j={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
