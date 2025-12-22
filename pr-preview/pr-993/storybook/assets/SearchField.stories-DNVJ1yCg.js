import{S as s}from"./SearchField-Dopi0Wfd.js";import"./iframe-Dme4yjiu.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-CgqiUiYQ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-b57QaJLr.js";import"./utils-C0ovVE6C.js";import"./useLocalizedStringFormatter-Cww_SUFY.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-Dtbsg06d.js";import"./useFocusRing-BH-f8hm3.js";import"./index-BUbNZ358.js";import"./index-DKLwjLX-.js";import"./useFormValidation-DZ5-pBFL.js";import"./useField-Dd5lDbx0.js";import"./Button-Bc7NjFRN.js";import"./Hidden-BfVEj4RM.js";import"./useLabels-DXCBowKy.js";import"./useButton-lWQWllBE.js";import"./search-Ba77eol-.js";import"./createLucideIcon-DWbFj2V-.js";import"./Button-4EvhTNdZ.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-8mUr0ZZo.js";import"./VisuallyHidden-BChFqUzE.js";import"./x-DTC-oJ1p.js";import"./FieldError-CkJz2AaO.js";import"./Text-DXZYfMN_.js";import"./Text-DD713WO-.js";const j={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
