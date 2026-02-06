import{S as s}from"./SearchField-d81IuCIy.js";import"./iframe-uZkJ1fJG.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DpzeWGpt.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-Cr8mehV-.js";import"./utils-Bql2fpyW.js";import"./useLocalizedStringFormatter-BmHqoQ62.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-bl1JDDeB.js";import"./useFocusRing-DaTXuR1t.js";import"./index-n8hdgtys.js";import"./index-B9xkxF8M.js";import"./useFormValidation-D37evYkq.js";import"./useField-NLOOn1cb.js";import"./Button-wtboOTdT.js";import"./Hidden-D9iAREQW.js";import"./useLabels-C8qvnydK.js";import"./useButton-B1lGnkCE.js";import"./search-E_qbF8Mo.js";import"./createLucideIcon-DACNTlAl.js";import"./ClearButton-BbJ7SYp8.js";import"./Button-DXAvfZt_.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CxCN2hvr.js";import"./VisuallyHidden-CZMMqkul.js";import"./x-7qMG5WbC.js";import"./FieldError-CNz8C0Mw.js";import"./Text-ClpReuqT.js";import"./Text-D4eTnBnq.js";const q={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
