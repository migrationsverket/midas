import{S as s}from"./SearchField-Cy59Rxn1.js";import"./iframe-AzeRMI6E.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DpzeWGpt.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-KwKgHDy1.js";import"./utils-C6Ogk0cQ.js";import"./useLocalizedStringFormatter-C14yyg5V.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BxMcuNOz.js";import"./useFocusRing-IRQc2pc2.js";import"./index-6ebY7xVy.js";import"./index-BUDprfFK.js";import"./useFormValidation-Fw-45rMv.js";import"./useField-BOUewxY-.js";import"./Button-BM_9r6cn.js";import"./Hidden-DlywG7Qa.js";import"./useLabels-CKRjxM8h.js";import"./useButton-F4pMDae2.js";import"./search-DvAxqIOh.js";import"./createLucideIcon-Cbaqp_e4.js";import"./ClearButton-Syyws9NN.js";import"./Button-Dymh8tI2.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-D3Cc5nzM.js";import"./VisuallyHidden-Cdl-x6Ak.js";import"./x-CXoFC9Eh.js";import"./FieldError-Bhumxp-K.js";import"./Text-DifqYix-.js";import"./Text-CgQK_TBj.js";const q={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
