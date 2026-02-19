import{S as s}from"./SearchField-DaoqU7bs.js";import"./iframe-DvfEE2EA.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-Dhscz2t0.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-BMOgnCDq.js";import"./utils-EccCoJST.js";import"./useLocalizedStringFormatter-7gPqsvUW.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-Bw36CqRH.js";import"./useFocusRing-DvRoLobF.js";import"./index-C-FPbYY0.js";import"./index-C-7AJHKG.js";import"./useFormValidation-BV0cpNq4.js";import"./useField-DtIRcX32.js";import"./Button-BEsFQT6R.js";import"./Hidden-E4LKVjJ3.js";import"./number-DfkVkf0F.js";import"./useLabels-BDWRbz34.js";import"./useButton-Cby6Hv6a.js";import"./search-_qwJzLLC.js";import"./createLucideIcon-BJb0Fm1J.js";import"./ClearButton-r9QQzP8O.js";import"./Button-CA8_LeWe.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CdetPKX0.js";import"./VisuallyHidden-DJTtwLDL.js";import"./x-DwluPr-j.js";import"./FieldError-DJlVVmti.js";import"./Text-CYxj4XUp.js";import"./Text-JM8wZQts.js";const w={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};const A=["Primary","CustomValidation","Invalid","Disabled"];export{r as CustomValidation,o as Disabled,t as Invalid,e as Primary,A as __namedExportsOrder,w as default};
