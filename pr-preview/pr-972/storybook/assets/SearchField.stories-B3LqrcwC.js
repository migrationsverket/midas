import{S as s}from"./SearchField-DNM6IA4Q.js";import"./iframe-BtnDiUeo.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-CgqiUiYQ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-BMBk6NmG.js";import"./utils-6t5S5iG-.js";import"./useLocalizedStringFormatter-BfXnVgGt.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-LlEhU_rz.js";import"./useFocusRing-CeaXn4pv.js";import"./index-DNj_r2ie.js";import"./index-CMMeM23Q.js";import"./useFormValidation-QJMhqtMl.js";import"./useField-Cbo48EzZ.js";import"./Button-C4A3JbkV.js";import"./Hidden-SeEFEyCD.js";import"./useLabels-L9u9tUn5.js";import"./useButton-Dj3Yiida.js";import"./search-uieByOYO.js";import"./createLucideIcon-Cyxnybqj.js";import"./Button-COsxIDgV.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-6oMJ6jzu.js";import"./VisuallyHidden-DyHyzLz4.js";import"./x-D8AFAqJa.js";import"./FieldError-BwMKPYqO.js";import"./Text-BHP3jDdS.js";import"./Text-5ETkJBTM.js";const j={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
