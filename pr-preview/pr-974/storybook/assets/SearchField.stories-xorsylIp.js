import{S as s}from"./SearchField-Di8YeSHB.js";import"./iframe-C9g4MTX7.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-CgqiUiYQ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-FOZz2YKy.js";import"./utils-_Jmhc4hr.js";import"./useLocalizedStringFormatter-DewJi2DS.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-Cy1uQP7t.js";import"./useFocusRing-DG43Unny.js";import"./index-C_J0lp9X.js";import"./index-DhjFuTvG.js";import"./useFormValidation-COH0Z6gm.js";import"./useField-CJSZHuXU.js";import"./Button-_3UTtnws.js";import"./Hidden-Blvi27yb.js";import"./useLabels-LOj0MSb9.js";import"./useButton-BIIPbxfI.js";import"./search-BZxA2R2N.js";import"./createLucideIcon-mQbrOUxF.js";import"./Button-Cd6lSrpE.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-D0wJzWuW.js";import"./VisuallyHidden-CMi3wTGx.js";import"./x-D78XPVZO.js";import"./FieldError-C8KRqUxl.js";import"./Text-XjFf9xI5.js";import"./Text-CbrSL-Nv.js";const j={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
