import{S as s}from"./SearchField-CNCXWnLb.js";import"./iframe-CLZ7lMWL.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DpzeWGpt.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-Ch1Apm7b.js";import"./utils-2WeD-wN4.js";import"./useLocalizedStringFormatter-C7tLz9-g.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DxOJoG2G.js";import"./useFocusRing-ChcbSX8A.js";import"./index-joeLWnyk.js";import"./index-BQfKMPTh.js";import"./useFormValidation-DH2Mgg_R.js";import"./useField-DGpSlZLY.js";import"./Button-BdHKCjLS.js";import"./Hidden-To-3RG_j.js";import"./useLabels-DWLJ680t.js";import"./useButton-BRhObPaf.js";import"./search-BSuQjK9O.js";import"./createLucideIcon-CqL2zG8F.js";import"./ClearButton-4xoN3fct.js";import"./Button-epCGRlhZ.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DKKvMQ_v.js";import"./VisuallyHidden-BKsebB3-.js";import"./x-DBKM5voW.js";import"./FieldError-C9kOHtGX.js";import"./Text-DRJ2hBXG.js";import"./Text-BMOUMG_N.js";const q={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
