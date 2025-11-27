import{S as s}from"./SearchField-BJ05l4qN.js";import"./iframe-BcYLPvvG.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-1-_3qsJZ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-Cl08l4Il.js";import"./utils-DuGQH1VB.js";import"./useLocalizedStringFormatter-CEq-wPRG.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-eRV-Ef8i.js";import"./useFocusRing-mtX7PO0G.js";import"./index-8OTKUVm4.js";import"./index-DIjlvTAp.js";import"./useFormValidation-84Kof8wr.js";import"./useField-DopM9hg3.js";import"./Button-Dk0RbBuY.js";import"./Hidden-tUEU5F-V.js";import"./useLabels-h9x39qhJ.js";import"./useButton-CxdPVYy7.js";import"./search-CsqquipV.js";import"./createLucideIcon-h4XNnCB9.js";import"./Button-C21XDfHm.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-C15hJ3-x.js";import"./VisuallyHidden-B8-euVpR.js";import"./x-xAvv45r1.js";import"./FieldError-DiuvsHLT.js";import"./Text-Ctvw4Oon.js";import"./Text-BmaZQl73.js";const j={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
