import{S as s}from"./SearchField-DGzou4b5.js";import"./iframe-BdMP7xRe.js";import"./preload-helper-Ct5FWWRu.js";import"./TextField.module-DGUQcbB9.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-BdK1PO_0.js";import"./utils-BXZxyj6A.js";import"./useLocalizedStringFormatter-uCha_X5U.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-ChDeooLZ.js";import"./useFocusRing-DNVUOvoN.js";import"./index-ran4ZW8i.js";import"./index-CG9v_bJu.js";import"./useFormValidation-CYa8QPFR.js";import"./useField-V4lYSNQA.js";import"./Button-BShsBV_n.js";import"./Hidden-21u4YwCE.js";import"./useLabels-BBjabKP_.js";import"./useButton-Dp6FlW9J.js";import"./search-BoGN2xXQ.js";import"./createLucideIcon-B_BA-bIQ.js";import"./Button-B87e4ZpD.js";import"./Button.module-CtQ1deO8.js";import"./x--C2HZCgu.js";import"./useLocalizedStringFormatter-Bmt49OaR.js";import"./FieldError-C8wOBOO7.js";import"./Text-DVcK-pIr.js";import"./Text-iZDkKzt3.js";const T={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
