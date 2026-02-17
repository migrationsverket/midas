import{S as s}from"./SearchField-DcDwdMKe.js";import"./iframe-D4Gvrs9r.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-Cm6797Xw.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-BxrHLQLL.js";import"./utils-DgLFYAtQ.js";import"./useLocalizedStringFormatter-C406VONV.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BIe-c23M.js";import"./useFocusRing-Cb3CZ-aE.js";import"./index-6UveYWg_.js";import"./index-DkaKCeuE.js";import"./useFormValidation-CwQ_rSHp.js";import"./useField-BR9XxUx2.js";import"./Button-BokCFgRi.js";import"./Hidden-Fg0nOe1J.js";import"./useLabels-d4KXrv_2.js";import"./useButton-BedLEyIe.js";import"./search-DH0vC1um.js";import"./createLucideIcon-BxZcqrlQ.js";import"./ClearButton-BSmxlXAd.js";import"./Button-CGGZxAPK.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-BFXwxmG8.js";import"./VisuallyHidden-DsUdzhfv.js";import"./x-De-PNzK7.js";import"./FieldError-BLkIz_DJ.js";import"./Text-9OpdE2KE.js";import"./Text-DPs03w0L.js";const q={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
