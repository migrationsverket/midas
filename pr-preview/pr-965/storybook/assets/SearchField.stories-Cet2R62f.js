import{S as s}from"./SearchField-A_q5XBiN.js";import"./iframe-CUQ35QY-.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-CgqiUiYQ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-6cnBDVnB.js";import"./utils-5RKy4vaX.js";import"./useLocalizedStringFormatter-CoOBbLCl.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-stxNtcwH.js";import"./useFocusRing-B7idPrX2.js";import"./index-CGbKJlQM.js";import"./index-C6uWvgQh.js";import"./useFormValidation-t2gqBy82.js";import"./useField-CNFYxSKs.js";import"./Button-Bsh9_HoT.js";import"./Hidden-Ct1SE1DS.js";import"./useLabels-Bt6x9uRf.js";import"./useButton-BansXk_T.js";import"./search-C87WdT2c.js";import"./createLucideIcon-CfvbpDl0.js";import"./Button-B1Lfpc_P.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DHMj4qxM.js";import"./VisuallyHidden-Bxln8_qY.js";import"./x-DKHs1ZuY.js";import"./FieldError-BjkxW7lY.js";import"./Text-TgbZ0VlZ.js";import"./Text-NEiftwSw.js";const j={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
