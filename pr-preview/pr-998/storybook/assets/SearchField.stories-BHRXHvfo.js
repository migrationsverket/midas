import{S as s}from"./SearchField-DZK5_7tN.js";import"./iframe-DM_HNK6K.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-CgqiUiYQ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-DKYWtKkY.js";import"./utils-BrnuSJ1-.js";import"./useLocalizedStringFormatter-dQ_9X6cS.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DA3pBNBV.js";import"./useFocusRing-Dh1RhkUQ.js";import"./index-Dn5q0CGw.js";import"./index-DbczpIcn.js";import"./useFormValidation-CRZRQtSn.js";import"./useField-Aw6Lq2ji.js";import"./Button-ExABwgM4.js";import"./Hidden-CaMcuicU.js";import"./useLabels-CvROpDKQ.js";import"./useButton-aRK5nu44.js";import"./search-7Y-5eMY0.js";import"./createLucideIcon-BtlDpUqt.js";import"./Button-Hxka-VYw.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CfWcX_0m.js";import"./VisuallyHidden-AtXRcW43.js";import"./x-Do2AzdKO.js";import"./FieldError-Bkja58-g.js";import"./Text-ClUc-h5K.js";import"./Text-DJJ4vhAg.js";const j={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
