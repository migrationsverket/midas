import{S as s}from"./SearchField-BsSdgQeU.js";import"./iframe-DBhQ8ZfE.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-CgqiUiYQ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-DTSOZ1sm.js";import"./utils-CV2hteiq.js";import"./useLocalizedStringFormatter-DMxV2bdQ.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DC4rFzr4.js";import"./useFocusRing-2NmEPi_N.js";import"./index-CY38OC3k.js";import"./index-Dn-wkp9J.js";import"./useFormValidation-B0Ezuj_R.js";import"./useField-Dqufr6FC.js";import"./Button-BkJQBN-z.js";import"./Hidden-BD34b6Sf.js";import"./useLabels-C-hTBXSR.js";import"./useButton-6CFw4W9G.js";import"./search-C_fUZQdi.js";import"./createLucideIcon-DPyGDXBW.js";import"./Button-aFOEdS9y.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-BnEeM0Eu.js";import"./VisuallyHidden-B0hr9uCQ.js";import"./x--mWXCQyN.js";import"./FieldError-CBIHh_VV.js";import"./Text-B7pj2ymj.js";import"./Text-ByOBhr0y.js";const j={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
