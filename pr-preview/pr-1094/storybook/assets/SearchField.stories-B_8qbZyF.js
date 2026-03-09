import{S as s}from"./SearchField-D-VaD63J.js";import"./iframe-C2hHAX_c.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DdivwlC8.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-Bqiy5-s7.js";import"./utils-CYjcBBm1.js";import"./useLocalizedStringFormatter-Cusafc4g.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BVr0BcQN.js";import"./useFocusRing-71g5CJVP.js";import"./index-utew35I4.js";import"./index-BISH_zx5.js";import"./useFormValidation-DHc1AjUb.js";import"./useField-CMmSOBcA.js";import"./Button-D8SyKFCR.js";import"./Hidden-UkteWA62.js";import"./useLabels-CS2Af-Ri.js";import"./useButton-De47wRHH.js";import"./search-eBPtkLyb.js";import"./createLucideIcon-BcvDIfsv.js";import"./ClearButton-C7GnG285.js";import"./Button-DlfSSXdG.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-BQOzlYhQ.js";import"./VisuallyHidden-DWzqY3m_.js";import"./x-C0uuZGTx.js";import"./FieldError-D33fSaC5.js";import"./Text-CEBbuk7S.js";import"./Text-CXKXGfTm.js";const q={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
