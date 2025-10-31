import{S as s}from"./SearchField-Ba9_QTt0.js";import"./iframe-CYLbMBt8.js";import"./preload-helper-Ct5FWWRu.js";import"./TextField.module-ClJJ_Sp5.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-CH8LbPDY.js";import"./utils-CtYggOsK.js";import"./useLocalizedStringFormatter-BCspmRwR.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-6sRA4Nvc.js";import"./useFocusRing-sTPNQCE4.js";import"./index-71tlDv88.js";import"./index-Brb7X42m.js";import"./useFormValidation-D94GToUh.js";import"./useField-QIAbAcEq.js";import"./Button-CKpDaDrO.js";import"./Hidden-CCZJVzSx.js";import"./useLabels-3FTzkieI.js";import"./useButton-BztmJ2aQ.js";import"./search-D_Xth6ua.js";import"./createLucideIcon-C_sXulXo.js";import"./Button-CwJUY5Uh.js";import"./Button.module-CtQ1deO8.js";import"./x-eOP32S9V.js";import"./useLocalizedStringFormatter-YzHAow_9.js";import"./FieldError-DJNlDTNE.js";import"./Text-DZ37ixFx.js";import"./Text-DhjMuTd4.js";const T={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
