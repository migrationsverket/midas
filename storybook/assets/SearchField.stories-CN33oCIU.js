import{S as s}from"./SearchField-CToaL5-R.js";import"./iframe-D1MYXp-w.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DpzeWGpt.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-Bn7jLDvo.js";import"./utils-aWuB-QdR.js";import"./useLocalizedStringFormatter-nJ6vlP7S.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-FtFIiV-m.js";import"./useFocusRing-BMjUS9b1.js";import"./index-BxRInLIQ.js";import"./index-DKk9wEG4.js";import"./useFormValidation-BTUbGtWG.js";import"./useField-CxdzvUD5.js";import"./Button-Cu_o7jy-.js";import"./Hidden-BE2MqSt0.js";import"./useLabels-uwnDLehD.js";import"./useButton-DiNOWPXA.js";import"./search-DbZ3EuRU.js";import"./createLucideIcon-DypBOEHT.js";import"./ClearButton-C_gxgixu.js";import"./Button-CWi-yXwr.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CH5t1GsE.js";import"./VisuallyHidden-DeZDzV12.js";import"./x-BSUoxe2E.js";import"./FieldError-DXvMK5mU.js";import"./Text-DFmQ5vZk.js";import"./Text-3-mIHV0D.js";const q={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
