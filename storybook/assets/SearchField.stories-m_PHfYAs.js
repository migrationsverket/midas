import{S as s}from"./SearchField-Bl8kmoRt.js";import"./iframe-BKVZlbwK.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DpzeWGpt.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-DGZkTwEL.js";import"./utils-DPuolxVc.js";import"./useLocalizedStringFormatter-B2KN6w1Y.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-Cc-YORei.js";import"./useFocusRing-B5vFDtZh.js";import"./index-PkL0TDm3.js";import"./index-BKxFf4CA.js";import"./useFormValidation-B2K6ECOw.js";import"./useField-_-3BWxJQ.js";import"./Button-BXNg7Jsx.js";import"./Hidden-BRpSC0Ka.js";import"./useLabels-BVLaKNrB.js";import"./useButton-BvRx9rmC.js";import"./search-BEqWb11X.js";import"./createLucideIcon-DBPtg95-.js";import"./ClearButton-CVVdZ8sN.js";import"./Button-CMuF6ttX.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-hBwIhHtL.js";import"./VisuallyHidden-DRvu9CAK.js";import"./x-grlvjwkz.js";import"./FieldError-DDgadqx5.js";import"./Text-B3d4ibdb.js";import"./Text-B3rWnA0b.js";const q={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
