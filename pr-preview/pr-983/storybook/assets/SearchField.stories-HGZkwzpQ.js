import{S as s}from"./SearchField-sgy5dRh7.js";import"./iframe-Co4-ZyV5.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-CgqiUiYQ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-DDOdSbPg.js";import"./utils-vPvXRE8s.js";import"./useLocalizedStringFormatter-BWJA3tAg.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-CRtyHqAT.js";import"./useFocusRing-CbWbCyA2.js";import"./index-D1TXxQim.js";import"./index-BKiR4w34.js";import"./useFormValidation-CI-48dgm.js";import"./useField-_kwhBzfX.js";import"./Button-vLKPKh4I.js";import"./Hidden-CYasrRch.js";import"./useLabels-K3nzkU17.js";import"./useButton-D9ay2y--.js";import"./search-CPsPXaQA.js";import"./createLucideIcon-B4KpWunU.js";import"./Button-DLfCs3xE.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-2nFP8uYy.js";import"./VisuallyHidden-BuTNJIhE.js";import"./x-Dz3fvaRV.js";import"./FieldError-CSfnBoG7.js";import"./Text-Bx2UjQld.js";import"./Text-CUkg7ETr.js";const j={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
