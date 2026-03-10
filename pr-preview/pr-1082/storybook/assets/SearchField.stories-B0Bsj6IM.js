import{S as s}from"./SearchField-Dt8vurCs.js";import"./iframe-ChqJc2cw.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DdivwlC8.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-CR2AzEon.js";import"./utils-C3PzQQRY.js";import"./useLocalizedStringFormatter-u3-jiggt.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BFRCr59d.js";import"./useFocusRing-Br7CSdIA.js";import"./index-XHTXcyLl.js";import"./index-BSxnvZZM.js";import"./useFormValidation-BaYQI757.js";import"./useField-BNA68SbK.js";import"./Button-BeubRGKE.js";import"./Hidden-CXc9jxUl.js";import"./useLabels-rs-x4V9J.js";import"./useButton-Cp-BrBn5.js";import"./search-D3i3ji1n.js";import"./createLucideIcon-CuCvvgqY.js";import"./ClearButton-BCWY8MFQ.js";import"./Button-DLoG7seu.js";import"./Button.module-7yYQGR8l.js";import"./useLocalizedStringFormatter-DWAuUJ7k.js";import"./VisuallyHidden-BU1LBnPa.js";import"./x-Qc81h6kE.js";import"./FieldError-neuSuNaT.js";import"./Text-ByZunG-k.js";import"./Text-cWcAPzwL.js";const q={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
