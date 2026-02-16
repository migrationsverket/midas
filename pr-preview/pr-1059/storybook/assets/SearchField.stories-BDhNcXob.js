import{S as s}from"./SearchField-j6qZFWTN.js";import"./iframe-CnLjYyDe.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DpzeWGpt.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-CDg9gtZR.js";import"./utils-PY6vNW2t.js";import"./useLocalizedStringFormatter-DncuCv5i.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-CgFbw68i.js";import"./useFocusRing-C1Kccm1N.js";import"./index-BZe8XCs4.js";import"./index-Bwgl-PlP.js";import"./useFormValidation-06JlsHvr.js";import"./useField-tmII_gfS.js";import"./Button-CDIxZDro.js";import"./Hidden-CeVZqhsZ.js";import"./useLabels-BGVam2Lm.js";import"./useButton-BI5y_GVj.js";import"./search-DHqeSZch.js";import"./createLucideIcon-CEFUCq1N.js";import"./ClearButton-Dr41Si7P.js";import"./Button-BssF-2IR.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-C41SEwV4.js";import"./VisuallyHidden-DsHhkbAP.js";import"./x-BHy0cb0H.js";import"./FieldError-Dse4I99A.js";import"./Text-lxQvVvph.js";import"./Text-fnyNn8_R.js";const q={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
