import{S as s}from"./SearchField-DO0kXjJA.js";import"./iframe-CjsN2Sbl.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DPkQCx_c.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-pLjBfoN3.js";import"./utils-COI7mk-Z.js";import"./useLocalizedStringFormatter-BbQDdHsq.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-NUC4aX3Z.js";import"./useFocusRing-DiEIFPwp.js";import"./index-CKo9uiwm.js";import"./index-B8NePwnw.js";import"./useFormValidation-CraaeZ4V.js";import"./useField-B0YexPGJ.js";import"./Button-CJVqDdWG.js";import"./Hidden-B_kzivom.js";import"./useLabels-CwB4JwE6.js";import"./useButton-qnOMufHE.js";import"./search-Cg9iCME3.js";import"./createLucideIcon-CiVnvI1n.js";import"./ClearButton-ChQ-wViy.js";import"./Button-BvGYLpp9.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-BnIikKMu.js";import"./VisuallyHidden-CfSP2Ia7.js";import"./x-DkVq0ORE.js";import"./FieldError-CrPR-bnN.js";import"./Text-BQK0eZgF.js";import"./Text-CSqjNMss.js";const q={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
