import{S as s}from"./SearchField-DWFo7Kw7.js";import"./iframe-DS0O0j7b.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DdivwlC8.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-YiR0L17D.js";import"./utils-C_Y1VJyB.js";import"./useLocalizedStringFormatter-DgIs-M2f.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-CfmO-j_f.js";import"./useFocusRing-C0d3_IpO.js";import"./index-D3Tr-KQh.js";import"./index-oPvKfDWU.js";import"./useFormValidation-BQZAIrPT.js";import"./useField-BQuOWwRW.js";import"./Button-Dmgtf1bQ.js";import"./Hidden-kaUfFbEZ.js";import"./useLabels-CDMzy8g3.js";import"./useButton-8RAVO9uW.js";import"./search-Dk_uKGHj.js";import"./createLucideIcon-BttQnoLZ.js";import"./ClearButton-DLZaUM2-.js";import"./x-DcON_b5s.js";import"./Button-DB7_h4Ph.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-C9AMm5n0.js";import"./VisuallyHidden-bAykpqel.js";import"./FieldError-obiFspMo.js";import"./Text-24RRIPeu.js";import"./Text-img0UXBQ.js";const q={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
