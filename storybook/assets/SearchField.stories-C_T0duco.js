import{S as s}from"./SearchField-DA1EoGaL.js";import"./iframe-hjgHldhA.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DdivwlC8.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-p8oWdHew.js";import"./utils-B2oy_Akv.js";import"./useLocalizedStringFormatter-QPyrmh33.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-N8eQEtzs.js";import"./useFocusRing-DGqM0imy.js";import"./index-wWqPkfY9.js";import"./index-CZGdFrnq.js";import"./useFormValidation-CpAXD96F.js";import"./useField-CXw-Mbui.js";import"./Button-DdHA5O9n.js";import"./Hidden-CkBT3eQL.js";import"./useLabels-BUpPlZ0t.js";import"./useButton-3e8Qen6j.js";import"./search-gKw6hHd7.js";import"./createLucideIcon-DxWbUO7j.js";import"./ClearButton-gqP1pVXK.js";import"./x-DBeRfKB2.js";import"./Button-D4ayGKxz.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-qYAAoSTQ.js";import"./VisuallyHidden-pF8Dh8C_.js";import"./FieldError-DyNIXA91.js";import"./Text-C-W1MFmh.js";import"./Text-BGjvDqqs.js";const q={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
