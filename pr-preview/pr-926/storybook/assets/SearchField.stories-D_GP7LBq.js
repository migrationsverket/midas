import{S as s}from"./SearchField-DKv9hmn8.js";import"./iframe-vV_WTh41.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-1-_3qsJZ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-B5J2UdzZ.js";import"./utils-BLkbaUED.js";import"./useLocalizedStringFormatter-gFqboiC_.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-CRS8JKH_.js";import"./useFocusRing-DjEgHD23.js";import"./index-8oChgm8L.js";import"./index-BBW3Edhr.js";import"./useFormValidation-CHHQL78Y.js";import"./useField-uOsQLLjz.js";import"./Button-DugNrTqg.js";import"./Hidden-DmUWzxob.js";import"./useLabels-D-vRNZ7C.js";import"./useButton-Bka7B6pp.js";import"./search-CZt07aP7.js";import"./createLucideIcon-Bw-FFKAv.js";import"./Button-DZf68tgE.js";import"./Button.module-CtQ1deO8.js";import"./x-CP63wXgR.js";import"./useLocalizedStringFormatter-Ctl0pcaH.js";import"./FieldError-DIXFUeQf.js";import"./Text--4As8pE8.js";import"./Text-D7liI3QI.js";const T={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
