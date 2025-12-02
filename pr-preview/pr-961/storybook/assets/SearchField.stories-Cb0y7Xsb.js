import{S as s}from"./SearchField-aQa2IME2.js";import"./iframe-CMUJ4oTW.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-CgqiUiYQ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-7-Wnf2ZS.js";import"./utils-Bw5kKF0Y.js";import"./useLocalizedStringFormatter-CO8ox3aE.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DO4EQLEf.js";import"./useFocusRing-CCdJUNbr.js";import"./index-BXUeCXEl.js";import"./index-BRxHMroZ.js";import"./useFormValidation-xJ9GZNEB.js";import"./useField-DVSpKNSf.js";import"./Button-Bqzmv4VE.js";import"./Hidden-D0lp5d68.js";import"./useLabels-CskVNZCZ.js";import"./useButton-B2z_QK8p.js";import"./search-B2ChgQH0.js";import"./createLucideIcon-TEce3gz9.js";import"./Button-D8hA4J4_.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-Cyjs_x30.js";import"./VisuallyHidden-B5co-kC4.js";import"./x-CKLycj6S.js";import"./FieldError-DUZ2Lyg_.js";import"./Text-CmjU0gZm.js";import"./Text-C-O23Bwp.js";const j={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
