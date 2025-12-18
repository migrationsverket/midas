import{S as s}from"./SearchField-D8edGBTu.js";import"./iframe-CTgOJ9Ps.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-CgqiUiYQ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-CFnILQr1.js";import"./utils-DVlNRVKr.js";import"./useLocalizedStringFormatter-DYKfyeFk.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DKDELgNf.js";import"./useFocusRing-X2jAZYAF.js";import"./index-CCWPqzcV.js";import"./index-BoZlgUKT.js";import"./useFormValidation-BvD8rtkG.js";import"./useField-Dnh_8hCp.js";import"./Button-C-UPDMJV.js";import"./Hidden-BgNUkzG2.js";import"./useLabels-A9HpFVJQ.js";import"./useButton-BHqm994R.js";import"./search-BE4Bmx7t.js";import"./createLucideIcon-8WvXNeel.js";import"./Button-BrzX4JOs.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-uMvmKC8y.js";import"./VisuallyHidden-DMWuysUy.js";import"./x-B0Sr41AG.js";import"./FieldError-bycMJmoo.js";import"./Text-DcY7rHII.js";import"./Text-KKNDIRRs.js";const j={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
