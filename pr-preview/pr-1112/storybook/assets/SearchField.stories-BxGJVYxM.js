import{S as s}from"./SearchField-CIQ_z6hC.js";import"./iframe-BWIE8y1J.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DdivwlC8.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-lz_f80Ux.js";import"./utils-CFen-6Tt.js";import"./useLocalizedStringFormatter-BmqPCVAe.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-bUCF8UIG.js";import"./useFocusRing-CeRcfsBW.js";import"./index-BQbDDAyZ.js";import"./index-CBFugdgC.js";import"./useFormValidation-DD0xfOTY.js";import"./useField-ZPISWi-E.js";import"./Button-BmJwA7TX.js";import"./Hidden-CsKeLRVA.js";import"./useLabels-CSgzIvv9.js";import"./useButton-lbVBAiGE.js";import"./search-DVsUDX-j.js";import"./createLucideIcon-BmTkHA-q.js";import"./ClearButton-N7AFBFeC.js";import"./x-DszmzPSL.js";import"./Button-Bhvh_nWe.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-Bj-PcblM.js";import"./VisuallyHidden-nM3_t9w5.js";import"./FieldError-DQP9cPYO.js";import"./Text-CGdD-JKO.js";import"./Text-LCrvkG-q.js";const q={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
