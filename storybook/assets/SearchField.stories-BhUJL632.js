import{S as s}from"./SearchField-Cp3WEbPA.js";import"./iframe-COikYHdP.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-Dhscz2t0.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-Cl3D1B3q.js";import"./utils-BMDm-KrN.js";import"./useLocalizedStringFormatter-Dt-u1m1S.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-RLOY_8_i.js";import"./useFocusRing-BWhmDfF8.js";import"./index-DaHyXhuy.js";import"./index-E3BpGcaE.js";import"./useFormValidation-B9TCmMh5.js";import"./useField-Cj2sp65a.js";import"./Button-AP7Y4Mno.js";import"./Hidden-BkpCwkk8.js";import"./useLabels-M7dy5Zja.js";import"./useButton-CCmPBSSV.js";import"./search-BaaVBFSl.js";import"./createLucideIcon-Cfor4pko.js";import"./ClearButton-fqUozMXp.js";import"./Button-jvTkoE8j.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-fXUv9IGD.js";import"./VisuallyHidden-PvYD6Ub5.js";import"./x-DsF834kI.js";import"./FieldError-DV7LrvHp.js";import"./Text-NJjQXwoJ.js";import"./Text-B3B9omX-.js";const q={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
