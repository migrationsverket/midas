import{S as s}from"./SearchField-C0gf7tqs.js";import"./iframe-DgxKfNbk.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-1-_3qsJZ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-BTur9OCD.js";import"./utils-BGROS65s.js";import"./useLocalizedStringFormatter-nOCS1ZGV.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-Bu_9v5ag.js";import"./useFocusRing-DnzQSyQo.js";import"./index-DUg-lwjY.js";import"./index-CQL2Unmc.js";import"./useFormValidation-JYNwapHx.js";import"./useField-BhszGCTZ.js";import"./Button-sp0K8pyj.js";import"./Hidden-CS-gbQoN.js";import"./useLabels-DJqk111_.js";import"./useButton-CRwqM10K.js";import"./search-B8E7LByl.js";import"./createLucideIcon-gMUN6yHh.js";import"./Button-aJbpSB1Q.js";import"./Button.module-CtQ1deO8.js";import"./x-D1MtzSMC.js";import"./useLocalizedStringFormatter-C-Y2NsOw.js";import"./FieldError-D6hRhKtv.js";import"./Text-DSs1Iflc.js";import"./Text-snGWGL4K.js";const T={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
