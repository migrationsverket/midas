import{S as s}from"./SearchField-BmnAzw8e.js";import"./iframe-qA047as2.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DdivwlC8.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-BqDoX1oC.js";import"./utils-CnePkaRa.js";import"./useLocalizedStringFormatter-4TG4W5do.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DIlc45TP.js";import"./useFocusRing-No8xSroW.js";import"./index-BDL1KNLx.js";import"./index-DVFaELLp.js";import"./useFormValidation-D9d090zr.js";import"./useField-Dbbo2A5n.js";import"./Button-CDa9hyQV.js";import"./Hidden-74NDefsp.js";import"./useLabels-BED0MCXy.js";import"./useButton-ZFa7mm27.js";import"./search-DvKlIuQH.js";import"./createLucideIcon-Bdodb09A.js";import"./ClearButton-BXL9tuuI.js";import"./Button-IkqPRuS8.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-BEiZ3BMs.js";import"./VisuallyHidden-BNz_8c2V.js";import"./x-DPER_DtP.js";import"./FieldError-aeuP4CDb.js";import"./Text-DZAVuivT.js";import"./Text-CzZwSmIU.js";const q={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
