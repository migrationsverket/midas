import{S as s}from"./SearchField-50DtNq_0.js";import"./iframe-C1qr5fJG.js";import"./preload-helper-Ct5FWWRu.js";import"./TextField.module-DGUQcbB9.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-BInoKRkZ.js";import"./utils-L5F-E5oa.js";import"./useLocalizedStringFormatter-CZNoWOT_.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-Dj_XppDp.js";import"./useFocusRing-28aIZAqG.js";import"./index-Bx_ZZiUf.js";import"./index-D-qeXkn4.js";import"./useFormValidation-DE7hGYXe.js";import"./useField-C8ENA_HS.js";import"./Button-DQJfHdFy.js";import"./Hidden-C3GbSa9q.js";import"./useLabels-DysWQsGc.js";import"./useButton-C5lUgphC.js";import"./search-DEpA8Z3r.js";import"./createLucideIcon-BC-6srKg.js";import"./Button-DH_gl17G.js";import"./Button.module-CtQ1deO8.js";import"./x-Cg0vKU_m.js";import"./useLocalizedStringFormatter-CFy_c-ke.js";import"./FieldError-PPsriwer.js";import"./Text-PiImN2rq.js";import"./Text-_yTTBlbq.js";const T={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};const j=["Primary","CustomValidation","Invalid","Disabled"];export{r as CustomValidation,o as Disabled,t as Invalid,e as Primary,j as __namedExportsOrder,T as default};
