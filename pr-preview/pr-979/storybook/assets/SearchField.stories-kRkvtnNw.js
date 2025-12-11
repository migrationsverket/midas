import{S as s}from"./SearchField-Ba1XRlBz.js";import"./iframe-16U0iwY4.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-CgqiUiYQ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-BSv6ChRq.js";import"./utils-HzU6u-g_.js";import"./useLocalizedStringFormatter-GF3ngx--.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-B26WDiH9.js";import"./useFocusRing-D3YcX54s.js";import"./index-N6dO_YkP.js";import"./index-DC6p1BMI.js";import"./useFormValidation-DncO4Qc_.js";import"./useField-gNzwNE_P.js";import"./Button-DRn4Jt6C.js";import"./Hidden-DvvsvPP1.js";import"./useLabels-bKWgMNMV.js";import"./useButton-CCTZIvr7.js";import"./search-D949gYCv.js";import"./createLucideIcon-DgqIWnhM.js";import"./Button-GEzK-q9q.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-D-Q-0QRf.js";import"./VisuallyHidden-D6uRhZ1i.js";import"./x-LZCMefA5.js";import"./FieldError-TXJxg1Qe.js";import"./Text-gxhRT_ue.js";import"./Text-CYPHINAD.js";const j={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
