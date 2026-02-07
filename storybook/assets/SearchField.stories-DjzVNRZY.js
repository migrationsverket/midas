import{S as s}from"./SearchField-BnA3rx2N.js";import"./iframe-B7CA7zm9.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DpzeWGpt.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-C73mtcAA.js";import"./utils-CQgVAoKd.js";import"./useLocalizedStringFormatter-jYoZNKU4.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BcHGj1n2.js";import"./useFocusRing-DlIVYC0Q.js";import"./index-Cwsun3ZN.js";import"./index-BocC1wQt.js";import"./useFormValidation-CmLLFYfy.js";import"./useField-q_r02WmP.js";import"./Button-DCb3Avtf.js";import"./Hidden-D1GMlL2H.js";import"./useLabels-COPc6DSg.js";import"./useButton-OekK3SSa.js";import"./search-b52eZ5QM.js";import"./createLucideIcon-DrWysga5.js";import"./ClearButton-BlRGT7SL.js";import"./Button-D89KgD4F.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-Dmi23tW0.js";import"./VisuallyHidden-B6IbkCTP.js";import"./x-BMjxK86n.js";import"./FieldError-C6l0vGmY.js";import"./Text-D03EwgzM.js";import"./Text-Cj80PO87.js";const q={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
