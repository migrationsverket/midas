import{S as s}from"./SearchField-Cdf-2Q7q.js";import"./iframe-BdIMh-mp.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-CgqiUiYQ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-CajUkngI.js";import"./utils-DcDhyL9A.js";import"./useLocalizedStringFormatter-BqgT-J0v.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-sO65FhyB.js";import"./useFocusRing-BNwH8fuD.js";import"./index-hViR2ylZ.js";import"./index-DZNXlpZV.js";import"./useFormValidation-C6vbNqNO.js";import"./useField-BrWC9yz0.js";import"./Button-zJPbjdhx.js";import"./Hidden-Wyg5sLjl.js";import"./useLabels-C4ABAGya.js";import"./useButton-BS6Zvdtu.js";import"./search-SaGHSUoO.js";import"./createLucideIcon-DEobE2Q1.js";import"./ClearButton-DArq-Fip.js";import"./Button-CNVh9qH3.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DXrVuCTi.js";import"./VisuallyHidden-D8MfmHyq.js";import"./x-C6Q4fVg_.js";import"./FieldError-DsymNm4A.js";import"./Text-C4WrRLPZ.js";import"./Text-Bx_0lix_.js";const q={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
