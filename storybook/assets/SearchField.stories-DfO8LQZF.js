import{S as s}from"./SearchField-D6fH5STJ.js";import"./iframe-_Z42HqI2.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-CgqiUiYQ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-C42bKwUu.js";import"./utils-CrFX56hd.js";import"./useLocalizedStringFormatter-CWBL-q72.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DjXwZCeR.js";import"./useFocusRing-BVlddUKs.js";import"./index-BjqvvYkr.js";import"./index-BufdmmQ5.js";import"./useFormValidation-sacXgetL.js";import"./useField-CQWg_p4S.js";import"./Button-CK5CfXUr.js";import"./Hidden-BhDJNGVH.js";import"./useLabels-CPlvQ2_t.js";import"./useButton-BBRfPduy.js";import"./search-whajlImn.js";import"./createLucideIcon-DxsQvIVq.js";import"./Button-CJtuwFwb.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DAmkoZvN.js";import"./VisuallyHidden-BUe-0CEM.js";import"./x-CVRS_r9A.js";import"./FieldError-BZ5o1p5r.js";import"./Text-BpRe27H2.js";import"./Text-B2Ny6SaZ.js";const j={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
