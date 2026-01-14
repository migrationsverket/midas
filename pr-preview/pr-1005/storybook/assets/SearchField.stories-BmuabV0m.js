import{S as s}from"./SearchField-bCd2f2JV.js";import"./iframe-MGdNAUMz.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-CgqiUiYQ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-piNu0BKM.js";import"./utils-yAZ9U3h-.js";import"./useLocalizedStringFormatter-CMEEk3KL.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BtACyCdQ.js";import"./useFocusRing-9yuQWUp-.js";import"./index-CFMDqy5s.js";import"./index-DxYbJLyO.js";import"./useFormValidation-3gszShr7.js";import"./useField-BA29SgkZ.js";import"./Button-BGSDIYD6.js";import"./Hidden-DaKSv-Rd.js";import"./useLabels-CYaM2JW7.js";import"./useButton-CKkRVWTa.js";import"./search-hMykrA_h.js";import"./createLucideIcon-CrP5_4Rr.js";import"./Button-f3B-7Wnz.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CcU_ael6.js";import"./VisuallyHidden-BK3tSjRA.js";import"./x-BWyXqCEY.js";import"./FieldError-zekZnl7-.js";import"./Text-DFJny9No.js";import"./Text-D8P4tHEb.js";const j={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
