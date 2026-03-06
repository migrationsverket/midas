import{S as s}from"./SearchField-CqZbQFFc.js";import"./iframe-C9oGoQlD.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DdivwlC8.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-Bqpo8ac-.js";import"./utils-c5FSWQc2.js";import"./useLocalizedStringFormatter-BZNBSpMr.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BtgUFzkV.js";import"./useFocusRing-BZ5zqIPz.js";import"./index-DI4OZgw7.js";import"./index-D3v6lHGq.js";import"./useFormValidation-Dt_mLA4h.js";import"./useField-D2aP1UuT.js";import"./Button-Cxj7U1e9.js";import"./Hidden-DN3uGqX_.js";import"./useLabels-B3yO6u3S.js";import"./useButton-DJeKkiJU.js";import"./search-Bl-ZQBd0.js";import"./createLucideIcon-B4xrwkR8.js";import"./ClearButton-8l_iRIic.js";import"./Button-BfQwIuB4.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-CCYDdyRA.js";import"./VisuallyHidden-cGHgangc.js";import"./x-a64OMIuk.js";import"./FieldError-BqYP09uo.js";import"./Text-BguV-1BC.js";import"./Text-6CtE12hJ.js";const q={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
