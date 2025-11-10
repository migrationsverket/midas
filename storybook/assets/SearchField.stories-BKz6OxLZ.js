import{S as s}from"./SearchField-qGtu9sRz.js";import"./iframe-gDafevWB.js";import"./preload-helper-Ct5FWWRu.js";import"./TextField.module-DGUQcbB9.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-4KN4K3if.js";import"./utils-D3fLZcgK.js";import"./useLocalizedStringFormatter-4CYleAMk.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-D_hw8mvP.js";import"./useFocusRing-pcQ6uMrq.js";import"./index-FLT979Ca.js";import"./index-BZaLaXG6.js";import"./useFormValidation-PkbOXJyb.js";import"./useField-CcPX7HKz.js";import"./Button-CZcvnCND.js";import"./Hidden-oZZ-i5CO.js";import"./useLabels-4_DTO3O1.js";import"./useButton-C5F2GgN1.js";import"./search-KSkxowkT.js";import"./createLucideIcon-BK9rpLzw.js";import"./Button-MaSUsAmv.js";import"./Button.module-CtQ1deO8.js";import"./x-JiEZD4tq.js";import"./useLocalizedStringFormatter-D4ERAVZc.js";import"./FieldError-CSdKzLav.js";import"./Text-CufDXpQB.js";import"./Text-UrDmMZXE.js";const T={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
