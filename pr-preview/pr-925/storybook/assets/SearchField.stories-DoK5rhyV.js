import{S as s}from"./SearchField-kSkAf-y7.js";import"./iframe-CIM0DofB.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-1-_3qsJZ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-BbgbYRMe.js";import"./utils-B9P7pKe_.js";import"./useLocalizedStringFormatter-Mrh-6xvo.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-ChCqp-Fm.js";import"./useFocusRing-CoxC0ffE.js";import"./index-z3A9RS1V.js";import"./index-Bmtd_4Bw.js";import"./useFormValidation-C4G2ZagI.js";import"./useField-Dagtd4Zi.js";import"./Button-ropdusrp.js";import"./Hidden-C_nZwzti.js";import"./useLabels-CBzADNBy.js";import"./useButton-C0Vwpaou.js";import"./search-CpBytkJ_.js";import"./createLucideIcon-BthRmSsd.js";import"./Button-5M1jZ4FR.js";import"./Button.module-CtQ1deO8.js";import"./x-D17FT-An.js";import"./useLocalizedStringFormatter-Cd3WX5f1.js";import"./FieldError-DwO_S0KA.js";import"./Text-Ct6VpsXr.js";import"./Text-B9vOzllF.js";const T={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
