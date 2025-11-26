import{S as s}from"./SearchField-IXa7OQTh.js";import"./iframe-DZnzPlIp.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-1-_3qsJZ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-CrkPfz38.js";import"./utils-CNFHwh-q.js";import"./useLocalizedStringFormatter-BQqTysii.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-B355gUNA.js";import"./useFocusRing-Nu8QV6qN.js";import"./index-08boVIM8.js";import"./index-BK2sDAog.js";import"./useFormValidation-CdpB-86Q.js";import"./useField-BXP1GnjY.js";import"./Button-Dtht3JLw.js";import"./Hidden-BHBA8I1E.js";import"./useLabels-Bn0lABK-.js";import"./useButton-CARWH--T.js";import"./search-BgwC5M5q.js";import"./createLucideIcon-D1ffg5uX.js";import"./Button-Q8NbkpbT.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-B9kfZZmT.js";import"./VisuallyHidden-DEEJ503M.js";import"./x-CCN9s2Tf.js";import"./FieldError-DOwOzQa8.js";import"./Text-D4f0kWpn.js";import"./Text-B1aKKyjJ.js";const j={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
