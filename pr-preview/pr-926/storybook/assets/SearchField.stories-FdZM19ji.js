import{S as s}from"./SearchField-BEKitSyJ.js";import"./iframe-DkfvDrVS.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-1-_3qsJZ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-BCW3Vp6F.js";import"./utils-DzbRiR6M.js";import"./useLocalizedStringFormatter-CJdbxQ-n.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-CcHXdHqQ.js";import"./useFocusRing-BM6vq-KP.js";import"./index-DRhH9nnC.js";import"./index-BZFBT-3J.js";import"./useFormValidation-DK-IWL2L.js";import"./useField-MaUdsQMW.js";import"./Button-BEd_-gNz.js";import"./Hidden-BZCdAkKc.js";import"./useLabels-DflfoN4r.js";import"./useButton-DkycpXBB.js";import"./search-DuCkWMaz.js";import"./createLucideIcon-caan2w-a.js";import"./Button-B_yGy9B1.js";import"./Button.module-CtQ1deO8.js";import"./x-DUTAFXft.js";import"./useLocalizedStringFormatter-CzTybd1w.js";import"./FieldError-BIMD40Se.js";import"./Text-CsHYCFhe.js";import"./Text-DCB-quyL.js";const T={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
