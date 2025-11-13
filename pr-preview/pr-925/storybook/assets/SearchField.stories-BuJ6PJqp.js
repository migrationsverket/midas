import{S as s}from"./SearchField-CI8RRdXK.js";import"./iframe-CbbBAmzj.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-1-_3qsJZ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-BiEt7xRU.js";import"./utils-BhRPGHPf.js";import"./useLocalizedStringFormatter-BdrD0Kyz.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-Qnse-Sqt.js";import"./useFocusRing-0mAROpRM.js";import"./index-DHUIB7sV.js";import"./index-D-NGygsf.js";import"./useFormValidation-CQFjrY1c.js";import"./useField-DrRy_FAN.js";import"./Button-QZ9MaBJ0.js";import"./Hidden-c3MDr7Jx.js";import"./useLabels-Cazyn2uu.js";import"./useButton-D2eklsDg.js";import"./search-B3XZvs-2.js";import"./createLucideIcon-CroHsTCf.js";import"./Button-xJdt2F7s.js";import"./Button.module-CtQ1deO8.js";import"./x-Bb0Jqa61.js";import"./useLocalizedStringFormatter-Cgyg9bBm.js";import"./FieldError-DbUlAqb9.js";import"./Text-CsK72l07.js";import"./Text-n09TZFQz.js";const T={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
