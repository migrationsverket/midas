import{S as s}from"./SearchField-B4s-958x.js";import"./iframe-D4pYWxLo.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-1-_3qsJZ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-DRikiJpI.js";import"./utils-CNWAI1YN.js";import"./useLocalizedStringFormatter-DeN0CJTC.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-q7tA1tCV.js";import"./useFocusRing-Cd1zlkVw.js";import"./index-ffkNdVXt.js";import"./index-QMn_Li5K.js";import"./useFormValidation-D8zZucp-.js";import"./useField-aOfXQooy.js";import"./Button-BBLXtQE-.js";import"./Hidden-BmxxaD5V.js";import"./useLabels-D6wiLGoB.js";import"./useButton-DUM2jYvh.js";import"./search-BjgWiuNX.js";import"./createLucideIcon-EKjaxrON.js";import"./Button-BwuPit9L.js";import"./Button.module-CtQ1deO8.js";import"./x-DG8Jfz18.js";import"./useLocalizedStringFormatter-CPBieKrW.js";import"./FieldError-B2349xR_.js";import"./Text-C4ycuvF6.js";import"./Text-3Lu4u5rC.js";const T={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
