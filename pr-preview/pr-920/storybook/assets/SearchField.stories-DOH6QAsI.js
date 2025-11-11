import{S as s}from"./SearchField-D6slET-a.js";import"./iframe-9CWn0dLe.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DGUQcbB9.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-By_9HlDg.js";import"./utils-CuV_iOgg.js";import"./useLocalizedStringFormatter-CncNPno2.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-CnplTrXK.js";import"./useFocusRing-B85yjLqW.js";import"./index-ChHL_39O.js";import"./index-CgCHr7e4.js";import"./useFormValidation-BUlR97HX.js";import"./useField-PXa-6i87.js";import"./Button-BJGIOWWr.js";import"./Hidden-CvOu_WHO.js";import"./useLabels-C0HlmxZK.js";import"./useButton-mlyjrjfq.js";import"./search-D8P7HndL.js";import"./createLucideIcon-B5h6e8RU.js";import"./Button-CujSre3v.js";import"./Button.module-CtQ1deO8.js";import"./x-COAiMCC9.js";import"./useLocalizedStringFormatter-B9S3QxzQ.js";import"./FieldError-Di2SbmV3.js";import"./Text-An75_Zxb.js";import"./Text-6xl2iDhz.js";const T={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
