import{S as s}from"./SearchField-wLNSpriI.js";import"./iframe-B_SSSC13.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DpzeWGpt.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-7bOzaDvk.js";import"./utils-DvDYbPsX.js";import"./useLocalizedStringFormatter-8PuQ8rfy.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DcRRIu_F.js";import"./useFocusRing-DD9UXZoZ.js";import"./index-h5wgbRS0.js";import"./index-CUO7TZGi.js";import"./useFormValidation-DeX5ISQ4.js";import"./useField-D5ATrzWx.js";import"./Button-BRuyYegt.js";import"./Hidden-1_dFGxWz.js";import"./useLabels-MYW5pJHL.js";import"./useButton-D3rl8s_R.js";import"./search-DyxwFbGq.js";import"./createLucideIcon-BX44XqHc.js";import"./ClearButton-B_aNVZp-.js";import"./Button-DwlyzCZV.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-2Krnf2lE.js";import"./VisuallyHidden-DBwHi6uI.js";import"./x-CjWkaJ06.js";import"./FieldError-D1TT9t70.js";import"./Text-WBWevH5_.js";import"./Text-zzyNhY3P.js";const q={component:s,title:"Components/SearchField",tags:["autodocs"],parameters:{layout:"centered"},args:{buttonText:"Sök",errorPosition:"top",className:"test-class",size:"large"}},e={args:{placeholder:"Sök efter en person"}},r={args:{placeholder:'Sök efter "secret"',validate:a=>a==="secret"?"Sök inte efter hemligheter":!0}},t={args:{placeholder:"Sök efter dokument",isInvalid:!0,errorMessage:"Något gick fel, var god försök igen"}},o={args:{placeholder:"Sök efter dokument",isDisabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
