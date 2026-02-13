import{S as s}from"./SearchField-Bmlt6oIk.js";import"./iframe-HTnyBHVP.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DpzeWGpt.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-BvewPd3v.js";import"./utils-nUZbU1Wv.js";import"./useLocalizedStringFormatter-BalekKZg.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DAmS8JMp.js";import"./useFocusRing-cQQ3mgw6.js";import"./index-0Fr-bx-l.js";import"./index-B1GoJJ0m.js";import"./useFormValidation-FXPeM9Pb.js";import"./useField-D-1_vJxx.js";import"./Button-D68YtQlI.js";import"./Hidden-CcyJsNu-.js";import"./useLabels-B85yUaIW.js";import"./useButton-kqwXbyL2.js";import"./search-CbH-txKp.js";import"./createLucideIcon-D9zOPHSY.js";import"./ClearButton-D2T5j_f_.js";import"./Button-CNzpSaeX.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-Pq2987gd.js";import"./VisuallyHidden-DL4mh8Hc.js";import"./x-BVS5B-gf.js";import"./FieldError-W3cPolKE.js";import"./Text-C-D185rS.js";import"./Text-C2CdsLAg.js";const q={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
