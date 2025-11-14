import{S as s}from"./SearchField-CS8ldwep.js";import"./iframe-Dnj0zt3A.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-1-_3qsJZ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-BLnkZwm8.js";import"./utils-CZ7ujQb6.js";import"./useLocalizedStringFormatter-B0e0Ob-A.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-CyCzrgJR.js";import"./useFocusRing-BJGbDr4g.js";import"./index-BZ5oXR7W.js";import"./index-w9N2b8_o.js";import"./useFormValidation-D-Igx394.js";import"./useField-BagSvq-O.js";import"./Button-BEMXi9hp.js";import"./Hidden-BdPJwGeM.js";import"./useLabels-DPkdJjpB.js";import"./useButton-DXRKrxCT.js";import"./search-Ccqy-cjd.js";import"./createLucideIcon-2omQZeFD.js";import"./Button-D037RcO0.js";import"./Button.module-CtQ1deO8.js";import"./x-DsZiGScE.js";import"./useLocalizedStringFormatter-7drUIReq.js";import"./FieldError-Ds1rpN1P.js";import"./Text-BZcE4PZu.js";import"./Text-CUy2D1XG.js";const T={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};const j=["Primary","CustomValidation","Invalid","Disabled"];export{r as CustomValidation,o as Disabled,t as Invalid,e as Primary,j as __namedExportsOrder,T as default};
