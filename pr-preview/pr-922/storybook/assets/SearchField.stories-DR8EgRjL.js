import{S as s}from"./SearchField-JC4P4Doi.js";import"./iframe-BLeM1TYl.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-1-_3qsJZ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-BU1bA4yz.js";import"./utils-D0fgVb1b.js";import"./useLocalizedStringFormatter-DnHnQahm.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BIS1QLUu.js";import"./useFocusRing-4Dtk05IT.js";import"./index-BTEhrLut.js";import"./index-C_6FlPHF.js";import"./useFormValidation-yTCjfPRY.js";import"./useField-BkEz_tre.js";import"./Button-CYodFdJJ.js";import"./Hidden--RnSCsvw.js";import"./useLabels-C72m2YsE.js";import"./useButton-Byh70Qyk.js";import"./search-vetbANsA.js";import"./createLucideIcon-CcGBU6Ho.js";import"./Button-Cpp3gRTf.js";import"./Button.module-CtQ1deO8.js";import"./x-Df5oesPo.js";import"./useLocalizedStringFormatter-D5OW06nN.js";import"./FieldError-DlB1o_kR.js";import"./Text-B1gNnLul.js";import"./Text-1bQSpdKb.js";const T={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
