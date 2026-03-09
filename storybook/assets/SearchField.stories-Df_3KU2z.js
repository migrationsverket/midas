import{S as s}from"./SearchField-D4qmsjgL.js";import"./iframe-BouJzQQI.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DdivwlC8.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-DpPiTef7.js";import"./utils-DjMpdX5f.js";import"./useLocalizedStringFormatter-DMqmuQ22.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-B48X4aPN.js";import"./useFocusRing-DLAN_On1.js";import"./index-Mk5PyGJk.js";import"./index-CdrImusv.js";import"./useFormValidation-BnrePAfb.js";import"./useField-DYm5lQPT.js";import"./Button-CGcz2bXe.js";import"./Hidden-Bml1-NzX.js";import"./useLabels-rV452Poa.js";import"./useButton-CJHkKL18.js";import"./search-BbZaJpir.js";import"./createLucideIcon-C49CaP5m.js";import"./ClearButton-0-0DPjb0.js";import"./Button-McxTSLwF.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-B5s11YDl.js";import"./VisuallyHidden-DJQNz0Bi.js";import"./x-BuD-pvTX.js";import"./FieldError-BSX4JMis.js";import"./Text-BC2cfNMW.js";import"./Text-B0v4i5dp.js";const q={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
