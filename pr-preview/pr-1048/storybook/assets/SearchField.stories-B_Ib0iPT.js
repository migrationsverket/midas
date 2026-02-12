import{S as s}from"./SearchField-DnvRLfw0.js";import"./iframe-MVim3oui.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DpzeWGpt.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-BAKDmaF6.js";import"./utils-GfAQeq6-.js";import"./useLocalizedStringFormatter-BVBlcDTw.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-lYiDoqub.js";import"./useFocusRing-DsxBFZ5w.js";import"./index-DV_xb9Te.js";import"./index-BgBUqlNN.js";import"./useFormValidation-I8DYeMuj.js";import"./useField-DBjxyUYg.js";import"./Button-gb006erw.js";import"./Hidden-BnPFK6GE.js";import"./number-DfkVkf0F.js";import"./useLabels-CDhm4meR.js";import"./useButton-BYX1uAmK.js";import"./search-CQkUNvY-.js";import"./createLucideIcon-DbJYazUv.js";import"./ClearButton-CNcSIIGA.js";import"./Button-DXLRWKWN.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CQ2i-Pxa.js";import"./VisuallyHidden-D4ii-ukQ.js";import"./x-5DuCkJ-_.js";import"./FieldError-BDvc8nCv.js";import"./Text-CK8mjed6.js";import"./Text-BRJKcgIb.js";const w={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};const A=["Primary","CustomValidation","Invalid","Disabled"];export{r as CustomValidation,o as Disabled,t as Invalid,e as Primary,A as __namedExportsOrder,w as default};
