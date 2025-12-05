import{S as s}from"./SearchField-DXbGvOyy.js";import"./iframe-4MXvvXb4.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-CgqiUiYQ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-Yot6ptr4.js";import"./utils-CKUJDRfd.js";import"./useLocalizedStringFormatter-uwpQqsQ4.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-CaS2B26W.js";import"./useFocusRing-CGRZ6TsU.js";import"./index-DNLPWJUA.js";import"./index-BNLaGBTn.js";import"./useFormValidation-C_E33eAj.js";import"./useField-FpwzJluE.js";import"./Button-D7OB0dKW.js";import"./Hidden-Bs6UcX7L.js";import"./useLabels-BcyACAXj.js";import"./useButton-ELwrz3PB.js";import"./search-BjuAERYm.js";import"./createLucideIcon-DbyMZvJr.js";import"./Button-D6HZYVFH.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-S9rOgstl.js";import"./VisuallyHidden-Bltgpije.js";import"./x-DFJOvBpt.js";import"./FieldError-B07U-Qv-.js";import"./Text-DEF8XyQD.js";import"./Text-CjfGH0e9.js";const j={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
