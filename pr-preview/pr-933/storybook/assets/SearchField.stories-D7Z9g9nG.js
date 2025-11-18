import{S as s}from"./SearchField-hjYy9CYb.js";import"./iframe-C4DKiwYN.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-1-_3qsJZ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-Brso7pLD.js";import"./utils-DvVj6zXb.js";import"./useLocalizedStringFormatter-DS8l-HPS.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-kU6Gmrvl.js";import"./useFocusRing-BQmbmOM8.js";import"./index-D1Zq3tBT.js";import"./index-DvRPFHJM.js";import"./useFormValidation-zdvVuc6w.js";import"./useField-BsA1_DsF.js";import"./Button-OpXtZSl7.js";import"./Hidden-DarF7sEh.js";import"./useLabels-D-Cj8mvW.js";import"./useButton-Bbt7Qg1l.js";import"./search--qSd1tp1.js";import"./createLucideIcon-lniO6bka.js";import"./Button-DEY78OrD.js";import"./Button.module-CtQ1deO8.js";import"./x-DhtcgaRQ.js";import"./useLocalizedStringFormatter-BcVnMSxQ.js";import"./FieldError-BAHDkvqC.js";import"./Text-ChfCx7em.js";import"./Text-jvPpr9wI.js";const T={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
