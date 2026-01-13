import{S as s}from"./SearchField-DhIXSlhl.js";import"./iframe-DHyVQXUX.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-CgqiUiYQ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-bSLg3DhZ.js";import"./utils-Cetumt8p.js";import"./useLocalizedStringFormatter-BO0fwLCb.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-D-TfK_PS.js";import"./useFocusRing-DM6_DbeH.js";import"./index-C151B4pU.js";import"./index-CIApz_MG.js";import"./useFormValidation-b2TH__Nr.js";import"./useField-BG9qxNLR.js";import"./Button-CgYi1yiU.js";import"./Hidden-LyTL37of.js";import"./useLabels-BHMJFSGA.js";import"./useButton-C_cAHMJL.js";import"./search-CypQOicM.js";import"./createLucideIcon-BDpeJ1vC.js";import"./Button-BG_KuVY6.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-BXMcFhqN.js";import"./VisuallyHidden-CrEjrJr0.js";import"./x-CTsV6SQ1.js";import"./FieldError-BMHmwlEE.js";import"./Text-D3UlMe3R.js";import"./Text-el-hmg7N.js";const j={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
