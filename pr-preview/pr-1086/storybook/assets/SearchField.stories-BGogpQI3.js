import{S as s}from"./SearchField-CCCS5pi5.js";import"./iframe-Cr1emYMW.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DdivwlC8.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-B64MCg1r.js";import"./utils-BYhslQdw.js";import"./useLocalizedStringFormatter-D5l-TwjB.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BravI5cu.js";import"./useFocusRing-DwGfHlXU.js";import"./index-CiTapa96.js";import"./index-Cl1_f9xd.js";import"./useFormValidation-Nhhgb2EE.js";import"./useField-BTs-PD6t.js";import"./Button-CEW_shex.js";import"./Hidden-BsA5K8lw.js";import"./useLabels-Db4gCzxq.js";import"./useButton-p5P1a05m.js";import"./search-DzA7GUvs.js";import"./createLucideIcon-GgkdFjqM.js";import"./ClearButton-B94x8ffq.js";import"./Button-BPrHdrSQ.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-DuJA0Avn.js";import"./VisuallyHidden-CrqhJx50.js";import"./x-Bw4oGsQc.js";import"./FieldError-B0n-brmG.js";import"./Text-DDXxWSnO.js";import"./Text-CnKjHHeh.js";const q={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
