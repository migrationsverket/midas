import{S as s}from"./SearchField-CxHRfGAr.js";import"./iframe-Bj3rykqq.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DdivwlC8.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-RfhzWKsJ.js";import"./utils-BPR6QYXC.js";import"./useLocalizedStringFormatter-B6y89RBX.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BEFy2JUH.js";import"./useFocusRing-C7uadSDO.js";import"./index-Cayhktc8.js";import"./index-CnCGQqbA.js";import"./useFormValidation-CYMzGIyK.js";import"./useField-BMzGe7LS.js";import"./Button-BY6aKs9R.js";import"./Hidden-H2J0AFM4.js";import"./useLabels-C9jhOE8d.js";import"./useButton-5QuuU98A.js";import"./search-BSuYJ33Z.js";import"./createLucideIcon-CZGOASFZ.js";import"./ClearButton-DfU0Ltw2.js";import"./x-BjCQEpYP.js";import"./Button-DJUV-Oif.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-B96CwRWL.js";import"./VisuallyHidden-DZrJwb84.js";import"./FieldError-CGmgGZmu.js";import"./Text-D5Hv1XGK.js";import"./Text-DPxIPb0k.js";const q={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
