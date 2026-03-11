import{S as s}from"./SearchField-BXnCIHv-.js";import"./iframe-CvgTjsRI.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DdivwlC8.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-DEiVg5eh.js";import"./utils-DsGHCuDD.js";import"./useLocalizedStringFormatter-CrfJ-HgW.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-_v63b735.js";import"./useFocusRing-Bf69ssZP.js";import"./index-BUwV2pti.js";import"./index-CCCX_Q-4.js";import"./useFormValidation-DdFzRzUV.js";import"./useField-CoGIDQmT.js";import"./Button-5hgjL52o.js";import"./Hidden-Bz8_ARKx.js";import"./useLabels-B-EK2xcM.js";import"./useButton-DTqgbWNm.js";import"./search-BB9PlE7m.js";import"./createLucideIcon-Be0qHJux.js";import"./ClearButton-ClVQsAy7.js";import"./x-CVjv4lq5.js";import"./Button-CIHCm98a.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-COXV7AZN.js";import"./VisuallyHidden-DnWZa0YB.js";import"./FieldError-BQ0145L6.js";import"./Text-Bxgne8zr.js";import"./Text-CJZcBszR.js";const q={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
