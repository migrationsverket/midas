import{S as s}from"./SearchField-DBs_RuEX.js";import"./iframe-DOXdiU66.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DpzeWGpt.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-CJroEoWv.js";import"./utils-CmnmUlXv.js";import"./useLocalizedStringFormatter-CWz_tyHY.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DRBZq_2S.js";import"./useFocusRing-DmwdXSTO.js";import"./index-ClfAcbiY.js";import"./index-BXbJVeS4.js";import"./useFormValidation-DEhwRD6x.js";import"./useField-ByAKI2BZ.js";import"./Button-DcU_sKA3.js";import"./Hidden-TB3BoZiq.js";import"./useLabels-j-fCOdoN.js";import"./useButton-BADRSzES.js";import"./search-CprYf_Q8.js";import"./createLucideIcon-CTd9hGNC.js";import"./ClearButton-BJtRJ4Yb.js";import"./Button-CXH-q602.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DslrlAyz.js";import"./VisuallyHidden-1ky1b9n5.js";import"./x-CAiuwumR.js";import"./FieldError-DkJbgax8.js";import"./Text-gQE2jOxd.js";import"./Text-O51bLbCJ.js";const q={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
