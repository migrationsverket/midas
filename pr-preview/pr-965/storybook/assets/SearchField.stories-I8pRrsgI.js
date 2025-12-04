import{S as s}from"./SearchField-Dflj0cDM.js";import"./iframe-BiGwQC7B.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-CgqiUiYQ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-BsPOPDnb.js";import"./utils-C30Tz2FV.js";import"./useLocalizedStringFormatter-DWUwKKLO.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-B7CJZVWF.js";import"./useFocusRing-Yc3HhkHH.js";import"./index-tDrwXmSr.js";import"./index-CukiPHwP.js";import"./useFormValidation-LCwChDGO.js";import"./useField-B9Ft1-xe.js";import"./Button-wh89retW.js";import"./Hidden-FKjmD1jf.js";import"./useLabels-B8OQIyOs.js";import"./useButton-DM0HTRcL.js";import"./search-ED7TXsn1.js";import"./createLucideIcon-DBZ-Oss7.js";import"./Button-CIRUUK5p.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-Dfxgqjph.js";import"./VisuallyHidden-BsPxQLTF.js";import"./x-CDnnqeqz.js";import"./FieldError-BdtM7o8g.js";import"./Text-CGAgsi4Y.js";import"./Text-aG3lDf3K.js";const j={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
