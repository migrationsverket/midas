import{S as s}from"./SearchField-CzeY7N6T.js";import"./iframe-rItT_jfY.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-CgqiUiYQ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-Bzf4gGGh.js";import"./utils-CPF4-yP8.js";import"./useLocalizedStringFormatter-CTRxJDJV.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BepY0cYc.js";import"./useFocusRing-DGFc7HbQ.js";import"./index-BnPbWBMv.js";import"./index-D8DgLnGQ.js";import"./useFormValidation-C8P0UNS6.js";import"./useField-7Rs9hAAC.js";import"./Button-B5QUqElW.js";import"./Hidden-n1HYXibJ.js";import"./useLabels-BtpKNtTB.js";import"./useButton-BqLzl4IJ.js";import"./search-DUznQ9r-.js";import"./createLucideIcon-B9nFww81.js";import"./Button-DrR1Xrnd.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-MQKdyit4.js";import"./VisuallyHidden-BJd1ReHn.js";import"./x-CzCgO8Qu.js";import"./FieldError-Cvsb7is6.js";import"./Text-DDMiWQFi.js";import"./Text-FNlrqDfC.js";const j={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
