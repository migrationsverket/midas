import{S as s}from"./SearchField-XTI3FlwW.js";import"./iframe-DTLJLCqo.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DpzeWGpt.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-D7_B-bjt.js";import"./utils-aQAqN8gs.js";import"./useLocalizedStringFormatter-Cpm5l6p9.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-C_rJIOGj.js";import"./useFocusRing-CCXTTGcy.js";import"./index-R7zWEzuw.js";import"./index-DWROMjn1.js";import"./useFormValidation-DXoy3rZ6.js";import"./useField-DrzhCEc1.js";import"./Button-DLbZMMBE.js";import"./Hidden-Ba9IdiNq.js";import"./useLabels-C_LVKDoo.js";import"./useButton-Dm0JCrG-.js";import"./search-pUi4ZGEn.js";import"./createLucideIcon-ZFlUY_RU.js";import"./ClearButton-BoQmgs7B.js";import"./Button-wjvYMOzu.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-BYNlIS9z.js";import"./VisuallyHidden-Cr5LwEwU.js";import"./x-BYwfMl4s.js";import"./FieldError-CveCLVTj.js";import"./Text-BVi5Ej-u.js";import"./Text-VQywqbiS.js";const q={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
