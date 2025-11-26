import{S as s}from"./SearchField-CzwiGBTX.js";import"./iframe-B_9EF7Dq.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-1-_3qsJZ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-DTUVTQNc.js";import"./utils-Nc7aiA8g.js";import"./useLocalizedStringFormatter-DogZXGw9.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-B5C7s9vl.js";import"./useFocusRing-DIePChSt.js";import"./index-BjkNl2Dq.js";import"./index-D8NvM82z.js";import"./useFormValidation-hqHE3Pmc.js";import"./useField-m_z2K0p_.js";import"./Button-D9HkwZ_O.js";import"./Hidden-xunvFULB.js";import"./useLabels-61rfT5yO.js";import"./useButton-GH9EGPk7.js";import"./search-DKN6yWFm.js";import"./createLucideIcon-CTuVUGjm.js";import"./Button-v7hW0srN.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-DICAckaY.js";import"./VisuallyHidden-kz0xmvpU.js";import"./x-BJiEp__p.js";import"./FieldError-BJK3SH0A.js";import"./Text-2PCYJ-aQ.js";import"./Text-DKz7R1Y9.js";const j={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
