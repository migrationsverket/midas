import{S as s}from"./SearchField-BqhXx1MQ.js";import"./iframe-DMnXhvY8.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DpzeWGpt.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-4XYSNIgm.js";import"./utils-Cr6fPQeE.js";import"./useLocalizedStringFormatter-BVxr3gfN.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BuMNl-g1.js";import"./useFocusRing-8otf3cSz.js";import"./index-DAqnwmB7.js";import"./index-DIi78pwy.js";import"./useFormValidation-ByGzq6xW.js";import"./useField-DY-_TNf0.js";import"./Button-D4fHUSQK.js";import"./Hidden-DPa8I1Gp.js";import"./useLabels-B1zcB8t6.js";import"./useButton-DHyzBCn2.js";import"./search-Am538FF6.js";import"./createLucideIcon-DykDHhyw.js";import"./ClearButton-DMMFh5DU.js";import"./Button-E5A4z9FY.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DxRi-Ufl.js";import"./VisuallyHidden-C2H7BXVT.js";import"./x-CRcPQVxQ.js";import"./FieldError-iahkZMae.js";import"./Text-DMCoF6zG.js";import"./Text-CFJ7Rv8f.js";const q={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
