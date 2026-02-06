import{S as s}from"./SearchField-BwA5gXCo.js";import"./iframe-Bu2zzzE-.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DpzeWGpt.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-DGpDrNxO.js";import"./utils-D4qoxq6V.js";import"./useLocalizedStringFormatter-Bgu754vE.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-Dr9sigZv.js";import"./useFocusRing-YWhjqEgC.js";import"./index-B4VLM8wj.js";import"./index-CLepp-yy.js";import"./useFormValidation-CYLG9fgC.js";import"./useField-wWbyNm1N.js";import"./Button-S1cZ3oDo.js";import"./Hidden-B80qSbZA.js";import"./useLabels-CBl0gRZS.js";import"./useButton-D1KNfoAL.js";import"./search-Dgd0HySc.js";import"./createLucideIcon-DOjvHL5l.js";import"./ClearButton-Ds6cbL-7.js";import"./Button-q_TKGLf8.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-Dt6zB3aB.js";import"./VisuallyHidden-DvEZM9Lw.js";import"./x-dhS2SloF.js";import"./FieldError-C-kLbmfj.js";import"./Text-CyZW-0MA.js";import"./Text-CbpLUl1P.js";const q={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
