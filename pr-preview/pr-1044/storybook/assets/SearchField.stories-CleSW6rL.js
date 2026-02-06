import{S as s}from"./SearchField-Dw1K2A7N.js";import"./iframe-LGxspPPV.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DpzeWGpt.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-BFDfEVCT.js";import"./utils-Cvut-P0d.js";import"./useLocalizedStringFormatter-CQTFAgtk.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-Dy9QaU12.js";import"./useFocusRing-BY43M_mY.js";import"./index-C7iNh71x.js";import"./index-C5UCf85T.js";import"./useFormValidation-sbqd_MHR.js";import"./useField-bjJPXifQ.js";import"./Button-BeadT2wH.js";import"./Hidden-CyYWm6Yz.js";import"./useLabels-VT28YHfM.js";import"./useButton-CKdCQ7hH.js";import"./search-DKzdiquv.js";import"./createLucideIcon-C9JZLtu2.js";import"./ClearButton-CO1eEyDV.js";import"./Button-ymzgBHTs.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-Db9FNN9a.js";import"./VisuallyHidden-5rvqsSwz.js";import"./x-CGRcy9or.js";import"./FieldError-BPxM1yn6.js";import"./Text-DPh2uykP.js";import"./Text-BuitjwDy.js";const q={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
