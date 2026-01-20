import{S as s}from"./SearchField-BuAxPDhO.js";import"./iframe-D-2Z30c8.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-CgqiUiYQ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-DQ7Q1QxO.js";import"./utils-DNydHYc7.js";import"./useLocalizedStringFormatter-BGPhrwPv.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-CSjh0vYN.js";import"./useFocusRing-DHbfBmoZ.js";import"./index-CXlyEFlC.js";import"./index-y-LtlDB7.js";import"./useFormValidation-g9InWXfo.js";import"./useField-Cm8tVB4V.js";import"./Button-B7aUUd8D.js";import"./Hidden-CvH6QNsS.js";import"./useLabels-BRLzE6Cb.js";import"./useButton-E9BEr0uy.js";import"./search-7IJV4PFh.js";import"./createLucideIcon-DQV7tCjS.js";import"./ClearButton-Dv8GLJ7s.js";import"./Button-Do142c3E.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DgZG97CC.js";import"./VisuallyHidden-G01riaNf.js";import"./x-DCcFjLN0.js";import"./FieldError-CSFHdZGJ.js";import"./Text-CDWb81vy.js";import"./Text-CwJkDPGR.js";const q={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
