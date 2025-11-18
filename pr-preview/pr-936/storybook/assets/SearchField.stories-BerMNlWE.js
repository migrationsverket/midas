import{S as s}from"./SearchField-AwSoRM-A.js";import"./iframe-DwmMgugL.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-1-_3qsJZ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-yWDFBEGR.js";import"./utils-DmBjYA7q.js";import"./useLocalizedStringFormatter-BaxlK3Fj.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BMRFKc-Q.js";import"./useFocusRing-CzZK1_to.js";import"./index-DjWT9C0a.js";import"./index-BRzIZAFy.js";import"./useFormValidation-DZHIdgUq.js";import"./useField-DqouWQCD.js";import"./Button-Dle7h4uT.js";import"./Hidden-C52U5hS0.js";import"./useLabels-BFzRRTRc.js";import"./useButton-CUQ_mzTp.js";import"./search-B-oAHTWR.js";import"./createLucideIcon-9R8XYZ6c.js";import"./Button-DoQx4OEV.js";import"./Button.module-CtQ1deO8.js";import"./x--Paj8wKV.js";import"./useLocalizedStringFormatter-Bq9JIZi1.js";import"./FieldError-D5MBP0wB.js";import"./Text-BgheBiT-.js";import"./Text-uR4nWzwy.js";const T={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
