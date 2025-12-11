import{S as s}from"./SearchField-C5ZUWPuO.js";import"./iframe-Cr8ZG8qc.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-CgqiUiYQ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-Bq5QlAOQ.js";import"./utils-1qB61-Q9.js";import"./useLocalizedStringFormatter-ClP7AtYj.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-CR4C79Xe.js";import"./useFocusRing-Pn26Wr7i.js";import"./index-CK-mVwAb.js";import"./index-Cx2Cv-0i.js";import"./useFormValidation-B-jEyMki.js";import"./useField-C5gOy8n5.js";import"./Button-DtiX6Cf7.js";import"./Hidden-D4ZqPy51.js";import"./useLabels-JD4Ch7YH.js";import"./useButton-g037VBgg.js";import"./search-BbJJLWq8.js";import"./createLucideIcon-9WJw1iTO.js";import"./Button-BxRBYVZ9.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DoVeJ82i.js";import"./VisuallyHidden-BNibYwT3.js";import"./x-CfgPtn44.js";import"./FieldError-0m6zvZi0.js";import"./Text-BATGuSGj.js";import"./Text-CKb2n81p.js";const j={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};const q=["Primary","CustomValidation","Invalid","Disabled"];export{r as CustomValidation,o as Disabled,t as Invalid,e as Primary,q as __namedExportsOrder,j as default};
