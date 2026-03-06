import{S as s}from"./SearchField-s6aosbsQ.js";import"./iframe-CqGw52kl.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DdivwlC8.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-CGYQyUPv.js";import"./utils-DNYE9rrP.js";import"./useLocalizedStringFormatter-Dya7MH1I.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-0aYGewaS.js";import"./useFocusRing-GvsYGsAP.js";import"./index-CNbPhO7N.js";import"./index-Czi_6eNz.js";import"./useFormValidation-UdokVwww.js";import"./useField-DmoBeN0F.js";import"./Button-BG-x6i-t.js";import"./Hidden-duzZCIPn.js";import"./useLabels-BUufR3Kd.js";import"./useButton-CXcA0iHt.js";import"./search-Ci8MJwa7.js";import"./createLucideIcon-CoMafoM3.js";import"./ClearButton-Bw96DpIB.js";import"./Button-ABAzSfOF.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-MNNjNWeI.js";import"./VisuallyHidden-BSHZJK5y.js";import"./x-DtV2puKB.js";import"./FieldError-CjHIzoMC.js";import"./Text-CHXVqnQT.js";import"./Text-D3EOjJ0B.js";const q={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
