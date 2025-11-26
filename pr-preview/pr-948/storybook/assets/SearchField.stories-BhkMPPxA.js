import{S as s}from"./SearchField-DOGijbDU.js";import"./iframe-to6ZPd-o.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-1-_3qsJZ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-D9LO3zyF.js";import"./utils-BaBklhKO.js";import"./useLocalizedStringFormatter-he1K6QfO.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BiBUmWa1.js";import"./useFocusRing-mcA5BXJm.js";import"./index-BF--nVYl.js";import"./index-BCIYHMkX.js";import"./useFormValidation-BqiN7hi-.js";import"./useField-BzvU-3EX.js";import"./Button-BbbNB3BB.js";import"./Hidden-CKtvUpX0.js";import"./useLabels-D7I-5sOB.js";import"./useButton-CGov8omT.js";import"./search-DnTFzO9P.js";import"./createLucideIcon-DyGCeJBI.js";import"./Button-33ZWPybi.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-aWUqleFc.js";import"./VisuallyHidden-rAuGCWJa.js";import"./x-BOSIFXhh.js";import"./FieldError-kqWMyMLO.js";import"./Text-rl71NDZH.js";import"./Text-Fu0lberS.js";const j={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
