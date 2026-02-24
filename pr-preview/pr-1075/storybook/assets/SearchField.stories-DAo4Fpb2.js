import{S as s}from"./SearchField-BcmQlau5.js";import"./iframe-DTgf2yWr.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DdivwlC8.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-SjDZU1Af.js";import"./utils-DzwNYuTN.js";import"./useLocalizedStringFormatter-DNR4J-Wr.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-Ca-oLaHa.js";import"./useFocusRing-CP7gcATu.js";import"./index-vkqPEYc_.js";import"./index-BH-DXcRM.js";import"./useFormValidation-Bjsb6Uuq.js";import"./useField-CIGO5Ju_.js";import"./Button-DsiJh3rg.js";import"./Hidden-CB9dI_i8.js";import"./useLabels-BOW8HuY_.js";import"./useButton-C1yhLz7X.js";import"./search-CyNLyhSI.js";import"./createLucideIcon-D9vwcDME.js";import"./ClearButton-D33j2E5z.js";import"./Button-ni8lscHZ.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-BDsobOj3.js";import"./VisuallyHidden-DLhSHTT7.js";import"./x-Dr1VccyY.js";import"./FieldError-D0N2b3Uz.js";import"./Text-bWE3sRjS.js";import"./Text-BnRqnZ91.js";const q={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
