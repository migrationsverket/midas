import{S as s}from"./SearchField-D-FaRWfz.js";import"./iframe-D57HPjUH.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-CgqiUiYQ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-C5qdaBdS.js";import"./utils-B06jzTgT.js";import"./useLocalizedStringFormatter-Do30dAQM.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DMqIp21y.js";import"./useFocusRing-DtsyDwWy.js";import"./index-CgeWXzya.js";import"./index-DybAXT18.js";import"./useFormValidation-BquHFWdr.js";import"./useField-DeXnNznj.js";import"./Button-DVU6uVBH.js";import"./Hidden-Ds1-Bo4r.js";import"./useLabels-CqCkvO1J.js";import"./useButton-CaFZ2X3A.js";import"./search-CPZ_fmqO.js";import"./createLucideIcon-_zPB_PGU.js";import"./Button-DUgrP7y1.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CP9tIGKw.js";import"./VisuallyHidden-bPoGyprv.js";import"./x-CCfpzTZt.js";import"./FieldError-D4T6w_uZ.js";import"./Text-BRbYuply.js";import"./Text-b7_ug03S.js";const j={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
