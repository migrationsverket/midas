import{S as s}from"./SearchField-YzTgwP7D.js";import"./iframe-CUHTTXY9.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-1-_3qsJZ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-Dsr3uqIL.js";import"./utils-Dcvemnmi.js";import"./useLocalizedStringFormatter-CrK0txrp.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DKFwGsCx.js";import"./useFocusRing-DjsRWKNx.js";import"./index-CAqaGyj3.js";import"./index-4Ydb_h1E.js";import"./useFormValidation-1u9KplN9.js";import"./useField-D95uEWDm.js";import"./Button-CTW6va-d.js";import"./Hidden-D4n6kN_K.js";import"./useLabels-BI5qQt6r.js";import"./useButton-BfZu2Gs4.js";import"./search-DS2Erefv.js";import"./createLucideIcon-BTFShZrE.js";import"./Button-BpmtbzrD.js";import"./Button.module-CtQ1deO8.js";import"./x-Dph03mwd.js";import"./useLocalizedStringFormatter-Dc6_OVdg.js";import"./FieldError-DhrB2_qe.js";import"./Text-D835pmOj.js";import"./Text-Bxb0XJzo.js";const T={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
