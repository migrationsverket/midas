import{S as s}from"./SearchField-C7S78xlB.js";import"./iframe-BMI9LcwD.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-Cm6797Xw.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-DULbg8rB.js";import"./utils-CUKuiloA.js";import"./useLocalizedStringFormatter-BGq9CHdg.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-WEoR-zcU.js";import"./useFocusRing-DwyCmeGr.js";import"./index-fsqC8uXs.js";import"./index-CWh_0PxX.js";import"./useFormValidation-DnRBQ596.js";import"./useField-DH6BC-q1.js";import"./Button-Czr2XHcN.js";import"./Hidden-DWYxNcIi.js";import"./useLabels-ipZVyWiu.js";import"./useButton-BpdaM1mY.js";import"./search-Bg7fQGX_.js";import"./createLucideIcon-BUDo9TFX.js";import"./ClearButton-Ca88v--o.js";import"./Button-k6WQaZpy.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CzttMcKh.js";import"./VisuallyHidden-CqjPFeZK.js";import"./x-HbCAtCPY.js";import"./FieldError-Bn65JKdh.js";import"./Text-IBNi6CET.js";import"./Text-Cp8-jRoc.js";const q={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
