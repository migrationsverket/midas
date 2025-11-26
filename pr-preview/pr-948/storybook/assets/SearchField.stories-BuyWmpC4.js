import{S as s}from"./SearchField-CoHbciBa.js";import"./iframe-RVXDGCzj.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-1-_3qsJZ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-vlSlkaDy.js";import"./utils-iN7SzKyx.js";import"./useLocalizedStringFormatter-BTQA-h52.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-wSRnbuPD.js";import"./useFocusRing-sIIsP_Ie.js";import"./index-DsyKD1zx.js";import"./index-BAD9ZDfl.js";import"./useFormValidation-Boz_3mY-.js";import"./useField-CKy2iSil.js";import"./Button-Cz75Jen_.js";import"./Hidden-Db8RCo9R.js";import"./useLabels-DJJVN5GP.js";import"./useButton-1XCOziGF.js";import"./search-FE8pEYQt.js";import"./createLucideIcon-BjtbSbwb.js";import"./Button-c186Iq00.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-HLcBV4V1.js";import"./VisuallyHidden-DItlx4KW.js";import"./x-DEX-rAzy.js";import"./FieldError-B3uFZtah.js";import"./Text-oVUe24-Y.js";import"./Text-D1N65mcs.js";const j={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};const q=["Primary","CustomValidation","Invalid","Disabled"];export{r as CustomValidation,o as Disabled,t as Invalid,e as Primary,q as __namedExportsOrder,j as default};
