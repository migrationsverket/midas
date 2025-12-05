import{S as s}from"./SearchField-Bv64Xb_8.js";import"./iframe-100qMnfY.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-CgqiUiYQ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-UappQ29V.js";import"./utils-DREZrf5w.js";import"./useLocalizedStringFormatter-X_3lrB61.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BlHJ7yDn.js";import"./useFocusRing-CVO60JuB.js";import"./index-DtVlivv4.js";import"./index-4-70Rh_t.js";import"./useFormValidation-5HIGbRHA.js";import"./useField-CQ-Xt63e.js";import"./Button-CLD1ku7M.js";import"./Hidden-BfdaDtwq.js";import"./useLabels-ChwZdlgF.js";import"./useButton-BCpYX0mb.js";import"./search-B6qBEwu2.js";import"./createLucideIcon-CoQzWAgu.js";import"./Button-CSE2hNCe.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-zfYfv8U6.js";import"./VisuallyHidden-4x0NHiv7.js";import"./x-i3ng02A_.js";import"./FieldError-BvABXoNl.js";import"./Text-B4kw0-X3.js";import"./Text-B8ramOt9.js";const j={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
