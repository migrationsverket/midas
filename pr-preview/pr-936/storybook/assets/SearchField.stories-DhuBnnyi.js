import{S as s}from"./SearchField-CHIEeBN5.js";import"./iframe-1ypBIpqt.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-1-_3qsJZ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-Dh7cHA4x.js";import"./utils-B8wMECB5.js";import"./useLocalizedStringFormatter-DyDkLKc1.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DKMDzkZI.js";import"./useFocusRing-BE60GF6p.js";import"./index-OME_eh5M.js";import"./index-bt6Kq2KN.js";import"./useFormValidation-BQeFm4UE.js";import"./useField-BDAsYkFm.js";import"./Button-sTPpWxn_.js";import"./Hidden-JN6h68tz.js";import"./useLabels-LwVbPde8.js";import"./useButton-CiHam1fw.js";import"./search-BBwwVM-q.js";import"./createLucideIcon-C531gWR5.js";import"./Button-Cxrzoy92.js";import"./Button.module-CtQ1deO8.js";import"./x-CBuOp1N4.js";import"./useLocalizedStringFormatter-WJZfuSlE.js";import"./FieldError-D4xQIw7Q.js";import"./Text-0r7LapIC.js";import"./Text-B5RNhX_R.js";const T={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
