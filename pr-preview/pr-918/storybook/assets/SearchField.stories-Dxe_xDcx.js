import{S as s}from"./SearchField-BmqFVyjL.js";import"./iframe-CCMGVGRR.js";import"./preload-helper-Ct5FWWRu.js";import"./TextField.module-DGUQcbB9.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-BSOETMpm.js";import"./utils-CwTBQPYQ.js";import"./useLocalizedStringFormatter-DNuEa-zK.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DPN1No2N.js";import"./useFocusRing-4nh_xN_C.js";import"./index-BpVA6GFa.js";import"./index-DuUWKZbo.js";import"./useFormValidation-C4vxnw1-.js";import"./useField-Bew1AqZA.js";import"./Button-BTioCIMN.js";import"./Hidden-eOXH6NuV.js";import"./useLabels-DwvJ4AsJ.js";import"./useButton-DXzhQe-S.js";import"./search-B-cjU1WQ.js";import"./createLucideIcon-eJfvaVUR.js";import"./Button-BWDJLAAo.js";import"./Button.module-CtQ1deO8.js";import"./x-C3rWcS5D.js";import"./useLocalizedStringFormatter-_In-1XII.js";import"./FieldError-Badiw3DZ.js";import"./Text-DiHmm5Pv.js";import"./Text-Cca6IUbd.js";const T={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
